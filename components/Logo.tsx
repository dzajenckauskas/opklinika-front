import React from 'react'

type Props = {
	width?: string;
	height?: string;
	primaryColor: string;
	icon?: boolean
	title?: boolean
	line?: boolean
	subtitle?: boolean
}
const Logo = ({ primaryColor, width, height, icon, title, line, subtitle }: Props) => {
	const fillColor = primaryColor
	return (
		<>
			{/* <svg version="1.1" viewBox="0 0 1920 288" width={width ?? ''} height={height ?? ''}>
			<g>
				{icon && <path fill={fillColor} d="M319.2,9.2c-1-1.2-3-1.4-4.4-0.7c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0.1l0,0l0,0c-0.1,0.1-0.3,0.2-0.4,0.2
c0,0,0,0,0,0c0,0,0,0,0,0c-7.3,5.3-110.1,80-124.9,90.8c-2.1-1.2-5.8-3.2-10.8-5.9c15.1-4.2,25.5-15.4,24.7-27.6
c-1-15-18.1-26.2-38.1-25c-9.5,0.6-18.4,3.8-24.9,9.2c-6.5,5.3-9.9,12.1-9.8,19.2C96,53.3,49.8,33.9,11.9,26.5
c-1.6-0.3-3.2,0.5-3.8,2c-0.6,1.5,0,3.1,1.4,3.9c0.3,0.2,32,19.3,82,81.7c45.9,57.3,66.2,102.3,75.3,130
c7.9,24.3,11.8,33.5,12,33.9c0.5,1.2,1.8,2,3.1,2c0.1,0,0.3,0,0.4,0c1.5-0.2,2.7-1.3,2.9-2.8c0.1-0.4,5.7-41.1,9.3-53.6
c15.4-52.8,37.7-102,61.2-134.8c21.4-29.9,53.9-68.1,62.3-74.6c0.1-0.1,0.2-0.1,0.3-0.2l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0
c0.1-0.1,0.1-0.1,0.2-0.2c0,0,0.1-0.1,0.1-0.1l0,0C319.7,12.6,320.2,10.5,319.2,9.2z"/>}
				{text && <>
					<polygon fill={fillColor} points="383.2,183.5 372.3,183.5 343.5,210.6 343.5,183.5 335.9,183.5 335.9,238.9 343.5,238.9 343.5,219.6 
		352.9,211.1 373.5,238.9 383.7,238.9 358.6,205.9 	"/>
					<polygon fill={fillColor} points="501.6,183.5 493.8,183.5 493.8,238.9 530.5,238.9 530.5,232.3 501.6,232.3 	" />
					<rect x="644.5" y="183.5" fill={fillColor} width="7.9" height="55.4" />
					<polygon fill={fillColor} points="807.3,228.3 778.6,183.5 769.4,183.5 769.4,238.9 776.9,238.9 776.9,194.2 806,238.9 814.8,238.9 
		814.8,183.5 807.3,183.5 	"/>
					<rect x="933.5" y="183.5" fill={fillColor} width="7.9" height="55.4" />
					<polygon fill={fillColor} points="1105.7,183.5 1094.8,183.5 1066,210.6 1066,183.5 1058.4,183.5 1058.4,238.9 1066,238.9 1066,219.6 
		1075.4,211.1 1096,238.9 1106.2,238.9 1081.1,205.9 	"/>
					<path fill={fillColor} d="M1233,183.5l-21.7,55.4h8l6.2-16.6h22.8l5.8,16.6h8.5l-20.9-55.4H1233z M1227.8,216.2l9.3-24.5l8.7,24.5
		H1227.8z"/>
					<path fill={fillColor} d="M378.7,59.6c-14.1,0-25.1,4-33,11.9c-7.9,7.9-11.9,19-11.9,33.1c0,10.2,2,18.6,6,25.4
		c4,6.8,9.2,11.7,15.6,14.8c6.4,3.1,14.5,4.7,24.3,4.7c9.6,0,17.7-1.8,24.2-5.4c6.5-3.6,11.4-8.7,14.8-15.2c3.4-6.5,5.1-14.8,5.1-25
		c0-14-3.9-24.9-11.7-32.6C404.3,63.5,393.1,59.6,378.7,59.6z M392.3,123.7c-3.2,3.8-7.6,5.6-13.4,5.6c-5.6,0-10-1.9-13.3-5.8
		c-3.3-3.8-4.9-10.1-4.9-18.9c0-8.9,1.6-15.2,4.9-19c3.3-3.8,7.6-5.8,13-5.8c5.7,0,10.1,1.9,13.4,5.7c3.3,3.8,5,9.8,5,17.9
		C397,113.2,395.4,120,392.3,123.7z"/>
					<path fill={fillColor} d="M503.1,122.8c-0.6-1.3-1.9-3.1-3.8-5.4c-1.9-2.3-3.3-3.9-4.3-4.6c-1.5-1.1-3.8-2.1-7-3.2
		c4-0.9,7.1-2.1,9.4-3.4c3.6-2.2,6.4-5,8.5-8.5c2.1-3.5,3.1-7.7,3.1-12.5c0-5.5-1.3-10.2-4-14.1c-2.7-3.9-6.2-6.5-10.6-7.9
		c-4.4-1.4-10.7-2.1-19-2.1h-44.8V148h27v-35.3h2.4c2.5,0,4.6,0.7,6.6,2c1.4,1,3,3.3,4.9,6.7l14.4,26.6h30.3L503.1,122.8z
		 M480.4,92.4c-1.1,1.5-2.6,2.4-4.4,2.7c-3.5,0.8-5.9,1.2-7.1,1.2h-11.3V78.6h11.8c4.9,0,8.2,0.8,10,2.3c1.8,1.5,2.7,3.7,2.7,6.5
		C482.1,89.2,481.6,90.9,480.4,92.4z"/>
					<polygon fill={fillColor} points="591.2,61.1 509.6,61.1 509.6,82.5 537,82.5 537,148 563.8,148 563.8,82.5 591.2,82.5 	" />
					<path fill={fillColor} d="M632.7,59.6c-14.1,0-25.1,4-33,11.9c-7.9,7.9-11.9,19-11.9,33.1c0,10.2,2,18.6,6,25.4
		c4,6.8,9.2,11.7,15.6,14.8c6.4,3.1,14.5,4.7,24.3,4.7c9.6,0,17.7-1.8,24.2-5.4c6.5-3.6,11.4-8.7,14.8-15.2s5.1-14.8,5.1-25
		c0-14-3.9-24.9-11.7-32.6C658.3,63.5,647.2,59.6,632.7,59.6z M646.3,123.7c-3.2,3.8-7.6,5.6-13.4,5.6c-5.6,0-10-1.9-13.3-5.8
		c-3.3-3.8-4.9-10.1-4.9-18.9c0-8.9,1.6-15.2,4.9-19c3.3-3.8,7.6-5.8,13-5.8c5.7,0,10.1,1.9,13.4,5.7c3.3,3.8,5,9.8,5,17.9
		C651,113.2,649.4,120,646.3,123.7z"/>
					<path fill={fillColor} d="M728.8,61.1h-44.6V148h27v-32.3h14.7c10.8,0,18.9-2.5,24.2-7.4c5.3-4.9,7.9-11.8,7.9-20.6
		c0-8.5-2.4-15.1-7.3-19.7C745.8,63.4,738.6,61.1,728.8,61.1z M728.7,95.4c-2.1,1.8-5.7,2.7-10.9,2.7h-6.6V78.7h7.6
		c5,0,8.4,0.9,10.3,2.8c1.8,1.9,2.7,4.2,2.7,6.9C731.8,91.3,730.8,93.6,728.7,95.4z"/>
					<polygon fill={fillColor} points="790.8,111.2 832.6,111.2 832.6,93.4 790.8,93.4 790.8,79.6 835.9,79.6 835.9,61.1 763.9,61.1 
		763.9,148 837.2,148 837.2,128.3 790.8,128.3 	"/>
					<path fill={fillColor} d="M915,73.5c-3.2-4-7.2-7.1-12-9.2c-4.8-2.1-11.2-3.2-19.1-3.2H844V148h39.9c4.8,0,10.1-0.8,16-2.4
		c4.3-1.1,8.3-3.4,12.1-6.9c3.8-3.5,6.7-7.7,8.8-12.9c2.1-5.1,3.2-12.3,3.2-21.6c0-5.9-0.7-11.5-2.1-16.8S918.1,77.5,915,73.5z
		 M895,119.9c-1.3,3.1-3.2,5.3-5.6,6.5c-2.4,1.2-6.4,1.9-12,1.9h-6.6V80.8h6.7c7,0,11.9,1.7,14.9,5.1c3,3.4,4.5,9.7,4.5,18.9
		C897,111.7,896.3,116.8,895,119.9z"/>
					<rect x="931.2" y="61.1" fill={fillColor} width="26.9" height="86.9" />
					<path fill={fillColor} d="M1005.5,114.6c0,5.3-0.7,9.1-2.1,11.3c-1.4,2.2-3.6,3.3-6.6,3.3c-1.9,0-3.4-0.4-4.4-1.1
		c-1.5-1.1-2.6-2.6-3.2-4.5c-0.6-1.9-1-4.7-1-8.5l-25.7,3.5c0.5,6.7,2,12.4,4.7,16.9c2.6,4.6,6.4,8,11.2,10.4
		c4.8,2.4,11.6,3.6,20.4,3.6c8.3,0,15.1-1.8,20.4-5.4c5.3-3.6,8.9-8,10.6-13.2c1.8-5.2,2.6-12.7,2.6-22.6V61.1h-26.9V114.6z"/>
					<path fill={fillColor} d="M1083.8,59.6c-14.1,0-25.1,4-33,11.9c-7.9,7.9-11.9,19-11.9,33.1c0,10.2,2,18.6,6,25.4
		c4,6.8,9.2,11.7,15.6,14.8c6.4,3.1,14.5,4.7,24.3,4.7c9.6,0,17.7-1.8,24.2-5.4c6.5-3.6,11.4-8.7,14.8-15.2c3.4-6.5,5.1-14.8,5.1-25
		c0-14-3.9-24.9-11.7-32.6C1109.4,63.5,1098.3,59.6,1083.8,59.6z M1097.4,123.7c-3.2,3.8-7.6,5.6-13.4,5.6c-5.6,0-10-1.9-13.3-5.8
		c-3.3-3.8-4.9-10.1-4.9-18.9c0-8.9,1.6-15.2,4.9-19c3.3-3.8,7.6-5.8,13-5.8c5.7,0,10.1,1.9,13.4,5.7c3.3,3.8,5,9.8,5,17.9
		C1102.1,113.2,1100.5,120,1097.4,123.7z"/>
					<path fill={fillColor} d="M1195,97.2c-5.1-2.6-13.5-5.1-25.2-7.7c-4.7-1-7.7-2.1-9-3.2c-1.3-1.1-2-2.4-2-3.7c0-1.9,0.8-3.5,2.4-4.8
		c1.6-1.3,3.9-2,7.1-2c3.8,0,6.8,0.9,8.9,2.7c2.2,1.8,3.6,4.6,4.2,8.5l25.3-1.5c-1.1-9-4.6-15.6-10.4-19.7
		c-5.8-4.1-14.3-6.2-25.4-6.2c-9.1,0-16.2,1.1-21.4,3.4c-5.2,2.3-9.1,5.4-11.7,9.4c-2.6,4-3.9,8.2-3.9,12.7c0,6.8,2.5,12.4,7.6,16.8
		c5,4.4,13.4,7.9,25.2,10.6c7.2,1.6,11.8,3.3,13.8,5c2,1.8,3,3.8,3,6c0,2.4-1,4.5-3.1,6.3s-5,2.7-8.9,2.7c-5.1,0-9.1-1.8-11.9-5.3
		c-1.7-2.2-2.8-5.3-3.4-9.5l-25.6,1.6c0.8,8.8,4,16,9.7,21.7c5.7,5.7,15.9,8.5,30.7,8.5c8.4,0,15.4-1.2,20.9-3.6
		c5.5-2.4,9.8-6,12.9-10.7c3.1-4.7,4.6-9.8,4.6-15.4c0-4.7-1.2-9-3.5-12.9C1203.8,103,1200.1,99.8,1195,97.2z"/>
					<path fill={fillColor} d="M1334.7,88.9c0-8.5-2.4-15.1-7.3-19.7c-4.8-4.6-12.1-6.9-21.8-6.9h-44.6v86.9h27v-32.3h14.7
		c10.8,0,18.9-2.5,24.2-7.4C1332,104.5,1334.7,97.6,1334.7,88.9z M1305.4,96.5c-2.1,1.8-5.7,2.7-10.9,2.7h-6.6V79.9h7.6
		c5,0,8.4,0.9,10.3,2.8c1.8,1.9,2.7,4.2,2.7,6.9C1308.5,92.4,1307.5,94.7,1305.4,96.5z"/>
					<path fill={fillColor} d="M1354.3,62.2l-32.7,86.9h27.4l4.2-14.3h30.5l4.4,14.3h28.1l-32.7-86.9H1354.3z M1359.2,116l9.5-31.2l9.6,31.2
		H1359.2z"/>
					<path fill={fillColor} d="M1476.4,98.3c-5.1-2.6-13.5-5.1-25.2-7.7c-4.7-1-7.7-2.1-9-3.2c-1.3-1.1-2-2.4-2-3.7c0-1.9,0.8-3.5,2.4-4.8
		c1.6-1.3,3.9-2,7.1-2c3.8,0,6.8,0.9,8.9,2.7c2.2,1.8,3.6,4.6,4.2,8.5l25.3-1.5c-1.1-9-4.6-15.6-10.4-19.7
		c-5.8-4.1-14.3-6.2-25.4-6.2c-9.1,0-16.2,1.1-21.4,3.4c-5.2,2.3-9.1,5.4-11.7,9.4c-2.6,4-3.9,8.2-3.9,12.7c0,6.8,2.5,12.4,7.6,16.8
		c5,4.4,13.4,7.9,25.2,10.6c7.2,1.6,11.8,3.3,13.8,5c2,1.8,3,3.8,3,6c0,2.4-1,4.5-3.1,6.3c-2.1,1.8-5,2.7-8.9,2.7
		c-5.1,0-9.1-1.8-11.9-5.3c-1.7-2.2-2.8-5.3-3.4-9.5l-25.6,1.6c0.8,8.8,4,16,9.7,21.7c5.7,5.7,15.9,8.5,30.7,8.5
		c8.4,0,15.4-1.2,20.9-3.6c5.5-2.4,9.8-6,12.9-10.7c3.1-4.7,4.6-9.8,4.6-15.4c0-4.7-1.2-9-3.5-12.9
		C1485.2,104.1,1481.5,100.9,1476.4,98.3z"/>
					<path fill={fillColor} d="M1593.4,62.2l-28.2,74.9v-9.4h-41.9V62.2h-26.9v86.9h64.3h4.5h22.9l4.2-14.3h30.5l4.4,14.3h28.1l-32.7-86.9
		H1593.4z M1598.2,116l9.5-31.2l9.6,31.2H1598.2z"/>
					<path fill={fillColor} d="M1783,117.6h18v8.2c-3.5,2.1-6.6,3.6-9.4,4.4c-2.7,0.9-5.6,1.3-8.6,1.3c-6.3,0-11.3-2-14.8-6
		c-3.5-4-5.3-10.8-5.3-20.2c0-8.9,1.7-15.3,5.2-19.4c3.5-4.1,8.2-6.1,14.1-6.1c4,0,7.2,0.9,9.8,2.6c2.5,1.7,4.4,4.2,5.4,7.5
		l25.9-4.6c-1.6-5.6-3.9-10.2-7.1-13.9c-3.1-3.7-7.1-6.4-11.9-8.1c-4.8-1.7-11.9-2.6-21.6-2.6c-10,0-17.9,1.4-23.8,4.2
		c-7.5,3.6-13.3,9-17.2,16c-3.9,7-5.9,15.3-5.9,24.8c0,9,1.8,17,5.4,24c3.6,7,8.6,12.2,15.1,15.7c6.5,3.5,14.9,5.3,25.2,5.3
		c8.4,0,15.6-1,21.7-2.9c6.1-2,13.1-5.6,21.1-11.1V99.5H1783V117.6z"/>
					<path fill={fillColor} d="M1884.1,62.2v53.1c0,4.7-1.2,8.4-3.7,11.1c-2.5,2.7-6.1,4.1-11,4.1c-4.9,0-8.5-1.4-11.1-4.1
		c-2.5-2.7-3.8-6.4-3.8-11.1V62.2h-26.8V114c0,10.1,2.9,18.5,8.6,25.2c5.7,6.7,14.3,10.3,25.8,10.9c-1.4,4.6-2.1,8.5-2.1,11.6
		c0,4.2,1.3,7.6,4,10.1c2.7,2.5,6.4,3.7,11,3.7c3.9,0,8-0.9,12.5-2.7v-9.2c-3.2,1-5.7,1.5-7.5,1.5c-5.5,0-8.2-3-8.2-9.1
		c0-1.5,0.2-3.4,0.5-5.6c13-0.1,22.7-3.5,29.1-10.3s9.5-15.5,9.5-26.3V62.2H1884.1z"/>
					<path fill={fillColor} d="M1705.9,115.3c0,4.7-1.2,8.4-3.7,11.1c-2.5,2.7-6.1,4.1-11,4.1c-4.9,0-8.5-1.4-11.1-4.1
		c-2.5-2.7-3.8-6.4-3.8-11.1V62.2h-26.8V114c0,10.1,2.9,18.5,8.6,25.2c5.7,6.7,14.3,10.3,25.8,10.9c6.2,0.5,6.2,0.5,10.2,0.4
		c13-0.4,22.7-3.5,29.1-10.3s9.5-15.5,9.5-26.3V62.2h-26.8V115.3z"/>
				</>}
			</g>
		</svg> */}
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
				viewBox="0 0 938 191" fill={fillColor}>

				{subtitle &&
					//subtitle
					<g>
						<path d="M288.3,121.1h13.5c2.7,0,4.8,0.8,6.5,2.3s2.5,3.6,2.5,6.4c0,2.4-0.7,4.4-2.2,6.1c-1.5,1.7-3.7,2.6-6.7,2.6
		h-9.4v12.7h-4.1V121.1z M304.1,125.2c-0.9-0.4-2.1-0.6-3.7-0.6h-8.1v10.4h8.1c1.8,0,3.3-0.4,4.4-1.2s1.7-2.2,1.7-4.1
		C306.5,127.5,305.7,126,304.1,125.2z"/>
						<path d="M338.5,121.1h4.6l10.9,30.1h-4.5l-3.1-9h-11.9l-3.3,9h-4.2L338.5,121.1z M345.2,138.9l-4.6-13.3l-4.9,13.3
		H345.2z"/>
						<path d="M377.3,141.5c0.1,1.7,0.5,3.1,1.2,4.2c1.3,2,3.6,3,6.9,3c1.5,0,2.8-0.2,4-0.7c2.3-0.8,3.5-2.4,3.5-4.6
		c0-1.6-0.5-2.8-1.5-3.5c-1-0.7-2.6-1.3-4.7-1.8l-4-0.9c-2.6-0.6-4.4-1.3-5.5-2c-1.9-1.3-2.8-3.1-2.8-5.6c0-2.7,0.9-4.9,2.7-6.7
		c1.8-1.7,4.4-2.6,7.7-2.6c3.1,0,5.7,0.8,7.8,2.3c2.1,1.5,3.2,4,3.2,7.3h-3.8c-0.2-1.6-0.6-2.9-1.3-3.7c-1.2-1.6-3.2-2.4-6.1-2.4
		c-2.3,0-4,0.5-5,1.5s-1.5,2.2-1.5,3.5c0,1.5,0.6,2.6,1.8,3.2c0.8,0.4,2.5,1,5.3,1.6l4.1,1c2,0.5,3.5,1.1,4.6,1.9
		c1.9,1.4,2.8,3.5,2.8,6.1c0,3.3-1.2,5.7-3.5,7.2c-2.4,1.4-5.1,2.2-8.2,2.2c-3.7,0-6.5-1-8.6-2.9c-2.1-1.9-3.1-4.5-3-7.7H377.3z"/>
						<path d="M419.6,121.1h4.1v26.5h15.1v3.6h-19.2V121.1z" />
						<path d="M468.6,121.1h4.6l10.9,30.1h-4.5l-3.1-9h-11.9l-3.3,9h-4.2L468.6,121.1z M475.4,138.9l-4.6-13.3l-4.9,13.3
		H475.4z"/>
						<path d="M509.2,121.1v18.6c0,2.2,0.4,4,1.2,5.5c1.2,2.2,3.3,3.3,6.2,3.3c3.5,0,5.9-1.2,7.1-3.5c0.7-1.3,1-3,1-5.2
		v-18.6h4.1V138c0,3.7-0.5,6.6-1.5,8.6c-1.8,3.6-5.3,5.5-10.4,5.5s-8.6-1.8-10.4-5.5c-1-2-1.5-4.8-1.5-8.6v-16.9H509.2z"/>
						<path d="M572.1,122c3,1.6,4.8,4.3,5.4,8.3h-4c-0.5-2.2-1.5-3.8-3-4.8c-1.5-1-3.4-1.5-5.7-1.5c-2.7,0-5,1-6.9,3.1
		c-1.9,2.1-2.8,5.2-2.8,9.4c0,3.6,0.8,6.5,2.3,8.7c1.5,2.2,4.1,3.4,7.5,3.4c2.7,0,4.9-0.8,6.6-2.4c1.7-1.6,2.6-4.1,2.7-7.7h-9.4
		v-3.4H578v16.1h-2.6l-1-3.9c-1.4,1.5-2.6,2.6-3.6,3.2c-1.8,1-4,1.5-6.7,1.5c-3.5,0-6.5-1.2-9.1-3.5c-2.8-2.9-4.1-6.9-4.1-11.9
		c0-5,1.3-9.1,4-12c2.6-2.8,5.9-4.3,9.9-4.3C567.7,120.3,570.1,120.9,572.1,122z"/>
						<path d="M606.1,121.1v18.6c0,2.2,0.4,4,1.2,5.5c1.2,2.2,3.3,3.3,6.2,3.3c3.5,0,5.9-1.2,7.1-3.5c0.7-1.3,1-3,1-5.2
		v-18.6h4.1V138c0,3.7-0.5,6.6-1.5,8.6c-1.8,3.6-5.3,5.5-10.4,5.5s-8.6-1.8-10.4-5.5c-1-2-1.5-4.8-1.5-8.6v-16.9H606.1z
		 M615.5,151.8l-1.2,1c-1,0.8-1.7,1.4-1.9,1.9c-0.3,0.4-0.4,0.9-0.4,1.4c0,0.5,0.2,0.9,0.5,1.3c0.4,0.4,0.9,0.6,1.6,0.6
		c0.4,0,0.7,0,0.9-0.1s0.5-0.2,0.8-0.3v2.7c-0.5,0.2-0.9,0.3-1.2,0.4c-0.7,0.2-1.4,0.3-2.1,0.3c-1.3,0-2.3-0.4-3-1.1
		c-0.7-0.8-1.1-1.6-1.1-2.6c0-1.1,0.4-2.1,1.2-3c0.6-0.7,1.6-1.5,2.9-2.4H615.5z"/>
						<path d="M677.5,121.1h4v14.7l15.1-14.7h5.7l-12.9,12.2l13.1,18h-5.3l-10.8-15.1l-4.9,4.6v10.5h-4V121.1z" />
						<path d="M722.5,121.1h4.1v26.5h15.1v3.6h-19.2V121.1z" />
						<path d="M763.7,121.1h4.1v30.1h-4.1V121.1z" />
						<path d="M791.4,121.1h4.8l15,24.3v-24.3h3.9v30.1h-4.6l-15.2-24.3v24.3h-3.9V121.1z" />
						<path d="M839.5,121.1h4.1v30.1h-4.1V121.1z" />
						<path d="M867.2,121.1h4v14.7l15.1-14.7h5.7l-12.9,12.2l13.1,18h-5.3l-10.8-15.1l-4.9,4.6v10.5h-4V121.1z" />
						<path d="M920.9,121.1h4.6l10.9,30.1H932l-3.1-9H917l-3.3,9h-4.2L920.9,121.1z M927.6,138.9l-4.6-13.3l-4.9,13.3H927.6z
		"/>
					</g>}
				{title &&
					//title
					<g>
						<g>
							<path d="M319,37c-10.4,0-18.6,2.9-24.4,8.8c-5.8,5.8-8.8,14-8.8,24.5c0,7.5,1.5,13.8,4.4,18.8c3,5,6.8,8.7,11.6,11
		c4.8,2.3,10.8,3.5,18,3.5c7.1,0,13.1-1.3,17.9-4c4.8-2.7,8.4-6.4,11-11.2c2.5-4.8,3.8-11,3.8-18.5c0-10.4-2.9-18.4-8.7-24.2
		C338,39.9,329.7,37,319,37z M329.1,84.5c-2.3,2.8-5.6,4.2-9.9,4.2c-4.2,0-7.4-1.4-9.8-4.3c-2.4-2.8-3.6-7.5-3.6-14
		c0-6.6,1.2-11.2,3.6-14.1c2.4-2.8,5.6-4.3,9.7-4.3c4.2,0,7.5,1.4,9.9,4.2c2.4,2.8,3.7,7.2,3.7,13.3
		C332.6,76.7,331.4,81.7,329.1,84.5z"/>
						</g>
						<g>
							<path d="M411.1,83.8c-0.5-0.9-1.4-2.3-2.8-4c-1.4-1.7-2.4-2.9-3.2-3.4c-1.1-0.8-2.8-1.6-5.2-2.4c3-0.7,5.3-1.5,7-2.5
		c2.7-1.6,4.8-3.7,6.3-6.3c1.5-2.6,2.3-5.7,2.3-9.2c0-4.1-1-7.6-3-10.4c-2-2.9-4.6-4.8-7.9-5.9c-3.2-1.1-7.9-1.6-14.1-1.6h-33.1
		v64.3h20V76.3h1.8c1.8,0,3.4,0.5,4.9,1.5c1.1,0.8,2.3,2.4,3.6,5l10.6,19.7h22.5L411.1,83.8z M394.3,61.3c-0.8,1.1-1.9,1.8-3.2,2
		c-2.6,0.6-4.4,0.9-5.3,0.9h-8.4V51.1h8.7c3.6,0,6.1,0.6,7.4,1.7c1.3,1.1,2,2.7,2,4.8C395.6,58.9,395.1,60.2,394.3,61.3z"/>
						</g>
						<g>
							<polygon points="476.3,38.1 415.9,38.1 415.9,54 436.1,54 436.1,102.4 456,102.4 456,54 476.3,54 		" />
						</g>
						<g>
							<path d="M507,37c-10.4,0-18.6,2.9-24.4,8.8c-5.8,5.8-8.8,14-8.8,24.5c0,7.5,1.5,13.8,4.4,18.8s6.8,8.7,11.6,11
		c4.8,2.3,10.8,3.5,18,3.5c7.1,0,13.1-1.3,17.9-4c4.8-2.7,8.4-6.4,11-11.2c2.5-4.8,3.8-11,3.8-18.5c0-10.4-2.9-18.4-8.7-24.2
		C525.9,39.9,517.7,37,507,37z M517,84.5c-2.3,2.8-5.6,4.2-9.9,4.2c-4.2,0-7.4-1.4-9.8-4.3c-2.4-2.8-3.6-7.5-3.6-14
		c0-6.6,1.2-11.2,3.6-14.1c2.4-2.8,5.6-4.3,9.7-4.3c4.2,0,7.5,1.4,9.9,4.2c2.4,2.8,3.7,7.2,3.7,13.3
		C520.5,76.7,519.4,81.7,517,84.5z"/>
						</g>
						<g>
							<path d="M578.1,38.1h-33v64.3h20V78.5h10.9c8,0,14-1.8,17.9-5.5c3.9-3.7,5.9-8.7,5.9-15.2c0-6.3-1.8-11.2-5.4-14.6
		C590.7,39.8,585.3,38.1,578.1,38.1z M578,63.5c-1.6,1.3-4.2,2-8.1,2H565V51.2h5.7c3.7,0,6.2,0.7,7.6,2.1c1.3,1.4,2,3.1,2,5.1
		C580.3,60.5,579.5,62.2,578,63.5z"/>
						</g>
						<g>
							<polygon points="624,75.2 654.9,75.2 654.9,62 624,62 624,51.8 657.3,51.8 657.3,38.1 604.1,38.1 604.1,102.4 
		658.3,102.4 658.3,87.8 624,87.8 		"/>
						</g>
						<g>
							<path d="M715.9,47.3c-2.3-3-5.3-5.2-8.9-6.8c-3.6-1.6-8.3-2.4-14.1-2.4h-29.5v64.3h29.5c3.5,0,7.5-0.6,11.8-1.8
		c3.2-0.8,6.2-2.6,8.9-5.1c2.8-2.6,4.9-5.7,6.5-9.5c1.6-3.8,2.3-9.1,2.3-16c0-4.4-0.5-8.5-1.6-12.5
		C719.9,53.6,718.2,50.2,715.9,47.3z M701.1,81.6c-1,2.3-2.4,3.9-4.1,4.8c-1.8,0.9-4.7,1.4-8.9,1.4h-4.9V52.7h5
		c5.1,0,8.8,1.3,11.1,3.8c2.2,2.5,3.3,7.2,3.3,14C702.6,75.6,702.1,79.3,701.1,81.6z"/>
						</g>
						<g>
							<rect x="727.8" y="38.1" width="19.9" height="64.3" />
						</g>
						<g>
							<path d="M782.8,77.7c0,3.9-0.5,6.7-1.6,8.3c-1,1.6-2.7,2.5-4.9,2.5c-1.4,0-2.5-0.3-3.2-0.8c-1.1-0.8-1.9-2-2.4-3.3
		c-0.5-1.4-0.7-3.5-0.7-6.3l-19,2.6c0.4,5,1.5,9.1,3.4,12.5c1.9,3.4,4.7,5.9,8.3,7.7c3.6,1.8,8.6,2.6,15.1,2.6
		c6.1,0,11.2-1.3,15.1-4c3.9-2.7,6.6-5.9,7.9-9.7c1.3-3.8,2-9.4,2-16.7V38.1h-19.9V77.7z"/>
						</g>
						<g>
							<path d="M840.8,37c-10.4,0-18.6,2.9-24.4,8.8c-5.8,5.8-8.8,14-8.8,24.5c0,7.5,1.5,13.8,4.4,18.8s6.8,8.7,11.6,11
		c4.8,2.3,10.8,3.5,18,3.5c7.1,0,13.1-1.3,17.9-4c4.8-2.7,8.4-6.4,11-11.2c2.5-4.8,3.8-11,3.8-18.5c0-10.4-2.9-18.4-8.7-24.2
		C859.7,39.9,851.5,37,840.8,37z M850.8,84.5c-2.3,2.8-5.6,4.2-9.9,4.2c-4.2,0-7.4-1.4-9.8-4.3c-2.4-2.8-3.6-7.5-3.6-14
		c0-6.6,1.2-11.2,3.6-14.1c2.4-2.8,5.6-4.3,9.7-4.3c4.2,0,7.5,1.4,9.9,4.2c2.4,2.8,3.7,7.2,3.7,13.3
		C854.3,76.7,853.2,81.7,850.8,84.5z"/>
						</g>
						<g>
							<path d="M931.3,72c-1.7-2.8-4.4-5.2-8.2-7.1c-3.8-1.9-10-3.8-18.7-5.7c-3.5-0.7-5.7-1.5-6.7-2.4
		c-1-0.8-1.4-1.7-1.4-2.8c0-1.4,0.6-2.6,1.8-3.6c1.2-1,2.9-1.5,5.2-1.5c2.8,0,5,0.7,6.6,2c1.6,1.3,2.6,3.4,3.1,6.3l18.7-1.1
		c-0.8-6.7-3.4-11.5-7.7-14.6c-4.3-3.1-10.6-4.6-18.8-4.6c-6.7,0-12,0.8-15.8,2.5c-3.8,1.7-6.7,4-8.6,6.9c-1.9,2.9-2.9,6.1-2.9,9.4
		c0,5,1.9,9.2,5.6,12.4c3.7,3.2,9.9,5.8,18.6,7.8c5.3,1.2,8.7,2.4,10.2,3.7c1.5,1.3,2.2,2.8,2.2,4.5c0,1.8-0.8,3.3-2.3,4.6
		c-1.5,1.3-3.7,2-6.6,2c-3.8,0-6.7-1.3-8.8-3.9c-1.3-1.6-2.1-3.9-2.5-7l-18.9,1.2c0.6,6.5,2.9,11.8,7.2,16.1
		c4.2,4.2,11.8,6.3,22.7,6.3c6.2,0,11.4-0.9,15.5-2.7c4.1-1.8,7.3-4.4,9.6-7.9c2.3-3.5,3.4-7.3,3.4-11.4
		C933.9,78,933,74.8,931.3,72z"/>
						</g>
					</g>
				}
				{line &&
					//line
					<g>
						<rect x="245.6" y="40.5" width="4" height="111" />
					</g>

				}
				{icon &&
					//logo
					<g>
						<path d="M175.5,44.9c-7,7.8-17.3,20.3-24.9,30.8c-12,16.6-23.7,41.6-31.9,68.6c-1.9,6.4-5.2,27.3-5.2,27.5
	c-0.1,0.7-0.7,1.3-1.5,1.4c-0.1,0-0.1,0-0.2,0c-0.7,0-1.3-0.4-1.5-1.1c-0.1-0.2-1.9-5-5.5-17.6c-4.1-14.3-13.7-37.7-35.7-67.7
	c-24-32.6-39.5-42.8-39.6-42.9c-0.7-0.4-0.9-1.3-0.6-2c0.3-0.7,1.1-1.1,1.9-1C49.4,45,72,55.6,88.9,64.3c0-3.6,1.8-7.1,5.1-9.8
	c3.3-2.7,7.7-4.3,12.4-4.4c9.9-0.4,18.3,5.6,18.6,13.3c0.2,6.3-5,11.9-12.6,13.9c2.4,1.4,4.2,2.5,5.3,3.1
	c5.9-4.2,39.5-28.4,55.1-39.7C155.6,17,127.6,1.5,96.1,1.5C43.9,1.5,1.6,43.8,1.6,96s42.3,94.5,94.5,94.5s94.5-42.3,94.5-94.5
	C190.6,77.2,185,59.6,175.5,44.9z"/>
					</g>
				}
			</svg>
		</>
	)
}

export default Logo


