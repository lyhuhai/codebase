/**
 * Created by Chris on 2016/4/4.
 */
var project_info  = function () {

//        当前活动标签
  var current = 1;

  display($('#rotmenu li:first'));
  $('#rotmenu li').bind('click', function (e) {
    display($(this));
    e.preventDefault();
  });
  function display(elem) {
    var $this = elem;
    var repeat = false;

    $this.parent().find('li:nth-child(' + current + ') a')
      .stop()
      .animate({'marginRight': '-20px'}, 300, function () {
        $(this).animate({'opacity': '0.7'}, 700);
      });

    //重置当前current
    current = parseInt($this.index() + 1);

    // 把a往外移动效果显示
    var elem = $('a', $this);
    elem.stop().animate({'marginRight': '0px', 'opacity': '1.0'}, 300);
  }

}
