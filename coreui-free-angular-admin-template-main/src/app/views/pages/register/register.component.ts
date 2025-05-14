import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  selectedImage: File | null = null;
  result: string | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedImage = input.files[0];
      this.result = null;
    }
  }

  getImagePreview(): string | null {
    return this.selectedImage ? URL.createObjectURL(this.selectedImage) : null;
  }

  classify(): void {
    if (!this.selectedImage) return;
    const isDefective = Math.random() > 0.5;
    this.result = isDefective ? 'Defect' : 'No Defect';
  }
}
