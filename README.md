# 🌱 Agri-Food Sustainability Management Platform

This project is a complete decision-support platform designed to optimize sustainability, maintenance, and operational efficiency within the agri-food industry. It integrates data from **SAP MM/PM**, **Power BI**, **machine learning models**, and a modern front-end built with **Angular**.

---

## 🚀 Features

- 🌿 **Sustainability Dashboards**: CO₂ emissions, energy & water usage, responsible sourcing.
- 🔧 **Predictive Maintenance**: ML-based failure priority predictions using SAP PM data.
- 🧠 **Equipment Segmentation**: Clustering algorithms to classify equipment based on sustainability & usage.
- 📊 **Live Power BI Dashboards**: Automatically updated via SAP and external data.
- 📦 **Inventory Monitoring**: Intelligent stock & supplier management.
- 👥 **Role-based Reporting**: Tailored dashboards for directors, maintenance managers, and environmental officers.

---

## 🏗️ Tech Stack

| Layer        | Technology                            |
|--------------|----------------------------------------|
| Frontend     | Angular + CoreUI Template              |
| Backend      | Flask (Python) + REST APIs             |
| Data Sources | SAP MM/PM, Excel, CSV, JSON            |
| Database     | SQL Server (SAP.bak)                   |
| ML Models    | Scikit-learn, pandas, matplotlib       |
| Reporting    | Power BI + Power Automate              |
| Deployment   | Netlify (Frontend), Heroku (Backend)   |

---

## 📂 Project Structure

├── frontend/ # Angular + CoreUI Dashboard
│ └── src/
├── backend/ # Flask API + ML models
│ └── app.py, models/
├── data/ # SAP, Excel, JSON, CSV
├── powerbi/ # Power BI .pbix reports
├── README.md
└── requirements.txt


---

## ⚙️ Setup Instructions

### 🔹 Frontend (Angular)

```bash
cd frontend
npm install
ng serve


🔹 Backend (Flask + ML)
cd backend
python -m venv venv
venv\Scripts\activate     # Windows
# source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
python app.py

🧠 Machine Learning Models
Our solution integrates four intelligent models to support sustainability, predictive maintenance, and business forecasting:

1. Equipment Sustainability Segmentation (Unsupervised Learning)
Objective: Group equipment based on energy consumption, estimated lifetime, environmental conditions, and transport distance.

Techniques: K-Means, DBSCAN, Agglomerative Clustering

Data Used: FACT_SUSTAINABILITY_FINALE, Dim_Equipment_finale

Impact: Identifies sustainable vs. high-impact equipment for targeted improvements.

2. Failure Priority Prediction (Classification)
Objective: Predict the failure priority level (PRIOK) for equipment maintenance based on operational and equipment attributes.

Algorithms: Random Forest, Decision Tree, Logistic Regression

Data Used: FACT_MAINTENANCE_FINALE, Dim_Equipment_finale, Dim_Machines_finale

Impact: Enables proactive and cost-effective maintenance prioritization.

3. CO₂ Emissions Estimation (Regression)
Objective: Estimate CO₂ emissions based on energy usage for sustainability reporting.

Model: Linear Regression

Formula: CO2_Emissions_kg = Energy_Consumption_kWh × 0.233

Data Used: FACT_SUSTAINABILITY_FINALE

Impact: Provides environmental impact metrics directly from operational data.

4. Retail Sales Forecasting (Time Series)
Objective: Forecast monthly retail fuel sales to assist strategic planning.

Techniques: ARIMA, SARIMA, Prophet

Data Used: Monthly retail sales data (2002–2021)

Impact: Supports macroeconomic analysis and demand forecasting for agri-food logistics.
 

🔁 Automated Reports & Alerts
Power BI dashboards auto-update from SAP data.

Power Automate sends alerts (e.g., predicted failures).

Role-based access for each department.



