function aveSpd(upTime, downTime, downSpd) {
  // your code here
	 // uphill, down hill dist is same
	
	let dist = (Math.floor(downTime/60))*downSpd;
	let upSpd = Math.floor(dist/upTime);

	return (Math.floor((upSpd+downSpd)/2))
	
}

//Do not change the code below
const upTime = parseInt(prompt("Enter upTime: "));
const downTime = parseInt(prompt("Enter downTime: "));
const downSpd = parseInt(prompt("Enter downSpd: "));

alert(aveSpd(upTime, downTime, downSpd)); 
