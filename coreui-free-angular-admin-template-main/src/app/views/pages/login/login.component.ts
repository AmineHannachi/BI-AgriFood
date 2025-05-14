import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PredictService } from './predict.service';

@Component({
  selector: 'app-login',
  standalone: true, // ⚠️ Très important dans une app avec app.config.ts
  imports: [CommonModule, FormsModule], // ✅ On importe les modules nécessaires ici
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  environmental_certifications: string = '';
  renewable_energy_percentage: number | null = null;
  prediction: string = '';
  loading = false;
  error = '';

  constructor(private predictService: PredictService) {}

  onSubmit() {
    if (!this.environmental_certifications || this.renewable_energy_percentage === null) {
      this.error = 'Veuillez remplir tous les champs.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.prediction = '';

    const inputData = {
      environmental_certifications: this.environmental_certifications,
      renewable_energy_percentage: this.renewable_energy_percentage
    };

    this.predictService.predict(inputData).subscribe({
      next: (res) => {
        this.prediction = res.prediction === 1
          ? '✅ This is a Sustainable Programme'
          : '❌ This is NOT a Sustainable Programme';

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
