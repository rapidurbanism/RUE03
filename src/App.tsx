import React from "react";
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { I18n } from "aws-amplify";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import Landing from "@components/Landing";

I18n.putVocabularies({
  en: {
    "Custom auth lambda trigger is not configured for the user pool.": "Password cannot be empty",
  },
});

const AuthComponent = () => {
  const version: string = "private";
  // const version: string = "public";

  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<object | undefined>();

  const AmplifyAuth = () => {
    return (
      <AmplifyAuthenticator >
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            {
              type:"username",
              label: "Username",
              required: true
            },
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
        />
        <AmplifySignIn slot="sign-in" style={{ margin: "50px auto", width: "460px", display: "block" }} />
      </AmplifyAuthenticator>
    )
  }

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <>
    <HashRouter>
      <Routes />
    </HashRouter>
    </>
  ) : (
    <>
      {version === "private" && (
        <AmplifyAuth />
      )}
      {version === "public" && (
        <HashRouter>
          <Routes />
        </HashRouter>
      )}
    </>
  );
}

const App = () => {
  const [ toAuth, setToAuth ] = React.useState<Boolean>(false);

  return toAuth ? (
    <AuthComponent />
  ): <Landing authTrigger={() => setToAuth(true)}/>
};

export default App;
