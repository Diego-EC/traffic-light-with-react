import React, { useState } from "react";
import { Light } from "./light.js";
import {
	FIRST_LIGHT_COLOR,
	SECOND_LIGHT_COLOR,
	THIRD_LIGHT_COLOR
} from "./../constants.js";

// core component
export function Home() {
	const [colorSelected, setColor] = useState("");

	const selectLight = color => {
		console.log("selectLight");
		console.log(color);
		setColor(color);

		/*switch (color) {
			case FIRST_LIGHT_COLOR:
				selectedBgColorClass = "bg-danger";
				//lightSelected = " light-selected ";
				break;
			case SECOND_LIGHT_COLOR:
				selectedBgColorClass = "bg-warning";
				//lightSelected = " light-selected ";
				break;
			case THIRD_LIGHT_COLOR:
				selectedBgColorClass = "bg-success";
				//lightSelected = " light-selected ";
				break;
		}*/
	};
	let selected = false;
	const lights = [FIRST_LIGHT_COLOR, SECOND_LIGHT_COLOR, THIRD_LIGHT_COLOR];

	let lightsMap = lights.map((light, index) => {
		if (colorSelected == light) {
			selected = true;
		} else {
			selected = false;
		}

		return (
			<Light
				key={index}
				color={light}
				selectLight={selectLight}
				selected={selected}
			/>
		);
	});

	return (
		<div className="centered-on-window">
			<div>{lightsMap}</div>
		</div>
	);
}
