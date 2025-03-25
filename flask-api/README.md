# Event Recommendation System - Flask Backend

## 📁 Project Structure
```
flask-api/
│── data/
│── models/
│── noteboooks/
│── predictions/
│── venv/
│── requirements.txt
│── label_encoder.pkl
│── tokenizer.pkl
│── README.md
│── app.py
```

## 📦 Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/EventRecommendationSystem.git
   cd EventRecommendationSystem/flask-api
   ```

2. **Create and activate a virtual environment:**
   - Windows:
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - Mac/Linux:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask application:**
   ```bash
   python run.py
   ```

## 🔄 Resetting the Virtual Environment
If you need to recreate the environment:

1. Delete the existing `venv`:
   - Windows:
     ```bash
     rmdir /s /q venv
     ```
   - Mac/Linux:
     ```bash
     rm -rf venv
     ```

2. Follow the setup steps again to recreate it.

## 🧰 Key Dependencies
- Flask
- Flask-CORS
- pandas
- numpy
- scikit-learn
- seaborn

## 📊 Usage
- Use a tool like Postman to test API endpoints.
- Ensure Neo4j or any other databases are correctly configured if used.

## 🔧 Troubleshooting
- If issues arise, try reinstalling dependencies or checking your Python version.
- Use `pip list` to verify installed packages.

