import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; 
import { GelatoComponent } from './pages/gelato/gelato.component';
import { HomeComponent } from './pages/home/home.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { CustomizedCakeComponent } from './pages/customized-cake/customized-cake.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, GelatoComponent, HomeComponent, GelatoComponent, CakesComponent, CustomizedCakeComponent, FooterComponent, AboutUsComponent,CommonModule,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
  
}
