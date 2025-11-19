let pergunta  = document.getElementsByClassName("title-pergunta");

$(pergunta).click(function(e){
    $(this).next('.resp').toggle(500);
});
