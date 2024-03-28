import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    formData = {
      username: '',
      email: '',
      password: ''
    };
  
    onSubmit() {
      // Handle form submission logic here (e.g., sending data to backend)
      console.log('Form submitted:', this.formData);
    }
  
}
