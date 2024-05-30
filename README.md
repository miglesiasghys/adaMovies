Películas-React
⚙️ Consigna
En este proyecto vas a crear una aplicación que permita conectarse a una API de películas, los estrenos, populares y mejor puntadas. Aplicarás lo aprendido para consumir y manipular la información de tu aplicación.

💬 Comentarios
A este proyecto se le suma un nuevo grado de complejidad: tenemos que trabajar diferentes secciones y componentes haciendo uso de useEffect y useFetch.

Por eso, es recomendable ir haciendo las funcionalidades una por una. Al empezar una nueva funcionalidad, deberíamos crear una nueva brach y ponerle un nombre adecuado (por ejemplo, vista-principal, ultimos-lanzamientos, populares, etc ), en esa branch ocuparnos única y exclusivamente de esa funcionalidad, y una vez terminada, mergearla a main y continuar con la siguiente funcionalidad, repetiendo el proceso.

Si tenemos que mejorar o arreglar una funcionalidad ya agregada, deberíamos hacer una nueva branch para dicho fix o refactor, y nombrarla adecuadamente (por ejemplo, refactor-populares, fix-buscador), y una vez finalizada la mejora o correción, mergearla a main.

👍 Criterios de aceptación
Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes e íconos
Debe respetar las interacciones y flujo de pantallas
Debe ser responsive
Debe cumplir con las funcionalidades principales listadas en la sección siguiente
Debe hacer hacer uso de un framework CSS
Debe estar deployado y ser accesible desde una dirección web
No se debe trabajar en la rama main. En main sólo van a mergearse las demás ramas, por lo que cada commit de main debería ser el merge de una branch de una funcionalidad terminada
Cada funcionalidad que se agregue debe hacerse mediante un PR (Pull Request)
🎛 Funcionalidades principales
Se debe tener un menú que nos muestre diferentes vistas(Home, ultimos lanzamientos, Populares y Buscador)
En Home se debe tener un slider con al menos 5 películas recomendadas y una breve descripción de la película en cuestión.
En Home debe tener dos listas(Populares y mejor puntadas) con al menos 10 películas cada una.
Cuando demos click a cualquier película debe llevarnos a una vista donde se vea el fondo de pantalla de esa película, el poster y la descripción de la misma.
Dentro de los detalles debemos contar con un botón para reproducir el triler de dicha película(funcionalidad avanzada)
La vista de Últimos lanzamientos nos debe mostrar un listado de al menos 20 películas en cards, con su titulo y un botón para llevarnos a la vista de detalles de película (anteriormente mencionada)
La vista de Últimos lanzamientos debe contar con un paginador, para poder ir viendo de 20 películas en 20 películas(funcionalidad avanzada)
La vista de Populares debe tener lo mismo que la vista de Últimos lanzamientos pero con las películas más populares.
La vista de Buscador debe contar con un input, el cual al ir escribiendo se debe hacer un filtro y mostrar al menos 20 películas(en caso que existan) que concuerden con lo que el usuario eligió. . La URL de nuestra aplicación debe reflejar los cambios que el usuario haga, por ejemplo al seleccionar una película se debe modificar con el id de la película, al buscar una película se debe editar la url con los datos que el usuario va escribiendo(funcionalidad avanzada)
Todas las vistas deben de tener un footer.

🧰 Recursos
API - API películas
Material UI - Framework CSS
Axios