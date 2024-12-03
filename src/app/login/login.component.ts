import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService) { }

  onSubmit() {
    this.apiService.login({ email: this.email, password: this.password }).subscribe(response => {
      if (response.success) {
        // Handle successful login
      }
    });
  }
}
