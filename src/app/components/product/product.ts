import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  template: `
    <p>
      product works!
      <br />
      @if (productId()!=0) { Product Id: {{ productId() }}
      }
    </p>
  `,
  styles: ``,
})
export class Product implements OnInit {
  router = inject(ActivatedRoute);
  productId = signal(0);

  ngOnInit(): void {
    this.router.params.subscribe((x) => {
      this.productId.set(x['id']);
    });
  }
}
