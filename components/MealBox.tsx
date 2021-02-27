import styles from "../styles/mealbox.module.scss";

export default function MealBox({ name, image, selected, ...rootDOMAttributes }) {
	return (
		<div
			className={`${styles["meal-box"]} flex flex-centering_items ${selected ? styles.selected : ""}`}
			{...rootDOMAttributes}
		>
			<img className={styles["meal-box_image"]} src={`/meals/${image}.png`} />
			<span className={styles["meal-box_name"]}>{name}</span>
		</div>
	);
}
