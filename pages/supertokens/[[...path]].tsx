import { signIn } from "next-auth/react";
import Layout from "../../components/layout";
import "../../config/supertokens/frontend";
import { getRoutingComponent, canHandleRoute } from "supertokens-auth-react/ui";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";
import dynamic from "next/dynamic";
import { ComponentType, useEffect } from "react";

const SuperTokensComponentNoSSR = dynamic(
  new Promise<ComponentType>((res) =>
    res(() => getRoutingComponent([ThirdPartyPreBuiltUI])),
  ),
  { ssr: false },
);

export default function STCallback() {
  useEffect(() => {
    if (!canHandleRoute([ThirdPartyPreBuiltUI])) {
      signIn(); // This redirects to the sign in page where nextauth.js can take over
    }
  }, []);

  return (
    <Layout>
      <SuperTokensComponentNoSSR />
    </Layout>
  );
}
