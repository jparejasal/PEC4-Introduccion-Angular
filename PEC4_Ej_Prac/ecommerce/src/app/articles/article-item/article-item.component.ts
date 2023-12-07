import { Component,  OnInit, Input } from '@angular/core';
import { Article } from '../../model/article';

// Creación del componente article-item.
@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article: Article;          // Objeto input para componente padre article-list.
  public articleStyles;               // Variable any que invoca estilos CSS, dependiendo si el artículo está o no para la venta. 
 
  constructor() { }

  ngOnInit() {
    // Solución inicial a ejercicios 3 y 5.    
    /* this.article = new Article(4, "Carro Azul", "./assets/img/bluecar.png", 50, true, 0);
    this.articleStyles = {
      "disponible": this.article.isOnSale,
      "noDisponible": !this.article.isOnSale     
    }; */
  }
}
