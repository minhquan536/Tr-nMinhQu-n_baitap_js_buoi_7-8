const questions = document.querySelectorAll(".question");

for (var i = 0; i < questions.length; i++) {
    const element = questions[i];
    const btn = questions[i].querySelector(".question-btn");
    btn.onclick = function(e){
        console.log(e)
        handleCollapse(element);
    }
    
}

function handleCollapse(element){
    // questions.length = 3 cái vì lấy all, 0 1 2
    for (var i = 0; i < questions.length; i++) {
          //nếu như chỗ đó có class show-text rồi thì xóa
          //chỉ được hiện 1 txt trong cái dấu + mở đó
        //   nếu như thẻ element khi click có giá trị khác với cái dấu + mình click thì sẽ xóa cái txt của thẻ khác đi
        if (element !== questions[i]) {
            questions[i].classList.remove("show-text");
        }
    }
    //toggle là hàm vừa add vừa remove so le
    element.classList.toggle("show-text");

}