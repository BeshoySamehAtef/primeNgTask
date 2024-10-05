import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeOptionOneComponent } from './tree-option-one/tree-option-one.component';
import { TreeOptionTwoComponent } from './tree-option-two/tree-option-two.component';
import { SearchComponentComponent } from './search-component/search-component.component';


const routes: Routes = [
  { path: '', component: TreeOptionOneComponent },
  { path: 'optionTwo', component: TreeOptionTwoComponent },
  { path: 'search', component: SearchComponentComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
