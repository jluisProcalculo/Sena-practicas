<h1>Proyecto EO Global</h1>

<h2>Descripción</h2>
<p>
    EO Global es una aplicación web desarrollada en React que permite a los usuarios definir un Área de Interés (AOI) en un mapa y consultar imágenes satelitales asociadas a esa área. 
    La aplicación ofrece una experiencia de usuario intuitiva, permitiendo la selección de polígonos y la visualización de detalles de las imágenes, tales como la superposición con el AOI y 
    el precio estimado por área.
</p>

<h2>Características Actuales</h2>
<ul>
    <li><strong>Selección de AOI en "Explore":</strong> Los usuarios pueden indicar un polígono para definir su AOI y buscar imágenes disponibles dentro de esa área.</li>
    <li><strong>Consulta detallada de imágenes:</strong> Al seleccionar la imagen de interés, se ofrece el detalle de esta, mostrando datos específicos como la superposición exacta con el 
        área de interés y el costo estimado por kilómetro cuadrado.</li>
    <li><strong>Paginación y carga dinámica:</strong> Implementa paginación para la carga progresiva de imágenes mientras el usuario explora el catálogo, proporcionando una navegación fluida y eficiente.</li>
</ul>

<h2>Funcionalidades Futuras</h2>
<ul>
    <li><strong>Interacción Completa con Mapas de Esri:</strong> Mejorar la visualización de mapas y la gestión de polígonos mediante la API de Esri, permitiendo al usuario interactuar de manera avanzada con el AOI.</li>
    <li><strong>Exportación de Datos:</strong> Ofrecer opciones para exportar imágenes y datos asociados para uso externo.</li>
    <li><strong>Integración con otras API’s de imágenes satelitales:</strong> Expansión del catálogo de imágenes con la incorporación de otras fuentes de datos satelitales, ampliando la cobertura y disponibilidad de imágenes.</li>
</ul>

<h2>Tecnologías Utilizadas</h2>
<ul>
    <li><strong>React:</strong> Biblioteca de JavaScript utilizada para la creación de interfaces de usuario interactivas.</li>
    <li><strong>Maps de Esri:</strong> Herramienta de visualización de mapas y gestión de AOI para la interacción geoespacial.</li>
    <li><strong>Vercel:</strong> Plataforma de despliegue que hospeda la aplicación y asegura un acceso rápido y seguro para los usuarios.</li>
</ul>

<h2>Dependencias Instaladas</h2>
<ul>
    <li><strong>axios:</strong> Librería para realizar solicitudes HTTP a las distintas API’s de imágenes satelitales.</li>
    <li><strong>react-router-dom:</strong> Herramienta de enrutamiento para facilitar la navegación entre componentes de la aplicación.</li>
</ul>

<h2>Instalación</h2>
<p>Para ejecutar este proyecto en tu máquina local, sigue estos pasos:</p>
<ol>
    <li>Asegúrate de tener Node.js instalado.</li>
    <li>Clona el repositorio:<br>
        <code>git clone https://github.com/jluisProcalculo/Sena-practicas.git</code>
    </li>
    <li>Ingresa al directorio del proyecto:<br>
        <code>cd project/fe</code>
    </li>
    <li>Instala las dependencias ejecutando el comando:<br>
        <code>npm install</code>
    </li>
    <li>Inicia el servidor de desarrollo:<br>
        <code>npm run dev</code>
    </li>
</ol>

<h2>Uso</h2>
<ol>
    <li>Ejecuta la aplicación desde tu entorno de desarrollo.</li>
    <li>En el mapa, selecciona el área de interés (AOI) indicando un polígono.</li>
    <li>Visualiza las imágenes satelitales disponibles para esa área, incluyendo detalles sobre la superposición y precios por área.</li>
    <li>Usa la funcionalidad de búsqueda y la paginación para navegar a través del catálogo de imágenes.</li>
</ol>

<h2>Créditos</h2>
<p>
    Este proyecto fue desarrollado por Javier Andrés Luis González en colaboración con PROCALCULO PROSIS S.A.S. para la gestión y consulta de imágenes satelitales como parte de la solución EO Global.
</p>

