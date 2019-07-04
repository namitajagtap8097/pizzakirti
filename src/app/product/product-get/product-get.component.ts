import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProdGetComponent implements OnInit {
products:Product[]=[];
selectedProd: Product;
  constructor(private route:ActivatedRoute,private service:ProductService) { }

  ngOnInit() {
    this.service.getProducts()
    .subscribe(productList=>this.products=productList);
  }
  onSelection(prod:Product){
    this.selectedProd=prod;
  }

}
