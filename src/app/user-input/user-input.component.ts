import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;

  onFormSubmit() {
    console.log('form is submitted');
    console.log('initialInvestment: ', this.initialInvestment);
    console.log('annualInvestment: ', this.annualInvestment);
    console.log('expectedReturn: ', this.expectedReturn);
    console.log('duration: ', this.duration);
  }
}
