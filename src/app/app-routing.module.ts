import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'comp', loadChildren: () => import('./comp/comp.module').then(m => m.CompModule) },
  { path: 'reusable', loadChildren: () => import('./reusable/reusable.module').then(m => m.ReusableModule) },
  { path: 'directives', component: DirectivesComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'forms', component: FormsComponent},
  { path: '', component: HomeComponent },
  { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: 'observables', loadChildren: () => import('./observables/observables.module').then(m => m.ObservablesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
