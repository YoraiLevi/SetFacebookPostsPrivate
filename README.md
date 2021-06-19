# A collection of automation scripts for the web using tampermonkey / greasemonkey

1) ## Bulk Set Facebook Posts' Privacy ([README](./SetFacebookPostsPrivate/README.md) - [INSTALL](./SetFacebookPostsPrivate/GreaseMonkeySetFacebookPrivate.user.js))

2) ## Hello Monkey (World) ([README](./HelloMonkey/README.md) - [INSTALL](./dist/HelloMonkey/HelloMonkey.user.js))

## Development of Scripts

### [GM commands](https://wiki.greasespot.net/Category:API_Reference)

GM functionality requires permissions from the extension provider. specify these in [`options.ts`](HelloMonkey/options.ts) / the header file

Include ⬇ on top of the typescript file to use GM functionality

```xml
/// <reference types="greasemonkey"/>
```

### Flags

| Flag         | Values                  | Usage                                                                                                                                                                           |
| ------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV     | development, production | specify webpacks output                                                                                                                                                         |
| MONKEY_PROXY | 1                       | integrate scripts as proxy for [ease of development](https://www.npmjs.com/package/webpack-userscript#:~:text=integration%20with%20webpack%20dev%20server%20and%20tampermonkey) |

### Building

```bash
git clone $repolink
npm install
npm run build
```
