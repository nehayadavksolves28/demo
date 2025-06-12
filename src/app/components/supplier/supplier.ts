import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier',
  imports: [],
  template: `
    <p>
      supplier works!
    </p>
    <p>Id: {{supplierId()}}</p>
    <p>Name: {{supplierName()}}</p>

  `,
  styles: ``
})
export class Supplier implements OnInit{
    router = inject(ActivatedRoute)
    supplierId = signal(0);
    supplierName = signal("");
      ngOnInit(): void {
          this.router.queryParams.subscribe((x)=>{
            this.supplierId.set(x['id'])
            this.supplierName.set(x['name'])
          })
      }

}
