    var pokoj1 = [0,1,2,3,5,6,7];
    var pokoj2 = [0,1,2,3,5,6,7,8,9,12];
    var pokoj3 = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    var pokoj4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    $('.wyszukaj').on("click", function(){
     
      var wybrana = parseInt($('select[name="wyszukiwarka"]').val());
      $(".pokoj1").hide();
      $(".pokoj2").hide();
      $(".pokoj3").hide();
      $(".pokoj4").hide();
      if(jQuery.inArray( wybrana, pokoj1 ) !== -1)
      {
        $(".pokoj1").fadeIn();
      }
      if(jQuery.inArray( wybrana, pokoj2 ) !== -1)
      {
        $(".pokoj2").fadeIn();
      }
      if(jQuery.inArray( wybrana, pokoj3 ) !== -1)
      {
        $(".pokoj3").fadeIn();
      }
      if(jQuery.inArray( wybrana, pokoj4 ) !== -1)
      {
        $(".pokoj4").fadeIn();
      } 
    });

    $('.wyczysc').on("click", function(){
      $('select[name="wyszukiwarka"]').val(0);
      $('.wyszukaj').click();
    });
