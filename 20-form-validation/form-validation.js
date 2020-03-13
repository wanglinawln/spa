$(function(){
    //get dom ele
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    //calc button click event
    $btnCal.click(function(){
        //去掉浮点函数
        function roundFractional(x, n) {
            return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
        }
        //validate if error return
        if(!validate('#width')||!validate('#height')) return;
        //get value
        var w=Number($width.val()),
            h=Number($height.val());
        //calculate
        var p=roundFractional(2*(w+h),2),
            a=roundFractional(w*h,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    });
    
    $width.focusout(function(){
        if(!validate('#width')){
            $width.select();
        }
    });
    $height.focusout(function(){
        if(!validate('#height')){
            $height.select();
        }
    });

    function validate(filed){
        //get DOM error message
        var $data=$(filed),
            $msg=$(filed+'-validation-message');
        //validate null
        if($data.val()===''){
            $msg.html('不能为空');
            $data.select();
            return false;
        }
        
        //validate number
        if(!(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?/.test($data.val()))){
            $msg.html('必须是数值');
            $data.select();
            return false;
        }
        
        //validate >0
        if($data.val()<0){
            $msg.html('必须大于零');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;

    }
});