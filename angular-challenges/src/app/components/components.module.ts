import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared/shared.module";
import { AccordionComponent } from "./accordion/accordion.component";
import { ComponentDocumentationComponent } from "./component-documentation/component-documentation.component";
import { COMPONENTS_ROUTES } from "./components.routes";
import { CounterComponent } from "./counter/counter.component";
import { CreditCardInputComponent } from "./credit-card-input/credit-card-input.component";
import { DebounceSearchComponent } from "./debounce-search/debounce-search.component";
import { LinkedinPostComponent } from "./linkedin-post/linkedin-post.component";
import { LoaderComponent } from "./loader/loader.component";
import { PagingComponent } from "./paging/paging.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { QuoteComponent } from "./quote/quote.component";
import { RichTextViewerComponent } from "./rich-text-viewer/rich-text-viewer.component";
import { SearchListComponent } from "./search-list/search-list.component";
import { SimpleTableComponent } from "./simple-table/simple-table.component";
import { SortTableComponent } from "./sort-table/sort-table.component";
import { StarRatingsComponent } from "./star-ratings/star-ratings.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { TwitterPostComponent } from "./twitter-post/twitter-post.component";
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';

@NgModule({
    declarations: [
        ComponentDocumentationComponent,
        AccordionComponent,
        CounterComponent,
        CreditCardInputComponent,
        DebounceSearchComponent,
        LinkedinPostComponent,
        LoaderComponent,
        PagingComponent,
        ProgressBarComponent,
        QuoteComponent,
        RichTextViewerComponent,
        SearchListComponent,
        SimpleTableComponent,
        SortTableComponent, 
        StarRatingsComponent,
        ToggleComponent,
        TwitterPostComponent,
        EmailFormComponent,
        RibbonComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(COMPONENTS_ROUTES)
    ]
})
export class ComponentsModule { }