1. ¿Cuáles son los style encapsulation de los componentes?
    A. ShadowDom:
    @Component({
    selector: 'app-root',
    template: `
        <h1>Hello World!</h1>
        <span class="red">Shadow DOM Rocks!</span>
    `,
    styles: [`
        :host {
        display: block;
        border: 1px solid black;
        }
        h1 {
        color: blue;
        }
        .red {
        background-color: red;
        }

    `],
    encapsulation: ViewEncapsulation.ShadowDom
    })
    class MyApp {
    }

    B. Emulated:
    @Component({
    selector: 'app-emulated-encapsulation',
    template: `
        <h2>Emulated</h2>
        <div class="emulated-message">Emulated encapsulation</div>
        <app-no-encapsulation></app-no-encapsulation>`,
    styles: ['h2, .emulated-message { color: green; }'],
    encapsulation: ViewEncapsulation.Emulated,
    })
    export class EmulatedEncapsulationComponent { }

    C. None:
    @Component({
    selector: 'app-no-encapsulation',
    template: `
        <h2>None</h2>
        <div class="none-message">No encapsulation</div>`,
    styles: ['h2, .none-message { color: red; }'],
    encapsulation: ViewEncapsulation.None,
    })
    export class NoEncapsulationComponent { }

2. ¿Qué es el shadow DOM?
Es un modo de encapsulación en el cual Angular usa la API Shadow DOM integrada del navegador para encerrar la vista del componente dentro de un ShadowRoot (usado como elemento host del componente) y aplicar los estilos provistos de manera aislada.

3. ¿Qué es el changeDetection?
es el proceso mediante el cual Angular verifica si el estado de su aplicación ha cambiado y si es necesario actualizar algún DOM.

4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.
* OnPush: utiliza la estrategia CheckOnce, lo que significa que la detección automática de cambios se desactiva hasta que se reactiva configurando la estrategia en default.
* Default: utiliza la estrategia CheckAlways predeterminada, en la que la detección de cambios es automática hasta que se desactiva explícitamente.
Se recomienda utilizar la estrategia OnPush, si sus objetos son inmutables y no cambia el estado de los objetos en su componente; funciona mejor que default, donde cada cambio del objeto hace que se ejecute el detector de cambios para resolver dichos cambios.

5. Los componentes en Angular tienen un ciclo de vida que comienza cuando Angular crea una instancia de la clase de componente y representa la vista del componente junto con sus vistas secundarias. El ciclo de vida continúa con la detección de cambios, ya que Angular verifica cuándo cambian las propiedades vinculadas a datos y actualiza tanto la vista como la instancia del componente según sea necesario. El ciclo de vida finaliza cuando Angular destruye la instancia del componente y elimina su plantilla representada del DOM. Las directivas tienen un ciclo de vida similar, ya que Angular crea, actualiza y destruye instancias durante el curso de la ejecución.

Las aplicaciones pueden utilizar métodos hook para aprovechar eventos clave en el ciclo de vida de un componente o directiva para inicializar nuevas instancias, iniciar la detección de cambios cuando sea necesario, responder a las actualizaciones durante la detección de cambios y limpiar antes de eliminar instancias; algunos de los métodos hook más utilizados y destacados son:
a. OnChanges: se dispara cuando Angular establece o restablece propiedades de entrada vinculadas a datos.
b. OnInit: inicializa la directiva o el componente después de que Angular muestre por primera vez las propiedades vinculadas a datos y establezca las propiedades de entrada de la directiva o el componente.
c. AfterViewInit: se dispara después de que Angular inicializa las vistas y las vistas secundarias del componente, o la vista que contiene la directiva.
d. OnDestroy: se dispara justo antes de que Angular destruya la directiva u componente.
