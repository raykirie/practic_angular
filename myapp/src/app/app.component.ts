import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StudentComponent } from './components/student/student.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutUsComponent, StudentComponent, BlogComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  students = [
    {id: 1, author: 'Michael Wong', spec: 'UI/UX Design Student', rating: '4.9', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'},
    {id: 2, author: 'Avril Song', spec: 'Web Development Student', rating: '4.8', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'},
    {id: 3, author: 'Jeane Wood', spec: 'Data Science Student', rating: '5.0', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'}
]
blog = [
  {id: 1, author: 'Tom Kennedy', imageSrc: './assets/1.jpg', date: 'Feb 23, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'},
  {id: 2, author: 'Tom Kennedy', imageSrc: './assets/2.jpg', date: 'Feb 10, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'},
  {id: 3, author: 'Tom Kennedy', imageSrc: './assets/3.jpg', date: 'Feb 02, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'}
]
}
