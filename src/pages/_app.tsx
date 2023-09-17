import { AppProps } from "next/app";
import axios from "axios";
import "../styles/index.css";

function MyApp({ Component: MyComponent, pageProps }: AppProps) {
  axios.defaults.baseURL = "https://api.spoonacular.com/";
  return <MyComponent {...pageProps} />;
}

export default MyApp;
