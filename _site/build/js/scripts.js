$(document).ready(function(){function n(){$(window).scrollTop()>300?$(".header").css("background","rgba(77,111,133,0.6)"):$(".header").css("background","transparent")}$(".projects__item").each(function(n,a){"#"==$(a).attr("href")&&(a.style.cursor="default",$(a).click(function(n){n.preventDefault()}))}),$(".js-menu li").hover(function(){var n=$(this).find("a");void 0==n.data("original-margin")&&n.data("original-margin",n.css("margin-left")),n.animate({marginLeft:"0"},250)},function(){var n=$(this).find("a");n.animate({marginLeft:n.data("original-margin")},250)}),n(),$(window).scroll(function(){n()}),$(function(){$(".header-navigation__item a").click(function(n){n.preventDefault();var a=$(this.hash);a.length&&$("html,body").animate({scrollTop:a.offset().top},1e3)})})});