1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce?
    Se debe seguir la siguiente secuencia de comandos:
    ng new ecommerce
    cd ecommerce
    ng serve

    Tras crear y desplegar el proyecto, se genera la siguiente estructura:
    A. Ficheros de configuración en la raíz del proyecto:
        a1. tsconfing.json: archivo de configuración básica de TypeScript para proyectos en el espacio de trabajo; todos los demás archivos de configuración heredan de este archivo base.        
        a2. angular.json: contiene los valores predeterminados de configuración de CLI para todos los proyectos en el espacio de trabajo, incluidas las opciones de configuración para las herramientas de compilación, servicio y prueba que utiliza la CLI.
        a3. package.json: configura las dependencias del paquete npm que están disponibles para todos los proyectos en el espacio de trabajo.
        a4. .editorconfig: almacena la configuración para editores de código, ayuda a mantener estilos de codificación consistentes para múltiples desarrolladores que trabajan en el mismo proyecto en varios editores e IDE.
        a5. .gitignore: especifica archivos sin seguimiento intencional que Git debe ignorar.
        a6. package-lock.json: Proporciona información de versión para todos los paquetes instalados en node_modules por el cliente npm.
        a7. README.md: documentación introductoria para la aplicación raíz.
        a8. tsconfig.spec.json: archivo TypeScript para configuración de pruebas para la aplicación.
        a9. tsconfig.app.json: configuración de TypeScript específica de la aplicación, incluidas las opciones del compilador de plantillas de TypeScript y Angular.
    
    B. Directorio node_modules: proporciona paquetes npm a todo el espacio de trabajo.

    C. Directorio src: archivos fuente para el proyecto de aplicación de nivel raíz.
        c1. index.html: es la página HTML principal que se muestra cuando alguien visita el sitio.
        c2. main.ts: es el principal punto de entrada para su aplicación. Compila la aplicación con el compilador JIT y arranca el módulo raíz de la aplicación (AppModule) para ejecutarla en el navegador.
        c3. styles.css: contiene archivos CSS que proporcionan estilos para un proyecto.
        c4. Directorio assets: contiene archivos de imágenes y otros archivos de activos que se copiarán tal cual cuando cree su aplicación.
        c5. Directorio app: contiene los archivos de componentes en los que se definen la lógica y los datos de su aplicación.
            c5-1. app/app.component.ts: define la lógica para el componente raíz de la aplicación, llamado AppComponent.
            c5-2. app/app.component.html: define la plantilla HTML asociada con el componente raíz.
            c5-3. app/app.component.css: define la hoja de estilos CSS base para el componente raíz.
            c5-4. app/app.component.spec.ts: define una prueba unitaria para el componente raíz.
            c5-5. app/app.config.ts: define la lógica de configuración de la aplicación que le indica a Angular cómo ensamblar la aplicación.
            c5-6. app/app.module.ts: define el módulo raíz, llamado AppModule, que le indica a Angular cómo ensamblar la aplicación.
        

2. A. Explicación para decoradores de app.modules.ts:
    // importaciones
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    // @NgModule decorador con sus metadatos
    @NgModule({
        declarations: [AppComponent],   // Una lista de clases declarables que pertenecen a este módulo.
        imports: [BrowserModule],       // Una lista de módulos que deben incluirse en el módulo en uso.
        providers: [],                  // Una lista de proveedores de inyección de dependencia.
        bootstrap: [AppComponent]       // Una lista de componentes que se inician automáticamente.
    })
    export class AppModule {}           // Una lista de declaraciones que un módulo de importación puede utilizar.

    B. Explicación para decoradores de app.component.ts:
    // importaciones
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RouterOutlet } from '@angular/router';

    @Component({
    // Un selector de CSS que le indica a Angular que cree e inserte una instancia de este componente dondequiera que encuentre la etiqueta correspondiente en la plantilla HTML.
    selector: 'app-root',

    // Es "true" cuando se trata de un componente "independiente" que se describe a sí mismo. Si es "false" o no se especifica, el componente debe declararse en un ngModule, que es un estilo antiguo. Se recomienda el valor "true".                   
    standalone: true,

    // Una matriz de los componentes, directivas y paquetes a los que hace referencia la plantilla.
    imports: [CommonModule, RouterOutlet],

    // La dirección relativa de la plantilla HTML de este componente.
    templateUrl: './app.component.html',

    // La dirección relativa de la plantilla de estilos CSS de este componente.
    styleUrl: './app.component.css'
    })

    // Una lista de declaraciones que un módulo de importación puede utilizar.
    export class AppComponent {
    title = 'ecommerce';
    }


3. ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?
Técnicamente es posible, pero en mi opinión no es para nada recomendable, por tres razones:
    A. En la mayoría de aplicaciones contemporáneas, tanto los template HTML como los estilos CSS requieren de abundantes y nutridas líneas de código, lo cual conlleva a un efecto negativo si se decide inyectar directamente, lo que a su vez incrementaría la complejidad del archivo components.ts y dificultaría su manejo, además, atenta contra el estándar y paradigma de distribución funcional de código, que hace posible la interoperabilidad entre componentes de la aplicación.

    B. Una de las características ideales de una aplicación tecnológica es que sea escalable en el tiempo, lo que implica una evolución significativa sin mayor impacto en su código; ahora bien, lo anterior no es posible si no se cuenta con un código interoperativo y distribuído de manera organizada y funcional, un contraejemplo claro de ello sería la "inyección directa de template y estilos en línea" planteados en el presente interrogante, dado que el código variaría directamente en el archivo component.ts y no en otro archivo aparte (como es ideal que suceda.).

    C. Si se requirieran varias presentaciones template y de estilos, el código incrustado solo agravaría la situación, pues se requerirían multiples inyecciones de templates y estilos de linea, lo cual afectaría de forma negativa el eaquema de distribución uniforme de código (import, export, herencia, etc..) por toda la aplicación. Lo ideal y correcto es referenciar archivos terceros que contengan los template y estilos requeridos pora el componente en uso.
    
