import SuperTokensNode from "supertokens-node";
import ThirdPartyNode from "supertokens-node/recipe/thirdparty";
import SessionNode from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";

SuperTokensNode.init({
  supertokens: {
    // this is the location of the SuperTokens core.
    connectionURI: "https://try.supertokens.com",
  },
  appInfo,
  isInServerlessEnv: true,
  recipeList: [
    SessionNode.init({
      getTokenTransferMethod: () => "header",
    }),
    ThirdPartyNode.init({
      signInAndUpFeature: {
        providers: [
          {
            config: {
              thirdPartyId: "google",
              clients: [
                {
                  clientId:
                    "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                  clientSecret: "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",
                },
              ],
            },
          },
        ],
      },
    }),
  ],
});
