# ISCO Group Nuxt Fr

fr = for real
fr fr

## How To Run Dev

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`

## How To Deploy

1. Run `nuxi generate`
2. Put generated files to hosting

## How to make Your Code Aesthetic✨ and Robust🚀

> How to use best practices on writing code (ESLint & Prettier)

1. run `npm run lint`
2. FIX EVERYTHING FIRST
3. run `npm run lintfix`
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

### Strapi API Reference

Please use `/graphql` on Strapi, then asked ChatGPT to change the GraphQL format to [this](https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder) format for REST API

#### Articles Population

`/api/articles?sort[0]=title:asc&filters[slug][$eq]=beautiful-picture&populate[author][fields][0]=name&populate[category][fields][0]=name&populate[cover][fields][0]=url&fields[0]=title&fields[1]=slug&fields[2]=updatedAt&fields[3]=description&fields[4]=documentId`

#### Dynamic Zone Populatiom

Since dynamic zone is, dynamic. Some of the components (in our case called blocks) may not be displayed. However you might know more about [this](https://docs.strapi.io/dev-docs/api/rest/guides/understanding-populate#populate-dynamic-zones) populate docs.

Feel free to read.

`...&populate[blocks][populate]=*`

This is for populating 1 level deep on any dynamic zone, since using `?populate=*` will not deep for zone value to be usable. Need further investigation.