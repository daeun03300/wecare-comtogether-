function showSection(id){

    let sections = document.querySelectorAll('.section');

    sections.forEach(function(section){
        section.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}

function showReview(){

    document.getElementById("reviewText").innerHTML =
    `
    <b>이다은</b><br>
    이번 위케어를 통해 프로그래밍 언어 멘토링과 웹사이트 제작 과정을 직접 지도하며 소중한 경험을 쌓을 수 있었다.<br><br>

    <b>신민꼬</b><br>
    웹사이트 제작 활동을 통해 코딩에 대한 흥미를 느끼고 팀원들과 더욱 가까워질 수 있었다.<br><br>

    <b>소우산디 메인</b><br>
    다양한 문화 활동과 전공 멘토링을 통해 한국 문화와 전공 공부에 대한 이해를 높일 수 있었다.
    `;
}

function openPopup(src){

    document.getElementById("popup").style.display = "block";

    document.getElementById("popupImg").src = src;
}

function closePopup(){

    document.getElementById("popup").style.display = "none";
}

function changeColor(){

    let colors = [
        "#f5f5f5",
        "#fff0f5",
        "#e6f7ff",
        "#fffbe6"
    ];

    let random =
    colors[Math.floor(Math.random()*colors.length)];

    document.body.style.backgroundColor = random;
}