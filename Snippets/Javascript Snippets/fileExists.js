/**
 * Uses an ajax call to check whether a file exists
 *
 * @param  {string} url - The URL to check for existence.
 * @return {boolean} - Indicates the existence of the given file URL.
 *
 * @author Fleming Slone [https://github.com/fslone]
 */
function _fileExists(url) {
  var exists;

  $.ajax({
    type: "HEAD",
    url: url,
    async: false,
    complete: function (e,d) {
      exists = e.status != 404;
    }
  });

  return exists;
}