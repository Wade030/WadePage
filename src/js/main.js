let mypage = false
let port = false
let about = false



// mypage
$('.mypage').click(function(){
  if(mypage === false){
    $('.l-mypage').addClass('--show')
    $('.mypage').addClass('is-active')
    if(port === true){
      port = false
      $('.l-port').removeClass('--show')
      $('.port').removeClass('is-active')
    }
    if(about === true){
      port = false
      $('.l-about').removeClass('--show')
      $('.about').removeClass('is-active')
    }
    mypage = true
  }else{
    mypage = false
    $('.l-mypage').removeClass('--show')
    $('.mypage').removeClass('is-active')
  }
})

//port
$('.port').click(function(){
  if(port === false){
    $('.l-port').addClass('--show')
    $('.port').addClass('is-active')
    port = true
    if(mypage === true){
      mypage = false
      $('.l-mypage').removeClass('--show')
      $('.mypage').removeClass('is-active')
    }
    if(about === true){
      about = false
      $('.l-about').removeClass('--show')
      $('.about').removeClass('is-active')
    }
  }else{
    port = false
    $('.l-port').removeClass('--show')
    $('.port').removeClass('is-active')
  }
})

//about
$('.about').click(function(){
  if(about === false){
    $('.l-about').addClass('--show')
    $('.about').addClass('is-active')
    about = true
    if(mypage === true){
      mypage = false
      $('.l-mypage').removeClass('--show')
      $('.mypage').removeClass('is-active')
    }
    if(port === true){
      port = false
      $('.l-port').removeClass('--show')
      $('.port').removeClass('is-active')
    }
  }else{
    about = false
    $('.l-about').removeClass('--show')
    $('.about').removeClass('is-active')
  }
})
