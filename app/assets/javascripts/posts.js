$(function(){

  //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $("#post-info").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
  });

  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
  });

  $("#weather").on("click", function(){
    $(".maps").addClass("active");
    $(".photos").addClass("hidden");
  });

  $(".tojiru").on("click", function(){
    $(".maps").removeClass("active");
    $(".photos").removeClass("hidden");
  });

  $(".botan3").on("click", function(){
    $(".botan3").addClass("hidden");
    $(".botan4, .search-back").addClass("active");
  });

  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".botan4").on("click", function(){
    $(".botan3").removeClass("hidden");
    $(".botan4, .search-back").removeClass("active");
  });

  function buildHTML(post){
    image = ( post.image ) ? `<img class= "message-image" src=${post.image} >` : " ";
    
    var html = `<div class = message>
                  <div class = message-area>
                    ${post.area}
                  </div>
                  <div class = message-user>
                    ${post.user_name}
                  </div>
                  <div class = message-date>
                    ${post.created_at}
                  </div>
                  <div class = message-title>
                    ${post.title}
                  </div>
                  <div class = message-image >
                    ${image}
                  </div>
                  <div class = message-content>
                    ${post.content}
                  </div>
                </div>`
    
  $('.messages').prepend(html);
  }

  $('.new_post').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST', 
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(post){
      buildHTML(post)
      $('.messages').animate({scrollLeft: 0}, { duration: 2000});
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
      $('.submit-btn').prop('disabled', false);
    })
  })  

  $(function(){
    $('.photos').slick({
    infinite: true, //スライドのループ有効化
    autoplay:true,     //自動再生
    autoplaySpeed: 0, //待ち時間を０に
    speed: 10000,     //自動再生の速度
    pauseOnHover: false,
    cssEase: 'linear',// 切り替えイージングを'linear'に
    //ここにオプションを書いていく
    arrows:false
    });
    });
});
