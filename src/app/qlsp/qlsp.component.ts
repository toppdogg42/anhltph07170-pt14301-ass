import { Component, OnInit } from '@angular/core';
import {Data} from '../MockData';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-qlsp',
  templateUrl: './qlsp.component.html',
  styleUrls: ['./qlsp.component.css']
})
export class QlspComponent implements OnInit {
  value: string = "";
page=1;
pageSize=3;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
  this.productService.getProducts().subscribe(data =>{this.products = data})
}
products = Data;
  removeItem(id){
    // this.products = this.products.filter(product => product.id != id);
    this.productService.removeProduct(id).subscribe(reponse =>{
       this.products= this.products.filter(product => product.id != reponse.id)});
  }
  search = event =>{
    this.products = this.products.filter(product => product.name == this.value);
  }
  searchValue = event => {
    this.value = event.target.value;
  }
}