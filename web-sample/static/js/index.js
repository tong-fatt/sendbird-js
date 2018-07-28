
var userId = '';
var nickname = '';
var accessToken= '';


function login(){
  if (nickname.isEmpty()) {
    alert('Please enter user nickname');
    return;
  }
  window.location.href = 'chat.html?userid=' + encodeURIComponent(userId) + '&nickname=' + encodeURIComponent(nickname)
   +'&accesstoken='+encodeURIComponent(accessToken);
}

$('#access_token').change(function() {
  userId = $('#user_id').val().trim();
  nickname = $('#user_nickname').val().trim();
  accessToken = $('#access_token').val().trim();
 
});

// $('#user_nickname').keydown(function(e){
$('#access_token').keydown(function(e){
  if (e.which == 13) {
    nickname = $('#user_nickname').val().trim();
    accessToken = $('#access_token').val().trim();
  
    login();
  }
});

$('#btn_start').click(function() {
  login();
});

$(document).ready(function() {
  $('#user_nickname').val('');
  $('#user_nickname').focus();
  $('#access_token').val(accessToken);
  $('#access_token').focus();

  // $('#user_id').val(getUserId());
});