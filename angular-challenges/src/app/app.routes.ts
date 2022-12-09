import { Routes } from "@angular/router";
import { ComponentDocumentationComponent } from "./components/component-documentation/component-documentation.component";
import { ServiceDocumentationComponent } from "./services/service-documentation/service-documentation.component";

export const APP_ROUTES: Routes = [
    { path: '', component: ComponentDocumentationComponent },
    { path: 'directives', loadChildren: () => import('./directives/directive.module').then((m) => m.DirectiveModule) },
    { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule) },
    { path: 'services', component: ServiceDocumentationComponent }
]