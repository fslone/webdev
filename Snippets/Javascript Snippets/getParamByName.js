/**
 * Retrieves the value of a specified parameter from the current page's URL.
 *
 * @param  {string} name Parameter name to retrieve a value for.
 * @param {string} [url] URL on which to perform the extraction.
 * @return {string} Value of the requested parameter.
 * @author Fleming Slone [https://github.com/fslone/]
 */
function getParameterByName(name, url) {
  var regexS, regex, results;
  
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  regexS = "[\\?&]" + name + "=([^&#]*)";
  regex = new RegExp(regexS);
  results = regex.exec(url ? url : window.location.search);

  if (results === null) return "";
  else return decodeURIComponent(results[1].replace(/\+/g, " "));
}