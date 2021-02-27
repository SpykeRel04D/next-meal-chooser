import Link from "next/link";
import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import MealBox from "../components/MealBox";
import { getMeals } from "../services/meals";
import styles from "../styles/meal.module.scss";

type EventState = "selection" | "countdown" | "result";

export default function Selection() {
	const [eventState, setEventState] = useState<EventState>("selection");
	const [meals, setMeals] = useState(null);
	const [selection, setSelection] = useState([]);
	const [countdown, setCountDown] = useState<number | null>(null);
	const [result, setResult] = useState<number | null>(null);

	const toogleSelection = (index) => {
		let newArr = [...selection];
		newArr[index] = !newArr[index];
		setSelection(newArr);
	};

	const randomizeMeal = () => {
		let selections = selection.reduce((total, x) => (x == true ? total + 1 : total), 0);
		if (selections < 2) alert("You have to choice at least two meals!");
		else {
			setEventState("countdown");
			setCountDown(3);
		}
	};

	useEffect(() => {
		if (meals == null) {
			const _meals = getMeals();
			setMeals(_meals);
			_meals.forEach(() => {
				setSelection((selection) => [...selection, false]);
			});
		}
	}, []);

	useEffect(() => {
		if (eventState === "countdown") {
			if (countdown > 0) {
				const timer = setTimeout(() => {
					setCountDown(countdown - 1);
				}, 1000);
			} else {
				let mealArray = [];
				selection.map((choice, index) => {
					if (choice) mealArray.push(index);
				});
				setResult(mealArray[Math.floor(Math.random() * mealArray.length)]);
				setEventState("result");
			}
		}
	});

	return (
		<MainLayout>
			{meals !== null && eventState === "selection" && (
				<>
					<div className={`flex flex-flow_row`}>
						{meals.map((meal, i) => {
							return (
								<MealBox
									key={i}
									name={meal.name}
									image={meal.image}
									selected={selection[i]}
									onClick={() => toogleSelection(i)}
								/>
							);
						})}
					</div>
					<a className="button" onClick={() => randomizeMeal()}>
						Let's Go!
					</a>
				</>
			)}
			{countdown !== null && eventState === "countdown" && (
				<>
					<span className={styles.countdown}>{countdown}</span>
				</>
			)}
			{eventState === "result" && result !== null && (
				<>
					<div className={`${styles["result-card"]} flex flex-direction_col flex-centering_items`}>
						<h2 className={styles["result-card_name"]}>{meals[result].name}</h2>
						<img className={styles["result-card_image"]} src={`/meals/${meals[result].image}.png`} />
						<p className={styles["result-card_introduction"]}>{meals[result].winner}</p>
					</div>
					<Link href="/">
						<a className="button">Restart</a>
					</Link>
				</>
			)}
		</MainLayout>
	);
}
