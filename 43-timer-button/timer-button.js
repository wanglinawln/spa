define(["jquery"],function(a){return function(){var n,e,i=a('<input class="timer-button" type="button" value="同意(6s)" disabled />'),l={container:"body",num:6,title:"同意",onClick:null};this.show=function(t){a(l.container).append(i),a.extend(l,t),e=l.num,i.val(l.title+"("+e+"s)"),n=setInterval(function(){0===--e?(clearInterval(n),i.val(l.title),i.removeAttr("disabled")):i.val(l.title+"("+e+"s)")},1e3),i.click(l.onClick)}}});