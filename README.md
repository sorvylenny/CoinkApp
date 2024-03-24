CoinkApp
##Descripción
CoinkApp es una aplicación móvil desarrollada en Ionic con Angular que permite simular un registro exitoso en Coink utilizando 
su API. Coink es una plataforma de gestión financiera personal que ofrece una variedad de herramientas y servicios para administrar
tus finanzas de manera efectiva.

## Dependencies

This project uses the following dependencies:

- [Angular: A platform for building scalable and dynamic web applications.](https://angular.io/)
  - [@angular/animations](https://angular.io/api/animations) (^17.0.2)
  - [@angular/cdk](https://angular.io/api/cdk) (^17.3.0)
  - [@angular/common](https://angular.io/api/common) (^17.0.2)
  - [@angular/compiler](https://angular.io/api/compiler) (^17.0.2)
  - [@angular/core](https://angular.io/api/core) (^17.0.2)
  - [@angular/forms](https://angular.io/api/forms) (^17.0.2)
  - [@angular/material](https://material.angular.io/) (^17.3.0)
  - [@angular/platform-browser](https://angular.io/api/platform-browser) (^17.0.2)
  - [@angular/platform-browser-dynamic](https://angular.io/api/platform-browser-dynamic) (^17.0.2)
  - [@angular/router](https://angular.io/api/router) (^17.0.2)
  - [@capacitor/android](https://capacitorjs.com/docs/android) (^5.7.4)
  - [@capacitor/app](https://capacitorjs.com/docs/apis/app) (5.0.7)
  - [@capacitor/core](https://capacitorjs.com/docs/apis/core) (5.7.3)
  - [@capacitor/haptics](https://capacitorjs.com/docs/apis/haptics) (5.0.7)
  - [@capacitor/keyboard](https://capacitorjs.com/docs/apis/keyboard) (5.0.8)
  - [@capacitor/status-bar](https://capacitorjs.com/docs/apis/status-bar) (5.0.7)
  - [@ionic/angular](https://ionicframework.com/docs/angular) (^7.0.0)
  - [express](https://expressjs.com/) (^4.19.1)
  - [ionicons](https://ionicons.com/) (^7.0.0)
  - [rxjs](https://rxjs.dev/) (~7.8.0)
  - [tslib](https://www.npmjs.com/package/tslib) (^2.3.0)
  - [zone.js](https://github.com/angular/zone.js) (~0.14.2)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:(https://github.com/sorvylenny/CoinkApp)
2. Navigate to the project directory: Master,
3. Install dependencies: `npm install express`
4. Run the application: `ionic serve / ionic serve --external`
5. Open the application in your browser at [http://localhost:8100/](http://localhost:8100/).
6. For the deployed version, visit .

##Notas
El enpoint suministrado en el PDF para realizar la prueba, el de typeDocument si funciono que fue esta ruta (https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106)
pero el de genero que fue esta ruta (https://api.bancoink.biz/qa/signup/genders?apiKey=030106) me dio esta respuesta en JSON ({
"payload": "kMA7j4qV2T8JwoUYgE+Nsy/u/W35JC7AGhZSL88IMww8tVz+rBCNzVfDhZowtZIjilgQLJ52lGbbfHXxQLXj7JavG6ZN+oUiF7HoYqUivT4c8QIJSZDEizKu2mv5RdVolq8bpk36hSL8qE2uFgU/cg=="
}), para solucionar lo del genero cree un arreglo en el typescript y lo llame con un *ngfor en el Html.

## Author
This project was developed by Katherine Flores <floresmKatherine@gmail.com.>
