$(function(){

  //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $("#post-info").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
  });

  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
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
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました')
    })
  })  

});