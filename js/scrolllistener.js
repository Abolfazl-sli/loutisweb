





const testfunction = () =>{
	// console.log("test")
	// if ()
	let data = document.querySelectorAll(".reviwe");
	console.log(data)
	let elemnth = 0;
	let nextstyle = ''
	for (var i = 0; data.length-1 >= i; i++) {
		let windowhit = window.innerHeight;
		elemnth = data[i].offsetHeight;
		elmenttop = data[i].getBoundingClientRect().top;
		nextstyle = data[i].id
		// console.log(`elm top : ${elmenttop}  windw w: ${ window.innerHeight} elm th: ${elemnth}`)
		// console.log(Number(elmenttop) < Number(windowhit) - (Number(elemnth)+30))

		if (Number(elmenttop) < Number(windowhit) - Number(elemnth)){
		console.log(nextstyle)
			
		console.log(nextstyle)
			data[i].classList.add(nextstyle)
		}
		else{
		// console.log("test4")
			data[i].classList.remove(nextstyle)
		}
	}
}

window.addEventListener("scroll" , testfunction)
// console.log("done")
testfunction()


