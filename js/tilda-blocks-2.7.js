function t121_setHeight(recid){var div=$("#youtubeiframe"+recid);var height=div.width()*0.5625;div.height(height);div.parent().height(height)}
function t391_checkSize(recid){var el=$("#rec"+recid);var cover=el.find('.t-cover');var carrier=el.find('.t-cover__carrier');var filter=el.find('.t-cover__filter');var height=el.find('.t391__firstcol').height()+el.find('.t391__secondcol').height();if(window.matchMedia('(max-width: 960px)').matches&&height>0){cover.css('height',height);carrier.css('height',height);filter.css('height',height)}}
function t456_setListMagin(recid,imglogo){if($(window).width()>980){var t456__menu=$('#rec'+recid+' .t456');var t456__leftpart=t456__menu.find('.t456__leftwrapper');var t456__listpart=t456__menu.find('.t456__list');if(imglogo){t456__listpart.css("margin-right",t456__leftpart.width())}else{t456__listpart.css("margin-right",t456__leftpart.width()+30)}}}
function t456_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t456__list_item a[href='"+url+"']").addClass("t-active");$(".t456__list_item a[href='"+url+"/']").addClass("t-active");$(".t456__list_item a[href='"+pathname+"']").addClass("t-active");$(".t456__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t456__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t456__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t456_checkAnchorLinks(recid){if($(window).width()>=960){var t456_navLinks=$("#rec"+recid+" .t456__list_item a:not(.tooltipstered)[href*='#']");if(t456_navLinks.length>0){t456_catchScroll(t456_navLinks)}}}
function t456_catchScroll(t456_navLinks){var t456_clickedSectionId=null,t456_sections=new Array(),t456_sectionIdTonavigationLink=[],t456_interval=100,t456_lastCall,t456_timeoutId;t456_navLinks=$(t456_navLinks.get().reverse());t456_navLinks.each(function(){var t456_cursection=t456_getSectionByHref($(this));if(typeof t456_cursection.attr("id")!="undefined"){t456_sections.push(t456_cursection)}
t456_sectionIdTonavigationLink[t456_cursection.attr("id")]=$(this)});$(window).bind('resize',t_throttle(function(){t456_updateSectionsOffsets(t456_sections)},200));$('.t456').bind('displayChanged',function(){t456_updateSectionsOffsets(t456_sections)});setInterval(function(){t456_updateSectionsOffsets(t456_sections)},5000);setTimeout(function(){t456_updateSectionsOffsets(t456_sections);t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId)},1000);t456_navLinks.click(function(){if(!$(this).hasClass("tooltipstered")){t456_navLinks.removeClass('t-active');t456_sectionIdTonavigationLink[t456_getSectionByHref($(this)).attr("id")].addClass('t-active');t456_clickedSectionId=t456_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t456_now=new Date().getTime();if(t456_lastCall&&t456_now<(t456_lastCall+t456_interval)){clearTimeout(t456_timeoutId);t456_timeoutId=setTimeout(function(){t456_lastCall=t456_now;t456_clickedSectionId=t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId)},t456_interval-(t456_now-t456_lastCall))}else{t456_lastCall=t456_now;t456_clickedSectionId=t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId)}})}
function t456_updateSectionsOffsets(sections){$(sections).each(function(){var t456_curSection=$(this);t456_curSection.attr("data-offset-top",t456_curSection.offset().top)})}
function t456_getSectionByHref(curlink){var t456_curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t456_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t456_curLinkValue.substring(1)+"']")}}
function t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId){var t456_scrollPosition=$(window).scrollTop(),t456_valueToReturn=t456_clickedSectionId;if(t456_sections.length!=0&&t456_clickedSectionId==null&&t456_sections[t456_sections.length-1].attr("data-offset-top")>(t456_scrollPosition+300)){t456_navLinks.removeClass('t-active');return null}
$(t456_sections).each(function(e){var t456_curSection=$(this),t456_sectionTop=t456_curSection.attr("data-offset-top"),t456_id=t456_curSection.attr('id'),t456_navLink=t456_sectionIdTonavigationLink[t456_id];if(((t456_scrollPosition+300)>=t456_sectionTop)||(t456_sections[0].attr("id")==t456_id&&t456_scrollPosition>=$(document).height()-$(window).height())){if(t456_clickedSectionId==null&&!t456_navLink.hasClass('t-active')){t456_navLinks.removeClass('t-active');t456_navLink.addClass('t-active');t456_valueToReturn=null}else{if(t456_clickedSectionId!=null&&t456_id==t456_clickedSectionId){t456_valueToReturn=null}}
return!1}});return t456_valueToReturn}
function t456_setPath(){}
function t456_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t456").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t456_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");el.animate({"opacity":"1","top":"0px"},200,function(){})}}else{el.stop();el.css("visibility","hidden")}}})}}
function t456_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t456_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t456"),burger=el.find(".t456__mobile");burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t456_opened")});$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200))}