import { Component } from '@angular/core';

interface Product {
  name: string;
  category: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  selectedCategory = 'cocteles';

  products: Product[] = [
    { name: 'Eclipse', category: 'cocteles', image: 'assets/producto1.png', price: 29900 },
    { name: 'Nebulosa', category: 'cocteles', image: 'assets/producto2.png', price: 36900 },
    { name: 'Not Humans', category: 'cocteles', image: 'assets/producto3.jpeg', price: 45900 },
    { name: 'Marte', category: 'cocteles', image: 'assets/producto4.png', price: 29900 },
    { name: 'Elixir Alien', category: 'cocteles', image: 'assets/producto5.png', price: 30000 },

    { name: 'Aguardiente Antioqueño, Garrafa Azul', category: 'licores', image: 'assets/TAPAAZUL2000.png', price: 290000 },
    { name: 'Aguardiente Antioqueño, Litro Azul', category: 'licores', image: 'assets/TAPAAZUL1000.png', price: 150000 },
    { name: 'Aguardiente Antioqueño, Media Azul', category: 'licores', image: 'assets/TAPAAZUL375.png', price: 66900 },
    { name: 'Aguardiente Antioqueño, Garrafa Rojo', category: 'licores', image: 'assets/TAPAROJA2000.png', price: 280000 },
    { name: 'Aguardiente Antioqueño, Litro Rojo', category: 'licores', image: 'assets/TAPAROJA1000.png', price: 150000 },
    { name: 'Aguardiente Antioqueño, Media Rojo', category: 'licores', image: 'assets/TAPAROJA375.png', price: 62000 },
    { name: 'Aguardiente Antioqueño, Garrafa Verde', category: 'licores', image: 'assets/TAPAVERDE2000.png', price: 230000 },
    { name: 'Aguardiente Antioqueño, Litro Verde', category: 'licores', image: 'assets/TAPAVERDE1000.png', price: 150000 },
    { name: 'Aguardiente Antioqueño, Media Verde', category: 'licores', image: 'assets/TAPAVERDE375.png', price: 59900 },
    { name: `Whisky Buchanan's 12 Años 750ML`, category: 'licores', image: 'assets/BUCHANANS750.png', price: 430000 },
    { name: `Tequila Don Julio Añejo`, category: 'licores', image: 'assets/DONJULIOA.png', price: 810000 },
    { name: `Tequila Jose Cuervo`, category: 'licores', image: 'assets/JOSECUERVO.png', price: 130000 },
    { name: `Ron Viejo De Caldas`, category: 'licores', image: 'assets/VIEJODECALDAS.png', price: 110000 },
    { name: `Ron Medellin Litro 5 Años`, category: 'licores', image: 'assets/MEDELLIN5.png', price: 149000 },
    { name: `Ron Medellin Litro 8 Años`, category: 'licores', image: 'assets/MEDELLIN8.png', price: 180000 },
    { name: `Ron Medellin Litro 3 Años`, category: 'licores', image: 'assets/MEDELLIN3.png', price: 120000 },

    { name: 'Smirnoff Individual', category: 'cervezas', image: 'assets/smirnoff.png', price: 20000 },
    { name: 'Cerveza Heineken', category: 'cervezas', image: 'assets/Heineken.png', price: 9500 },
    { name: 'Cerveza Corona', category: 'cervezas', image: 'assets/Corona.png', price: 8000 },
    { name: 'Cerveza Pilsen', category: 'cervezas', image: 'assets/pilsen.png', price: 8000 },
    { name: 'Cerveza Aguila', category: 'cervezas', image: 'assets/aguila.png', price: 9000 },

    { name: 'Gatorade', category: 'otros', image: 'assets/gatorade.png', price: 9900 },
    { name: 'Agua en botella', category: 'otros', image: 'assets/Agua.png', price: 5000 },
  ];

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

}
