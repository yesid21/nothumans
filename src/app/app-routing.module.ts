import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ClasesComponent } from './pages/clases/clases.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { EventosComponent } from './pages/eventos/eventos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'reservas', component: ReservasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
