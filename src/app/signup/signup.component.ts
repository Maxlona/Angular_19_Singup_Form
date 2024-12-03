import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    this.apiService.signup({ name: this.name, email: this.email, password: this.password }).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/login']); // Navigate to login page
      } else {
        // Handle signup failure
      }
    });
  }
}
