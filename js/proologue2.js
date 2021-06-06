function userInfo() {
    const name = document.getElementById("full_name");//사용자 이름

    //사용자 생년월일
    const birth_year = document.getElementById("birth_year");
    var target = document.getElementById("birth_month");//사용자 생월
    const birth_month = target.options[target.selectedIndex].text;
    const birth_date = document.getElementById("birth_date");

    document.write(birth_year);
    document.write(birth_month);
    document.write(birth_date);
}