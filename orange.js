document.getElementsByTagName("tbody")[0].addEventListener("click",func);
var popup = document.getElementsByClassName("popup")[0];
function func(event){
	if(event.target.innerText == "ЗАКАЗАТЬ РЕЙС" ){
		popup.innerText = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText +
		" | " + event.target.previousElementSibling.previousElementSibling.innerText;

	}
}
