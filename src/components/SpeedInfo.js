export default function SpeedInfo({speedSet, propagationSet}) {
	var updateProperties = () => {
		let speed = document.getElementById('speed').value;
		let propagation = document.getElementById('propagation').value;
		speedSet(speed);
		if (validNum(propagation)) {
			propagationSet(propagation);
		}
	}
	
	var validNum = (i) => {
		return i > 0;
	}

	return (
		<div>
		<input id='speed' type='number' defaultValue='0'/>
		<input id='propagation' type='number' defaultValue='343' />
		<button onClick={() => updateProperties()}>Update</button>
		</div>
	)
}
