import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    //styleUrls: ['./detail.component.css']
  })
  export class DetailComponent implements OnInit {
    product : any;
    constructor(private route:ActivatedRoute,private productService:ProductService) { }
  
    ngOnInit(): void {
      this.getRoute(this.route.snapshot.params['id']);
    }
    getRoute(id:any){
      this.productService.find(id).subscribe((res:any)=>{
        this.product = res.data;
        console.log(this.product)
      });    
    }
  }