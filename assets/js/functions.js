$(document).ready(function(){
	$('.spanText').focus(highlight);
	$('a').click(scrollToLink)
});

function scrollToLink(e){
	var target = e.target;
	var href = target.href;
	href = href.split('/');
	href = href[href.length-1];
	if (href.startsWith('#'))
	{
		var className = '.'+href.substring(1,href.length);
		scrollTo($(className));
	}
}
function scrollTo(e)
{
    $('html, body').stop().animate({
        scrollTop: e.offset().top
    }, 1000);
}
function highlight(e)
{
	var target = e.target;
	$(target).selectText();
}

//Plugins
jQuery.fn.selectText = function(){
    var doc = document
        , element = this[0]
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};