from flask import Flask
from flask_cors import CORS
from backend.analysis import *
from flask import request
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": [
            "http://localhost:5173",
            "https://sales-analytics-dashboard-8-ol96.onrender.com"
        ]
    }
})
                

@app.route("/")
def home():
    return "Sales Dashboard API is Running"

@app.route("/summary")
def summary():
    return get_summary()

@app.route("/category-sales")
def category():
    year = request.args.get("year")
    return jsonify(category_sales(year))

@app.route("/region-sales")
def region():
    year = request.args.get("year")
    return jsonify(region_sales(year))


@app.route("/top-products")
def products():
    return top_products()

@app.route("/search")
def search():

    query = request.args.get("product", "")

    data = search_products(query)

    return jsonify(data)

@app.route("/years")
def years():
    return jsonify(get_years())


@app.route("/summary/<int:year>")
def summary_year(year):
    return jsonify(summary_by_year(year))

@app.route("/monthly-sales")
def monthly():
    year = request.args.get("year")
    return jsonify(monthly_sales(year))

@app.route("/stats")
def stats():
    return jsonify(dashboard_stats())
    
if __name__ == "__main__":
    app.run(debug=True)