$(function() {
  // 文字色変化
  $('#change-color').on('click', function() {
    $('#target').css('color', 'rgba(255,100,160,0.5)');
});
// 内容変化
$('#change-text').on('click', function() {
  $('#target').text('नमस्ते');
});
// フェードアウト
$('#fade-out').on('click', function() {
  $('#target').fadeOut();
});
// フェードイン
$('#fade-in').on('click', function() {
  $('#target').fadeIn();
});

});

