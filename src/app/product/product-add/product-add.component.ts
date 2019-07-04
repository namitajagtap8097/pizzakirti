import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/Forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  angForm:FormGroup
  constructor(private fb:FormBuilder,private productService:ProductService) { 
  this.createForm();
}
  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      prodId:['',Validators.required],
      prodName:['',Validators.required],
      price:['',Validators.required]
    });

}
addProduct(prodId,prodName,price){
  this.productService.addProduct(prodId,prodName,price);
}

}