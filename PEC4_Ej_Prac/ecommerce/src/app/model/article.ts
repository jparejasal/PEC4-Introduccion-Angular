// Clase modelo para componente article-item
export class Article {   
    // Constructor de la clase modelo
    constructor(
        public id: number,              // Id del artículo
        public name: string,            // Nombre del artículo                        
        public imageUrl: string,        // URL de la ubicación de la imagen del artículo (en la carpeta assets)
        public price: number,           // Costo unitario del artículo.
        public isOnSale: boolean,       // Indica si el artículo se encuentra disponible para la venta.        
        public quantityInCart: number   // Cantidad de existencias del artículo en inventario.
        ) { }

        // Codigo correspondiente a la solución del ejercicio 3, para incrementar y decrementar stock del artículo.
        // Método modificado para aumentar stock del artículo.
        /* aumentarStock(): void {
            this.quantityInCart++;                               
        }
        
        // Método para decrementar stock del artículo.
        disminuirStock(): void {           
            this.quantityInCart--;              
        } */      
}
