import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Meal Chooser</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap"
					rel="stylesheet"
				/>
				<link href="https://fonts.googleapis.com/css2?family=Margarine&display=swap" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
