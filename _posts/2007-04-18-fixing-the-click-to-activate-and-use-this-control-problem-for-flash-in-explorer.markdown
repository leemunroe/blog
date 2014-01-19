---
layout: post
status: publish
published: true
title: Fixing the 'Click to activate and use this control' problem for Flash in Explorer
author: lee
author_login: lee
wordpress_id: 14
wordpress_url: http://www.leemunroe.com/blog/index.php/1999/11/30/fixing-the-click-to-activate-and-use-this-control-problem-for-flash-in-explorer/
date: 2007-04-18 18:37:00.000000000 -07:00
comments:
- id: 25
  author: Paul McKeever
  author_email: ''
  author_url: http://www.carconcern.co.uk
  date: '2007-11-15 18:12:16 -0800'
  date_gmt: '2007-11-15 18:12:16 -0800'
  content: Thanks Chief, that code worked well for my website.
- id: 26
  author: Frederik
  author_email: ''
  author_url: http://frederikdelmotte.be
  date: '2007-11-15 18:12:45 -0800'
  date_gmt: '2007-11-15 18:12:45 -0800'
  content: Nice, but it's not necessary to make you're own script. When you publish
    with Flash CS (3.0), it will create a Javascript file for you, called 'ActiveContent'
    or something like that... What can we say... Firefox rules :-)
---
Ever since Microsoft released an update of Internet Explorer 6, users have been getting the '<strong>Click to activate and use this control</strong>' when rolling over Flash content. This is particularly frustrating when using Flash for navigation, as it means having to double click.
<p align="center"><img src="http://www.leemunroe.com/wp-content/uploads/2007/11/click2.jpg" alt="Click to activate" /></p>
There are a variety of Javascript solutions to this problem, and in my mind the most simplest form of implementation is this straight forward Javascript function that should only take 2 minutes to integrate.
<h5>Javascript function</h5>
You need to declare this in an external Javascript file and then link the Javascript file to your HTML page like so (this goes between the head tags):
<code>&lt;script type="text/JavaScript" language="javascript" src="<strong>myscript.js</strong>"&gt;&lt;/script&gt;</code>

Within this external Javascript file, you then type the following:
<code>function flashFile() {
document.write('&lt;object type="application/x-shockwave-flash" data="<strong>myflash.swf</strong>" width="<strong>750</strong>" height="<strong>220</strong>"&gt;\n');
document.write('&lt;param name="movie" value="<strong>myflash.swf</strong>" /&gt;\n');
document.write('&lt;/object&gt;\n'); } </code>

Very simple script. All you are doing here is writing the flash code with Javascript. You should replace the highlighted words with your own values.  Now within your HTML, wherever you want to place the Flash file, simply write:

<code>&lt;script type="text/javascript"&gt;flashFile();&lt;/script&gt;</code>

This is calling the Javascript function that you have already declared.  That's you finished, you should no longer get the 'Click to activate and use this control' border in Explorer.
<p align="center"><img src="http://www.leemunroe.com/wp-content/uploads/2007/11/click1.jpg" alt="Problem solved" /></p>

<h5>Additional parameters</h5>
You can easily add additional parameters to the Javascript function above, for example, wmode and quality.

<code>function flashFile() {
document.write('&lt;object type="application/x-shockwave-flash" data="myflash.swf" width="750" height="220"&gt;\n');
document.write('&lt;param name="movie" value="myflash.swf" /&gt;\n'); <strong>
document.write('&lt;param name="quality" value="high" /&gt;\n');
document.write('&lt;param name="wmode" value="transparent" /&gt;\n');</strong>
document.write('&lt;/object&gt;\n'); }</code>
<h5>Drawbacks</h5>
If the user has Javascript disabled, the Flash file will not appear. Therefore I recommend if you are using Flash for navigation, you ensure that you have an alternative way of navigating the site, e.g. links in the footer of the page.
