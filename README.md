
# Proyecto Final - Bootcamp Devlights

## Descripción del Proyecto

Este proyecto es parte de mi participación en el **Bootcamp de Devlights**, un curso intensivo de desarrollo web y programación. En este proyecto final, se presenta una aplicación **full-stack** que involucra un backend construido con **.NET** (C#) y un frontend con **Angular**. El objetivo de este proyecto es poner en práctica los conocimientos adquiridos en el Bootcamp para desarrollar una solución real que conecte los dos mundos.

### Funcionalidades

- **Backend**: API RESTful para gestionar empleados en una base de datos.
- **Frontend**: Aplicación Angular para visualizar, crear, editar y eliminar empleados.
- **Tecnologías utilizadas**:
  - **Backend**: .NET 8, C#, ASP.NET Core
  - **Frontend**: Angular, HTML, CSS, JavaScript
  - **Base de Datos**: SQL Server

## Características Adicionales

- **Autenticación**: Implementación de autenticación basada en JWT (JSON Web Tokens).
- **Interfaz de usuario amigable**: Diseño responsivo utilizando componentes de Angular.
- **Presentación del Proyecto**: Video presentación donde se explica el desarrollo, implementación y el proceso detrás de este proyecto.

---

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

### Requisitos Previos

1. Tener **.NET SDK 8.0** instalado.
2. Tener **Node.js** y **Angular CLI** instalados.

### Pasos para Backend

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/Proyecto_Final_DevLight_Backend.git
   ```
2. Navega al directorio del backend:
   ```bash
   cd Proyecto_Final_DevLight_Backend
   ```
3. Restaura las dependencias de NuGet:
   ```bash
   dotnet restore
   ```
4. Ejecuta el proyecto:
   ```bash
   dotnet run
   ```

### Pasos para Frontend

1. Clona el repositorio del frontend:
   ```bash
   git clone https://github.com/usuario/Proyecto_Final_DevLight_Frontend.git
   ```
2. Navega al directorio del frontend:
   ```bash
   cd Proyecto_Final_DevLight_Frontend
   ```
3. Instala las dependencias de npm:
   ```bash
   npm install
   ```
4. Ejecuta la aplicación Angular:
   ```bash
   ng serve
   ```

Abre el navegador y accede a `http://localhost:4200`.

---

## Video Presentación

Para conocer más sobre el desarrollo de este proyecto y ver una demostración visual, puedes ver el video de presentación:

🎥 [Ver presentación en Drive](https://drive.google.com/file/d/1N4ibtIaopWP6_BXZiCdbtuPD_U9HM8wh/view?usp=drive_link)

> En este video se muestra todo lo trabajado en cuanto al CRUD y sus respectivas validaciones. También como se logró integrar ambas partes (Back-End y Front-End) en una solución coherente.

---

## Estructura del Proyecto

Aquí te dejo una breve descripción de la estructura del repositorio:

```
Proyecto_Final_DevLight/
├── ProyectoFinal_DevLight_Backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Program.cs
│   └── Proyecto_DevLight.sln
├── ProyectoFinal_DevLight_Frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── styles.css
│   ├── angular.json
│   └── package.json
└── README.md
```

- **Backend**: Contiene el código C# para el servidor y la API REST.
- **Frontend**: Contiene el código Angular para la interfaz de usuario y la lógica de interacción.

---

## Tecnologías Utilizadas

### Backend:
- **ASP.NET Core**: Framework para desarrollar la API RESTful.
- **C#**: Lenguaje de programación utilizado en el desarrollo del backend.

### Frontend:
- **Angular**: Framework de desarrollo frontend.
- **TypeScript**: Lenguaje basado en JavaScript utilizado para escribir el frontend.

---

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz un commit (`git commit -am 'Agregué una nueva funcionalidad'`).
4. Envía un pull request.

¡Gracias por tu interés en contribuir!

---

## Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
