import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	FIRST_LIGHT_COLOR,
	SECOND_LIGHT_COLOR,
	THIRD_LIGHT_COLOR
} from "./../constants.js";

export function Light(props) {
	Light.propTypes = {
		color: PropTypes.string,
		selectLight: PropTypes.func,
		selected: PropTypes.bool
	};
	const bgColorClass = selectBgColorClass(props.color);
	let lightSelected = " ";

	const lightSelectedOn = color => {
		console.log("lightSelectedOn");
		//lightSelected = " light-selected ";
		props.selectLight(props.color);
	};

	const [cucu, setCucu] = useState(false);

	/*function lightSelectedOn(color) {
		switch (color) {
			case FIRST_LIGHT_COLOR:
				setColor();
				break;

			case SECOND_LIGHT_COLOR:
				break;
			case THIRD_LIGHT_COLOR:
				break;
		}
	}*/

	//const [color, setColor] = useState("  ");
	let color = "";
	if (props.selected == true) {
		color = " light-selected ";
	} else {
		color = " lol ";
	}

	function selectBgColorClass(colorToEvaluate) {
		let selectedBgColorClass;
		switch (colorToEvaluate) {
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
		}
		return selectedBgColorClass;
	}

	return (
		<div className="">
			<div
				className={
					bgColorClass + color + " rounded-circle light  my-4 "
				}
				onClick={lightSelectedOn}
			/>
		</div>
	);
}
