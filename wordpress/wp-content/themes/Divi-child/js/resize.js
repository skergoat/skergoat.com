$(window).bind("load", function() {

    // enable scroll after resize

    function resizeend() {

        if(!$('body').hasClass('offWheel')) {

            if (new Date() - rtime < delta) {
                setTimeout(resizeend, delta);
            } else {
                timeout = false;
                $('body').removeClass('resize');
            } 
        }
    }

    function scrollLeft(x) {

        var left = x.left;

        $('html, body').animate({ 
            scrollLeft:left + "px"
        }, 0);

    }

     function scrollLeftTop(x) {

        var left = x.left;
        var top = x.top;

        $('html, body').animate({ 
            scrollLeft: left + "px",
            scrollTop:top + "px"
        }, 0);

    }

    var rtime;
    var timeout = false;
    var delta = 200;

    $(window).resize(function() {

        var body_id = $('body').attr('id');
        var name = $('#info-name').text();
        var getPageId = $(name + ' .page').attr('id');
        var height = $('#' + getPageId).height();

        // resize height 

        $('#main-2').css({'max-height':height, 'height':height});

        // resize position left

        // main 2
        if($('body').hasClass('offWheel')) {

            if($('#span-info').hasClass('who')) {

                x = $('#sub-1').position();

            } 
            else {

                var x = $('#sub-' + body_id).position();
            }

            scrollLeft(x);

        }

        // main 
        else {

            // disable scroll to keep the same 'body' id and stay at current section 
            $('body').addClass('resize');

            // if($(this).width() > 450) {

                

            // } 
            // if($(this).width() <= 450) {

            //     $('#main').css('display', 'block');
            // }

            // menu and boutons position

            if($('.hamburger').hasClass('responsive')) {

                if($(this).width() > 780) {

                    $('nav').animate({'height':'90px'}, 0);

                    $('#go-right').css('right', '0px');
                    $('#go-left').css({'left' : '0px', 'right':'auto'});

                }
                if($(this).width() <= 780) {

                    $('nav').animate({'height':'345px'}, 0);

                    if($(this).width() <= 780 && $(this).width() >= 450) {

                        $('#go-right').css('right', '-100px');
                        $('#go-left').css({'left' : '-100px', 'right':'auto'});
                    }
                    
                    if($(this).width() <= 450) {

                        $('#go-right').css('right', '-100px');
                        $('#go-left').css({'left':'auto', 'right':'-100px'});
                    }
        
                }
                
            }
            else {

                if($(this).width() > 780) {

                    $('nav').animate({'height':'90px'}, 0);

                    $('#go-right').css('right', '0px');
                    $('#go-left').css({'left' : '0px', 'right':'auto'});

                }
                if($(this).width() <= 780) {

                    $('nav').animate({'height':'55px'}, 0);

                    if($(this).width() <= 780 && $(this).width() >= 450) {

                        $('#go-right').css('right', '0px');
                        $('#go-left').css({'left' : '0px', 'right':'auto'});
                    }
                    
                    if($(this).width() <= 450) {

                        $('#go-right').css('right', '5px');
                        $('#go-left').css({'left':'auto', 'right':'5px'});
                    }
        
                }

            }
          
            if($(this).width() > 450) {

                // main 

                $('#main').css('display', 'flex');

                // menu color 

                $('.hamburger span').css({'transition':'0.3s', 'background':'#7025c1'});
                $('#menu-mobile').css('background', '#1f0731');
                $('#menu-mobile li').css('border-top', '1px solid  #7025c1');
                $('#menu-mobile li a').css('color', 'white');

                // background color on desktop 

                $('#main').css('transition', '0s').css('background', 'transparent');
                $("#background-0").css("top", "0px");

            } 
            else if($(this).width() <= 450) {

                // main 

                $('#main').css('display', 'block');


                // background color on mobile 

                var scrollTop = $(this).scrollTop();

                var height = $('.section').height();
                height = parseInt(height);

                if(scrollTop > -1 && scrollTop <= height * (70 / 100)) { 

                    $('#main').css({'transition':'0s', 'background':'#3F0E63'});
                }

                if(scrollTop >= height * (70 / 100) && scrollTop <= (height * 2 * 80 / 100)) {

                    $('#main').css({'transition':'0s', 'background':'#EB5F74'});

                }

                if(scrollTop >= (height * 2 * 80 / 100) && scrollTop <= (height * 3  * 90 / 100)) {

                    $('#main').css({'transition':'0s', 'background':'#4DD5C0'});

                }

                if(scrollTop >= (height * 3 * 90 / 100) && scrollTop <= (height * 4)) {

                    $('#main').css({'transition':'0s', 'background':'#FADC6F'});
                }

                if(scrollTop >= (height * 4 * 90 / 100) && scrollTop <= (height * 5)) {

                    $('#main').css({'transition':'0s', 'background':'#459CE7'});

                }

                if(scrollTop >= (height * 5 * 95 / 100) && scrollTop <= (height * 6)) {

                    $('#main').css({'transition':'0s', 'background':'#4DD5C0'});

                }

            }

            var x = $('#section-' + body_id).position();
            scrollLeftTop(x);

            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeend, delta);
            }

        }

    });

});