// Import PrimeNG modules
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputOtpModule } from 'primeng/inputotp';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { MenubarModule } from 'primeng/menubar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule,
    AutoCompleteModule,
    ButtonModule,
    ButtonGroupModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputOtpModule,
    ListboxModule,
    TableModule,
    TreeModule,
    MenubarModule,    
    TreeTableModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule,
    AutoCompleteModule,
    ButtonModule,
    ButtonGroupModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputOtpModule,
    ListboxModule,
    TableModule,
    TreeModule,
    MenubarModule,
    TreeTableModule,
  ],
  providers: []
})

export class PrimeNgModule { }
