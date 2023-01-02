# Chache Busting
The code here is the Combination of the Config and Bootstrap_Tailwind

So we're using webpack to bundle our modular application which yields a deployable /dist directory. Once the contents of /dist have been deployed to a server, clients (typically browsers) will hit that server to grab the site and its assets. The last step can be time consuming, which is why browsers use a technique called caching. This allows sites to load faster with less unnecessary network traffic. However, it can also cause headaches when you need new code to be picked up.


### Our new webpack.config :
![hash](https://user-images.githubusercontent.com/92459590/210217302-54d19fa0-f392-421f-a861-eaf0eae6a0e9.png)

what this does is : it makes and puts a random value(Hash) inside our file name , so that everytime it is build it will have a random value. So how do we link this always random file name to our pages.Here we use HtmlwebpackPlugin.

```
npm i -D html-webpack-plugin
```
After installing , we have to tell webpack to use this plugin , so :

### Ourwebpack.config : 

```
const htmlWebpackPlugin = require('html-webpack-plugin');
```
See the image above to Know how to use it.

### Making a Template File :
if you now look at your dist folder(``` npm run build ``` first), You will see that you have a new html file, that has the correct links But without Our content, Here we make a tamplate.html file and use it as a template for our plugin.

![Folder](https://user-images.githubusercontent.com/92459590/210217947-d4d6aae2-69ec-4efa-affb-14e45d2d51d4.png)

Now in here put all of your Content(What was in index.html before)

### Tell webpack to use the template :
in our config :
```
new htmlWebpackPlugin({
    template : "./src/template.html"
  })],
```
See the First Iamge

### install Html-loader :
```
npm i -D html-loader
```

### Make a new Rule :
```
test : /\.html$/,
use : ["html-loader"]
```

### Install CleanPlugin :
We install this plugin so that we dont make duplicate files in dist
```
npm install --save clean-webpack-plugin
```
### Inside our config(Pord) :
```
const CleanWebpackPlugin = require('clean-webpack-plugin')

plugins : [new CleanWebpackPlugin()]
```

