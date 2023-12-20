import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';
import { ProductService } from './product.service';



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  //styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  datas:Product[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe((res:any)=>{
      this.datas = res.data;
      console.log(this.datas)
    })
  }
}
