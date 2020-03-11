/*eslint quotes: ["error", "double"]*/
$(function(){
    var p=$("progress"),
        start=$("#start"),
        pause=$("#pause"),
        restart=$("#restart"),
        num=0,
        timer=0;
    start.click(function(){
        if(timer===0&&num<=100){
            timer=setInterval(function() {
                p.attr("value",num++);
            }, 100);
        }
        
    });
    pause.click(function(){
        p.attr("value",num);
        clearInterval(timer);
        timer=0;
    });
    restart.click(function(){
        num=0;
        p.attr("value",num);
    });
});