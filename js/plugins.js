/*GLOBAL $,JQuery ,alert **/
$(document).ready(function (){
    
    "use strict";

    //NICE SCROLL 

    $("body").niceScroll();
    
    $('.carousel').carousel({
        
        interval:6000

    });

    // SHOW COLOR DIV WHEN CLIK ON THE CEAR

    $(".gear-check").click(function (){

        $(".color-option").toggle();

    });

    // CHNAGE  THEME  COLOR  ON CLICK 
   
    var colorLi =$(".color-option ul li"),
        scrollButton =$("#scroll-top");

    colorLi
        .eq(0).css("backgroundColor","#ff0b22").end()
        .eq(1).css("backgroundColor","#1c61cf").end()
        .eq(2).css("backgroundColor","#ece812").end()
        .eq(3).css("backgroundColor","#804208").end()
        .eq(4).css("backgroundColor","#d112c8");
       
    colorLi.click(function (){
    
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        
        console.log($("link[href*='theme']"));
        
        //console.log($(this).attr("data-value"))
       
        });  


      //Caching The Scroll Top Element
     
    //   $(window).scroll(function (){

    //       console.log($(this).scrollTop());
          
    //       if($(this).scrollTop()>=700){
 
    //         scrollButton.fadeIn(500);

    //       }else{

    //         scrollButton.fadeOut(500);

    //       }
    

    //   // Click on Button to Scroll Top 

    //   scrollButton.click(function(){
    //     $("html,body").animate({scrollTop:0},100);
    //    //   $(".Featuers ").animate({left: '250px'});
    //   });
     
    //    });

    // });
   

    //Loading Screen
    
   $(window).load(function (){

        $(".body").css("overflow","auto");

        $(".loading-overlay").css("backgroundColor","#ff0b22"); 

        $(".loading-overlay span").fadeOut(1000,function (){
          
            $(this).parent().fadeOut(2000,function (){
                  
                $(this).remove();
           }); 

       });   
   });
   