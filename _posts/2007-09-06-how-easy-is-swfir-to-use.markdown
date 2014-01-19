---
layout: post
status: publish
published: true
title: How easy is swfIR to use?
author: lee
author_login: lee
wordpress_id: 29
wordpress_url: http://www.leemunroe.com/blog/index.php/2007/09/06/how-easy-is-swfir-to-use/
date: 2007-09-06 23:07:58.000000000 -07:00
comments:
- id: 38
  author: Harry
  author_email: ''
  author_url: http://www.harry.prdesign-studio.co.uk
  date: '2007-11-15 18:06:03 -0800'
  date_gmt: '2007-11-15 18:06:03 -0800'
  content: Looks like a great resource, thanks! Love the site btw, just written an
    article on timed stylesheets!
- id: 13698
  author: Babaji M P
  author_email: mpbabaji@gmail.com
  author_url: ''
  date: '2009-11-08 03:25:59 -0800'
  date_gmt: '2009-11-08 02:25:59 -0800'
  content: "@ Lee Munroe\r\n\r\nI can save both the 'before' and 'after' image."
---
<a href="http://www.swfir.com/">Click here to visit the swfIR website</a>.

The website gives you a step by step guide on how to set it up.
<ol>
	<li>Download the necessary files.</li>
	<li>Copy the Javascript file and swf file to your website directory.</li>
	<li>Include the Javascript file in the header of your web page i.e. <script src="http://www.leemunroe.com/swfir.js" type="text/javascript"></script></li>
	<li>Decide what technique to apply and apply it to the image of your choice like so:</li>
</ol>
Answer: Easy!

I came across swfIR (swf Image Replacement) about 9 months ago, round about the time I was introduced to sIFR (Scalable Inmann Flash Replacement) but until recently I had never used it. It allows you to perform image techniques on the fly, for example, rounded corners or rotation, meaning you don't have to apply these techniques in Photoshop. This gives you a lot of flexibility in regards to what you can do with your images without altering the original.

I was surprised how easy swfIR is to use. One of the reasons I haven't used it until now is because I didn't think I had the time to start messing about with it but it literally takes 5 minutes.

<code>&lt;script type="text/javascript"&gt;
window.onload = function(){
round = new swfir();
round.specify(\\'src\\', \\'swfir.swf\\');
round.specify(\\'border-color\\', \\'ffffff\\');
round.specify(\\'border-radius\\', \\'10\\');
round.swap("#img");
}
&lt;/script&gt;</code>
<p align="center"><img src="http://www.leemunroe.com/wp-content/uploads/2007/11/swfirbefore.jpg" alt="swfir before" /></p>
<p align="center"> Before</p>
<p align="center"><img src="http://www.leemunroe.com/wp-content/uploads/2007/11/swfirafter.jpg" alt="swfir after" /></p>
<p align="center"> After</p>
The above code gives an image (with an id of 'img') nice rounded corners.

Thanks to the swfIR team (Jon Aldinger, Mark Huot &amp; Dan Mall) for an easy to use and useful tool.
