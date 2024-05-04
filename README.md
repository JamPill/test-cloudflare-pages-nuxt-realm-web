# Test Cloudflare Pages - Nuxt - Realm (realm-web)

App created following [this official guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site) by Cloudflare.

---

## Goal

Find a solution for using realm-web package within Cloudflare Pages or a technical explanation of qhy it cannot be used.

## Foreword

- Use the wrangler.toml file

---

## Implementation

- Add Realm with `npm add realm-web` command
- Add `MONGODB_APP_ID` and `MONGODB_DEFAULT_DB` vars in the /env.d.ts
- Add `MONGODB_APP_ID` and `MONGODB_DEFAULT_DB` vars in remote enviroment as encrypted enviroment vars
- Add the /server/api/test.ts file making a simple query

---

## Result

Cloudflare build results in Success, but visiting the [test page](https://test-cloudflare-pages-nuxt-realm-web.pages.dev/api/test) results in Error:

```plain-text
Error 500: Cannot read properties of undefined (reading 'exec').
```
