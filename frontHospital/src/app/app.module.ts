import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitaisDetalheComponent } from './hospitais-detalhe/hospitais-detalhe.component';
import { HospitaisEditarComponent } from './hospitais-editar/hospitais-editar.component';
import { HospitaisListaComponent } from './hospitais-lista/hospitais-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitaisEditarComponent,
    HospitaisDetalheComponent,
    HospitaisListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
