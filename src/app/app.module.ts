import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ProductListComponent } from './components/ecommerce/product-list/product-list.component';
import { ProductItemComponent } from './components/ecommerce/product-item/product-item.component';
import { BookstoreComponent } from './pages/bookstore/bookstore.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './components/ecommerce/product-detail/product-detail.component';
import { StarComponent } from './components/shared/star/star.component';
import { FilterComponent } from './components/shared/filter/filter.component';
import { BreadcrumbComponent } from './components/core/breadcrumb/breadcrumb.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductItemComponent,
    BookstoreComponent,
    ProductComponent,
    ProductDetailComponent,
    StarComponent,
    FilterComponent,
    BreadcrumbComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
