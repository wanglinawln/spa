var PasswordTextbox=function(n){var t=$('<input id="pwd" type="password">'),d=$('<input class="pwd-text" type="text">'),e=$('<div id="eye"></div>'),i=$('<div class="wd-password">密码：</div>');i.append(t),i.append(e),i.append(d),$(n.container).append(i),t.on("input",function(){d.val(t.val())}),e.mouseover(function(){d.css("z-index","10")}),e.mouseout(function(){d.css("z-index","-10")}),this.getPwd=function(){return d.val()}};