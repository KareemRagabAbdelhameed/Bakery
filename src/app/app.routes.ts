import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { GelatoComponent } from './pages/gelato/gelato.component';
import { CustomizedCakeComponent } from './pages/customized-cake/customized-cake.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    { 
        path: 'about-us', component: AboutUsComponent
    },
   
    {
        path: 'gelato', component: GelatoComponent
    },
    {
        path: 'customized-cake', component: CustomizedCakeComponent
    },
   {
    path: 'cakes', component:CakesComponent
   },
   
   {
    path: '**', redirectTo:'/'
   }
];
