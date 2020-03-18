$(function(){
    //get dom ele
    var $width=$('#width'),
        $height=$('#height'),
        // $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area'),
        $form=$('form');
    //calc button click event
    $form.submit(function(e){
        e.preventDefault();
        //去掉浮点函数
        function roundFractional(x, n) {
            return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
        }
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

    
});