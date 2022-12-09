import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { DIRECTIVE_ROUTES } from './directive.routes';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';


@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    DebounceClickDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DIRECTIVE_ROUTES)
  ]
})
export class DirectiveModule { }
