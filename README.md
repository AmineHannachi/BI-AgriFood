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

🔁 Automated Reports & Alerts
Power BI dashboards auto-update from SAP data.

Power Automate sends alerts (e.g., predicted failures).

Role-based access for each department.



