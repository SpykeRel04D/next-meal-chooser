import MainLayout from "../layouts/MainLayout";
import styles from "../styles/selection.module.scss";

export default function Selection() {
	return (
		<MainLayout>
			<div className={styles["meal-box"]}>
				<span className={styles["meal-box_name"]}>Mexican Food</span>
			</div>
		</MainLayout>
	);
}
