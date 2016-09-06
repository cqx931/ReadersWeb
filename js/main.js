var down = false;
var downX = 0;
var downY = 0;
var colW;

$(window).resize(function () { 

    colW = $(".col-1-6").css("width");
    $(".sideNav").css("width",colW);

});

$(document).scroll(function(){

    if($(window).scrollTop() > 550){ 
        colW = $(".col-1-6").css("width")
        $(".sideNav").css("width",colW);
        $(".sideNav").addClass("fix");

        $("#navFixed").css("display", "inline-block");
        $("#navNor").css("opacity", "0");
    }
    else {
        $(".sideNav").removeClass("fix");
        $("#navNor").css("opacity", "100");
        $("#navFixed").css("display", "none");
    }

});

$(document).ready(function() { 
    //mobile nav
    var tmp =  $('.sideNav').css("display");
    if(tmp == "none"){  
        $('.site-navigation').click(function(){
            $(".menu").animate({width:'toggle'},350);
        });
         var href = $("#navFixed a").eq(-2).attr("href");
         if(href == "installations.html#installationNav")
             $("#navFixed a").eq(-2).attr('href','installations.html#top'); 
         else
             $("#navFixed a").eq(-2).attr('href','../installations.html#top'); 
    }
    else{
    //logo link back to homepage
    var homepageURL = $("#navFixed li a").eq(0).attr("href");
    $(".logo").html(' <a href="' + homepageURL + '"></a>');
    }
        

    //readers page video control bar
    $('video').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
    });
    
    //installation nav
    $('#installationNav img').hover(function(){
       var target = "#installationSideNav ." + this.className;
       console.log(this.className);
       $( target ).toggleClass( "hover" );
    });

}); 