# Objetivo

Medir habilidades y conocimientos en el uso de python como lenguaje de
programación, entendimiento general del framework Odoo, toma de decisiones y
presentación de información.

## Instrucciones generales

1. Cree un nuevo repositorio con el formato de nombre:
{nombre}-{apellido}-{prueba}-{asiantropics}

2. Cree una carpeta por cada sección de la prueba con el nombre de dicha
sección y un documento README.md para presentar las respuestas de los
ejercicios.

> Siéntase libre de comentar y explicar su respuesta en el archivo markdown, así
como de utilizar cualquier otra herramienta necesaria para presentar su solución al
ejercicio. Puede ver un ejemplo del archivo esperado [aquí](https://github.com/SamsarDev/ejemplo-prueba-asiantropics).

## Python

1. Mencione 3 normas pertenecientes a la guía de estilos PEP8 y brinde ejemplos de su uso e importancia.

2. Describa los tipos de datos mutables de Python:

3. Describa los tipos de datos inmutables de Python:

4. Complete la palabra reservada de python en el siguiente programa:

```python
  x = 6
  if x < 0:
    print("negativo")
  "?" x == 0:
    print("cero")
  else:
    print("positivo")
```

5. Cual de las opciones es equivalente al código de python mostrado?

```python
  if 5 == 2:
    print("Si")
  else:
    print("No")
```

+ print(“No”) if 5 == 2 else print (“Si”)

+ if 5 == 2 print(“Si”) : print(“No”)

+ if 5 == 2 print(“Si”) else print (“No”)

+ print(“Si”) if 5 == 2 else print(“No”)

## Odoo

Desarrolle las propuestas que brinden solución a los siguientes requerimientos proporcionados por gerencia. (Puede proponer la compra de módulos y su implementación,
estimar tiempo de desarrollo u ofrecer soluciones alternativas de ser necesario).

1. La gerencia de mercadeo necesita generar un reporte diario con las visitas de
clientes a tiendas, este reporte debe contener: <br> <br> Cantidad de compras realizadas en el día, medio por el cual se enteraron de la empresa, comentarios del cliente.

2. Como parte del servicio post-venta la gerencia de mercadeo, desea enviar a todos sus clientes una encuesta de satisfacción una vez que la venta se encuentra
facturada.

3. La empresa “Los Chanchitos”, cuenta con una aplicación externa a Odoo que maneja la logística de sus envíos y recepciones. Dicha aplicación se encuentra desarrollada en Python y alojada en Azure. <br> <br> Actualmente, para registrar los costos de gasolina, mantenimiento y depreciación de vehículos en Odoo se genera un reporte de excel desde esta aplicación y se registran manualmente uno por uno. <br> <br> Se desea automatizar la carga de esta información a Odoo para evitar el trabajo
manual.