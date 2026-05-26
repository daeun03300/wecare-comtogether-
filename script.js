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
    <b>이다은</b><br><br>

    이번 위케어를 통해 프로그래밍 언어 멘토링, 그리고 웹사이트 제작 과정을 직접 지도하며 다른 사람들에게 설명하고 멘토링하는 소중한 경험을 쌓을 수 있었습니다.<br>

    객관적인 성과로는 팀원 모두가 자기소개 웹사이트 제작에 포기하지 않고 모두 성공한 것이 매우 뿌듯합니다!<br>

    주관적인 성과로는 단순히 전공 공부만 하는 것이 아니라, 서로 다른 문화지만 이렇게 친해진 것이라고 생각합니다.<br>


    <b>신민꼬</b><br><br>

    이 프로그램에 참여한 후 한국 문화에 대해 훨씬 더 많이 체험할 수 있었고, 단순한 이론이 아니라 실제 생활 속에서 배우는 경험이 많았습니다.<br>

    팀 활동도 매우 만족스러웠는데, 친구처럼 편한 분위기 속에서 서로 도와주고 배우며 더 깊이 이해할 수 있었습니다. <br>

    또한 작은 프로젝트들을 진행하면서 전공인 컴퓨터공학 관련 실력도 재미있게 향상된 것 같습니다.<br>

    특히 함께 식사하고 대화를 나누면서 한국어를 실제로 사용하는 기회가 많아졌고, 책으로 공부할 때보다 훨씬 빠르게 실력이 늘고 있다는 것을 느꼈습니다. <br>

    이 프로그램은 저의 전공 능력뿐만 아니라 한국어 실력, 그리고 한국 생활 적응에도 큰 도움이 되었습니다.<br> 

    무엇보다 한국 친구를 사귀고 서로 도움을 주고받을 수 있게 된 점이 가장 큰 성과라고 생각합니다.<br>


    <b>소우산디 메인</b><br><br>

    이 활동을 하고 나서, 저는 예전보다 팀 활동과 여행을 훨씬 더 좋아하게 되었어요.<br>

    원래 저는 모든 것을 혼자 하는 걸 좋아했는데, 지금은 착하고 좋은 친구들과 함께하면 모든 일이 더 재미있고 신난다는 것을 깨달았어요.<br>

    한국 문화는 정말 많이 체험했어요. 한복, 궁궐, 그리고 다양한 한국 음식까지 – 너무 좋았습니다.<br>

    팀 활동도 마음에 들었고, 앞으로도 이런 경험을 또 하고 싶어요.<br>
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
