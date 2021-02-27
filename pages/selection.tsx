import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import MealBox from "../components/MealBox";
import { getMeals } from "../services/meals";

export default function Selection() {
	const [meals, setMeals] = useState(null);
	const [selection, setSelection] = useState([]);

	const toogleSelection = (index) => {
		let newArr = [...selection];
		newArr[index] = !newArr[index];
		setSelection(newArr);
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

	return (
		<MainLayout>
			{meals !== null && (
				<div className={`flex flex-flow_row`}>
					{meals.map((meal, i) => {
						return (
							<MealBox key={i} name={meal.name} image={meal.image} onClick={() => toogleSelection(i)} />
						);
					})}
				</div>
			)}
		</MainLayout>
	);
}
