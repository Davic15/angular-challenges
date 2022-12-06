import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { SharedModule } from './shared/shared/shared.module';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    //CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
    ServiceDocumentationComponent,
    DirectiveDocumentationComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
