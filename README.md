# Show Code (v1.0.0)

Librería para resaltar el código fuente en páginas web.

## Código

Para esta primera versión podemos resartar el código de `html`, `js` y `css`. 
En versiones posteriores vamos a agregar más lenguajes.


## Descarga 

Para disponer de la librería podemos hacerlo a través del CDN de los archivos correspondientes a 
los temas y al archivo `show.min.js` que contiene la lógica para el funcionamiento.

### CDN Tema Claro


### CDN Tema Oscuro


### CDN de show.min.js


### Plantilla

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Tema oscuro -->
    <link rel="stylesheet" href="../dist/css/tema-oscuro.css">

    <!-- Tema claro -->
    <link rel="stylesheet" href="../dist/css/tema-claro.css">


    <title>Plantilla Show V1.0.0</title>
</head>
<body>

    <pre class="cod-css">
        <!-- Aca va lo que queremos resaltar --->
    </pre>
    
    <script src="../dist/js/sintax.bundle.js"></script>
    <script>Show.ShowCssInit()</script>
</body>
</html>
```