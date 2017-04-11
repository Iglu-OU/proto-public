# proto-public

> Iglu prototyping framework

powered by [VueJS](https://vuejs.org/v2/guide/) and [Webpack](http://webpack.github.io/docs/)

## Requirements
[Node JS](https://nodejs.org/en/download/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification (/dist folder)
npm run build
```

## Guide
This application is meant for quick prototyping and "hacking" your ideas together.

This project uses [Vue single file components](https://vuejs.org/v2/guide/single-file-components.html) that supports scoped CSS, so you do not have to worry about polluting the global CSS.

Check out [the examples page](http://localhost:8080/examples) to see how to use available components

### new pages
You can create new pages that are automatically bootstrapped into the prototype by creating
a new .vue file into the **/pages** directory.

You can link to the pages using the `<router-link>`, where the name is the name of the page you created.
```
<router-link :to="{name: 'home'}">Innovatsioonikliinik: prototüüp</router-link>
```

### new components
To create new components add your new .vue file into the **/components** directory,
it is available to use anywhere in the prototype with the `<your-component-file-name></your-component-file-name>` tag.

### sub-pages  
It is possible to create subpages, that share for example common header & footer by creating
a root page, for example **mypage.vue**, and a folder named **mypage**, into which you can 
place your subpages, which must have a underscore as a prefix, for example **_mysubpage.vue**

Note that the **mypage.vue** must contain `<router-view></router-view>` component.

You can see a working example with examples.vue file and examples folder. 

### images, svg icons, static assets
There are aliases available when you need to reference images or other files inside your code

The aliases are
* `~src`
* `~assets`
* `~static`
* `~components`

example usage
```
<img src="~assets/viljandi-haigla-logo.png" alt="">

.chart--pie {
	background: #f3f8f9 url("~static/graph1.svg") no-repeat 50% 50%;
}

```

It is possible to use `<svg>` icons aswell, just add your svg icon to **/static/icons** directory
and it will be added to svg sprite. 
You might need to clean up your svg from hardcoded fill properties, if you want to specify the color of the icon with CSS.

you can now use your svg icons in your html like this
```
<svg class="iglu-logo"><use xlink:href="#logo"></use></svg>
```
note that you must specify width, height & fill CSS properties to your for your icon.
```
.iglu-logo {
	display: inline-block;
	fill: #fff;
	width: 1.5em;
	height: 1.5em;
}
```


For detailed explanation on how things work, check out 

* [VueJS](https://vuejs.org/v2/guide/),
* [VueJS webpack template](http://vuejs-templates.github.io/webpack/) and 
* [docs for vue-loader](https://vue-loader.vuejs.org/en/).
