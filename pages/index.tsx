import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.scss";

export default function Home() {
	return (
		<div className="main flex flex-direction_col flex-centering_justified">
			<h1>Meal Chooser!</h1>
			<div className={`flex flex-direction_col ${styles.introduction}`}>
				<p>You don't know what kind of meal eat today? No problem!</p>
				<p>Take some ideas and let the luck decide for you!</p>
			</div>
			<Link href="/selection">
				<a className="button">Start!</a>
			</Link>
		</div>
	);
}
