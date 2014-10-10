var $caseStudy = function () {
    var artistBoxActivated = false;
    var beforeBoxActivated = false;
    var beforeBox;
    var arrowLeft;
    var arrowRight;
    var moveLeft;
    var moveRight;
    var animating = false;
    var body;
    var html;
    var htmlBody;
    var beforeAndAfterLeft;
    var beforeAndAfterRight;
    var bounce = 60;
    var currentRow = 0;
    var currentRowTotal = 0;
    var counter;
    var currentRowXY;
    var currentRowLeft;
    var currentImgNo = 0;
    var currentSection = 0;
    var currentSectionNo = 0;
    var easingType = 'easeInOutCubic';
    var firstLoad = true;
    var winningSplashDone = false;
    var homeSlideshowTimer;
    var images;
    var aiaViewer;
    var imgViewer;
    var imgScroller;
    var imgScrollerXY;
    var imgScrollerTop;
    var info;
    var artistBox;
    var infoWide;
    var infoArticleWidth;
    var infoDivs;
    var infoDivHeights = [];
    var infoDivWidths = [];
    var infoCurrentHeight = 0;
    var infoBox;
    var infoScroller;
    var infoScrollerItem;
    var infoToggle;
    var infoWrap;
    var infoWidth;
    var infoActive = true;
    var isProcessOpen = false;
    var isIE9 = $('.lt-ie9').length;
    var loader;
    var looping = false;
    var caseStudy = {};
    var caseStudyHeader;
    var caseStudyFooter;
    var newSectionNo = 0;
    var rows;
    var scrollActive = false;
    var sections;
    var sectionCount = 0;
    var sectionLinks;
    var siteW = $(window).width();
    var siteH = $(window).height();
    var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    var currentOrientation = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';
    var isTouch = $('.touch').length;


    var slides;
    var slidesProcess;
    var slideTimer;
    var speed = 1000;
    var resizeTimer;
    var lsmLogoShowing = false;
    var loadedUrls = new Array();
    var introTitleShowing = true;

    //flags
    var isAbout = false;
    var isCollaborations = false;
    var isHome = false;
    var isNews = false;
    var isBlackOverlay = false;

    caseStudy.initVars = function () {
        artistBox = $('.artist-box');
        beforeBox = $('.before-image-box');
        arrowLeft = $('.arrow-left');
        arrowRight = $('.arrow-right');
        beforeAndAfterLeft = $('.before');
        beforeAndAfterRight = $('.after');
        moveLeft = $('.move-left');
        moveRight = $('.move-right');

        body = $('body');
        counter = $('.counter');
        html = $('html');
        htmlBody = $('html,body');
        images = $('.img');
        aiaViewer = $('.aia-viewer');
        imgViewer = $('.img-viewer');
        imgScroller = imgViewer.find('.img-scroller');
        infoWide = $('.item.wide');
        infoDivs = $('.info div');

        isHome = $('body.home');
        isAbout = $('body.about');
        isCollaborations = $('body.collaborations');

        loader = $('.loader');
        info = $('.info');
        infoWidth = info.width();
        infoBox = info.find('div');
        infoScroller = info.find('.info-scroller');
        infoScrollerItem = info.find('.item');
        infoToggle = info.find('.info-toggle');
        infoWrap = info.find('.info-wrap');
        rows = $('.row');
        sections = $('section');
        sectionLinks = $('.nav-section a');
        sectionCount = sections.length;
        slides = $('.slide');

        if(isAbout.length > 0){
            isAbout = true;
        }else{
            isAbout = false;
        }
        if(isCollaborations.length > 0){
            isCollaborations = true;
            introTitleShowing = false;
        }else{
            isCollaborations = false;
        }

        if (isHome.length > 0) {
            /* window.console.log('Home'); */
            isHome = true;
            $.each(infoDivs, function (i, val) {
                //crude fix to get invisible element heights
                $(val).css({
                    position: 'absolute',
                    visibility: 'hidden',
                    display: 'block'
                });
                infoDivHeights.push($(val).outerHeight(true));
                infoDivWidths.push($(val).outerWidth(true));
                $(val).css({
                    position: 'absolute',
                    visibility: 'visible',
                    display: 'none',
                    bottom: 0
                });

            });

        } else {
            isHome = false;
            if (!isAbout) {
                $.each(infoDivs, function (i, val) {
                    $(val).css({
                        position: 'absolute',
                        visibility: 'hidden',
                        display: 'block'
                    });

                    if($(val).find('h2').text().toLowerCase() == "process" || $(val).find('p').length == 0){
                        infoDivHeights.push(44);
                        $(val).addClass('info-closed').addClass('hide-toggle');
                    }else{
                        infoDivHeights.push($(val).outerHeight(true));
                    }


                    $(val).css({
                        position: 'static',
                        visibility: 'visible',
                        display: 'none'
                    });

                });
            }

        }





        //process slides
        var allProcessSlides = $('#process .slide');
        slidesProcess = $();
        /* window.console.log('Number of process slides: '+allProcessSlides.length); */
        $.each(allProcessSlides, function(i,val){
            var imgCount = $(val).find('.img');
            /* window.console.log('Process double images found - '+imgCount); */
            if(imgCount.length > 1){
                slidesProcess = slidesProcess.add($(val));
            }
        });

        if(slidesProcess.length == 0){
            beforeAndAfterLeft.remove();
            beforeAndAfterRight.remove();
        }

        var mouseTimer;
        var crossingOver = false;
        /*
         allProcessSlides.mousemove(function(event){
         clearTimeout(mouseTimer);


         function crossOverSlides(event){
         var left = event.pageX;


         if(left < (siteW*0.4)){
         if(!crossingOver){
         crossingOver = true;
         imgRevealer.stop().animate({
         width:siteW
         },speed/2, easingType,function(){
         crossingOver = false;
         });
         beforeAndAfterLeft.fadeTo(speed/2,0.0);
         beforeAndAfterRight.fadeTo(speed/2,0);
         }
         }else if((left > (siteW*0.4)) && (left < (siteW*0.60))){
         if(!crossingOver){
         crossingOver = true;
         imgRevealer.stop().animate({
         width:(siteW/2)
         },speed/2, easingType,function(){
         crossingOver = false;
         });
         beforeAndAfterLeft.fadeTo(speed/2,1);
         beforeAndAfterRight.fadeTo(speed/2,1);
         }
         }else{
         if(!crossingOver){
         crossingOver = true;
         imgRevealer.stop().animate({
         width:0
         },speed/2, easingType,function(){
         crossingOver = false;
         });
         beforeAndAfterLeft.fadeTo(speed/2,0);
         beforeAndAfterRight.fadeTo(speed/2,0.0);
         }
         }
         }
         mouseTimer = setTimeout(function(){
         crossOverSlides(event);
         }, 100);

         });
         */
        var mX = siteW / 2;
        function checkForDirection(){
            beforeAndAfterLeft.mousemove(function(e){
                if (e.pageX < mX) {
                    if(!crossingOver){
                        /* 						window.console.log('showing left'); */
                        beforeAndAfterLeft.trigger('mouseover');
                    }
                }else{
                    if(!crossingOver){
                        beforeAndAfterRight.trigger('mouseover');
                        /* 						window.console.log('showing right'); */
                    }
                }
                mX = e.pageX;
            });
            beforeAndAfterRight.mousemove(function(e){
                if (e.pageX < mX) {
                    if(!crossingOver){
                        /* 						window.console.log('showing left'); */
                        beforeAndAfterLeft.trigger('mouseover');
                    }
                }else{
                    if(!crossingOver){
                        /* 						window.console.log('showing right'); */
                        beforeAndAfterRight.trigger('mouseover');
                    }
                }
                mX = e.pageX;
            });
        }

        function stopCheckingForDirection(){
            beforeAndAfterLeft.unbind('mousemove');
            beforeAndAfterRight.unbind('mousemove');
        }

        if(isTouch){
            beforeAndAfterLeft.bind('touchend', function(e){
                e.stopPropagation();
                var imgRevealer = $('.slide.current .img-revealer');
                if(!crossingOver){
                    crossingOver = true;
                    imgRevealer.stop().animate({
                        width:siteW
                    },speed/2, easingType,function(){
                        isProcessOpen = true;
                        crossingOver = false;
                        beforeAndAfterLeft.hide();
                        beforeAndAfterRight.hide();
                    });
                    beforeAndAfterLeft.fadeTo(speed/2,0);
                    beforeAndAfterRight.fadeTo(speed/2,0);
                }
            });

            beforeAndAfterRight.bind('touchend', function(e){
                e.stopPropagation();
                var imgRevealer = $('.slide.current .img-revealer');
                if(!crossingOver){
                    crossingOver = true;
                    imgRevealer.stop().animate({
                        width:0
                    },speed/2, easingType,function(){
                        isProcessOpen = true;
                        crossingOver = false;
                        beforeAndAfterLeft.hide();
                        beforeAndAfterRight.hide();
                    });
                    beforeAndAfterLeft.fadeTo(speed/2,0);
                    beforeAndAfterRight.fadeTo(speed/2,0);
                }
            });

            $('.row[data-name="Process"]').bind('touchend', function(e){
                var imgRevealer = $('.slide.current .img-revealer');
                if(!crossingOver){
                    beforeAndAfterLeft.show();
                    beforeAndAfterRight.show();

                    checkForDirection();
                    crossingOver = true;
                    imgRevealer.stop().animate({
                        width:(siteW/2)
                    },speed/2, easingType,function(){
                        crossingOver = false;
                        isProcessOpen = false;
                    });
                    beforeAndAfterLeft.fadeTo(speed/2,1);
                    beforeAndAfterRight.fadeTo(speed/2,1);
                }
            });

        }

        beforeAndAfterLeft.hover(function(){
            var imgRevealer = $('.slide.current .img-revealer');
            if(!crossingOver){
                stopCheckingForDirection();
                crossingOver = true;
                imgRevealer.stop().animate({
                    width:siteW
                },speed/2, easingType,function(){
                    crossingOver = false;
                });
                beforeAndAfterLeft.fadeTo(speed/2,0);
                beforeAndAfterRight.fadeTo(speed/2,0);
            }
        },function(){
            var imgRevealer = $('.slide.current .img-revealer');
            if(!crossingOver){
                checkForDirection();
                crossingOver = true;
                imgRevealer.stop().animate({
                    width:(siteW/2)
                },speed/2, easingType,function(){
                    crossingOver = false;
                });
                beforeAndAfterLeft.fadeTo(speed/2,1);
                beforeAndAfterRight.fadeTo(speed/2,1);
            }
        });

        beforeAndAfterRight.hover(function(){
            var imgRevealer = $('.slide.current .img-revealer');
            if(!crossingOver){

                stopCheckingForDirection();

                crossingOver = true;
                imgRevealer.stop().animate({
                    width:0
                },speed/2, easingType,function(){
                    crossingOver = false;
                });
                beforeAndAfterLeft.fadeTo(speed/2,0);
                beforeAndAfterRight.fadeTo(speed/2,0);
            }
        },function(){

            var imgRevealer = $('.slide.current .img-revealer');
            if(!crossingOver){
                checkForDirection();
                crossingOver = true;
                imgRevealer.stop().animate({
                    width:(siteW/2)
                },speed/2, easingType,function(){
                    crossingOver = false;
                });
                beforeAndAfterLeft.fadeTo(speed/2,1);
                beforeAndAfterRight.fadeTo(speed/2,1);
            }
        });


        caseStudyHeader = $('.header');
        caseStudyFooter = $('.footer');


        infoArticleWidth = $('.info article').first().width();
        var allowedArticlesWidth = siteW * 0.8;
        var maxAllowedArticles = Math.floor(allowedArticlesWidth / (infoArticleWidth + 10));
        var newArticlesWidth = maxAllowedArticles * (infoArticleWidth);


        $.each(infoWide, function (i, val) {
            var articleCount = $(val).find('article');
            articleCount = articleCount.length;

            var articleSections = articleCount / maxAllowedArticles;

            if(articleCount <= maxAllowedArticles){
                $(val).addClass('no-arrows');
            }

            $(val).height('auto');
            $(val).height($(val).height());

            $(val).width(newArticlesWidth).css({
                left: '50%',
                right: 'auto',
                top: '50%',
                marginLeft: -(newArticlesWidth / 2),
                marginTop: -($(val).height() / 2),
                width: maxAllowedArticles * (infoArticleWidth + 10)
            }).attr('data-move-by', maxAllowedArticles).attr('data-count', articleCount).attr('data-sections', articleSections - 1).attr('data-current', 0);
            if(articleCount <= maxAllowedArticles){
                //window.console.log('Show all');
                var widthToFit = (infoArticleWidth + 10) * articleCount;
                $(val).width(widthToFit).css({
                    marginLeft: -(widthToFit/2)
                });
            }
        });
    };

    caseStudy.updatePositionInfo = function () {
        currentRowXY = currentRow.position();
        currentRowLeft = currentRowXY.left;
        imgScrollerXY = imgScroller.position();
        imgScrollerTop = imgScrollerXY.top;
    };

    caseStudy.initListeners = function () {
        //resize
        $(window).on('resize',caseStudy.resizeSite);
        //hashchange
        $(window).hashchange(function () {
            caseStudy.parseHash();
        });
        var photoCredit = $('.photography-credits');
        var originalCredit = photoCredit.text();
        sectionLinks.click(function () {
            window.location.href = $(this).attr('href');
            if($(this).attr('data-photo-credits')){
                //window.console.log('Section credit found');
                photoCredit.text("IMAGES \u00A9 "+$(this).attr('data-photo-credits')+" AND LSM");
            }else{
                photoCredit.text(originalCredit);
            }
        });
        //arrow keys
        $(window).keyup(function (e) {
            caseStudy.updatePositionInfo();

            if (e.keyCode === 37) { // left
                if(!animating){
                    arrowLeft.trigger('click');
                }
            } else if (e.keyCode === 39) { // right
                if(!animating){
                    arrowRight.trigger('click');
                }
            } else if (e.keyCode === 38) { // up
                caseStudy.slideDown(imgScrollerTop);
            } else if (e.keyCode === 40) { // down
                caseStudy.slideUp(imgScrollerTop);
            }
        });

        $(window).keydown(function (e) {
            e.preventDefault();
        });

        //swipe
        //mobile actions
        $('.touch body').swipe({
            threshold: 1,
            swipeStatus: function (event, phase, direction, distance) {
                event.stopPropagation();
                if (phase === 'start') {
                    /* window.console.log('Started touch'); */
                    caseStudy.updatePositionInfo();
                }

                var newLeft, newTop;
                if (direction === 'left') {
                    if (phase === 'start') {
                        if(isProcessOpen){
                            $('.row[data-name="Process"]').trigger('touchend');
                        }
                    }
                    if (phase === 'end') {
                        caseStudy.slideLeft();
                    }
                } else if (direction === 'right') {
                    if (phase === 'start') {
                        if(isProcessOpen){
                            $('.row[data-name="Process"]').trigger('touchend');
                        }
                    }
                    if (phase === 'end') {
                        caseStudy.slideRight();

                    }
                } else if (direction === 'up') {
                    newTop = 0 - distance;
                    if (phase === 'end') {
                        caseStudy.slideUp();
                    }
                } else if (direction === 'down') {
                    if (phase === 'end') {
                        caseStudy.slideDown();
                    }
                }

            }
        });

        //info
        infoToggle.click(function () {
            if (infoActive) {
                infoActive = false;
                caseStudy.toggleInfo();
            } else {
                infoActive = true;
                caseStudy.toggleInfo();
            }
        });
    };

    caseStudy.initScroll = function () {

        var imgViewerScrollTop = body.scrollTop();
        var maxScroll = siteH * sectionCount;
        var newSectionNo;

        var timer;
        var swipeTimer;
        var lastPos = 0;
        var scrolledOnce = false;
        var childScrolling = false;

        var refresh = function () {
            if (!scrolledOnce) {
                scrolledOnce = true;
                /* window.console.log('stopped'); */

                imgViewerScrollTop = $(window).scrollTop();

                if (imgViewerScrollTop > lastPos) {
                    /* window.console.log("Going down"); */
                    imgViewerScrollTop += (siteH * 0.95);
                } else if (imgViewerScrollTop < lastPos) {
                    /* window.console.log("Going up"); */
                    imgViewerScrollTop += (siteH * 0.05);
                }

                /* window.console.log('Max scroll allowed: ' + maxScroll); */
                newSectionNo = Math.floor((imgViewerScrollTop / maxScroll) * sectionCount);
                /* window.console.log('New section no: ' + newSectionNo); */

                currentSectionNo = newSectionNo;
                sectionLinks.eq(currentSectionNo).trigger('click');
                /* caseStudy.updateUI(); */

                var newTop = -currentSectionNo * siteH;
                htmlBody.stop().animate({
                    scrollTop: -newTop
                }, speed, easingType, function () {
                    animating = false;
                    lastPos = $(window).scrollTop();
                });

            }
        };

        $(window).mousedown(function () {
            scrolledOnce = false;
        });

        //scroll
        $(window).scroll(function () {
            if (!childScrolling) {
                clearTimeout(timer);
                if (firstLoad) {
                    setTimeout(function () {
                        timer = setTimeout(refresh, 300);
                    }, 1000);

                } else {
                    timer = setTimeout(refresh, 300);
                }
            }
        });

        $('.item.table').hover(function () {
            childScrolling = true;
        }, function () {
            childScrolling = false;
        });
        $('.item.table').bind('mousewheel', function () {
            return true;
        });


        $(window).bind('mousewheel', function (e) {
            e.preventDefault();
            if (!childScrolling) {
                clearTimeout(swipeTimer);

                if (e.originalEvent.wheelDelta / 120 > 0) {
                    /* window.console.log('scrolling up !'); */
                    swipeTimer = setTimeout(function () {
                        caseStudy.slideDown();
                    }, 100);
                } else {
                    /* window.console.log('scrolling down !'); */
                    swipeTimer = setTimeout(function () {
                        caseStudy.slideUp();
                    }, 100);
                }
            }
        });

    };

    caseStudy.initUI = function () {
        aiaViewer.height(siteH);
        imgViewer.height(siteH);
        $.each(rows, function (i, item) {
            var noOfImages = $(item).find('.slide');
            noOfImages = noOfImages.length;
            //If Home, remove one images as last one is a dummy to create the loop

            var newW = siteW * (noOfImages + 1);
            $(item).attr('data-count', (noOfImages + 1));
            $(item).width(newW);
        });

        //images.width(siteW);
        slides.width(siteW);
        images.width(siteW);
        sections.height(siteH);

        if (isAbout) {
            //resize about section items
            $.each(infoScrollerItem, function (i, item) {
                var newH = siteH - 200 - (caseStudyHeader.height() * 3);
                $(item).height(newH);
                /* $(item).width(infoWrap.width() - 60); */
            });
        }

        if (isBlackOverlay) {
            info.width(siteW);

            var allowedArticlesWidth = siteW * 0.8;
            var maxAllowedArticles = Math.floor(allowedArticlesWidth / (infoArticleWidth + 10));
            var newArticlesWidth = maxAllowedArticles * (infoArticleWidth);


            $.each(infoWide, function (i, val) {
                var articleCount = $(val).find('article');
                articleCount = articleCount.length;

                var articleSections = articleCount / maxAllowedArticles;
                $(val).width(newArticlesWidth).css({
                    marginLeft: -(newArticlesWidth / 2),
                    width: maxAllowedArticles * (infoArticleWidth + 10)
                }).attr('data-move-by', maxAllowedArticles).attr('data-count', articleCount).attr('data-sections', articleSections - 1).attr('data-current', 0);


            });


        }

        //If full screen covered with black overlay, then resize to fit screen
        /*
         if (isBlackOverlay) {
         info.width(siteW);
         }
         */


    };

    caseStudy.toggleInfo = function () {
        if (infoActive) {
            info.addClass('active');
            if(isIE9){
                info.find('.info-toggle').first().fadeOut();
                info.find('.info-toggle-two').fadeIn();
            }
            info.animate({
                height: infoDivHeights[currentSectionNo]
            }, speed / 2, easingType);

            infoDivs.animate({
                paddingTop: 30,
                paddingBottom: 30
            }, speed / 2, easingType);

            infoDivs.find('h2').animate({
                marginBottom: 5,
            }, speed / 2, easingType);

            infoDivs.find('p').slideDown(speed / 2, easingType);
        } else {
            info.removeClass('active');
            if(isIE9){
                info.find('.info-toggle').first().fadeIn();
                info.find('.info-toggle-two').fadeOut();
            }
            info.animate({
                height: 44
            }, speed / 2, easingType);

            infoDivs.find('h2').animate({
                marginBottom: 8,
            }, speed / 2, easingType);

            infoDivs.animate({
                paddingTop: 10,
                paddingBottom: 5
            }, speed / 2, easingType);
            infoDivs.find('p').slideUp(speed / 2, easingType);
        }

    };
    caseStudy.initImgToggle = function () {
        var noOfImgsInSection = $('.slide.current').find('.img');
        var imgToggleBtns = $('.btn-toggle');
        if (noOfImgsInSection.length > 1) {
            info.addClass('process');

            imgToggleBtns.on('click', function () {
                var index = $('.btn-toggle').index($(this));
                var images = $('.slide.current').find('.img');
                imgToggleBtns.removeClass('current');
                imgToggleBtns.eq(index).addClass('current');

                if (index === 0 && images.eq(0).is(":visible")) {
                    images.eq(1).fadeIn();
                    images.eq(0).fadeOut();
                }
                if (index === 1 && images.eq(1).is(":visible")) {
                    images.eq(0).fadeIn();
                    images.eq(1).fadeOut();
                }
            });
        } else {
            info.removeClass('process');
        }
    };

    caseStudy.checkForHideToggle = function(){
        if(infoDivs.eq(currentSectionNo).hasClass('hide-toggle')){
            info.addClass('hide-toggle');
        }else{
            info.removeClass('hide-toggle');
        }
    };

    caseStudy.updateUI = function (imgNo, manual) {

        //reset all images after animation
        infoBox.find('.btn-toggle').removeClass('current');
        infoBox.find('.btn-toggle').eq(0).addClass('current');

        //Reset current slide
        slides.removeClass('current');
        currentRow.find('.slide').eq(currentImgNo - 1).addClass('current');

        //fading process slides
        /*
         slidesProcess.find('.img:eq(1)').fadeIn();
         slidesProcess.find('.img:eq(0)').fadeOut();
         */

        currentRowTotal = $('.slide.current').parent().attr('data-count');

        //Update section links
        sectionLinks.removeClass('current');
        sectionLinks.eq(currentSectionNo).addClass('current');

        //Artist box
        //artist box
        var artistName = $('.slide.current').find('.img');
        artistName = artistName.attr('data-artist');
        artistBox.animate({
            width:0
        },speed/2, easingType,function(){
            if(artistName){
                artistBox.find('p').text('Artist: '+artistName);
            }

        });
        var beforeImage = $('.slide.current').find('.img');
        beforeImage = beforeImage.attr('data-before-url');
        beforeBox.animate({
            width:0
        },speed/2,easingType,function(){
            if(beforeImage){
                beforeBox.find('img').attr('src',beforeImage);
            }
        });

        //Update text
        if (!isAbout) {
            //Case Study
            var sectionTitle = rows.eq(currentSectionNo).attr('data-name');
            var currentDiv = infoDivs.filter(':visible');

            if (sectionTitle !== currentDiv.find('h2').text()) {
                /* window.console.log('Animating in new content'); */

                //update counter
                counter.text(currentImgNo + '/' + (currentRowTotal - 1));

                if (!isHome) {
                    //NOT HOME
                    info.animate({
                        width: 0
                    }, (speed / 2), easingType, function () {
                        //if NOT home, animate content by section no.
                        infoDivs.hide().eq(currentSectionNo).show();
                        infoCurrentHeight = infoDivHeights[currentSectionNo];
                        if (infoActive) {
                            info.height(infoCurrentHeight);
                        }


                        //check if intro title showing
                        if (!introTitleShowing) {
                            //slide out slower
                            setTimeout(function () {
                                info.animate({
                                    width: infoWidth
                                }, (speed / 2), easingType);

                                if(artistName){
                                    artistBox.animate({
                                        width:206
                                    },(speed/2), easingType);
                                }

                                if(beforeImage){
                                    if(siteW  < 1024){
                                        beforeBox.animate({
                                            width:180
                                        },(speed/2),easingType);
                                    }else{
                                        beforeBox.animate({
                                            width:342
                                        },(speed/2),easingType);
                                    }
                                }
                            }, 300);
                            /* if() */
                        }



                    });

                    caseStudy.toggleInfo();
                    caseStudy.initImgToggle();
                    caseStudy.checkForHideToggle();

                } else {
                    //if HOME - do it by images no (because going horizontal instead of vertical)
                    animating = true;
                    var infoSpeed = speed/2;

                    function homeNextSlide(customSpeed){

                        var revealSpeed = speed/2;
                        if(customSpeed){
                            revealSpeed = customSpeed;
                        }

                        infoDivs.hide().eq(currentImgNo-1).show();

                        //set height instantly                        
                        infoCurrentWidth = infoDivWidths[currentImgNo-1];
                        if (infoActive) {
                            info.css('height', infoDivHeights[currentImgNo-1]);

                            if (!lsmLogoShowing) {
                                //slide out slower
                                setTimeout(function () {
                                    info.animate({
                                        width: infoCurrentWidth
                                    }, revealSpeed, easingType);

                                    if(artistName){
                                        artistBox.animate({
                                            width:206
                                        },revealSpeed, easingType);
                                    }

                                    if(beforeImage){
                                        if(siteW  < 1024){
                                            beforeBox.animate({
                                                width:180
                                            },revealSpeed,easingType);
                                        }else{
                                            beforeBox.animate({
                                                width:342
                                            },revealSpeed,easingType);
                                        }
                                    }

                                }, 300);
                            }
                        }

                    }
                    //if looping, don't close the info box, this creates illusion of loop!
                    if(!looping){
                        info.animate({
                            width: 0
                        }, infoSpeed, easingType, homeNextSlide);
                    }else{
                        homeNextSlide(0);
                        looping = false;
                    }

                    //check if last slide, then reset to first
                    if((parseInt(currentImgNo)+1) == currentRowTotal){
                        setTimeout(function(){
                            currentRow.css('left',0);
                            sectionLinks.eq(0).trigger('click');
                            looping = true;
                        },speed);
                    }

                }
            } else {
                //update counter
                counter.text(currentImgNo + '/' + (currentRowTotal - 1));
                setTimeout(function(){
                    if(artistName){
                        artistBox.animate({
                            width:206
                        },(speed/2), easingType);
                    }
                    if(beforeImage){
                        if(siteW  < 1024){
                            beforeBox.animate({
                                width:180
                            },(speed/2),easingType);
                        }else{
                            beforeBox.animate({
                                width:342
                            },(speed/2),easingType);
                        }
                    }
                }, 300);
            }


        } else {
            //About
            var newLeft = -currentSectionNo * infoWrap.width();
            var normalWidth = 503;
            /*             window.console.log('New Info Scroller Left: ' + newLeft); */

            infoScrollerItem.removeClass('current');
            infoScrollerItem.stop().fadeOut(speed, easingType);
            infoScrollerItem.eq(currentSectionNo).stop().fadeIn(speed, easingType).addClass('current');


            //If require full screen overlay
            if (isBlackOverlay) {
                normalWidth = siteW;
                //Only arrows for sections that need it
                if(!infoScrollerItem.hasClass('no-arrows')){
                    arrowLeft.fadeIn();
                    arrowRight.fadeIn();
                }
                /*
                 info.stop().animate({
                 width: siteW
                 }, speed, easingType);
                 */
            } else {
                arrowLeft.fadeOut();
                arrowRight.fadeOut();
            }

            if(isNews){
                normalWidth = 0;
            }

            if ((info.width() === siteW) && isBlackOverlay) {

            } else {
                info.stop().animate({
                    width: 0
                }, speed / 1.4, easingType, function () {
                    infoWrap.width(normalWidth - 60);
                    info.stop().animate({
                        width: normalWidth
                    }, speed / 1.4, easingType);
                });
                var artistName = $('.slide.current').find('.img');
                artistName = artistName.attr('data-artist');
                if(artistName){
                    setTimeout(function(){
                        artistBox.find('p').text('Artist: '+artistName);
                        artistBox.stop().animate({
                            width:206
                        },(speed/2));
                    }, speed);
                }
            }

        }
    };

    //Animations class.  Contains pre set animations with simple callbacks.
    caseStudy.animations = (function () {
        var animations = {};

        animations.navArrowsIn = function (callback) {
            arrowLeft.animate({
                left: 0
            }, speed / 2, easingType);
            arrowRight.animate({
                right: 0
            }, speed / 2, easingType, function () { if (callback) callback(); });
        };

        animations.headerFooterIn = function (callback) {
            caseStudyHeader.animate({
                top: 0
            }, speed / 2, easingType);
            caseStudyFooter.animate({
                bottom: 0
            }, speed / 2, easingType, function () { if (callback) callback(); });
        };

        animations.infoPanelsIn = function (callback) {
            if (infoActive) {
                if(isHome){
                    info.height(infoDivHeights[currentImgNo - 1]);
                    info.animate({
                        width: infoDivWidths[currentImgNo - 1]
                    }, speed, easingType, function () { if (callback) callback(); });

                    info.on('click', function(){
                        var links = $(this).find('a');
                        window.location.href = links.eq(parseInt(currentImgNo)-1).attr('href');
                    });

                }else{
                    infoDivs.hide().eq(currentSectionNo).show();
                    infoCurrentHeight = infoDivHeights[currentSectionNo];
                    info.height(infoCurrentHeight);
                    info.animate({
                        width: infoWidth
                    }, speed, easingType, function () { if (callback) callback(); });
                    var artistName = $('.slide.current').find('.img');
                    artistName = artistName.attr('data-artist');
                    if(artistName){
                        artistBox.find('p').text('Artist: '+artistName);
                        artistBox.stop().animate({
                            width:206
                        },speed, easingType);
                    }
                    artistBoxActivated = true;
                    var beforeImage = $('.slide.current').find('.img');
                    beforeImage = beforeImage.attr('data-before-url');
                    if(beforeImage){
                        beforeBox.find('img').attr('src',beforeImage);
                        if(siteW  < 1024){
                            beforeBox.animate({
                                width:180
                            },(speed/2),easingType);
                        }else{
                            beforeBox.animate({
                                width:342
                            },(speed/2),easingType);
                        }
                    }
                    beforeBoxActivated = true;

                }
            }
        };

        return animations;

    })();

    caseStudy.firstVisitCheck = function () {
        //alert("hi");
        //var visited = $.cookie('visited');
        //window.console.log('Is this the first visit?: '+visited);
        //If isn't first visit hide header and footer
        //if(!visited && isHome){
        if (isHome) {
            lsmLogoShowing = true;
            arrowLeft.css({
                left:-arrowLeft.width()*2
            });
            arrowRight.css({
                right:-arrowRight.width()*2
            });

            caseStudyHeader.css({
                top:-caseStudyHeader.height()
            });
            caseStudyFooter.css({
                bottom:-caseStudyFooter.height()
            });
            info.width(0);

            var lsm = $('.lsm');
            var aia = $('.aia');

            aia.click(function(){
                window.location.href = "/home/about/#/news/1";
            });

            var aiaViewer = $('.aia-viewer');
            aiaViewer.css('width', siteW);
            var mainCarousel = $('#home-1');

            mainCarousel.css('left',siteW);
            lsm.delay(1000).fadeIn(speed/2,easingType).delay(2000).fadeOut(speed/2, easingType,function(){
                aia.fadeIn(speed/2,easingType).delay(4000).fadeOut(speed/2,easingType).delay(2000);

                setTimeout(function(){

                    //show original carousel
                    aiaViewer.animate({
                        left:-siteW
                    },speed);
                    mainCarousel.animate({
                        left:0
                    },speed);

                }, 7000);


                setTimeout(function(){

                    $.cookie('visited', true);
                    lsm.fadeOut(2000 , easingType, function () {
                        lsmLogoShowing = false;
                        caseStudy.animations.navArrowsIn();
                        caseStudy.animations.headerFooterIn(function () {
                            caseStudy.animations.infoPanelsIn();
                        });
                        if(isHome){
                            //homepage only slideshow
                            caseStudy.initSlideshow();
                        }
                    });

                }, 8000);



            });
        } else{
            //check for intro title
            var introTitle = $('.intro-title');
            if(introTitle.length > 0){
                introTitleShowing = true;
                arrowLeft.css({
                    left:-arrowLeft.width()*2
                });
                arrowRight.css({
                    right:-arrowRight.width()*2
                });
                info.width(0);
                setTimeout(function(){
                    introTitle.fadeOut(3000, easingType, function(){
                        introTitleShowing = false;
                        caseStudy.animations.navArrowsIn(function(){
                            caseStudy.animations.infoPanelsIn();
                        });
                    });
                }, 1000);
            }else{
                introTitleShowing = false;
            }
        }
    };

    caseStudy.initSlideshow = function(){
        function nextSlide(){
            arrowRight.trigger('click');
            homeSlideshowTimer = setTimeout(nextSlide, 5000);
        }
        homeSlideshowTimer = setTimeout(nextSlide, 5000);
    };

    /* Gallery */
    caseStudy.loadImages = function () {
        var curentRowImages = currentRow.find('.img');
        var totalLoaded = 0;

        function loadAllOtherImages(){
            totalLoaded = 0;
            $.each(images, function (i, val) {
                var thisImg = $(val);
                var thisUrl = thisImg.attr('data-url');
                //window.console.log('Loading:' + thisUrl);
                if ($.inArray( thisUrl, loadedUrls ) <= -1 ){
                    $("<img />")
                        .attr('src', thisUrl)
                        .load(function () {
                            loadedUrls.push(thisUrl)
                            thisImg.css({
                                backgroundImage: 'url("' + thisUrl + '")'
                            });
                            totalLoaded++;
                            if (totalLoaded === images.length) {
                                window.console.log('All images loaded');
                            }
                        });
                }else{
                    //window.console.log('URL already loaded: '+thisUrl);
                }
            });
        }

        $.each(curentRowImages, function (i, val) {
            var thisImg = $(val);
            var thisUrl = thisImg.attr('data-url');
            //window.console.log('Loading:' + thisUrl);
            if ( !$.inArray( thisUrl, loadedUrls ) > -1 ){
                $("<img />")
                    .attr('src', thisUrl)
                    .load(function () {
                        loadedUrls.push(thisUrl)
                        thisImg.css({
                            backgroundImage: 'url("' + thisUrl + '")'
                        });
                        totalLoaded++;
                        if (totalLoaded === curentRowImages.length) {
                            animating = true;
                            caseStudy.firstVisitCheck();
                            caseStudy.slideMoveVertical(speed,function(){
                                loader.animate({
                                    opacity: 0
                                }, (speed / 2), easingType, function () {
                                    $(this).remove();
                                    animating = false;
                                    loadAllOtherImages();
                                });
                            });
                        }
                    });
            }
        });
    };

    caseStudy.autoSlide = function () {
        clearTimeout(slideTimer);

        function move() {
            slideTimer = setTimeout(function () {
                move();
            }, 5000);
            if (currentImgNo < currentRowTotal) {
                arrowRight.trigger('click');
            }
        }
        move();
    };

    caseStudy.resetArticles = function(){
        //reset all positions for articles
        var itemNotCurrent = $('.item:not(".current")');
        var articlesNotCurrent = itemNotCurrent.find('.articles');
        articlesNotCurrent.css('left',0);
        itemNotCurrent.attr('data-current',0);
    };

    caseStudy.isProcessCheck = function(){
        var isProcess = false;
        isProcess = currentRow.attr('data-name').toLowerCase();
        if(isProcess == "process"){
            isProcess = true;
            info.addClass('process');
        }else{
            info.removeClass('process');
        }

    };
    caseStudy.slideMoveVertical = function (newSpeed, callback) {

        /* caseStudy.autoSlide(); */
        if(isTouch){
            $('.header a').trigger('mouseout');
        }
        //window.console.log(siteH);

        var localSpeed = speed;
        if (newSpeed) {
            localSpeed = newSpeed;
        }

        var newTop = -currentSectionNo * siteH;
        animating = true;

        if(!isHome){
            if(!isNews){
                htmlBody.stop().animate({
                    scrollTop: -newTop
                }, localSpeed, easingType, function () {
                    animating = false;
                    rows.not(currentSectionNo).css('left', 0);
                    caseStudy.resetArticles();
                });
            }else{
                setTimeout(function(){
                    caseStudy.resetArticles();

                    htmlBody.stop().animate({
                        scrollTop: -newTop
                    }, localSpeed, easingType, function () {
                        animating = false;
                        rows.not(currentSectionNo).css('left', 0);
                    });
                }, speed/2);
            }

            //iPad memory issue fix - hide rows further up or down the page
            if(isTouch){
                rows.show();
                rows.eq(currentSectionNo-2).hide();
                rows.eq(currentSectionNo+2).hide();
            }
            if(!isHome && !isAbout && !isNews){
                //must be in case study
                //if second images, close info panel
                caseStudy.isProcessCheck();
                setTimeout(function(){
                    if(currentImgNo == 1){
                        if(!infoActive){
                            infoToggle.first().trigger('click');
                        }
                    }
                }, 100);

            }


        }
        if(callback){
            setTimeout(function(){
                callback();
            }, speed/2);
        }

    };

    caseStudy.slideMoveHorizontal = function (newSpeed) {
        /*
         window.console.log('Moving horizontal');
         window.console.log('Home: '+isHome+', About: '+isAbout+', News: '+isNews);
         */



        var localSpeed = speed;
        if (newSpeed) {
            localSpeed = newSpeed;
        }
        var newLeft = (currentImgNo - 1) * -siteW;
        animating = true;
        currentRow.stop().animate({
            left: newLeft
        }, localSpeed, easingType, function(){
            animating = false;

            //reset fades on before and after
            beforeAndAfterLeft.fadeTo(speed/2,1);
            beforeAndAfterRight.fadeTo(speed/2,1);
        });


        if(!isHome && !isAbout && !isNews){
            //must be in case study
            //if second images, close info panel
            caseStudy.isProcessCheck();
            if(currentImgNo > 1){
                if(infoActive){
                    infoToggle.first().trigger('click');
                }
            }
        }
    };

    //About section news
    caseStudy.closeReadMore = function(){
        //close read more when going between articles
        var readMore = $('.read-more.active');
        if(readMore.length > 0){
            readMore.trigger('click');
        }
    };

    caseStudy.bounceLeft = function (newLeft, touch, position) {
        if (!newLeft) {
            newLeft = currentRowLeft;
        }
        if (!position) {
            position = newLeft;
        }

        function resetPosition() {
            currentRow.stop()
                .animate({
                    left: position
                }, 500, 'easeOutBounce');
        }

        if (touch) {
            resetPosition();
        } else {
            var newLeftWithBounce = newLeft - bounce;
            currentRow.stop()
                .animate({
                    left: newLeftWithBounce
                }, 250, easingType, function () {
                    resetPosition();
                });


        }
    };

    caseStudy.slideLeft = function (newLeft, touch) {

        caseStudy.closeReadMore();

        var imagesInRow = currentRow.attr('data-count');

        if (currentImgNo < (imagesInRow - 1)) {
            currentImgNo++;
            window.location.hash = '#/' + currentSection + '/' + currentImgNo;
        } else {
            //Home only has one section!
            if(!isHome){
                if ((currentSectionNo + 1) < sectionCount) {
                    currentSection++;
                    sectionLinks.eq(currentSectionNo + 1).trigger('click');
                } else {
                    caseStudy.bounceLeft(newLeft, touch);
                }
            }
        }
    };

    caseStudy.bounceRight = function (newLeft, touch) {
        function resetPosition() {
            currentRow.stop()
                .animate({
                    left: 0
                }, 500, 'easeOutBounce');
            if(isNews){
                $('.news-wrap').stop()
                    .animate({
                        left: 0
                    }, 500, 'easeOutBounce');
            }
        }

        if (touch) {
            resetPosition();
        } else {
            currentRow.stop()
                .animate({
                    left: +bounce
                }, 250, easingType, function () {
                    resetPosition();
                });
            if(isNews){
                $('.news-wrap').stop()
                    .animate({
                        left: +bounce
                    }, 250, easingType, function () {
                        resetPosition();
                    });
            }
        }
    };

    caseStudy.slideRight = function (newLeft, touch) {

        caseStudy.closeReadMore();

        if (currentImgNo > 1) {
            currentImgNo--;
            window.location.hash = '#/' + currentSection + '/' + currentImgNo;
        } else {
            if(!isNews){
                if ((currentSectionNo - 1) >= 0) {
                    sectionLinks.eq(currentSectionNo - 1).trigger('click');
                } else {
                    caseStudy.bounceRight(newLeft, touch);
                }
            }else{
                caseStudy.bounceRight(newLeft, touch);
            }
        }
    };

    caseStudy.bounceUp = function (newTop, touch, position) {
        /* window.console.log('new top ' + newTop); */
        if (!position) {
            position = newTop;
        }
        //animate to top
        function resetPosition() {
            imgScroller.stop().animate({
                top: position
            }, 500, 'easeOutBounce');
        }
        //If touch the top position already set
        var newTopWithBounce = newTop - bounce;
        if (touch) {
            resetPosition();
        } else {
            imgScroller.stop()
                .animate({
                    top: newTopWithBounce
                }, 250, easingType, function () {
                    resetPosition();
                });
        }
    };

    caseStudy.slideUp = function (newTop, touch, position) {
        if ((currentSectionNo + 1) < sectionCount) {
            var newSectionNo = currentSectionNo + 1;
            sectionLinks.eq(newSectionNo).trigger('click');
        } else {
            if (touch) {
                caseStudy.bounceUp(newTop, true, position);
            } else {
                caseStudy.bounceUp(newTop);
            }
        }
    };

    caseStudy.bounceDown = function (newTop, touch) {


        //animate to top
        function resetPosition() {
            imgScroller.stop()
                .animate({
                    top: 0
                }, 500, 'easeOutBounce');
        }
        //If touch the top position already set
        if (touch) {
            resetPosition();
        } else {
            imgScroller.stop()
                .animate({
                    top: +bounce
                }, 250, easingType, function () {
                    resetPosition();
                });
        }
    };

    caseStudy.slideDown = function (newTop, touch) {
        if (currentSectionNo > 0) {
            var newSectionNo = currentSectionNo - 1;
            sectionLinks.eq(newSectionNo).trigger('click');
        } else {
            if (touch) {
                caseStudy.bounceDown(true);
            } else {
                caseStudy.bounceDown();
            }
        }
    };

    caseStudy.articlesSlideLeft = function () {
        var currentItem = $('.item.wide.current');
        var currentArticlesParent = currentItem.find('.articles');
        var currentPos = currentItem.attr('data-current');
        var currentSections = currentItem.attr('data-sections');
        var currentWidth = currentItem.width();

        if (currentPos < currentSections) {
            currentPos++;
            currentItem.attr('data-current', currentPos);

            currentArticlesParent.animate({
                left: -currentWidth * currentPos
            }, speed, easingType);
        }else{
            caseStudy.slideLeft();
        }
    };

    caseStudy.articlesSlideRight = function () {
        var currentItem = $('.item.wide.current');
        var currentWidth = currentItem.width();
        var currentArticlesParent = currentItem.find('.articles');
        var currentPos = currentItem.attr('data-current');
        if (currentPos > 0) {
            currentPos--;
            currentItem.attr('data-current', currentPos);

            currentArticlesParent.animate({
                left: -currentWidth * currentPos
            }, speed, easingType);
        }else{
            caseStudy.slideRight();
        }
    };

    caseStudy.initGallery = function () {
        //load images
        caseStudy.loadImages();

        arrowLeft.click(function (e) {
            if(e.hasOwnProperty('originalEvent')){
                clearTimeout(homeSlideshowTimer);
            }
            if (!isAbout) {
                caseStudy.updatePositionInfo();
                caseStudy.slideRight();
            } else {
                caseStudy.articlesSlideRight();
            }
        });
        moveLeft.click(function () {
            caseStudy.slideRight();
        });
        arrowRight.click(function (e) {
            if(e.hasOwnProperty('originalEvent')){
                clearTimeout(homeSlideshowTimer);
            }

            if (!isAbout) {
                caseStudy.updatePositionInfo();
                caseStudy.slideLeft();
            } else {
                caseStudy.articlesSlideLeft();
            }
        });
        moveRight.click(function () {
            caseStudy.slideLeft();
        });

        //gallery layout
        //imgViewer.css('background-images','url('+currentImgNo.attr('data-url')+')');
    };

    caseStudy.updateFlags = function () {
        if (window.location.href.indexOf("awards-and-honors") > -1 || window.location.href.indexOf("publications") > -1) {
            isBlackOverlay = true;
        } else {
            isBlackOverlay = false;
        }

        //if is specific case study
        /*
         if (window.location.href.indexOf("k-and-l-gates") > -1){
         body.addClass('k-and-l-gates');
         }
         */

        if(window.location.href.indexOf("news") > -1){
            //news
            isNews = true;
        }else{
            isNews = false;
        }

    };

    caseStudy.parseHash = function (manual) {

        var hashArray = window.location.hash;
        hashArray = hashArray.split('/');

        //Check if in certain sections and update boolean values
        caseStudy.updateFlags();

        //window.console.log('Found - URL Elements: '+hashArray.length);

        //window.console.log('Hash array length: '+hashArray.length);
        if (hashArray.length === 3) {
            //window.console.log('Done - ID & Page');
            //section & images
            currentSection = hashArray[1];
            //use id to get position
            /* window.console.log('#' + currentSection); */
            newSectionNo = sections.index($('#' + currentSection));
            currentRow = rows.eq(newSectionNo);

            if (newSectionNo !== currentSectionNo) {
                //set current row
                currentSectionNo = newSectionNo;
                currentRow = rows.eq(currentSectionNo);
                if (!firstLoad) {
                    caseStudy.slideMoveVertical();
                }
            }

            //set current images
            currentImgNo = hashArray[2];

            //window.console.log('Current Image No:'+ currentImgNo);

            if(manual){
                caseStudy.updateUI(currentImgNo, true);
            }else{
                caseStudy.updateUI(currentImgNo);
            }
            if (firstLoad) {
                //sectionLinks.eq(currentSectionNo).trigger('click');
                if(isHome){
                    caseStudy.slideMoveHorizontal(100);
                }else{
                    setTimeout(function () {
                        caseStudy.slideMoveHorizontal();
                    }, speed * 1.5);
                }
            } else {
                caseStudy.slideMoveHorizontal();
            }
            firstLoad = false;

            //If not already active
            if (!scrollActive) {
                scrollActive = true;
                setTimeout(function () {
                    caseStudy.initScroll();
                }, speed * 3);
            }
        } else {
            currentRow = rows.eq(0);
            if($('.home').length > 0){
                //If homepage, choose random images
                var random = Math.floor(Math.random()*sectionLinks.length);
                var link = sectionLinks.eq(random).attr('href');
                window.location.replace(link);
                //sectionLinks.eq(random).trigger('click');

            }else{
                //If no hash, show first section
                sectionLinks.eq(0).trigger('click');
            }
        }

    };

    caseStudy.resizeSite = function () {
        //window.console.log('Resizing');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            //refresh window size
            /*
             siteW = $(window).width();
             siteH = $(window).height();
             caseStudy.initUI();
             setTimeout(function () {
             caseStudy.slideMoveVertical();
             caseStudy.slideMoveHorizontal();
             }, 250);
             */
            //reload site if resized
            var newW = $(window).width();
            if(newW != siteW){
                location.reload();
            }
        }, 300);
    };

    $(window).bind('orientationchange', function(event) {
        location.reload();
    });

    caseStudy.init = function () {
        if(!isiPhone){
            //init vars
            caseStudy.initVars();
            //init listeners
            caseStudy.initListeners();
            //resize site
            /* caseStudy.resizeSite(); */
            //init user interface
            caseStudy.initUI();

            //parse initial hash
            $(window).hashchange();
            //init images
            caseStudy.initGallery();
            if($('.item.current').hasClass('no-arrows')){
                arrowLeft.fadeOut();
                arrowRight.fadeOut();
            }
        }
    };

    return caseStudy;
}();

$(function () {
    $caseStudy.init();
});