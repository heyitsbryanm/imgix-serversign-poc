# imgix signing example

This is an example package for signing URLs serverside which is then passed to a client.


# `/node`

The port for Node is configured to use `http://localhost:3001/`.

## Instructions

1. `cd` into the `/node` directory and run `npm i` to install dependancies
2. Rename `.env-sample` to `.env` the `.env` file and insert your token + domain
3. In terminal, run `nodemon -r dotenv/config server`
4. Server is running and it it's ready to receive requests

To receive a signed image, send a `POST` request to the endpoint `/sign_images` and attach the images you want to sign as a JSON array in the body.

Example request:

```
{
  "urls": [
    "https://assets.imgix.net/presskit/imgix-presskit.pdf?page=4&fm=png8&w=160&colorquant=100",
    "https://assets.imgix.net/unsplash/hotairballoon.jpg?w=500&h=500&fit=crop&crop=right",
    "https://assets.imgix.net/examples/blueberries.jpg?w=500&h=500&fit=crop&crop=right",
    "https://assets.imgix.net/examples/kingfisher.jpg?w=500&h=500&fit=crop&crop=right",
    "https://assets.imgix.net/examples/bluehat.jpg?w=500&h=500&fit=crop&crop=right"
  ],
  "srcset": false
}
```

This returns:

```
{
  urls: [ 'https://assets.imgix.net/presskit/imgix-presskit.pdf?page=4&fm=png8&w=160&colorquant=100&ixlib=js-2.2.1&s=e6f80a5b43a3297414f4ab44a8b2b69e',
'https://assets.imgix.net/unsplash/hotairballoon.jpg?w=500&h=500&fit=crop&crop=right&ixlib=js-2.2.1&s=86dcd37e58d6a85c1c7e3ccdae0d7609',
'https://assets.imgix.net/examples/blueberries.jpg?w=500&h=500&fit=crop&crop=right&ixlib=js-2.2.1&s=a953047505a8be50bce9a8339146cb2b',
'https://assets.imgix.net/examples/kingfisher.jpg?w=500&h=500&fit=crop&crop=right&ixlib=js-2.2.1&s=cb0811496e1444fc191a3062b6b8e35a',
'https://assets.imgix.net/examples/bluehat.jpg?w=500&h=500&fit=crop&crop=right&ixlib=js-2.2.1&s=5e9a580c055442d8ca9dfe4d9dffcaf9' ]
}
```

## Options

- **urls*** (`array`)
  An array of URLs to sign and/or generate `srcsets` for.

- **srcset** (`boolean`)  
  If set to `true`, it will return an array of signed images using `imgix-core-js`.