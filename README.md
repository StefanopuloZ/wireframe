# Wirefeframe React App

Developed with node: v12.13.1

When starting app for the first time, you need to install dependencies

```bash
$ npm install # to start the installation
```

To run the app use these commands:

```bash
$ npm start # to start the app
```

If it's successfull, go to the `localhost:5050` in your browser and you'll be able to see the app


## Project:

All components are written as Functional Components with hooks and Styled Components for styles, where possible.

Redux is used for state management.

Redux Sagas use custom fetch api for API calls.

App uses custom routing system for tracking language state and making dynamic routes.

`RouteNotFound` component is the only class component as hook dispatch had to be outside render method as to avoid React throwing dev errors and prevent future bugs. It is resposible for language updates and 404 page redirects.

`master` branch is frozen in time on 24.06.2020. for now. Other branches might get updates.

Thanks!
