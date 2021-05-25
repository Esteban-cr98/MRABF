import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { AppRoutingModule } from './app-routing.module';

import { DominiosService } from './services/dominios.service';
import { SubdomainComponent } from './components/subdomain/subdomain.component';
import { SecSubdomainComponent } from './components/sec-subdomain/sec-subdomain.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { EditservComponent } from './components/editserv/editserv.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { EditsubdoComponent } from './components/editsubdo/editsubdo.component';
import { EditsecsubdoComponent } from './components/editsecsubdo/editsecsubdo.component';
import { EditappsComponent } from './components/editapps/editapps.component';
import { AskComponent } from './components/ask/ask.component';
import { TreeviewModule } from 'ngx-treeview';



@NgModule({
  declarations: [
    AppComponent,
    ServiceFormComponent,
    SubdomainComponent,
    SecSubdomainComponent,
    AplicacionesComponent,
    EditservComponent,
    EditsubdoComponent,
    EditsecsubdoComponent,
    EditappsComponent,
    AskComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    TreeviewModule.forRoot()
  ],
  providers: [DominiosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
