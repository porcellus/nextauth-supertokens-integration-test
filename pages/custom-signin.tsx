import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import "../config/supertokens/frontend";
import { SignInAndUp } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";

export default function STSignInUp() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (status === "authenticated") {
    router.push("/me");

    return null;
  }

  return (
    <Layout>
      <SignInAndUp redirectOnSessionExists={false} />
    </Layout>
  );
}
