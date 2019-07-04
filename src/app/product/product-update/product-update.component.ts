import { Component, OnInit ,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  @Input()
  product:any;
    constructor(private route:ActivatedRoute,private service:ProductService) { }
  
    ngOnInit() {
    }
    updateProduct(prodId:any,price:any){
      this.service.updateProduct(prodId,price);
    }
  
  }
  
