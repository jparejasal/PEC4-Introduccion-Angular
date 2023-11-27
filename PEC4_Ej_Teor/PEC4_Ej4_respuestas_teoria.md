1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:
    a. index: el índice del elemento actual en un iterable.
    b. even: de tipo boolean, su valor es true cuando el elemento tiene un índice par en el iterable.
    c. odd: de tipo boolean, su valor es true cuando el elemento tiene un índice impar en el iterable.
    d. first: de tipo boolean, su valor es true cuando el elemento es el primer elemento del iterable.
    e. last: de tipo boolean, su valor es true cuando el elemento es el primer último del iterable.

2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.
trackby es una función que define cómo realizar un seguimiento de los cambios para los elementos en el iterable.
Ejemplo
<div
  *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById"
  [class.odd]="odd">
  ({{i}}) {{hero.name}}
</div>

<ng-template ngFor let-hero [ngForOf]="heroes"
  let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
  <div [class.odd]="odd">
    ({{i}}) {{hero.name}}
  </div>
</ng-template>

3. ¿Es posible ejecutar dos directivas estructurales simultáneamente?
No, no es posible. Si dos directivas estructurales se colocan sobre el mismo elemento, el compilador lo tomará como error, puesto que es imposible determinar la precedencia de una directiva sobre otra.
La razón para el no uso simultáneo de dos directivas estructurales es la simplicidad, ya que las directivas estructurales pueden hacer cosas complejas con el elemento anfitrión y sus descendientes.

Ejemplo: si se diera el uso simultáneo de "ngIf" y de "ngFor", la solución sería: colocar "ngIf" en un elemento contenedor que envuelva el elemento "ngFor". Uno o ambos elementos pueden ser un <ng-container> para que no se generen elementos DOM adicionales.
