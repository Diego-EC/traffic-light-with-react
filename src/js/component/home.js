import React, { useState } from "react";
import { Light } from "./light.js";
import {
	FIRST_LIGHT_COLOR,
	SECOND_LIGHT_COLOR,
	THIRD_LIGHT_COLOR
} from "./../constants.js";

// core component
export function Home() {
	const [selectedLight, setSelectedLight] = useState("");

	const selectLight = lightColor => {
		setSelectedLight(lightColor);
	};

	let isSelected = false;
	const lightsColors = [
		FIRST_LIGHT_COLOR,
		SECOND_LIGHT_COLOR,
		THIRD_LIGHT_COLOR
	];

	let lightsColorsMap = lightsColors.map((lightColor, index) => {
		if (lightColor == selectedLight) {
			isSelected = true;
		} else {
			isSelected = false;
		}

		return (
			<Light
				key={index}
				lightColor={lightColor}
				selectLight={selectLight}
				selected={isSelected}
			/>
		);
	});

	return (
		<div className="centered-on-window">
			<div>{lightsColorsMap}</div>
		</div>
	);
}
