MooRetina
===========

The newest iPhone and iPod Touch models have a new display called [Retina display](http://http://www.apple.com/iphone/features/retina-display.html) which has a much higher pixel density (324 pixels per inch).
This small plugin loads high resolution versions of your images (if they exist) so they look better on devices with Retina display.

This is a port of [Troy Mcilvena's jQuery Retina Plugin](http://troymcilvena.com/post/998277515/jquery-retina)

![Screenshot](http://dev.cbeloch.de/MooRetina/screenshot.jpg)

How to use
----------

The easiest way is to just initialize the class:

	#JS
	window.addEvent('domready', function() {
		new MooRetina();
	});

By using this default method, MooRetina tries to set the src parameter of each img-tag to a url with *-2x* as suffix.
This means that *images/myPicture.jpg* will be relinked to *images/myPicture-2x.jpg*

If you don't want to name your retina files with a *-2x* suffix but with a *_retina* you can do this by initializing MooRetina like this:

	#JS
	new MooRetina(null, {suffix: '_retina'});

The other way to use MooRetina is by using it on selected Elements and not all images:

	#JS
	new MooRetina($$('.hasRetina'));

Does it also work with MooTools 1.2.x ?
----------

_Yes!_