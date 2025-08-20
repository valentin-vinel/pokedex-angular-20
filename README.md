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

## Signal

Les signaux sont un concept clé introduit dans Angular 16 et stable depuis Angular 17. Ils permettent de gérer efficacement les données réactives dans une application Angular, en propageant automatiquement les changements de données dans l'interface utilisateur.

Pour tirer pleinement partie des signals, Angular fournit plusieurs fontions utilitaires comme *set* ou *update* pour modifier la valeur d'un signal, *computed* pour créer des signals dérivés ou encore *effect* pour exécuter du code spécifique en réponse lorsque certains signals changent de valeur.

- Les signaux font partie d'une tendance de fond visant à implémenter la réactivité en interne dans les frameworks frontend.
- Un signal est un conteneur pour une valeur qui peut changer au fil du temps.
- **signal** est une fonction qui crée un nouveau signal, et on utilise les paranthèses pour accèder à sa valeur.
- **computed** permet de créer des signaux dérivés à partir d'autres signaux.
- **effect** exécute du code côté effets en réponse aux changements de signaux.
- Pour modifier un signal, utilisez **set** pour remplacer sa valeur ou **update** pour la mettre à jour.
- Si vous devez mettre à jour une valeur simple (chaîne, nombre, booléen), utilisez **set()**.
- Si la nouvelle valeur est basée sur la précédente, utilisez **update()**.

## Liaison de données

On peut lier les données d’un composant vers un template grâce à 4 types de liaisons différentes : une propriété, un attribut, une classe ou une règle de style.

- On peut afficher une image de deux manières dans un projet Angular : depuis un serveur distant ou en ajoutant l’image dans le dossier assets de notre projet.
- La syntaxe @if permet de conditionner l’affichage d’éléments dans le template.
- La syntaxe @for permet d’afficher une liste d’éléments contenus dans un tableau.
- Essayez d’éviter de mettre la logique de votre application dans vos templates. Gardez-les les plus simples possible !