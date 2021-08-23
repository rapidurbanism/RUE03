import React from "react";
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { I18n } from "aws-amplify";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";

I18n.putVocabularies({
  en: {
    "Custom auth lambda trigger is not configured for the user pool.": "Password cannot be empty",
  },
});

const App = () => {
  // const version: string = "private";
  const version: string = "public";

  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<object | undefined>();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <>
    {/* <AmplifySignOut /> */}
    <HashRouter>
      <Routes />
    </HashRouter>
    </>
  ) : (
    <>
      {version === "private" && (
        <AmplifyAuthenticator>
          <AmplifySignIn slot="sign-in" usernameAlias="email" style={{ margin: "50px auto", width: "460px", display: "block" }} hideSignUp />
        </AmplifyAuthenticator>
      )}
      {version === "public" && (
        <HashRouter>
          <Routes />
        </HashRouter>
      )}
    </>
  );
};

export default App;

{
  /* <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: "email",
              label: "Email",
              required: true,
            },
            {
              type: "password",
              label: "Password",
              required: true,
            },
          ]}
          style={{ margin: "50px auto", width: "460px", display: "block" }}
        /> */
}
