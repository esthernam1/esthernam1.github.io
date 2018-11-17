$(function(){
  pw = $(document).width()-230;
  console.log(pw)
  
  $('div').click(function(){
    if($(this).attr('class') == 'design' ){
      $('.code').addClass('backCode');
      $('.backCode').removeClass('code');
      $('#name').animate({right: -pw}, 500, function(){
        $('.backCode').html('<b><</b> back');
        $('.right').fadeIn();
        $('.center').animate({color:'#ecf0f1'},400);
      });
        
    }else if($(this).attr('class') == 'code' ){
      
      $('.design').addClass('backDesign');
      $('.backDesign').removeClass('design');
      $('#name').animate({right: pw}, 500, function(){
        $('.backDesign').html('back <b>></b>');
        $('.left').fadeIn();
        $('.center').animate({color:'#ecf0f1'},400);
      });

    }else if($(this).attr('class') == 'backCode'){
      $('.backCode').addClass('code');
      $('.code').removeClass('backCode');
      $('.code').html('<b><</b> code');
      $('#name').animate({right: "0"}, 500);
      $('.right').fadeOut();
      $('.center').css('color','#7f8c8d')

    }else if($(this).attr('class') == 'backDesign'){
      $('.backDesign').addClass('design');
      $('.design').removeClass('backDesign');
      $('.design').html('design <b>></b>');
       $('#name').animate({right: "0"}, 500);
      $('.left').fadeOut();
      $('.center').css('color','#7f8c8d')

    }
  })
})