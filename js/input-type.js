(function() {

  var pwd = document.getElementById('pwd');
  var chk = document.getElementById('showPwd');

  addEvent(chk, 'change', function(e) {
    // e.srcElement is a fallback for older versions of IE
    var target = e.target || e.srcElement;
    // Try catch statement for errors in older versions of IE when the type property is changed
    try {
      if (target.checked) {
        pwd.type = 'text';
      } else {
        pwd.type = 'password';
      }
    } catch(error) {
      alert('This browser cannot switch type');
    }
  });
}());
