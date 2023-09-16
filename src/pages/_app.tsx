import { AppProps } from "next/app";
import "../styles/index.css";

function MyApp({ Component: MyComponent, pageProps }: AppProps) {
  return <MyComponent {...pageProps} />;
}

export default MyApp;
