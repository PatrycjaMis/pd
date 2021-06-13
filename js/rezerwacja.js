function logowanie(){
    var imElem = document.forms['rezerwacja']['imie'];
    var nazElem = document.forms['rezerwacja']['nazwisko'];
    var PESElem = document.forms['rezerwacja']['PESEL'];
    var dataURElem = document.forms['rezerwacja']['data_urodzenia'];        
    var miastoElem = document.forms['rezerwacja']['miasto'];
    var numTelElem = document.forms['rezerwacja']['numer_telefonu'];
    var emaElem = document.forms['rezerwacja']['email'];
    var dataRozElem = document.forms['rezerwacja']['data_rozpoczęcia'];  

   //imie
   
   if(imElem.value.match(/^[a-zA-Z]+$/) != null){
    }  
    else{ alert("Imię nie może zawierać cyfr i znaków specjalnych ");  return false; }  
  
  
    //nazwisko
   
      if(nazElem.value.match(/^[a-zA-Z]+$/) != null){
    }  
    else{ alert("Nazwisko nie może zawierać cyfr i znaków specjalnych ");
    return false; }  

    //PESEL

    if(PESElem.value.match(/^[0-9]{11}$/) != null){
    }  
    else{ alert("PESEL musi sie składać z 11 cyfr");
    return false; }      

    //data urodzenia
   
      if(dataURElem.value.match(/^\d\d\d\d-\d\d-\d\d$/) != null){
      if(dataURElem.value.match(/^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/) != null){
    }  
    else{ alert("Nieprawidłowy rok, miesiąc lub dzień");
    return false; }  
      }
      else{
        alert("Data urodzenia musi być w formacie RRRR-MM-DD"); 
        return false;
      }
  
  //miasto
  
  if(miastoElem.value.match(/^[a-zA-Z-ąęśćżźó]+$/) != null){
    }  
    else{ alert("Nazwa miasta nie może zawierac cyfr");
    return false; }  

    //ulica
      
    //numer telefonu

    if(numTelElem.value.match(/^[0-9]+$/) != null){
    }  
    else{ alert("Numer telefonu musi sie składać z cyfr");
    return false; }  
 


    //adres email
    
      if(emaElem.value.match(/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/) != null){

    }  
    else{ alert("Email musi zawierac @ oraz znaki przed i po");
    return false; }  
 
   
 //numer dowodu

 //data rozpoczecia

 if(dataRozElem.value.match(/^\d\d\d\d-\d\d-\d\d$/) != null){
      if(dataRozElem.value.match(/^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/) != null){
    }  
    else{ alert("Nieprawidłowy rok, miesiąc lub dzień");
    return false; }  
      }
      else{
        alert("Data rozpoczęcia musi być w formacie RRRR-MM-DD"); 
        return false;
      }
      
// data zakonczenia 

  if(dataZakElem.value.match(/^\d\d\d\d-\d\d-\d\d$/) != null){
      if(dataZakElem.value.match(/^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/) != null){
    }  
    else{ alert("Nieprawidłowy rok, miesiąc lub dzień");
    return false; }  
      }
      else{
        alert("Data zakończenia musi być w formacie RRRR-MM-DD"); 
        return false;
      }     

  }  


// popup
let popup = $('.rezerwacja__popup');
if(popup.length > 0){
  let width = popup.outerWidth();
  let height = popup.outerHeight();
  popup.css("margin-top", -(height/2));
  popup.css("margin-left", -(width/2));
  popup.fadeIn();
}

$(".rezerwacja_btn_ok_zajete").on("click", function(){
  popup.fadeOut();
  $(".rezerwacja__popup-bg").fadeOut();
  $(this).fadeOut();
});

$(".rezerwacja_btn_ok_zlozona").on("click", function(){
  popup.fadeOut();
  $(".rezerwacja__popup-bg").fadeOut();
  $(this).fadeOut();
  location = 'home_nowy.html';
});