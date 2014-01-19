---
layout: post
status: publish
published: true
title: CSS3 Animated Loading Bar
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2819
wordpress_url: http://www.leemunroe.com/?p=2819
date: 2012-04-03 18:09:10.000000000 -07:00
comments:
- id: 102542
  author: SaMot91
  author_email: SaMot91@gmail.com
  author_url: http://
  date: '2012-04-04 12:34:18 -0700'
  date_gmt: '2012-04-04 11:34:18 -0700'
  content: "You are using a vendor-prefixed version of keyframes. (-webkit-)\r\nAs
    a consequence, it does not work on Firefox and on any non-webkit browser. \r\n\r\nYou
    should add the non-prefixed rule as well for your code to be evolutive &amp; standard
    compliant."
- id: 102550
  author: Catalin Rosu
  author_email: redmaniack@gmail.com
  author_url: http://www.red-team-design.com/
  date: '2012-04-04 13:28:20 -0700'
  date_gmt: '2012-04-04 12:28:20 -0700'
  content: "Nice one Lee. \r\n\r\nI'd have a question though: why you omitted the
    keyframes animation for other browsers like FF, IE10 or (lately) Opera 12?"
- id: 102561
  author: Thomas Burleson
  author_email: ThomasBurleson@Gmail.com
  author_url: http://www.GridLinked.info
  date: '2012-04-04 14:35:15 -0700'
  date_gmt: '2012-04-04 13:35:15 -0700'
  content: "This is a nice loading/busy indicator using an indeterminant progress
    bar. Cool!\r\n\r\nWhen you need to show loading progress, you can can the width
    of the span:\r\n\r\n  .bar &gt; span {\r\n      width: 90px;\r\n  }\r\n\r\nSo
    with jQuery (for example)  \r\n\r\n     $(\".bar &gt; span\").css('width', 90)\r\n\r\nSo
    now you sample can be used as a loading indicator and/or a loading progress indicator.
    Sweet!\r\n\r\nThanks again,\r\nThomasB"
- id: 102566
  author: louisremi
  author_email: lrbabe@gmail.com
  author_url: http://louisremi.com
  date: '2012-04-04 15:15:48 -0700'
  date_gmt: '2012-04-04 14:15:48 -0700'
  content: It doesn't work in Firefox here, although I see you took the time to add
    the appropriate prefixed properties.
- id: 102567
  author: Thomas Burleson
  author_email: ThomasBurleson@Gmail.com
  author_url: http://www.GridLinked.info
  date: '2012-04-04 15:31:47 -0700'
  date_gmt: '2012-04-04 14:31:47 -0700'
  content: I created a jsFiddle that demos your loading indicator AND my progress
    bar idea. See http://jsfiddle.net/ThomasBurleson/wJwBu/
- id: 102573
  author: Adam Messinger
  author_email: adam@zenscope.com
  author_url: http://twitter.com/adammessinger
  date: '2012-04-04 15:58:49 -0700'
  date_gmt: '2012-04-04 14:58:49 -0700'
  content: Firefox supports @keyframes with the -moz- prefix since v5.0, IE supports
    it with -ms- in v10, and Opera supports it in v12 with -o-. Can you add these
    to your code samples and demo as well?
- id: 102614
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2012-04-04 19:51:20 -0700'
  date_gmt: '2012-04-04 18:51:20 -0700'
  content: 'Update: Updated the demo and CSS above so now compatible with Firefox
    and IE10'
- id: 102615
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2012-04-04 19:51:57 -0700'
  date_gmt: '2012-04-04 18:51:57 -0700'
  content: '@Thomas: Awesome, looks great!'
- id: 102634
  author: Ryan Freebern
  author_email: ryan@freebern.org
  author_url: http://rnf.me
  date: '2012-04-04 22:12:43 -0700'
  date_gmt: '2012-04-04 21:12:43 -0700'
  content: "Lee,\r\nI was inspired by this to create my own version that's a bit simpler
    and works in both webkit and gecko (I haven't added the -o and -ms properties
    yet, but they should work fine).\r\n\r\nhttp://jsfiddle.net/rfreebern/2mvqT/\r\n\r\nThanks
    for the neat idea!"
- id: 102732
  author: suanlian tangpua
  author_email: kopsiam5@gmail.comfacebook.com
  author_url: http://
  date: '2012-04-05 10:45:22 -0700'
  date_gmt: '2012-04-05 09:45:22 -0700'
  content: This is so cool !!
- id: 102899
  author: Larry Gerndt
  author_email: lgerndt@mac.com
  author_url: http://www.emergingtruths.com
  date: '2012-04-06 04:24:05 -0700'
  date_gmt: '2012-04-06 03:24:05 -0700'
  content: just because you *can* doesn't mean it's worth all that CSS.
- id: 110714
  author: Krishna Kiran
  author_email: krishnaskiran@gmail.com
  author_url: http://www.tabletsquare.com
  date: '2012-05-07 09:15:11 -0700'
  date_gmt: '2012-05-07 08:15:11 -0700'
  content: Cool design.. Can you tell me how to use it on my wp site? Waiting for
    more like this..
- id: 147427
  author: Dinesh Kumar Shaw
  author_email: dineshkumarshaw@gmail.com
  author_url: http://https://twitter.com/dineshfromindia
  date: '2012-08-11 20:06:40 -0700'
  date_gmt: '2012-08-11 19:06:40 -0700'
  content: Good one.Thanks for the idea...
---
I'm working on a project that requires a bit of Javascript loading time before displaying the UI, so instead of doing what I usually do and downloading an animated gif from <a href="http://www.ajaxload.info/">ajaxload</a> I thought it would be a good opportunity to try out a CSS3 animation.

<img style="display:block; margin-left:auto; margin-right:auto;" src="http://www.leemunroe.com/wp-content/uploads/37signals.jpg" alt="37signals" border="0" width="218" height="119" />

Inspired by 37 Signals loading bar (pictured above) and making good use of Chris Coyier's <a href="http://css-tricks.com/css3-progress-bars/">tutorial</a> on CSS3 Progress Bars I set to work designing a bar in Photoshop and then replicating it in CSS3.

<a href="http://dribbble.com/shots/497920-Animated-Loading-Bar"><img style="display:block; margin-left:auto; margin-right:auto;" src="http://www.leemunroe.com/wp-content/uploads/animatedloadingbar.png" alt="Animatedloadingbar" border="0" width="400" height="300" /></a>

<a href="http://www.leemunroe.com/demos/css3-loading-bar/" class="button cta">View demo here</a>

<h4>CSS and Markup</h4>

Here is the source code if you want to try it yourself.

<pre><code>
<style>
/* 
Set the container for the bar
*/
.bar {
	height:20px;
	width:200px;
	padding:10px;
	margin:200px auto 0;
	background-color:rgba(0,0,0,.1);
	-webkit-border-radius:25px;
	-moz-border-radius:25px;
	-ms-border-radius:25px;
	border-radius:20px;
	-webkit-box-shadow:0 1px 0 rgba(255,255,255,.03),inset 0 1px 0 rgba(0,0,0,.1);
	-moz-box-shadow:0 1px 0 rgba(255,255,255,.03),inset 0 1px 0 rgba(0,0,0,.1);
	-ms-box-shadow:0 1px 0 rgba(255,255,255,.03),inset 0 1px 0 rgba(0,0,0,.1);
	box-shadow:0 1px 0 rgba(255,255,255,.03),inset 0 1px 0 rgba(0,0,0,.1);
}

/* 
This is the actual bar with stripes
*/	
.bar span {
	display:inline-block;
	height:100%;
	width:100%;
	border:1px solid #ff9a1a;
	border-bottom-color:#ff6201;
	background-color:#d3d3d3;
	-webkit-border-radius:20px;
	-moz-border-radius:20px;
	-ms-border-radius:20px;
	border-radius:20px;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	-ms-box-sizing:border-box;
	box-sizing:border-box;
	background-image:
		-webkit-linear-gradient(
		-45deg,
		rgba(255, 154, 26, 1) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 154, 26, 1) 50%,
		rgba(255, 154, 26, 1) 75%,
		transparent 75%,
		transparent
	);
	background-image:
		-moz-linear-gradient(
		-45deg,
		rgba(255, 154, 26, 1) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 154, 26, 1) 50%,
		rgba(255, 154, 26, 1) 75%,
		transparent 75%,
		transparent
	);
	background-image:
		-ms-linear-gradient(
		-45deg,
		rgba(255, 154, 26, 1) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 154, 26, 1) 50%,
		rgba(255, 154, 26, 1) 75%,
		transparent 75%,
		transparent
	);
	background-image:
		linear-gradient(
		-45deg,
		rgba(255, 154, 26, 1) 25%,
		transparent 25%,
		transparent 50%,
		rgba(255, 154, 26, 1) 50%,
		rgba(255, 154, 26, 1) 75%,
		transparent 75%,
		transparent
	);
	-webkit-background-size:50px 50px;
	-moz-background-size:50px 50px;
	-ms-background-size:50px 50px;
	background-size:50px 50px;
	-webkit-animation:move 2s linear infinite;
	-moz-animation:move 2s linear infinite;
	-ms-animation:move 2s linear infinite;
	animation:move 2s linear infinite;
	-webkit-border-radius:20px;
	-moz-border-radius:20px;
	-ms-border-radius:20px;
	border-radius:20px;
	overflow: hidden;
	-webkit-box-shadow:inset 0 10px 0 rgba(255,255,255,.2);
	-moz-box-shadow:inset 0 10px 0 rgba(255,255,255,.2);
	-ms-box-shadow:inset 0 10px 0 rgba(255,255,255,.2);
	box-shadow:inset 0 10px 0 rgba(255,255,255,.2);
}

/*
Animate the stripes
*/	
@-webkit-keyframes move{
  0% {
  	background-position: 0 0;
  }
  100% {
  	background-position: 50px 50px;
  }
}	
@-moz-keyframes move{
  0% {
  	background-position: 0 0;
  }
  100% {
  	background-position: 50px 50px;
  }
}	
@-ms-keyframes move{
  0% {
  	background-position: 0 0;
  }
  100% {
  	background-position: 50px 50px;
  }
}	
@keyframes move{
  0% {
  	background-position: 0 0;
  }
  100% {
  	background-position: 50px 50px;
  }
}	
</style>

<!-- Start of loading bar -->
<div class="bar">
	<span></span>
</div>
<!-- End of loading bar -->
</code></pre>

<a href="http://www.leemunroe.com/demos/css3-loading-bar/" class="button cta">View demo here</a>

If you like it please <a href="http://dribbble.com/shots/497920-Animated-Loading-Bar">give it some love on Dribbble</a>.
