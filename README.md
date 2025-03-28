# ISCO Group Nuxt Fr

fr = for real
fr fr

## How To Run Dev

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`

## How To Deploy (Node.js)

1. Commit to remote (github)
2. Pull from remote in server
3. Deploy to folder in server
4. Make Nodejs App and configure everything
5. Run NPM Install via Nodejs App interface
6. Run NPM Build via Nodejs App interface (or `nuxt build` via terminal)
7. Put this into server.cjs `node .output/server/index.mjs`
8. Restart the Nodejs App

## How To Deploy (Static)

1. Run `nuxi generate`
2. Put generated files to hosting

## How to make Your Code Aesthetic✨ and Robust🚀

> How to use best practices on writing code (ESLint & Prettier)

1. run `npm run lintfix`
2. FIX EVERYTHING FIRST
3. run `npm run prettywrite`
4. .....???
5. Profit!!

## Other Resources

### .htaccess

    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>

### Runtime Config

You might want to set `siteUrl` in `.env` or in `nuxt.config.ts`

### GraphQL API

Visit `/graphql` (Apollo Server Playground) on Strapi Backend to playground your API. See Examples code in composables.

1. You basically just need to copy paste "Operation" from the playground (example: blog.vue)
2. Any filters applied, copy them inside the page (example: slub.vue)

### Strapi API Reference (REST API)

Please use `/graphql` on Strapi, then asked ChatGPT to change the GraphQL format to [this](https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder) format for REST API

#### Articles Population (REST API)

`/api/articles?sort[0]=title:asc&filters[slug][$eq]=beautiful-picture&populate[author][fields][0]=name&populate[category][fields][0]=name&populate[cover][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=updatedAt&fields[3]=description&fields[4]=documentId`

#### Dynamic Zone Populatiom (REST API)

Since dynamic zone is, dynamic. Some of the components (in our case called blocks) may not be displayed. However you might know more about [this](https://docs.strapi.io/dev-docs/api/rest/guides/understanding-populate#populate-dynamic-zones) populate docs.

Feel free to read.

`...&populate[blocks][populate]=*`

This is for populating 1 level deep on any dynamic zone, since using `?populate=*` will not deep for zone value to be usable. Need further investigation.
