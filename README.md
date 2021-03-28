
# TEM QUE BOTAR UM PADDING (E COLOCAR O SHADOW (NOCTURE) COMO VERMELHO FICA BONITO *-*)

# config-nuxt
This repository is create for make a config of nuxt



# Config Base of Nuxt

- Javascript
- Package.json
- Vuetify
- Axios
- ESlint
- Git
- Npm
- SSR

# Config nuxt.config.js

 You need config your build, because the ESlint is accuse several errors why not To harm your code:

```

 build: {
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({

                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    },
                })
            }
        }
    }

```

This code is make a error say Depedency of eslint-loader not found.
For correct this error just make this in your terminal:

```
npm i --save-dev eslint-loader
```


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
