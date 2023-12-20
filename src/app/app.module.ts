import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './product/list-product.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './product/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
   // DetailComponent // vi sao ko can import o day

  ],
  imports: [
    BrowserModule, //ok
    AppRoutingModule, //ok chổ export class
    HttpClientModule //ok
  ],
  providers: [],  //??
  bootstrap: [AppComponent] //??
})
export class AppModule { }
