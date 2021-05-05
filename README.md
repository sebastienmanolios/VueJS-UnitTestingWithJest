# unit-testing-vue

Learning Unit Testing with using JEST  
Live coding with https://www.vuemastery.com/

### Benefits of writing tests

- Improved Code Quality
- Boosted Confidence
- Better Documentation

### Identifying what to test :

### <ins>Inputs
- Component Data
- Props
- User Interaction
- LifeCycle Methods
- Vuex Store
- Route Params

### <ins>Outputs
- What is rendered to the DOM
- External function calls
- Events emitted by component
- Updates to Vuex Store
- Changes in child components


### What not to test :
- Implementation details  
Unit testing is not about how the componet did what it did   
We want to know if it gave us the output expected with the input asked
- Vue framework itself like Vuejs Prop validation
- Third-party library like if axios works










## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
