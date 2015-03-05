/**
 * Performs an AJAX GET request of the specified URL and executes the given callback function once a response is received.
 *
 * @param  {string} url The URL to make the AJAX call to.
 * @param  {function} success The callback function to execute after receiving a response from the server.
 * @param {function} error A callback function that is executed if an error is thrown
 *
 * @author Fleming Slone [https://github.com/fslone/]
 */
function ajaxGet(url, success, error) {
  var cache = true;

  if (CACHE_BUST) {
    if (url.indexOf(".js") > -1 || url.indexOf(".xml") > -1 || url.indexOf("/rest") > -1) cache = false;
  }

  if (error === null) {
    error = function(a, b, c) {
      console.log('error: ');
      console.log(a, b, c);
    };
  }

  $.ajax({
    cache: cache,
    type: "GET",
    url: url,
    dataType: "text",
    success: success,
    error: error
  });
}