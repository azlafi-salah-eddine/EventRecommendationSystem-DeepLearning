from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import os
import random
from datetime import datetime

app = Flask(__name__)
CORS(app)

DATA_DIR = "data/random"
BLACK_FRIDAY_CSV = "predictions/black_friday/black_friday_predictions.csv"
NOEL_CSV = "predictions/noel/noel_predictions.csv" 

## --------------------------------- API RANDOM DATA --------------------------------- ##
def load_random_products():
    """Charge les fichiers CSV et retourne une liste de produits aléatoires."""
    all_products = []
    
    for file in os.listdir(DATA_DIR):
        if file.endswith(".csv"):
            df = pd.read_csv(os.path.join(DATA_DIR, file))
            if {"Title", "Price", "img_url"}.issubset(df.columns):
                df = df.rename(columns={"Title": "title", "Price": "price", "img_url": "img_url"})
                all_products.extend(df.to_dict(orient="records"))
    
    random.shuffle(all_products)
    
    return all_products

@app.route('/api/products/random', methods=['GET'])
def get_random_products():
    """Retourne une liste paginée de produits aléatoires."""
    products = load_random_products()

    page = int(request.args.get("page", 1))
    per_page = int(request.args.get("perPage", 30))
    
    total_count = len(products)
    start = (page - 1) * per_page
    end = start + per_page
    
    return jsonify({
        "products": products[start:end],
        "totalCount": total_count
    })


## --------------------------------- API BLACK FRIDAY DATA --------------------------------- ##
def load_black_friday_data():
    """Charge les données Black Friday et calcule les prix prédits."""
    df = pd.read_csv(BLACK_FRIDAY_CSV)

    df.rename(columns={
        "Title": "title",
        "Image URL": "img_url",
        "Old Price": "old_price",
        "Discount Rate": "discount_rate",
    }, inplace=True)

    if df["discount_rate"].dtype == object:
        df["discount_rate"] = df["discount_rate"].astype(str).str.replace('%', '', regex=True).astype(float) / 100

    df["predicted_price"] = df["old_price"] * (1 - df["discount_rate"])

    return df

@app.route('/predict/black_friday/top_deals', methods=['GET'])
def get_top_black_friday_deals():
    """Retourne les 6 produits avec la plus grande réduction."""
    df = load_black_friday_data()
    top_deals = df.sort_values(by="discount_rate", ascending=False).head(6).to_dict(orient="records")
    
    return jsonify(top_deals)


## --------------------------------- API NOEL DATA --------------------------------- ##

NOEL_KEYWORDS = [
    'noël', 'noel', 'christmas', 'xmas', 'père noël', 'sapin', 'décorations', 
    'guirlande', 'bougie', 'cadeau', 'crèche', 'étoile', 'boule de noël', 
    'calendrier avent', 'saint nicholas', 'réveillon', 'foie gras', 
    'saumon fumé', 'bûche', 'marché de noël', 'bonhomme de neige', 'flocon', 
    'hiver', 'neige', 'renne', 'traîneau', 'lutin', 'marrons grillés', 
    'vin chaud', 'pain d\'épices', 'chocolat chaud', 'chaussette de noël', 
    'couronne de noël', 'cloche', 'canne à sucre', 'rouge et vert', 
    'nuit de noël', 'réveillon', 'réjouissances', 'partage', 'fêtes de fin d\'année',
    'esprit de noël', 'nativité', 'chant de noël', 'sapin décoré', 'carte de noël',
    'pôle nord', 'bonnet de noël', 'cheminée', 'casse-noisette', 'jouet', 
    'anges', 'glace', 'santons', 'galette des rois', 'pétards', 'clochettes'
]


def is_noel_related(title):
    """Improved Noel product detection with exact matching"""
    if not isinstance(title, str) or not title.strip():
        return False
        
    title_lower = title.lower()
    return any(keyword in title_lower for keyword in NOEL_KEYWORDS)

def load_noel_products():
    """Load and filter Christmas products with 50% discount"""
    try:
        if not os.path.exists(NOEL_CSV):
            print(f"Error: File not found at {NOEL_CSV}")
            return []
            
        df = pd.read_csv(NOEL_CSV)
        
        required_cols = {"Title", "Image URL", "Old Price"}
        if not required_cols.issubset(df.columns):
            missing = required_cols - set(df.columns)
            print(f"Missing columns: {missing}")
            return []
            
        df = df.rename(columns={
            "Title": "title",
            "Image URL": "img_url",
            "Old Price": "old_price"
        }).dropna(subset=["title", "img_url"])
        
        df["old_price"] = pd.to_numeric(df["old_price"], errors="coerce")
        df = df.dropna(subset=["old_price"])
        
        noel_products = []
        for _, row in df.iterrows():
            if is_noel_related(row["title"]):
                discounted_price = float(row["old_price"]) * 0.5
                noel_products.append({
                    "title": row["title"],
                    "img_url": row["img_url"],
                    "old_price": float(row["old_price"]),
                    "discount_rate": 0.5,
                    "predicted_price": round(discounted_price, 2),
                    "is_noel": True
                })
                
                if len(noel_products) >= 6:
                    break
        
        print(f"Found {len(noel_products)} Noel products")
        return noel_products
        
    except Exception as e:
        print(f"Error loading products: {str(e)}")
        return []

@app.route('/api/products/noel', methods=['GET'])
def get_noel_products():
    """Endpoint that returns exactly 6 Noel products with 50% discount"""
    products = load_noel_products()
    
    response = {
        "products": products,
        "count": len(products),
        "success": True,
        "timestamp": datetime.now().isoformat(),
        "discount_note": "All Noel products have 50% discount applied"
    }
    
    if not products:
        response.update({
            "message": "No Noel products found",
            "debug_info": {
                "check": [
                    f"1. Verify CSV exists at: {NOEL_CSV}",
                    "2. Check product titles contain Christmas terms",
                    "3. Ensure required columns exist"
                ],
                "example_keywords": NOEL_KEYWORDS[:5],
                "required_columns": list(required_cols)
            }
        })
    else:
        response["message"] = "Successfully retrieved Noel products"
    
    return jsonify(response)




## --------------------------------- API CATEGORIES DATA --------------------------------- ##
@app.route('/api/categories/<category_name>', methods=['GET'])
def get_category_products(category_name):
    """Récupère les produits d'une catégorie spécifique à partir des fichiers CSV."""
    category_file = f"{category_name.capitalize()}.csv"
    file_path = os.path.join(DATA_DIR, category_file)

    if not os.path.exists(file_path):
        return jsonify({"message": f"Le fichier CSV pour la catégorie '{category_name}' n'existe pas."}), 404

    try:
        df = pd.read_csv(file_path)

        if not {"Title", "Price", "img_url"}.issubset(df.columns):
            return jsonify({"message": "Les colonnes Title, Price, img_url sont requises dans le CSV."}), 400

        df = df.rename(columns={"Title": "title", "Price": "price", "img_url": "img_url"})
        products = df.to_dict(orient="records")

        return jsonify({
            "category": category_name,
            "products": products,
            "count": len(products)
        }), 200

    except Exception as e:
        return jsonify({"message": f"Erreur lors de la lecture du fichier CSV : {str(e)}"}), 500




if __name__ == '__main__':
    app.run(debug=True, port=5000)
