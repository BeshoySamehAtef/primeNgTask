import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchComponentComponent } from './search-component/search-component.component';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { TreeOptionOneComponent } from './tree-option-one/tree-option-one.component';
import { TreeOptionTwoComponent } from './tree-option-two/tree-option-two.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    TreeOptionOneComponent,
    TreeOptionTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
