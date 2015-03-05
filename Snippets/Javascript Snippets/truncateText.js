/**
 * @fileoverview Truncate a string to a chosen character length, making 
 * sure not to truncate in the middle of a word.
 *
 * @author Pat Fitzgerald [barelyfitz]
 * @author Fleming Slone [https://github.com/fslone/] (revisions)
 * @since 4/7/13
*/

function getTrunc(trunc) {
  
    "use strict";

    var len = 100;

    if (trunc && trunc.length > len) {

      /** 
       * Truncate the content of the P, then go back to the end of the
       * previous word to ensure that we don't truncate in the middle of
       * a word 
       */
      trunc = trunc.substring(0, len);
      trunc = trunc.replace(/\w+$/, '');

    /**
     * Add an ellipses to the end and make it a link that expands
     * the paragraph back to its original size */
    trunc = '<p>' + trunc + '<a href="#" ' +
      'onclick="this.parentNode.innerHTML=' +
      'decodeURI(\''+ encodeURI(trunc) + '\');return false;">' +
      '...<\/a><\/p>';

    return trunc;

  }

}
