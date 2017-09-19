import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MytypeaheadComponent } from './mytypeahead/mytypeahead.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { HeaderComponent } from './header/header.component';
import { SearchengineComponent } from './searchengine/searchengine.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DealsComponent } from './deals/deals.component';
import { ProductComponent } from './product/product.component';
import { HelpComponent } from './help/help.component';
import { SellComponent } from './sell/sell.component';
import { UserComponent } from './user/user.component';
import { BrowsehistoryComponent } from './browsehistory/browsehistory.component';
import { DepartmentComponent } from './department/department.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DepartmentService } from './department/department.service';

const appRoutes: Routes = [
  {path:'', component :UserComponent},
  {path:'about', component:AboutComponent},
  {path:'deals', component :DealsComponent},
  {path:'browsehistory', component:BrowsehistoryComponent},
  {path:'sell', component:SellComponent},
  {path:'help', component:HelpComponent},
  {path:'departments', component:DepartmentComponent},
  {path:'products', component: ProductComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MytypeaheadComponent,
    NavheaderComponent,
    HeaderComponent,
    SearchengineComponent,
    FooterComponent,
    AboutComponent,
    DealsComponent,
    ProductComponent,
    HelpComponent,
    SellComponent,
    UserComponent,
    BrowsehistoryComponent,
    DepartmentComponent,
    ItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    TypeaheadModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
