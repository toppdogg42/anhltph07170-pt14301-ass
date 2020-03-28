import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QlspComponent } from './qlsp/qlsp.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AboutComponent } from './about/about.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HeaderComponent } from './header/header.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
const routes: Routes =[
{path: '',redirectTo: '/home',pathMatch:'full'},
{path: 'product/:productID',component: ProductDetailComponent},
{path: 'home',component: HomeComponent},
{path: 'qlsp',component: QlspComponent},
{path: 'manager',component: ProductManagerComponent},
{ path: 'about', component: AboutComponent},
{ path: 'add', component: ProductAddComponent},
{ path: 'edit/:productID', component: ProductEditComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
