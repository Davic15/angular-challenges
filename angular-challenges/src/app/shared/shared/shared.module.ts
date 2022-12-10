import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterTermPipe } from 'src/app/pipes/filter-term/filter-term.pipe';


@NgModule({
  declarations: [
    CardComponent,
    FilterTermPipe
  ],
  exports: [
    CardComponent,
    FilterTermPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
