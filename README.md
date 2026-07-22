📊 Sales Analytics Dashboard

A full-stack Sales Analytics Dashboard built using React, Flask, Pandas, and Matplotlib that transforms raw sales data into meaningful business insights through interactive charts and dashboards.

This project is my first Data Analytics project and marks the beginning of my journey into data analysis. It demonstrates the complete workflow from data preprocessing to deployment.

🚀 Live Demo

Frontend:
https://sales-analytics-dashboard-8-ol96.onrender.com

Backend API:
https://sales-analytics-dashboard-6-f3ws.onrender.com

📷 Dashboard Preview

Add screenshots here after uploading them.

screenshots/
│── dashboard.png
│── monthly-sales.png
│── category-chart.png
│── search-product.png

Example:

![Dashboard](screenshots/dashboard.png)
✨ Features
📈 Monthly Sales Analysis
🥧 Category-wise Sales Distribution
🌍 Region-wise Sales Analysis
🏆 Top 10 Best Selling Products
🔍 Product Search
📅 Year-wise Filtering
📊 Summary Statistics
Total Sales
Total Orders
Average Sales
Highest Sale
Lowest Sale
📱 Responsive Dashboard
☁️ Cloud Deployment using Render
🏗️ Project Workflow
Sales Dataset
       │
       ▼
Data Cleaning (Pandas)
       │
       ▼
Exploratory Data Analysis
       │
       ▼
Flask REST API
       │
       ▼
React Dashboard
       │
       ▼
Charts & Visualizations
       │
       ▼
Deployment on Render
🛠 Tech Stack
Frontend
React.js
Axios
HTML5
CSS3
Backend
Flask
Flask-CORS
Data Analysis
Python
Pandas
NumPy
Visualization
Matplotlib
Deployment
Render
Version Control
Git
GitHub
📂 Project Structure
sales_analysis
│
├── backend
│   ├── app.py
│   ├── analysis.py
│   ├── cleaned_sales.csv
│   ├── requirements.txt
│   └── runtime.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── api.js
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
📊 Dashboard Modules
📈 Sales Summary

Displays:

Total Sales
Total Orders
Average Sales
Highest Sale
Lowest Sale
📅 Monthly Sales

Shows monthly sales trend using charts.

🥧 Category-wise Sales

Compares sales across categories.

🌍 Region-wise Sales

Visualizes sales across different regions.

🏆 Top Products
⚙️ Installation
Clone Repository
git clone https://github.com/Shristy443/sales-analytics-dashboard_.git

cd sales-analytics-dashboard_
Backend Setup
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python app.py

Backend runs on

http://127.0.0.1:5000
Frontend Setup
cd frontend

npm install

npm run dev

Frontend runs on

http://localhost:5173
📚 What I Learned

Through this project I learned:

Data Cleaning using Pandas
Exploratory Data Analysis
REST API Development using Flask
React Frontend Development
API Integration using Axios
Dashboard Design
Git & GitHub
Deploying Full Stack Projects on Render
Debugging CORS and Deployment Issues
🔮 Future Improvements
Authentication
Download reports as PDF/Excel
Interactive filters
Advanced analytics
Forecasting using Machine Learning
More chart types
Database integration
👩‍💻 Author

Shristy Kewat

GitHub: https://github.com/Shristy443
LinkedIn:www.linkedin.com/in/shristi-kewat-b595a533b
⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It motivates me to keep learning and building more projects.

📌 Note

This project was created as part of my Data Analytics learning journey. It represents my first step into building real-world analytics applications by combining Python, Flask, React, and data visualization to transform raw sales data into actionable insights.
Displays the top-selling products.

🔍 Product Search

Search products instantly and view their sales.
