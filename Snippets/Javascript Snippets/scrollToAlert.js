/**
 * Scrolls to a Bootstrap 3 alert if the alert is not visible in the current viewport
 *
 * @author Fleming Slone [https://github.com/fslone]
*/

function _scrollToAlert($form) {
	var $alert = $form.find(".alert"),
		alertHeight = $alert.height(),
	    alertTopOffset = $alert.offset().top,
	    alertBottomOffset = alertHeight + alertTopOffset,
	    scrollTop = $(window).scrollTop();

	if(scrollTop > alertBottomOffset) $("html, body").animate({ scrollTop: alertTopOffset - 20 });
}