import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterTermPipe } from 'src/app/pipes/filter-term/filter-term.pipe';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';


@NgModule({
  declarations: [
    CardComponent,
    FilterTermPipe,
    TabsComponent,
    ModalComponent
  ],
  exports: [
    CardComponent,
    FilterTermPipe,
    TabsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
