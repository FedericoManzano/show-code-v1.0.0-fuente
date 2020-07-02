# Show Code (v1.0.0)

Librería para resaltar el código fuente en páginas web.

## Código

Para esta primera versión podemos resartar el código de `html`, `js` y `css`. 
En versiones posteriores vamos a agregar más lenguajes.


## Descarga 

Para disponer de la librería podemos hacerlo a través del CDN de los archivos correspondientes a 
los temas y al archivo `sintax.min.js` que contiene la lógica para el funcionamiento.

### CDN Tema Claro

[https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/css/tema-claro.min.css](https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/css/tema-claro.min.css)

### CDN Tema Oscuro

[https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/css/tema-oscuro.min.css](https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/css/tema-oscuro.min.css)

### CDN de show.min.js

[https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/js/sintax.min.js](https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/js/sintax.min.js)

### Plantilla

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Tema oscuro -->
    <link rel="stylesheet" href="https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/css/tema-claro.min.css">

    <!-- Tema claro -->
    <link rel="stylesheet" href="https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/css/tema-oscuro.min.css">


    <title>Plantilla Show V1.0.0</title>
</head>
<body>

    <pre class="cod-html">
        <!-- Aca va lo que queremos resaltar --->
    </pre>
    
    <script src="https://ghcdn.rawgit.org/FedericoManzano/show-code-v1.0.0-fuente/master/dist/js/sintax.min.js"></script>
    
</body>
</html>
```