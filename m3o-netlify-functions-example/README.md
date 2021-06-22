# M3o Netlify functions example

For your netlify functions to work you need two packages installed in your top level package.json:

```sh
npm install --save @netlify/zip-it-and-ship-it
npm install --save @m3o/m3o-node
```

Make sure you save your M3o API token (https://m3o.com/settings/keys) and save it as an environment variable on Netlify.