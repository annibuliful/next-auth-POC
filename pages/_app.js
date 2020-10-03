import { AuthProvider } from "../contexts/auth";

/**
 *
 * Override by wraping 'App' with AuthProvider which is from Context API
 *
 */
const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
