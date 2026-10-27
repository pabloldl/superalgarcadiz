# Super Algar — De pasillo en pasillo

Web local de presentación realizada con HTML5, CSS3 y JavaScript vanilla. Sin dependencias, compilación, formularios ni comercio electrónico. Abrir `index.html` con Live Server. Todas las fuentes y la fotografía se sirven desde el proyecto; no hay peticiones a Google Fonts ni mapas incrustados. No se ha desplegado ni registrado en un servicio de hosting.

## Confirmar antes de publicar

**La dirección no está resuelta.** Se conserva **Calle Huelva, 13, 11670 El Bosque, Cádiz**, dato proporcionado en el encargo. Las referencias consultadas sitúan Super Algar en Avenida/Calle Juan XXIII, 3 y Plaza de San Antonio, 2. No se encontró evidencia suficiente para identificar un traslado, una dirección antigua, entradas diferentes o establecimientos distintos. La dirección aparece con una nota visible en la web. Google Maps realiza una búsqueda textual de Calle Huelva, 13: no se fijan coordenadas ni un marcador exacto del negocio.

Los datos estructurados `GroceryStore` incluyen nombre y localidad; se omite deliberadamente la calle pendiente de confirmación, así como teléfono, horarios, coordenadas y catálogo. La dirección facilitada está en el contenido visible y descrita como pendiente de confirmación.

Solicitar al titular la dirección actual, el nombre comercial autorizado, horarios y canales oficiales antes de publicar. La identidad tipográfica SA / SUPER ALGAR es una propuesta original para el proyecto, no una reproducción de un logotipo oficial ni una marca registrada declarada.

## Investigación — 27 de octubre de 2026

- [Firmania: Super Algar, El Bosque](https://firmania.es/el-bosque-cadiz-andalucia/super-algar-1577384): comercio de alimentación, Avenida Juan XXIII, 3. Es un directorio, no un canal oficial. Su teléfono no se publica por no estar confirmado por el titular.
- [eInforma: sucursales de Super Algar S.C.](https://www.einforma.com/sucursales/super-algar/cadiz/): Calle Juan XXIII, 3. Publica un teléfono distinto al de Firmania, que tampoco se incorpora.
- [Directorio de comercios de El Bosque](https://tiendadecomestiblesespana.com/c/el-bosque-11/): entrada «Super algar», categoría tienda de alimentación, Plaza de San Antonio, 2. Sin teléfono ni web oficial indicada. No permite relacionar inequívocamente ambas direcciones.
- [Portal de Cádiz, noticia del 31 de agosto de 2025](https://www.portaldecadiz.com/provinciacadiz/138218-el-bosque-gira-el-sentido-la-avenida-juan-xxiii-cambia-y-suma-plazas-de-rotacion): menciona Super Algar como referencia de la avenida Juan XXIII. Refuerza esa ubicación, sin resolver Calle Huelva ni acreditar servicios o surtido del comercio. Las categorías de comercios vecinos citadas en la noticia no se atribuyen a Super Algar.
- [superalgar.com](https://superalgar.com/): corresponde a un supermercado que declara su dirección en Calle José Palomas, 27, **Algar**, otro municipio. No se ha asumido relación con Super Algar de El Bosque; no se reutilizan sus fotos, horarios, productos, descuentos ni contacto.

No se verificaron canales oficiales del establecimiento de El Bosque, fotografías autorizadas, horarios, redes sociales, categorías concretas ni servicios. Por eso se omiten catálogo, precios, marcas, ofertas, reparto, carnicería, frutería y otros departamentos. La información queda limitada a la actividad general y la ubicación facilitada, con la salvedad anterior.

## Imagen: procedencia, licencia y validación

`img/alimentacion.jpg` — nrd, fotografía de alimentación en Unsplash.

- [Ficha de origen D6Tu_L3chLE](https://unsplash.com/photos/D6Tu_L3chLE).
- [Archivo original utilizado](https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=85&fm=jpg).
- [Licencia Unsplash](https://unsplash.com/license): permite descarga, modificación y uso comercial. No autoriza presentar otro establecimiento como propio.
- Descarga verificada como JPEG real y decodificada con System.Drawing: 1800 × 1350 px, 789.507 bytes. Optimizada con remuestreo bicúbico a 1600 × 1200 px y JPEG calidad 80: 448.908 bytes, reducción aproximada del 43 %. La extensión y el formato coinciden.
- Se inspeccionó visualmente: exposición de hortalizas, sin marca de agua. No es una foto de Super Algar. Se indica en pie de foto, texto alternativo, Open Graph y créditos. No constituye una categoría de producto ni acredita un surtido del negocio.
- Ruta relativa y carga comprobadas en navegador. El archivo no depende de animaciones para ser visible.

La búsqueda de los identificadores de origen en los HTML y README de la colección no encontró reutilización de esta fotografía. No se afirma haber verificado todos los posibles recortes o copias renombradas por comparación visual.

## Tipografías

Denk One para rótulos; Gudea Regular y Bold para lectura. Descargadas de los repositorios de Google Fonts y alojadas en `css/fonts/`. Licencias SIL Open Font License incluidas como `denk-OFL.txt` y `gudea-OFL.txt`.

- [Denk One](https://github.com/google/fonts/tree/main/ofl/denkone)
- [Gudea](https://github.com/google/fonts/tree/main/ofl/gudea)

La búsqueda de Denk/Gudea en las hojas CSS disponibles de la colección no arrojó coincidencias previas.

## Diseño y originalidad

Se leyeron los HTML de El Retoño, La Leyenda, Agencia inmobiliaria de El Bosque, Centro de Salud El Bosque y Lavandería Salvi, y se consultaron sus familias tipográficas. La propuesta no reutiliza su código: navegación de tres señales de pasillo, portada de rótulo comercial horizontal, fotografía sobre canto de estantería, bloque de información sin tarjetas, letrero urbano y cierre de papel troquelado.

En móvil, las señales cambian a tres indicadores compactos siempre disponibles sin menú oculto; la cesta cambia de posición y la etiqueta de ubicación se adapta. El recorrido no representa un plano físico del supermercado. Los códigos, números de pasillo y barras son recursos gráficos, no artículos ni transacciones. El ticket no incluye precios, impuestos ni totales.

Las señales se despliegan una vez mediante recorte horizontal. La imagen y el contenido permanecen visibles sin JavaScript. Las interacciones tienen foco visible; la consulta de horario es un `details` nativo. `prefers-reduced-motion` desactiva animaciones, transiciones y desplazamiento suave.

## Verificaciones realizadas

Pruebas locales con Chrome headless mediante Chrome DevTools Protocol, además de revisión visual de capturas de 375 y 1440 px:

| Prueba | Resultado |
| --- | --- |
| Servidor HTTP local / portada | HTTP 200 |
| Anchos 375, 768, 1440 y 1920 px | Sin desbordamiento horizontal ni elementos fuera del viewport |
| Foto | Carga y decodificación correctas, dimensiones naturales verificadas |
| Fuentes locales | Cargadas correctamente |
| Enlaces internos | Todos apuntan a identificadores existentes |
| Desplegable de horario | Apertura funcional |
| Teclado | Tab mueve el foco a un enlace; estilos `focus-visible` definidos |
| Movimiento reducido | `scroll-behavior: auto` comprobado al emular preferencia |
| JavaScript | `node --check` correcto; sin excepciones en navegador |
| Recursos | Sin respuestas de error registradas en navegador |
| Datos estructurados | JSON válido, tipo GroceryStore |
| SEO básico | Title, description, idioma, viewport, Open Graph, favicon y encabezado H1 presentes |

Se reforzó a `#101a12` la tinta del texto pequeño sobre rojo para superar el contraste AA. El rojo decorativo y los rótulos grandes conservan la paleta solicitada.

**Límites:** no se ha probado Safari ni un iPhone físico. La emulación de 375 px corresponde a Chrome y no acredita compatibilidad en Safari. No se ha validado el resultado geográfico de Google Maps ni la posición real del establecimiento. El enlace usa la API pública de búsqueda por dirección, sin coordenadas. No hay un dominio público: antes de publicar habrá que añadir URL absoluta a `og:image`, `og:url` y canonical cuando exista un dominio real. No se inventa una URL de producción.

Los scripts y capturas locales de comprobación están en `.qa/`, excluida de Git; no son necesarios para servir la web. Solo se han creado y editado archivos dentro de `super-algar/`.
