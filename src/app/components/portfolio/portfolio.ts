import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {
  portfolioItems = [
    { image: 'images/1.jpeg', bgColor: '#1BB4A5' },
    { image: 'images/2.jpeg', bgColor: '#1BB4A5' },
    { image: 'images/3.jpeg', bgColor: '#1BB4A5' },
    { image: 'images/4.jpeg', bgColor: '#1BB4A5' },
    { image: 'images/5.jpeg', bgColor: '#1BB4A5' },
    { image: 'images/6.jpeg', bgColor: '#1BB4A5' }
  ];

  selectedImage: string | null = null;

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
