var quiz = document.getElementsByTagName("quiz")[0];

var quizArr = [
    ["** Java **\n", "객체가 다양한 모양을 가지는 성질이다. 메서드 형태가 다양하거나 동일한 이름의 메서드가 약간씩 다른 의미를 가질 수 있다는 것을 뜻한다."],
    ["** Java **\n", "이것은 java.lang 패키지에서 제공하는 표준출력문이다. 괄호 사이에 있는 출력하고자 하는 변수나 문자열이 올 수 있다.(단, 줄바꿈 없음)"],
    ["** JavaScript **\n", "Not a Number의 줄임말로 숫자가 아니면 true, 숫자이면 false를 리턴하는 내장함수입니다."],
    ["** JavaScript **\n", "이 내장함수는 시작 인덱스로부터 종료 인덱스 전까지 문자열의 부분 문자열을 반환한다. 음수를 입력시 0으로 판단한다."],
    ["** HTML **\n", "문서의 제목을 나타낸다. 웹브라우저의 제목 표시줄에 표시되는 태그는 무엇일까?(<>표시 제외하고 써주세요)"],
    ["** HTML **\n","아무런 의미가 없는 태그이다. 어떤 컨텐츠들을 목적에 따라 묶는 용도로 쓰는 이 태그는?(<>표시 제외하고 써주세요)"],
    ["** Python **\n", "'열거하다' 라는 뜻을 가지고 있다. 이 함수는 순서가 있는 자료형(리스트, 튜플, 문자열)을 입력으로 받아 인덱스 값을 포함하는 객체를 돌려준다."],
    ["** Python **\n", "문자열을 입력받아 전체길이를 return해주는 함수이다."],
    ["** C언어 **\n", "가슴이 답답하고 울컥하고 짜증이 일어나기도 하는 날입니다. 이 모든 것이 욕심에서 비롯되는 것은 아닌지 생각해 보도록 하세요. 현재에 안주해서도 안 되겠지만, 욕망의 노예가 되어서도 안됩니다."],
    ["** C언어 **\n", "혹시 나쁜 기억에 사로잡혀 있었거나 풀리지 않는 문제로 고민하고 있었다면 이제 한시름 놓으셔도 됩니다. 당신 옆에 지혜로운 누군가가 나타나 조언을 해주는 하루가 될 테니까요."],
    ["** SQL **\n","마음속에 하지 못하는 말을 간직하고 있으면 병이 생기게 됩니다. 오늘은 평소에 당신이 가지고 있던 불만이나 생각을 토로하는 것이 좋습니다. 허심탄회하게 말을 하고 나면 스트레스도 확 풀리게 될 것입니다."],
    ["** SQL **\n", "날씨 때문인지, 그냥 우울한 것인지 당신의 컨디션이 그리 좋은 상태가 아닙니다. 별것도 아닌 일로 주변 사람들에게 짜증을 낼 수 있겠네요. 조금만 참으시고 크게 심호흡을 한 번 해보도록 하세요."],
    ["<으싸, 으쌰!!>" , "몸과 마음에 활력이 넘치는 날이며, 일이나 공부를 할 때도 의욕이 넘치게 되는 날입니다. 한꺼번에 너무 힘을 써버리면 쉽게 지쳐버릴 수도 있으니 조금씩 천천히 진행하는 것도 방법이 되겠네요."],
    ["<아싸, 행운 당첨!!>", "생각지도 못했던 곳에서 행운이 들어오는 날입니다. 길을 가다 넘어져도 꼭 돈 있는 곳으로 넘어질 운이네요. 또한 당신에게 들어온 위험을 피하는 운도 있습니다. 어려운 문제가 있었다면 그 해결의 실마리가 생기게 될 것입니다."],
    ["<그것참 엉뚱하네..>", "괜스레 딴청을 피우고 싶어지는 때입니다. 일도 손에 안 잡히고 사람을 만나는 것도 귀찮네요. 엉뚱한 생각만 들고 그걸 행동으로 옮기니 괴팍하다는 소리를 들을 수도 있습니다."],
    ["<순진함은 제쳐두고>", "순진하기 때문에 손해를 볼 일이 생길 수도 있습니다. 자신의 순진함은 잠시 제쳐두고 오늘은 조금 독하게 살아야 할 것 같네요. 다른 사람의 말에 주눅 들지 말고 자신의 주장을 강하게 펴도록 하세요."],
    ["<고집불통>", "불필요한 부분에서 고집을 피우게 되는 날입니다. 당신의 의견을 굽히지 않으니 주변 사람들과 약간의 다툼 수도 있습니다. 감정적으로 고집을 피울 것이 아니라 이성적인 판단을 내리기 위해 애써야 합니다."],
    ["<새 친구, 새 멤버?>", "기존에 알고 지내던 사람들과는 다툼이 있을 수 있습니다. 오히려 오늘 새롭게 만나게 되는 사람들과는 꽤 잘 지낼 수 있겠고요. 나이 차이가 나더라도 좋은 친구가 될 수 있음을 확인할 수 있겠네요."],
    ["<삐지지 마세요>", "주변 사람들이 조금 섭섭하게 느껴지는 날입니다. 별것도 아닌 말에 혼자 맘이 상하게 되니, 누군가에게 하소연하기도 겸연쩍네요. 괜스레 외롭다는 생각도 들게 되겠네요."]
];


var num = Math.round(Math.random() * (quizArr.length - 1));
// var num = Math.round( Math.random() * 2);
quiz.innerHTML = quizArr[num];
// alert(handArr[num])