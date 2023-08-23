## Overview

NextAuth.js is a complete open-source authentication solution.

This is an example application that shows how `next-auth`can be integrated with SuperTokens in a basic Next.js app.

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/porcellus/nextauth-supertokens-integration-test.git
cd next-auth-example
git checkout supertokens-integration
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [next-auth.js.org/adapters/overview](https://next-auth.js.org/adapters/overview)

### 3. Configure Authentication Providers

1. Review and update options in `pages/api/auth/[...nextauth].js` as needed.
2. Review and update options in `config/backend.ts` as needed.
3. Review and update options in `config/frontend.ts` as needed.
4. Check https://supertokens.com/docs/thirdparty/pre-built-ui/setup/backend#3-initialise-social-login-providers for more information on adding new providers
5. You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
```

### 5. Preparing for Production

Follow the [Deployment documentation](https://authjs.dev/guides/basics/deployment) or deploy the example instantly using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-auth-example)

## Acknowledgements

<a href="https://vercel.com?utm_source=nextauthjs&utm_campaign=oss">
<img width="170px" src="https://raw.githubusercontent.com/nextauthjs/next-auth/main/docs/static/img/powered-by-vercel.svg" alt="Powered By Vercel" />
</a>
<p align="left">Thanks to Vercel sponsoring this project by allowing it to be deployed for free for the entire Auth.js Team</p>