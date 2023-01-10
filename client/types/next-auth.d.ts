import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

/** Example on how to extend the built-in session types */
declare module "next-auth" {
    interface Session {
        /** This is an example. You can find me in types/next-auth.d.ts */
        foo: string
    }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
    interface JWT {
        /** This is an example. You can find me in types/next-auth.d.ts */
        bar: number
    }
}

// /** Example on how to extend the built-in types for JWT */
// declare module "next-auth/jwt" {
//     /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
//     interface JWT {
//         /** OpenID ID Token */
//         idToken?: string
//     }
// }


// /**
//  * The shape of the user object returned in the OAuth providers' `profile` callback,
//  * or the second parameter of the `session` callback, when using a database.
//  */
// interface User {}
// /**
//  * Usually contains information about the provider being used
//  * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
//  */
// interface Account {}
// /** The OAuth profile returned from your provider */
// interface Profile {}