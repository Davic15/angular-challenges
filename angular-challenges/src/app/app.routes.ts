import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule) },
    { path: 'directives', loadChildren: () => import('./directives/directive.module').then((m) => m.DirectiveModule) },
    { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule) },
    { path: 'other', loadChildren: () => import('./other/other.module').then((m) => m.OtherModule) },
    { path: 'services', loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule) }
]