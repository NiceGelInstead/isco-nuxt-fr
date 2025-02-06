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
