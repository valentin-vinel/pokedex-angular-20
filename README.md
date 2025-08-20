# AngularPokedexApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

-----

## Composant

Un composant Angular est composé au minimum d'une classe TypeScript et d'un template HTML.
- La classe TypeScript d'un composant s'occupe d'initialiser et de manipuler un ensemble de données. On parle de 'state'.
- Le template HTML d'un composant s'occupe d'afficher les données du composant à l'utilisateur et d'écouter les évènements souhaités.
- On utilise l'annotation **@Component** pour indiquer à Angular qu'une classe est un composant.
- Une propriété d'un composant peut être initialisée directement par une valeur simple lors de sa déclaration.