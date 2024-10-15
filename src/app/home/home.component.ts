import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ThemeDirective, 
    CarouselComponent, 
    CarouselInnerComponent, 
    CarouselItemComponent,
    NgFor, 
    CarouselControlComponent,
    RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/banana-bread-1.jpg'
    };
    this.slides[1] = {
      src: './assets/kefalonia-popsicle.jpg'
    };
    this.slides[2] = {
      src: './assets/kefalonia-sunset.jpg'
    };
  }

}
