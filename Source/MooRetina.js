/*
---

script: MooRetina.js
version: 1.0
description: MooRetina enhances your website for devices with retina display by loading images with a higher resolution
license: MIT-style
authors:
- Troy Mcilvena
- Christopher Beloch

requires: 
  core:1.3: [Element, Element.Style, Request]

provides: [MooRetina]

...
*/

var MooRetina = new Class({

	Implements: [Options],
	
	options: {
		suffix: '-2x' // retina version of image.jpg is image-2x.jpg
	},
	
	initialize: function(elements,options){
		this.setOptions(options);
		this.elements = elements || $$('img');
		
		if(!window.devicePixelRatio || window.devicePixelRatio < 2) // Just if it's a Retina Device (iPhone 4 or 4th Gen iPod Touch)
		{ return; }
		
		this.elements.each(function(imageElement){
			var src = imageElement.get('src');
			var newSrc = src.replace(/(.+)(\.\w{3,4})$/, "$1"+ this.options.suffix +"$2");
			
			var checkImage = new Request({
				url: newSrc,
				onSuccess: function(){
					/*
						If an image doesn't have a width or height attribute, it could be
						that the retina version blows the layout.
					*/
					if(!imageElement.getProperty('width') && !imageElement.getProperty('height')){
						// Even if the following line makes no sense at first, Element.getStyle
						imageElement.setStyle('width', imageElement.getStyle('width'));
					}
					
					imageElement.set('src', newSrc);
				}
			}).send();	
		}, this);
	}
});