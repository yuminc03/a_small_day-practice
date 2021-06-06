window.onload = function () {
	var h1 = document.getElementsByTagName("h1")[0]; //퀴즈 테마
	var h2 = document.getElementsByTagName("h2")[0]; //퀴즈 문제

	var quizTheme = ["Java", "JavaScript", "HTML", "Python", "C언어", "SQL", "소프트웨어", "디자인", "PHP", "Bootstrap", "React"];

	var java = [
		["객체가 다양한 모양을 가지는 성질이다. 메서드 형태가 다양하거나 동일한 이름의 메서드가 약간씩 다른 의미를 가질 수 있다는 것을 뜻한다(단, 한글로 쓰세요)."],
		["이것은 java.lang 패키지에서 제공하는 표준출력문이다. 괄호 사이에 있는 출력하고자 하는 변수나 문자열이 올 수 있다.(단, 줄바꿈 없이 출력하고 괄호는 붙여서 쓰세요)"]
	];
	var javascript = [
		["Not a Number의 줄임말로 숫자가 아니면 true, 숫자이면 false를 리턴하는 내장함수입니다.(단, 괄호는 붙여서 써주세요)"],
		["이 내장함수는 시작 인덱스로부터 종료 인덱스 전까지 문자열의 부분 문자열을 반환한다. 음수를 입력시 0으로 판단한다.(단, 괄호는 붙여서 써주세요)"]
	];
	var html = [
		["문서의 제목을 나타낸다. 웹브라우저의 제목 표시줄에 표시되는 태그는 무엇일까?(<>표시 제외하고 써주세요)"],
		["아무런 의미가 없는 태그이다. 어떤 컨텐츠들을 목적에 따라 묶는 용도로 쓰는 이 태그는?(<>표시 제외하고 써주세요)"]
	];
	var python = [
		["'열거하다' 라는 뜻을 가지고 있다. 이 함수는 순서가 있는 자료형(리스트, 튜플, 문자열)을 입력으로 받아 인덱스 값을 포함하는 객체를 돌려준다."],
		["문자열을 입력받아 전체길이를 return해주는 함수이다.(단, 괄호가 있는경우 붙여쓰세요)"]
	];
	var c = [
		["C언어의 확장 문자중에서 널(null)문자를 출력하는 문자는 무엇일까?"],
		["C언어의 데이터 입출력 변환문자 종류 중에서 입출력 대상을 문자열로 변환하여 출력하려면 무엇을 써야할까?"]
	];
	var sql = [
		["사람이 생각하는 개념이나 정보 단위와 같은 현실 세계의 대상체로 하나 이상의 속성으로 구성되는 이 구성요소는?(단, 한글로 쓰세요)"],
		["관계 데이터 모델의 용어로, 하나의 속성이 가질 수 있는 값들의 범위를 말한다.(단, 영어 소문자로만 쓰세요)"]
	];
	var software = [
		["이것은 분산 버전 컨트롤 소프트웨어 git을 기반으로 소스 코드를 호스팅 하고 협업 지원 기능들을 지원하는 Microsoft의 웹사이트 입니다. 이것은?(단, 영어 소문자로만 쓰세요)"],
		["다양한 플랫폼에서 쓸 수 있으며 Java를 비롯한 다양한 언어를 지원하는 프로그래밍 통합 개발 환경이다. Java로 작성되어있는 이 도구는 무엇일까?(단, 영어 소문자로만 쓰세요)"]
	];
	var design = [
		["이것은 Adobe 사에서 제작한 drawing Tool이다. 그리고 벡터 방식을 사용하기 때문에 그림이 절대로 깨지지 않는다. 이것은?(단, 영어 소문자로만 쓰세요)"],
		["이것은 Photoshop을 사용하다가 작업을 잘못수행한 경우 오래전 작업으로 되돌리는 작업이다. 이 기능의 이름은?(단, 영어 소문자로만 쓰세요)"]
	];
	var php = ["PHP에서 문자열을 출력할 때 쓰는 문법은 무엇인가?"];
	var bootstrap = ["부트스트랩에서 제공하는 버튼 색깔 중에서 btn-success라고 색을 지정하면 버튼 색깔이 무슨 색깔일까?(단, '_ _색' 이렇게 적으세요)"];
	var react = ["컴포넌트가 어떻게 생겼는지 정의하는 역할로 데이터에 변화가 있을 때에도 호출되어 페이지를 갱신하는 문법은 무엇일까?(단, ()가 있다면 붙여서 쓰세요)"];

	var num = parseInt(Math.random() * 11); // 0 ~ 10
	var num2 = parseInt(Math.random() * 2); //0 or 1 
	h1.innerHTML = quizTheme[num];

	switch (num) {
		case 0:
			h2.innerHTML = java[num2];
			one = "java";
			two = num2;
			break;
		case 1:
			h2.innerHTML = javascript[num2];
			one = "javascript";
			two = num2;
			break;
		case 2:
			h2.innerHTML = html[num2];
			one = "html";
			two = num2;
			break;
		case 3:
			h2.innerHTML = python[num2];
			one = "python";
			two = num2;
			break;
		case 4:
			h2.innerHTML = c[num2];
			one = "c";
			two = num2;
			break;
		case 5:
			h2.innerHTML = sql[num2];
			one = "sql";
			two = num2;
			break;
		case 6:
			h2.innerHTML = software[num2];
			one = "software";
			two = num2;
			break;
		case 7:
			h2.innerHTML = design[num2];
			one = "design";
			two = num2;
			break;
		case 8:
			h2.innerHTML = php[0];
			one = "php";
			two = 0;
			break;
		case 9:
			h2.innerHTML = bootstrap[0];
			one = "bootstrap";
			two = 0;
			break;
		case 10:
			h2.innerHTML = react[0];
			one = "react";
			two = 0;
			break;
		default:
			h2.innerHTML = "오류!";
	}
}

function submit() {
	const answer = document.getElementById('input').value;

	var luck = document.getElementsByClassName("next"); //운세보기 버튼

	if (one == "java" && two == 0 && answer == "다형성") {
		alert("정답입니다!! ^^");
		if (luck) {
			for (var x = 0; x < luck.length; x++) {
				luck[x].style.visibility = "visible";
			}
		}
		} else if (one == "java" && two == 1 && answer == "System.out.print()") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "javascript" && two == 0 && answer == "isNaN()") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "javascript" && two == 1 && answer == "substring()") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "html" && two == 0 && answer == "title") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "html" && two == 1 && answer == "div") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "python" && two == 0 && answer == "enumerate") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "python" && two == 1 && answer == "len()") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "c" && two == 0 && answer == "\0") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "c" && two == 1 && answer == "%s") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "sql" && two == 0 && answer == "개체") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "sql" && two == 1 && answer == "domain") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "software" && two == 0 && answer == "github") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "software" && two == 1 && answer == "eclipse") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "design" && two == 0 && answer == "illustrator") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "design" && two == 1 && answer == "history") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "php" && two == 0 && answer == "echo") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "bootstrap" && two == 0 && answer == "초록색") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else if (one == "react" && two == 0 && answer == "render()") {
			alert("정답입니다!! ^^");
			if (luck) {
				for (var x = 0; x < luck.length; x++) {
					luck[x].style.visibility = "visible";
				}
			}
		} else {
			alert("틀렸습니다.. 다시 도전해보세요");
		}

	}