import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PredictService } from './predict.service'; // adapte le chemin si besoin

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component {
  fields = [
    { key: 'Carbon_Footprint_per_Unit_kgCO2e', label: 'Empreinte carbone par unité (kgCO2e)' },
    { key: 'Water_Consumption_per_Unit_liters', label: 'Consommation d’eau par unité (litres)' },
    { key: 'CO2_Emissions_kg', label: 'Émissions de CO2 (kg)' },
    { key: 'Energy_Consumption_kWh', label: 'Consommation énergétique (kWh)' },
    { key: 'Maintenance_Frequency', label: 'Fréquence de maintenance' },
    { key: 'Estimated_Lifetime_Years', label: 'Durée de vie estimée (ans)' },
    { key: 'Trees_km', label: 'Nombre d’arbres par km' }
  ];

  formData: any = {};
  prediction = '';
  error = '';
  loading = false;

  constructor(private predictService: PredictService) {}

  onSubmit() {
    this.loading = true;
    this.error = '';
    this.prediction = '';

    this.predictService.predictCO2(this.formData).subscribe({
      next: (res) => {
        this.prediction = (res.prediction).toFixed(2) + ' kg CO2 / an';
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors de la prédiction.';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
