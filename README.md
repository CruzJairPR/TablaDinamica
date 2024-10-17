#1 primero debemos clonar el repositorio con el comando

git clone  https://github.com/CruzJairPR/TablaDinamica.git

despues nos movemos a la rama dev con el sig comando y jalamos los cambios.

git checkout  dev

git pull

#2 una vez clonado el repositorio se debe mover a la carpeta del proyecto con este comando

cd TablaDinamica

#3 una vez en la carpeta del proyecto se debe correr el sig comando para instalar la carpeta node modules

npm install

#4 ya instalado el nodemodules se debe correr el sig comando para levantar el proyecto

npm start
-------------------------------------------------------------------------------------------------------------------------------------
usuarios para logearse por ejemplo:

    correo: "pedrosanchez@gmail.com"
    pw: "supersecret"
 
    correo: "admin@example.com"
    pw: "admin123"
---------------------------------------------------------------------------------------------------------------------------------------

nota: se tiene q decargar el backend

git checkout https://github.com/CruzJairPR/Server-Express.git

nos movemos a la rama dev, una vez clonado el repo corremos el sig comando para levantar  el servidor

node api.js
----------------------------------------------------------------------------------------------------------------------------------------

Analisis:

se desarrollo una pequeña aplicacion en react, con componentes de Material UI version 6,  se desarrollo una tabla dinamica con la capacidad de agregar, eliminar,filtrar, ordenar y editar registros, se desarrollo en pequeños modulos para su facil reutilizacion y mantenimiento, ademas de que puede ser escalable y mas robusta.  

primero se realizo  la estructura de la aplicacion con los componentes necesarios, se hizo la maqueta, luego se desarrollo la logica  de negocio, se fue trabajando por componente pequeños y despues se fueron agregando a componentes mas grandes, se utilizo el sistema de estilos propios de MUI y en otros componentes se agrego un estilo en .css, se encapsulo la logica mediante customhook, tambien se hizo responsive para poder visuualizarse en diferentes tamaños de dispositivos, se agregaron validaciones de errores, se agrego middleware y en general  se desarrollo un estilo elegante y minimalista, facil de interactuar con el usuario e intuitivo. 

la parte del backend se trabajo con express. se hicieron las configuraciones de la capa de servicio, se creo un pequeño json con datos precargados para poder pintarlos en el front y realizar las operaciones CRUD, se desarrollo un sistema de autenticacion con usuario y contraseña mediante jwt.