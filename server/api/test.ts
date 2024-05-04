import type { Env } from "~/env";

import * as Realm from "realm-web";

//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//

export default defineEventHandler(async (event) => {
  const env = process.env as unknown as Env;

  const app = new Realm.App({ id: env.MONGODB_APP_ID });

  const credentials = Realm.Credentials.anonymous();

  const user = await app.logIn(credentials);

  const res = await user
    .mongoClient("mongodb-atlas")
    .db(env.MONGODB_DEFAULT_DB)
    .collection("users")
    .find();

  return {
    res,
  };
});
