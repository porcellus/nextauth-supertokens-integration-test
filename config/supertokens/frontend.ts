import SuperTokensReact from "supertokens-auth-react";
import SessionReact from "supertokens-auth-react/recipe/session";
import ThirdPartyReact from "supertokens-auth-react/recipe/thirdparty";
import { signIn } from "next-auth/react";
import { appInfo } from "./appInfo";

if (typeof window !== "undefined") {
  SuperTokensReact.init({
    appInfo,
    recipeList: [
      SessionReact.init(),
      ThirdPartyReact.init({
        style: `
          [data-supertokens~=container] {
            border: 0;
            box-shadow: none;
            background-color: transparent;
          }
          
          [data-supertokens~=superTokensBranding] {
            display: none;
          }
        `,
        signInAndUpFeature: {
          disableDefaultUI: true,
          providers: [new ThirdPartyReact.Google()],
        },
        override: {
          functions: (oI) => ({
            ...oI,
            signInAndUp: async (input) => {
              const result = await oI.signInAndUp(input);

              if (result.status === "OK") {
                await signIn("credentials");
              }

              return result;
            },
          }),
        },
      }),
    ],
  });
}
