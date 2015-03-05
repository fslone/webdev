/**
  * JS to take a series of div's with class 'thumbnail' and animate an effect that will swap in new images and colors 
  * semi-randomly.
  * 
  * @author Fleming Slone [https://github.com/fslone/]
  * @since 4/2/13
  * @requires jQuery 1.9+
  * @example http://www.photos.pmtint.com/ 
  *
 */

$(document).ready(function () {
	
	"use strict";

	/**
	*	These are your image URL's that you 
	*	will be swapping in.
	*
	*/
	
	var myImages = [

	'/wp-content/gallery/seattle-fashion/thumbs/thumbs_DevinSeferos_112.jpg',
	'/wp-content/gallery/portland-product/thumbs/thumbs_NormHersom_PDX_Product_08.jpg',
	'/wp-content/gallery/seattle-food/thumbs/thumbs_Ceb_Lonime5.jpg',
	'/wp-content/gallery/atlanta-food/thumbs/thumbs_MM_.jpg',
	'/wp-content/gallery/portland-lifestyle/thumbs/thumbs_John_Bennett_PDX_lifestyle_01.jpg',
	'/wp-content/gallery/seattle-products/thumbs/thumbs_6e.jpg',
	'/wp-content/gallery/portland-lifestyle/thumbs/thumbs_NormHersom_PDX_Lifestyle_018.jpg',
	'/wp-content/gallery/atlanta-food/thumbs/thumbs_Waffle.jpg',
	'/wp-content/gallery/portland-studio-photos/thumbs/thumbs_Portland_bw_4.jpg',
	'/wp-content/gallery/portland-lifestyle/thumbs/thumbs_NormHersom_PDX_Lifestyle_060.jpg',
	'/wp-content/gallery/seattle-food/thumbs/thumbs_G1.jpg',
	'/wp-content/gallery/portland-lifestyle/thumbs/thumbs_NormHersom_PDX_Lifestyle_037.jpg',
	'/wp-content/gallery/portland-lifestyle/thumbs/thumbs_John_Bennett_PDX_lifestyle_15.jpg',
	'/wp-content/gallery/portland-product/thumbs/thumbs_NormHersom_PDX_Product_16.jpg',
	'/wp-content/gallery/portland-fashion/thumbs/thumbs_Christi_Carlo_PDX_Model_10.jpg',
	'/wp-content/gallery/portland-lifestyle/thumbs/thumbs_NormHersom_PDX_Lifestyle_049.jpg'
	
	],

	    myColors = ['#FFFFFF', '#77767b', '#e5e5e5', '#ea5343'],

	    numberDivs = $('div.thumbnail').length,
	
	    numPhotos = myImages.length,
	
	    numColors = myColors.length,

	    newClass;

	
	$('div.thumbnail').addClass(
		
		function(classNumber) {
			
			newClass = 'thumbnail' + classNumber;
			
			classNumber += 1;
			
			return newClass;
		
		}
	
	);
	
	function photoSwapper() {
		
		var randomNum = Math.floor(Math.random() * numberDivs),
		    randomDiv = $('.thumbnail' + randomNum),
		    ranImageNum,
		    ranImage,
		    ranColorNum,
		    ranColor;

		if (randomNum%2 === 1) {
			
			//get a random image to use
			ranImageNum = Math.floor(Math.random() * numPhotos);
		
			ranImage = myImages[ranImageNum];
			
			randomDiv
			    .animate(
			    	{opacity: 0}, 
			    	'slow', 
			    	function() {
				        $(this)
			   	            .css({
						        'background-image' : 'url("' + ranImage + '")',
						        'background-color':'none'
					
					        })
			                .animate(
			                	{opacity: 1},
			                	'slow'
			                );
			
			        }
			    
			    );
			
		} else {

			ranColorNum = Math.floor(Math.random() * numColors);
			
			ranColor = myColors[ranColorNum]; 

			randomDiv
			    .animate(
			    	{opacity: 0}, 
			    	2000, 
			    	function() {
				        $(this)
			   	            .css({
						        'background-image':'none',
						        'background-color':ranColor
					        })
			                .animate(
			                	{opacity: 1},
			                	'slow'
			                );
			
			        }

			    );

		}

	}

	(function loop() {
				
		var randTime = Math.floor(Math.random()*(1+9-2));
		
		randTime *= 200;
		
		setTimeout(function(){
		
			photoSwapper();
		
			loop();
		
		}, randTime); //random seconds between 0 and 5 for timeout

	}());

});