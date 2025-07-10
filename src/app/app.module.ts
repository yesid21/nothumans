import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ProductsComponent } from './pages/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
    ClasesComponent,
    ReservasComponent,
    AcercaComponent,
    EventosComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
