/**
*
* Returns load speeds and latency as part of 
* Chrome's window object properties.
*
* @author Fleming Slone [https://github.com/fslone/]
* @example 
*     var myTimes = findTimes(window.chrome); 
*     console.log(myTimes.loadTime);
*
*/

(function (chrome) {
	
    'use strict';

    if (chrome) {
		
        var loadTimes = chrome.loadTimes();

        var networkLatency,
            loadTime,
            requestTime = loadTimes.requestTime,
            finishLoadTime = loadTimes.finishLoadTime,
            startLoadTime = loadTimes.startLoadTime;
	    
        //networkLatency = startLoadTime - requestTime;

        loadTime = finishLoadTime - startLoadTime;

  		return {

	   		loadTime : 'Load Time (in sec): ' + String(loadTime)

	   		//networkLatency: networkLatency

	   	}


	} else {

		return false;

	}

}(window.chrome));




	



		