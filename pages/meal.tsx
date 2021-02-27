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

	const toogleSelection = (index) => {
		let newArr = [...selection];
		newArr[index] = !newArr[index];
		setSelection(newArr);
	};

	const randomizeMeal = () => {
		setEventState("countdown");
		setCountDown(3);
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
			{eventState === "result" && (
				<>
					<div className={styles["result-card"]}>
						<h2>Meal Name</h2>
						<img src={`/meals/burger.png`} />
						<p>Officia ut reprehenderit eu Lorem est occaecat sunt ullamco magna aliquip cillum esse do.</p>
					</div>
				</>
			)}
		</MainLayout>
	);
}
