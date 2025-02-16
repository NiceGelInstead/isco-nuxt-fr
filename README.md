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
