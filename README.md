# Landing Page TailwindCSS Example

A simple landing page using the CSS framework Tailwind in a proper PostCSS environment.

Live demo: https://tailwindcss-landingpage-example.netlify.com/ 

## To get started:

1. Install the dependencies:

    ```bash
    # Using npm
    npm install
    ```
2. Start the development server:

    ```bash
    # Using npm
    npm run serve
    ```

    Now you should be able to see the project running at localhost:8080.

3. Open `public/index.html` in your editor and start experimenting!

## Building for production

For production purposes, the PostCSS uses the [Purgecss](https://www.purgecss.com/) and [cssnano](https://cssnano.co/) to optimize your CSS!

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.

## Pull Requests

Fell free to create pull requests with your improvements or corrections!
