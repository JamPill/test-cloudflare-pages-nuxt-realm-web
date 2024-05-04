/// <reference types="@cloudflare/workers-types/2023-07-01" />

declare module "h3" {
  interface H3EventContext {
    cf: CfProperties;
    cloudflare: {
      request: Request;
      env: Env;
      context: ExecutionContext;
    };
  }
}

export interface Env {
  MONGODB_APP_ID: string;
  MONGODB_DEFAULT_DB: string;
}
