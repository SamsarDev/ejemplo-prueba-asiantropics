'use strict';

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
