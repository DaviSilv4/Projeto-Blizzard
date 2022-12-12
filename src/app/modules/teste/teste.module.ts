import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TesteComponent],
  exports: [TesteComponent]
})
export class TesteModule { }
