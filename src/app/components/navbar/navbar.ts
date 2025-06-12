import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navOptions = [
    { link: '/home', pathName: 'Home' },
    { link: '/product', pathName: 'Product' },
    { link: '/supplier', pathName: 'Supplier' },
    { link: '/consumer', pathName: 'Consumer' },
  ];

  getProductId(){
    return Math.trunc(Math.random()*100);
  }
  getQueryId(){
    return Math.trunc(Math.random()*1000);
  }
  getSupplierName(){
    return 'Aman Suppliers Pvt Limited';
  }
}
