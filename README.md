# Redux TodoMVC Example

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX.  See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


```angular2html

// const todos2 = ['купить хлеб', 'убрать дома'];

// это правильно:
// данные
// const todos = [{
//   id: 'd1396068-82b9-4b58-99fa-37252919fd94',
//   title: 'купить хлеб'
// }, {
//   id: '38653fdc-17b6-422c-937b-4fe2499fc0d3',
//   title: 'убрать дома'
// }];

// состояние этих данных 
// selectedTodos = ['d1396068-82b9-4b58-99fa-37252919fd94']


// это не очень правильно:
// тут есть данные и состояние этих данных вместе
const todos = [{
  id: 'd1396068-82b9-4b58-99fa-37252919fd94',
  title: 'купить хлеб',
  selected: true
}, {
  id: '38653fdc-17b6-422c-937b-4fe2499fc0d3',
  title: 'убрать дома',
  selected: false
}];



// const count = todos.length;

// checkbox
// value 'd1396068-82b9-4b58-99fa-37252919fd94' - всегда
// onChange send 'd1396068-82b9-4b58-99fa-37252919fd94'

// const filters = ['All', 'Active', 'Complited'];

const filters = [{
  id: 'd1396068-82b9-4b58-99fa-37252919fd94',
  title: 'All',
  selected: true
}, {
  id: '38653fdc-17b6-422c-937b-4fe2499fc0d3',
  title: 'Active',
  selected: false
}, {
  id: '38653fdc-17b6-422c-937b-4fe2499fc0d3',
  title: 'Complited',
  selected: false
}];


```