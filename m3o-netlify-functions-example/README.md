# M3O Netlify functions example

The M3O API key should be kept secret; you should avoid embedding the API key in your frontend code, otherwise it can be reused by others without your knowledge. Instead, the preferred method of using the M3O APIs is to make the calls from your backend and serve the results to your frontend; this way you will not expose your API keys to the world.  

Managed JAMstack platforms like [Netlify](https://www.netlify.com/products/functions/) and [Vercel](https://vercel.com/docs/serverless-functions/introduction) provide "functions" to help you build out backend functionality quickly and without the overhead of managing infrastructure.

This repo provides code you can copy and paste to get up and running quickly with a function that will make calls to M3O APIs. 

## Getting started

The code for the function that will call M3O lives in [netlify/functions/example.js](netlify/functions/example.js). Copy this to the directory that contains your functions.

The function takes the body of the request and uses that as the body of the call to M3O. The example is setup to call [helloworld/call](https://m3o.com/helloworld#Call) so tweak this as you need.

For your netlify functions to work you need two packages installed in your top level package.json:

```sh
npm install --save @netlify/zip-it-and-ship-it
npm install --save @m3o/m3o-node
```

Make sure you save your M3O API token (https://m3o.com/settings/keys) and save it as an environment variable (`M3O_API_KEY`) on Netlify.

