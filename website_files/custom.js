$(function() {

	"use strict";

    var wind = $(window);



    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });


    // button scroll to top
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            button_top = $(".button-top");

        if(bodyScroll > 700){

            button_top.addClass("button-show");

        }else{

            button_top.removeClass("button-show");
        }
    });

    console.log(data);
    
    for(var i = 0; i<data.length; i++){
        var newdiv = $('#gallery').append('<div id='+data[i].id+'></div>');
        $('#'+data[i].id).addClass('col-md-12').addClass('new-section');
        $('#'+data[i].id).append('<p class="section-sub-head"> / '+data[i].section_name+'</p>');
        $('#'+data[i].id).append('<div class="col-md-12" id="'+data[i].id+'_sub"></div>');
        
        for(var j=0; j<data[i].entities.length;j++){
            var project = data[i].entities[j]
            $('#'+data[i].id+'_sub').append('<div class="col-md-4 project-tile" id="'+data[i].id+'-'+project.id+'" data-toggle="modal" data-target="#project-descrip"></div>');
            $('#'+data[i].id+'-'+project.id).append('<img class="img img-responsive tile" src="'+project.image+'"></img>');
            $('#'+data[i].id+'-'+project.id).append('<p class="tile-text">'+project.name+'</p>');
            $('#'+data[i].id+'-'+project.id).append('<p class="tile-text-hover">'+project.subhead+'</p>');
            $('#'+data[i].id+'-'+project.id).append('<div class="tile-overlay"></div>');
        }
    }
    


});
