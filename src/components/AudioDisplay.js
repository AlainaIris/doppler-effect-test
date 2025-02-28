import {Line} from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js";
export default function AudioDisplay({audioData}) {
	console.log(audioData);
	Chart.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);
	return (
		<div id="audio-display">
		<Line
		data={audioData}
		options={{
			plugins: {
				title: {
					display: true,
						text: "Percieved Frequency"
				},
					legend: {
						display: false
					}
			}
		}}/>
		</div>
	)
}
