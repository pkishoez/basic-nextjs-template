import { AppProps } from "next/app";
import "components/_reset";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
