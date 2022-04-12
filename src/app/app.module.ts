import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './alunas/listar/listar.component';
import { CriarComponent } from './alunas/criar/criar.component';
import { EditarComponent } from './alunas/editar/editar.component';
import { ServicesComponent } from './alunas/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CriarComponent,
    EditarComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
