import { AuthProvider } from "../contexts/auth";
import Link from "next/link";

/**
 *
 * Override by wraping 'App' with AuthProvider which is from Context API
 *
 */
const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <br />
      <Link href="/one">One Page</Link>
      <br />
      <br />
      <Link href="/two">Two Page</Link>
      <br />
      <br />
      <Link href="/protected">Goto protected</Link>
      <br />
      <br />

      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
