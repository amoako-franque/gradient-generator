let h3 = document.querySelector("h3")
let colorOptionOne = document.getElementById("pick-color1")
let colorOptionTwo = document.getElementById("pick-color2")
let body = document.getElementById("main")

const backGroundColor = () => {
	// body...
	body.style.background = "linear-gradient(to right, " + colorOptionOne.value + ", " + colorOptionTwo.value + ")"
	h3.textContent = body.style.background + ";"
}

colorOptionOne.addEventListener("input", backGroundColor)

colorOptionTwo.addEventListener("input", backGroundColor)
