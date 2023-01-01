# Config
Now We want to make Different Files for each : production and development
NOTE : we are using the same Folder as the Bootstrap Branch Before Tailwindcss.

### Change the folder structure :
Change your current webpack.config.js to webpack.common.js.This is the file that contains the Common configes for both dev and prod. So we don't have to write them for each one. Then we import this in each of the dev or prod and we merge them together. We need another package :

```
npm install --save-dev webpack-merge
```

![Config](https://user-images.githubusercontent.com/92459590/210164322-d0c96202-16a3-46c7-985e-24aff0321d8c.png)

### Our webpack.common.js :
![Common](https://user-images.githubusercontent.com/92459590/210164247-523e55a3-9785-4596-a059-89e905394ea3.png)

### Our webpack.dev.js :
![dev](https://user-images.githubusercontent.com/92459590/210164245-59404f42-0741-41ce-9b57-e631e0efcf76.png)

### Our webpack.prod.js :
![prod](https://user-images.githubusercontent.com/92459590/210164243-6d40f930-5208-4ecd-bd2c-3c8de25feec7.png)

### Our Scripts in package.json :
```
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "start": "webpack serve --config webpack.dev.js --open"
  },
```

## Note :
``` --open ``` is used to open the webServer in our browser.

From here we can add configes for each development or production in seperate Files which gives us alot of flexibility

``` npm start ``` ----> development

``` npm run build ``` ---> production
