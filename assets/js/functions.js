$(document).ready(function(){
	$('.spanText').focus(highlight);
	$('a').click(scrollToLink)
    jQuery(".hero h1").fitText(1, { minFontSize: '10px', maxFontSize: '400px' });
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

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );