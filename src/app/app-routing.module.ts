import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceFormComponent } from './components/service-form/service-form.component';
import { SubdomainComponent } from './components/subdomain/subdomain.component';
import { SecSubdomainComponent } from './components/sec-subdomain/sec-subdomain.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { AskComponent } from './components/ask/ask.component';


const routes: Routes = [
    { path: '', redirectTo: '/Services', pathMatch: 'full' },
    { path: 'auxS', redirectTo: '/Services', pathMatch: 'full' },
    { path: 'Services', component: ServiceFormComponent },
    { path: 'subdo/:id', component: SubdomainComponent },
    { path: 'sec_subdo/:idA/:idB', component: SecSubdomainComponent },
    { path: 'tree', component: AplicacionesComponent },
    { path: 'ask', component: AskComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}