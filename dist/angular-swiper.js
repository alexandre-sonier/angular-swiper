!function(e,i,r){"use strict";function t(){for(var e=[],i="0123456789abcdef",r=0;r<36;r++)e[r]=i.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=i.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var t=e.join("");return t}function s(){return{restrict:"E",transclude:!0,scope:{onReady:"&",centeredSlides:"=",slidesOffsetBefore:"=",slidesOffsetAfter:"=",slidesPerView:"=",slidesPerColumn:"=",spaceBetween:"=",parallax:"=",parallaxTransition:"@",paginationIsActive:"=",paginationClickable:"=",showNavButtons:"=",showScrollBar:"=",loop:"=",autoplay:"=",initialSlide:"=",containerCls:"@",wrapperCls:"@",paginationCls:"@",slideCls:"@",direction:"@",swiper:"=",overrideParameters:"="},controller:["$scope","$element","$timeout",function(e,r,s){var a=t();e.swiper_uuid=a;var n={centeredSlides:e.centeredSlides||!1,slidesOffsetBefore:e.slidesOffsetBefore||0,slidesOffsetAfter:e.slidesOffsetAfter||0,slidesPerView:e.slidesPerView||1,slidesPerColumn:e.slidesPerColumn||1,spaceBetween:e.spaceBetween||0,direction:e.direction||"horizontal",loop:e.loop||!1,initialSlide:e.initialSlide||0,showNavButtons:!1};i.isUndefined(e.autoplay)||"number"!=typeof e.autoplay||(n=i.extend({},n,{autoplay:e.autoplay})),e.paginationIsActive===!0&&(n=i.extend({},n,{paginationClickable:e.paginationClickable||!0,pagination:"#paginator-"+e.swiper_uuid})),e.showNavButtons===!0&&(n.nextButton="#nextButton-"+e.swiper_uuid,n.prevButton="#prevButton-"+e.swiper_uuid),e.showScrollBar===!0&&(n.scrollbar="#scrollBar-"+e.swiper_uuid),e.overrideParameters&&(n=i.extend({},n,e.overrideParameters)),s(function(){var t=null;i.isObject(e.swiper)?(e.swiper=new Swiper(r[0].firstChild,n),t=e.swiper):t=new Swiper(r[0].firstChild,n),i.isUndefined(e.onReady)||e.onReady({swiper:t})})}],link:function(e,r){var t=e.swiper_uuid,s="paginator-"+t,a="prevButton-"+t,n="nextButton-"+t,l="scrollBar-"+t,o=r[0];i.element(o.querySelector(".swiper-pagination")).attr("id",s),i.element(o.querySelector(".swiper-button-next")).attr("id",n),i.element(o.querySelector(".swiper-button-prev")).attr("id",a),i.element(r[0].querySelector(".swiper-scrollbar")).attr("id",l)},template:'<div class="swiper-container {{containerCls}}"><div class="parallax-bg" data-swiper-parallax="{{parallaxTransition}}" ng-show="parallax"></div><div class="swiper-wrapper {{wrapperCls}}" ng-transclude></div><div class="swiper-pagination {{paginationCls}}"></div><div class="swiper-button-next" ng-show="showNavButtons"></div><div class="swiper-button-prev" ng-show="showNavButtons"></div><div class="swiper-scrollbar" ng-show="showScrollBar"></div></div>'}}function a(){return{restrict:"E",require:"^ksSwiperContainer",transclude:!0,scope:{sliderCls:"@"},template:'<div class="swiper-slide {{sliderCls}}" ng-transclude></div>',replace:!0}}i.module("ksSwiper",[]).directive("ksSwiperContainer",s).directive("ksSwiperSlide",a)}(window,angular,void 0);