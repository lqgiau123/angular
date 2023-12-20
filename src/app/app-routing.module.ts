import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './product/list-product.component';
import { DetailComponent } from './product/detail/detail.component';

const routes: Routes = [
	{
		path: '',
		component: ListProductComponent, // mặc định đã chạy app componet
		title: 'Home page' // title take where
	},
	{
		path: 'product',
		component: ListProductComponent,
		title: 'Product list'
	},
	{
		path: 'product/:id',
		component: DetailComponent,
		title: 'Product details'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule] //? lam gi, là gì
})
export class AppRoutingModule { }
