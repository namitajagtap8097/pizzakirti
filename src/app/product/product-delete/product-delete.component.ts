import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
prodId:any;
  constructor(private route:ActivatedRoute, private prodService:ProductService) { }

  ngOnInit() {
    let prodId=this.route.snapshot.paramMap.get("prodId");
    this.deleteProduct(prodId);
  }
  deleteProduct(prodId) {
    this.prodService.deleteProduct(prodId);
  }

}
