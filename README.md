# KNIME Case Study Description

## What the Application does

- Displays a simple workflow with simple nodes.
- Displays a search field when typing, show list of possible new nodes to add from a list, while allowing adding nodes to the workflow with AutoComplete feature.
- Allows moving of nodes (drag & drop). (Optional point)

## Technologies

- Vue
- Vue Router
- Vuex 
- Vue draggable
- JavaScript
- Vuetify
- Jest

## Project Installation

```bash
git clone https://github.com/Rottabx/knime.git
cd knime
yarn 
```

## To Start the App

```bash
yarn serve
```

## To Test the App

```bash
yarn jest
```

## For Building

```bash
yarn build
```

## Usage

Used Vuetify as a UI Component Library.

## Project Hierarchy

```bash
  KNIME
    ├─ public
    │  ├─ favicon.ico
    │  ├─ index.html
    ├─ src
    │  ├─ components
    │  │  ├─ Search.vue
    │  ├─ plugins
    │  │  └─ vuetify.js
    │  ├─ store
    │  │  └─ modules
    │  │     └─ data.js
    │  │  └─ index.js   
    │  ├─ views
    │  │  ├─ Home.vue
    │  │  ├─ About.vue   
    │  │  └─ index.js   
    │  ├─ tests
    │  │    └─ unit
    │  │       └─ home.spec.js
    │  │─ App.vue
    │  │─ main.js
    ├─ .gitignore
    ├─ node_modules
    ├─ package.json
    ├─ babel.config.js
    ├─ package-lock.json
    ├─ README.md
    ├─ vue.config.js
    ├─ jest.config.js
    └─ yarn.lock
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge
<a href="https://www.linkedin.com/in/rottab/"> <img src="https://img.shields.io/badge/Mahmoud%20Rottab-LinkedIn-red" alt="KNIME" /> </a>


