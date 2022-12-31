# Bootstrap
Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

### Quick git Tips:
To see local branches, run this command: ```git branch```

To see remote branches, run this command: ```git branch -r```

To see all local and remote branches, run this command: ```git branch -a```

To Change branch ```git checkout branch_name```


### First Change the Folder Structure : 
![FolderStructureComplete](https://user-images.githubusercontent.com/92459590/210154090-a2f2d192-e27c-4b22-903b-dfb52af8f866.png)

DON'T FORGET TO CHANGE THE LINK TO THE FILES


### install Bootstrap and Dependencies :
```
npm i --save bootstrap @popperjs/core
```

```
npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader
```

## Note
--save : packages that are also used for production

--save-dev : packages that are used in development

### WebpackConfig :

![WebpackConfig](https://user-images.githubusercontent.com/92459590/210154358-af50366e-5329-458f-96f2-1885907c14dc.png)

Bootstrap uses scss.The browser can't understand scss , so we use loaders to change scss to css , then we use another loader to apply the css to the styles

### Our new Sccript :

```
"scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack serve --config webpack.config.js"
 },
```
first use the ``` npm run build ``` so you can have the bundeled "main.js".Then use ``` npm run stat ``` to start the webServer on your Configed Port(localhost:8080)

### in the src/scss/styles.scss add :
```
// Import all of Bootstrap's CSS
@import "~bootstrap/scss/bootstrap";

```
this is the file that we import all the bootstrap content,we then link this styles.scss file to our index.js which is our WEBPACK entry point(Where webpack looks for the file to bundle)

### index.js :
```
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
```

### Now first build and then start the webServer, and watch the result
I have also added an override file , which you can override the Variables of Bootstrap,Note that it must be imported before the actual Bootstrap
