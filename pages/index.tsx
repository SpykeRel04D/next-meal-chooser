import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/home.module.scss";

export default function Home() {
	return (
		<MainLayout>
			<div className={`flex flex-direction_col ${styles.introduction}`}>
				<p>You don't know what kind of meal eat today? No problem!</p>
				<p>Take some ideas and let the luck decide for you!</p>
			</div>
			<Link href="/meal">
				<a className="button">Start!</a>
			</Link>
		</MainLayout>
	);
}
