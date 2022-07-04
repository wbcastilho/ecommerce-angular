import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreComponent } from './pages/bookstore/bookstore.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: '', component: BookstoreComponent},
  { path: 'product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
