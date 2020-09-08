import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	FIRST_LIGHT_COLOR,
	SECOND_LIGHT_COLOR,
	THIRD_LIGHT_COLOR
} from "./../constants.js";

export function Light(props) {
	Light.propTypes = {
		lightColor: PropTypes.string,
		selectLight: PropTypes.func,
		selected: PropTypes.bool
	};
	const bgColorClass = selectBgColorClass(props.lightColor);

	const selectLight = lightColor => {
		props.selectLight(props.lightColor);
	};

	let selectedLightClass = "";
	if (props.selected == true) {
		selectedLightClass = " light-selected ";
	}

	function selectBgColorClass(colorToEvaluate) {
		let selectedBgColorClass;
		switch (colorToEvaluate) {
			case FIRST_LIGHT_COLOR:
				selectedBgColorClass = "bg-danger";
				break;
			case SECOND_LIGHT_COLOR:
				selectedBgColorClass = "bg-warning";
				break;
			case THIRD_LIGHT_COLOR:
				selectedBgColorClass = "bg-success";
				break;
		}
		return selectedBgColorClass;
	}

	return (
		<div className="">
			<div
				className={
					bgColorClass +
					selectedLightClass +
					" rounded-circle light  my-4 "
				}
				onClick={selectLight}
			/>
		</div>
	);
}
