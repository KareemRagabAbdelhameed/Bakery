import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GelatoComponent } from '../gelato/gelato.component';
import { CakesComponent } from '../cakes/cakes.component';
import { CustomizedCakeComponent } from '../customized-cake/customized-cake.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GelatoComponent, HomeComponent, GelatoComponent, CakesComponent, CustomizedCakeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
