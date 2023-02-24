# Seccion Javascript

## Problema 2

### Planteamiento

Crear un script que pueda ser ejecutado en la consola del navegador en la pagina de detalle de un producto de esta [pagina](https://littlesleepies.com/) ([link](https://littlesleepies.com/products/green-sleepy-sloths-two-piece-bamboo-viscose-pajama-set) ejemplo pagina de producto) y que haga lo siguiente:

Si el usuario elige alguno de estos Sizes: **2T**, **3T** o **4T** se debe mostrar un mensaje debajo del precio del producto.

El texto debe cambiar cuando el usuario cambie la cantidad de producto cuando el usuario modifique la cantidad de productos que va a agregar:

- 1: Add 2 of this product and the third one is free!
- 2: Add another one free to your cart.
- 3: Congrats! add to cart now!
- 4: en adelante: debe esconder el mensaje.

### Solucion

Para solucionar este problema, lo primero es definir los datos necesarios para crear nuestra funcion:

- Talla seleccionada por el usuario.
- Cantidad de productos seleccionados.
- Un nuevo elemento para mostrar la notificacion.
- Identificadores de los elementos que lanzaran la nueva funcion.

Con esto en mente, investigamos las paginas del sitio a traves del inspector del navegador para encontrar y definir los elementos necesarios:

- La pagina inicializa una variable global llamada **meta**, la cual contiene la informacion de variantes del producto.
- El identificador del formulario del producto utiliza la nomenclatura **product_form_${productId}**
- Los botones `+` y `-` del formulario se pueden identificar con el *aria-label*: `Increment` y `Decrement` respectivamente.
- Dentro del formulario el identificador de la variante seleccionada se almacena en el elemento nombrado **id**.
- Dentro del formulario la cantidad seleccionada se almacena dentro del elemento nombrado **quantity**.

Una vez que tenemos forma de acceder a los datos y elementos necesarios, creamos una funcion que obtenga la cantidad y la talla seleccionada por el usuario. Luego validamos que estos datos se encuentren dentro de los parametros proporcionados (`{size: ["2T", "3T", "4T"], qty: [1, 2, 3]}`) y creamos un elemento nuevo antes del formulario para mostrar el texto de la notificacion.

Esta funcion luego la agregamos al evento **onchange** del elemento que contiene el identificador de variante y al evento **onclick** de los botones que modifican la cantidad del producto.

A continuacion se muestra el resultado de este script en Javascript:

```javascript

// Almacenamos el formulario del producto
let productForm = document.getElementById(`product_form_${meta.product.id}`)

// Almacenamos los botones '+' y '-' del formulario
let buttonIncrement = productForm.querySelector('[aria-label="Increment"]')
let buttonDecrement = productForm.querySelector('[aria-label="Decrement"]')

// Obtenemos la variante seleccionada
let variantSelected = productForm.elements['id']

// Almacenamos los textos de ofertas segun cantidad
const offerTexts = {
  1: "Add 2 of this product and the third one is free!",
  2: "Add another one free to your cart.",
  3: "Congrats! add to cart now!",
};

// Almacenamos las tallas de las ofertas
const  offerSizes= ["2T", "3T", "4T"];

// Creamos la funcion que utilizaran los eventos
function OfferNotice() {

  // Obtenemos la cantidad actual
  let formQuantity = productForm.elements['quantity'][1].valueAsNumber

  // Buscamos el detalle de la variante seleccionada y obtenemos la talla
  let { public_title: size } = meta.product.variants.find(({ id }) => id === Number(variantSelected.value)  )
  
  // Validamos las tallas de la oferta
  let offerSize = offerSizes.includes(size);

  // Obtenemos el elemento de la notificacion personalizada
  let offerNoticeElement = document.getElementById('custom-offer-notice-ss');

  if (offerNoticeElement) { 
    if (offerSize && formQuantity <= 3) {
      // Si el elemento existe y se encuentra dentro del rango de ofertas
      // Modificamos el texto de la notificacion
      offerNoticeElement.innerText = offerTexts[formQuantity];
    } else {
      // Si el elemento existe y no se encuentra dentro del rango de ofertas
      // Eliminamos el elemento de la notificacion
      offerNoticeElement.remove()
    }
  } else {
    if (offerSize && formQuantity <= 3) {
      // Si el elemento no existe y se encuentra dentro del rango de ofertas
      // Creamos el elemento y lo insertamos sobre el formulario
      offerNoticeElement = document.createElement('div');
      offerNoticeElement.id = 'custom-offer-notice-ss';
      offerNoticeElement.innerText = offerTexts[formQuantity];
      offerNoticeElement.style.backgroundColor = '#b2fce4';
      offerNoticeElement.style.width = '100%'; 
      offerNoticeElement.style.marginTop = '1rem';
      offerNoticeElement.style.marginBottom = '1rem';
    
      productForm.insertAdjacentElement('afterbegin', offerNoticeElement);
    }
  }
}

// Agregamos la funcion a los eventos de cada elemento
variantSelected.onchange = OfferNotice;
buttonIncrement.onclick = OfferNotice;
buttonDecrement.onclick = OfferNotice;
```

### Ejemplo

Podemos encontrar el codigo funcional de este ejemplo en el archivo [solucion.js](/problema-2/solucion.js), esta solucion esta pensada para ejecutarse en la pagina proporcionada en las instrucciones por lo que no se agrega una ejecucion local.

Para ejecutar este script, basta con esperar a que cargue la pagina y pegarlo en la consola del navegador.

> El producto proporcionado en el planteamiento ([link](https://littlesleepies.com/products/green-sleepy-sloths-two-piece-bamboo-viscose-pajama-set)) no cuenta con stock en las tallas ofertadas, por lo que las pruebas pueden realizarse sobre estos productos ([link 1](https://littlesleepies.com/products/harry-potter-wizarding-world-two-piece-bamboo-viscose-pajama-set), [link 2](https://littlesleepies.com/products/reindeer-cheer-two-piece-bamboo-viscose-pajama-set))
