var nGuesses = 0;

function random() {
	return (parseInt(Math.random() * 100 + 1));
}

function numberGame() {
	var response;
	var luck = document.getElementsByClassName("next"); //운세보기 버튼

	if (document.forms[0].guess.value == "") {
		alert("숫자를 입력하세요!");
	}
	var num = parseInt(document.forms[0].guess.value);
	document.forms[0].guess.value = num;
	nGuesses++;
	response = "";
	if (num < myNumber) response = "더 큽니다!"
	if (num > myNumber) response = "더 작습니다!"
	if (num == myNumber) {
		alert("축하드립니다~! 이제 애정운을 볼 수 있어요!");
		if (luck) {//운세보기 버튼 보이게 한다
			for (var x = 0; x < luck.length; x++) {
				luck[x].style.visibility = "visible";
			}
		}
	}
	document.forms[1].guesses.value = nGuesses; //시도횟수 
	document.forms[1].result.value = response; //도움말 
	document.forms[0].guess.focus(); //숫자입력, 숫자를 반전시킴 (파란색으로)
	document.forms[0].guess.select(); //숫자입력
	return true;
}

function GiveUp() {
	window.location.href = "../third_story.html";
}

//흰트를 적어준다
myNumber = random(); 
//document.write(myNumber+"<br>"); 

function myFunction() {
	var element = document.getElementById("myDIV");
	element.classList.toggle("mystyle");
}