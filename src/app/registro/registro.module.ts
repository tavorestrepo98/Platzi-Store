import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './components/registro/registro.component';

// import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    // SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class RegistroModule { }
