import { XSpinnerBase } from './XSpinnerBase';

export function XSpinnerHourglass({ size = '1em', color }) {
	return (
		<XSpinnerBase
			size={size}
			color={color}
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<g>
				<path
					fill="none"
					stroke="currentColor"
					strokeWidth="5"
					strokeMiterlimit="10"
					d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"
				></path>
				<clipPath id="uil-hourglass-clip1">
					<rect x="15" y="20" width="70" height="25">
						<animate
							attributeName="height"
							from="25"
							to="0"
							dur="1s"
							repeatCount="indefinite"
							values="25;0;0"
							keyTimes="0;0.5;1"
						></animate>
						<animate
							attributeName="y"
							from="20"
							to="45"
							dur="1s"
							repeatCount="indefinite"
							values="20;45;45"
							keyTimes="0;0.5;1"
						></animate>
					</rect>
				</clipPath>
				<clipPath id="uil-hourglass-clip2">
					<rect x="15" y="55" width="70" height="25">
						<animate
							attributeName="height"
							from="0"
							to="25"
							dur="1s"
							repeatCount="indefinite"
							values="0;25;25"
							keyTimes="0;0.5;1"
						></animate>
						<animate
							attributeName="y"
							from="80"
							to="55"
							dur="1s"
							repeatCount="indefinite"
							values="80;55;55"
							keyTimes="0;0.5;1"
						></animate>
					</rect>
				</clipPath>
				<path
					d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z"
					clipPath="url(#uil-hourglass-clip1)"
					fill="currentColor"
				></path>
				<path
					d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z"
					clipPath="url(#uil-hourglass-clip2)"
					fill="currentColor"
				></path>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 50 50"
					to="180 50 50"
					repeatCount="indefinite"
					dur="1s"
					values="0 50 50;0 50 50;180 50 50"
					keyTimes="0;0.7;1"
				></animateTransform>
			</g>
		</XSpinnerBase>
	);
}
