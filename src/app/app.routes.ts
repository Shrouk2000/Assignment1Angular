import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';


export const routes: Routes = [
  {path:'', component:Home},
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'about', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
