import { AppContextProvider } from "../contexts/AppContext";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
