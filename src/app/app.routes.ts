import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Product } from './components/product/product';
import { Supplier } from './components/supplier/supplier';
import { Consumer } from './components/consumer/consumer';

export const routes: Routes = [
     {
        path:'home',
        component:Home
     },
      {
        path:'product/:id',
        component:Product
     },
      {
        path:'supplier',
        component:Supplier
     },
      {
        path:'consumer',
        component:Consumer
     },
     {
        path:'',
        redirectTo:'home',
        pathMatch:"full"
     },
     {
        path:'**',
        redirectTo:'home',
        pathMatch:"full"
     }
];
