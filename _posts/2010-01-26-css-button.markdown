---
layout: post
status: publish
published: true
title: How To Design A Sexy Button Using CSS
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 1753
wordpress_url: http://www.leemunroe.com/?p=1753
date: 2010-01-26 10:02:24.000000000 -08:00
comments:
- id: 17138
  author: Peter
  author_email: info@blaakmeer.com
  author_url: ''
  date: '2010-01-26 11:09:49 -0800'
  date_gmt: '2010-01-26 10:09:49 -0800'
  content: "At first I was interested in how you did this. Then I noticed you are
    still using an image to create this button. This then raises the question; why
    not make the button itself round directly in Photoshop instead of using non-validating
    CSS tags which aren't even supported by one of the biggest browsers?\r\n\r\nExcept
    for the rgba hover part, this isn't really exciting and the title is kind of misleading."
- id: 17142
  author: Avangelist
  author_email: info@avangelistdesign.com
  author_url: http://www.avangelistdesign.com
  date: '2010-01-26 13:11:05 -0800'
  date_gmt: '2010-01-26 12:11:05 -0800'
  content: "Actually Peter, they are validating tags, they conform to the W3C guidelines
    for CSS3. The advantage of this over photoshop is that photoshop means you have
    a graphic that may require updating. In a commercial environment, this costs money.
    A designer has to build a new button set, and you have to update each instance
    of the relevant file.\r\n\r\nBy using CSS, if the colour states need changing,
    it is a single task from the UI developer to update the CSS file and it is site
    wide.\r\n\r\nIt also reduces loading time, requests to the server and ensures
    that the site is future proofed. This will be accepted across all browsers in
    the very near future, and until then, you provide alternative experiences for
    alternative browsers."
- id: 17143
  author: wd
  author_email: contact@web-developer.lt
  author_url: http://www.web-developer.lt
  date: '2010-01-26 13:40:11 -0800'
  date_gmt: '2010-01-26 12:40:11 -0800'
  content: "Indeed, i was hoping for cross-browser solution too.\r\n\r\nAnd since
    you are using separate CSS for IE you could enable PNG transparency instead of
    removing it by using filters:\r\nhttp://christopherschmitt.com/2007/10/30/png-transparency-for-internet-explorer-ie6-and-beyond/"
- id: 17144
  author: Peter
  author_email: info@blaakmeer.com
  author_url: ''
  date: '2010-01-26 13:49:57 -0800'
  date_gmt: '2010-01-26 12:49:57 -0800'
  content: '@Avangelist; ok, now I understand the practicality in it. Thanks for clearing
    that up. Maybe Lee should mention these advantages in his post.'
- id: 17145
  author: Chris
  author_email: c.mcclelland@gmail.com
  author_url: http://www.eclipticlabs.com
  date: '2010-01-26 14:21:53 -0800'
  date_gmt: '2010-01-26 13:21:53 -0800'
  content: "Love the button ;)\r\n\r\nWhere available what about a bit of webkit/moz
    gradients to do the gloss e.g.\r\n\r\n background-image: -webkit-gradient(linear,
    left top, left bottom, color-stop(0.0, rgba(255,255,255,0.4)),color-stop(0.5,
    rgba(255,255,255,0.4)), color-stop(0.5, transparent));\r\n                \r\n
    background-image: -moz-linear-gradient(\r\n  top, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.0)
    50%\r\n);"
- id: 17155
  author: Samantha Miller
  author_email: sambulance@ymail.com
  author_url: ''
  date: '2010-01-26 17:37:45 -0800'
  date_gmt: '2010-01-26 16:37:45 -0800'
  content: Surely this is how to build a sexy button, not design?
- id: 17158
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2010-01-26 18:10:05 -0800'
  date_gmt: '2010-01-26 17:10:05 -0800'
  content: "@Peter: Yes I've highlighted a few advantages at the start (optimisation,
    reusable, flexible). It depends on your feelings towards IE and support of CSS.
    I'm all for pushing CSS3 and standards forward, as long as it degrades gracefully
    for nonsupporting browsers.\r\n\r\n@Avangelist: Thanks for the comment - you hit
    the nail on the head :-)\r\n\r\n@wd: By all means use a png fix. I've always had
    trouble with png background fixes (I know there are lots out there) and have got
    to the point where I just remove the png.\r\n\r\n@Chris: Even better. Make use
    of CSS gradients. Nice touch."
- id: 17431
  author: '[HTML/CSS] input,buttonにCSSで見栄えをよくする &laquo; Bonnie styles.'
  author_email: ''
  author_url: http://puzzel.jp/blog/2010/htmlcss-inputbutton%e3%81%abcss%e3%81%a7%e8%a6%8b%e6%a0%84%e3%81%88%e3%82%92%e3%82%88%e3%81%8f%e3%81%99%e3%82%8b.html
  date: '2010-02-01 13:11:40 -0800'
  date_gmt: '2010-02-01 12:11:40 -0800'
  content: '[...] InputやButtonにCSSを適用して見栄えをよくする。（How To Design A Sexy Button Using
    CSSを参考に作成） [...]'
- id: 18095
  author: 20 CSS3 Tutorials and Techiques for Creating Buttons - Speckyboy Design
    Magazine
  author_email: ''
  author_url: http://speckyboy.com/2010/02/15/20-css3-tutorials-and-techiques-for-creating-buttons/
  date: '2010-02-15 12:28:53 -0800'
  date_gmt: '2010-02-15 11:28:53 -0800'
  content: '[...] A Sexy Button Using CSS [...]'
- id: 18096
  author: 20 CSS3 Tutorials and Techiques for Creating Buttons - Speckyboy Design
    Magazine
  author_email: ''
  author_url: http://speckyboy.com/2010/02/15/20-css3-tutorials-and-techiques-for-creating-buttons/
  date: '2010-02-15 12:28:53 -0800'
  date_gmt: '2010-02-15 11:28:53 -0800'
  content: '[...] A Sexy Button Using CSS [...]'
- id: 18211
  author: 20 CSS3 Tutorials and Techiques for Creating Buttons &laquo; qeqnes | Designing.
    jQuery, Ajax, PHP, MySQL and Templates
  author_email: ''
  author_url: http://qeqnes.wordpress.com/2010/02/18/20-css3-tutorials-and-techiques-for-creating-buttons/
  date: '2010-02-18 09:48:38 -0800'
  date_gmt: '2010-02-18 08:48:38 -0800'
  content: '[...] A Sexy Button Using CSS [...]'
- id: 18215
  author: 20 + CSS3 Tutorials and Techiques for Creating Buttons | Seventy Seven magazine
  author_email: ''
  author_url: http://77even.net/2010/02/20-css3-tutorials-and-techiques-for-creating-buttons/
  date: '2010-02-18 11:45:03 -0800'
  date_gmt: '2010-02-18 10:45:03 -0800'
  content: '[...] A Sexy Button Using CSS [...]'
- id: 18327
  author: 10 Amazing CSS3 Tutorials and Techiques for Creating Buttons | denbagus
    blog
  author_email: ''
  author_url: http://www.denbagus.net/css3-button/
  date: '2010-02-20 08:35:26 -0800'
  date_gmt: '2010-02-20 07:35:26 -0800'
  content: '[...] A Sexy Button Using CSS [...]'
- id: 18419
  author: 20 CSS3 Tutorials and Techiques for Creating Buttons | The New Drop
  author_email: ''
  author_url: http://thenewdrop.com/?p=228
  date: '2010-02-23 18:38:36 -0800'
  date_gmt: '2010-02-23 17:38:36 -0800'
  content: '[...] A Sexy Button Using CSS [...]'
- id: 22900
  author: Muxx
  author_email: murraylunn@gmail.com
  author_url: http://www.beginnerdj.com
  date: '2010-04-01 19:45:30 -0700'
  date_gmt: '2010-04-01 18:45:30 -0700'
  content: "Now THIS is amazing!\r\n\r\nThank you for an awesome tutorial. I hate
    having to use images for so many buttons on a page, it really starts to add up
    on the load time and server requests.\r\n\r\nThe more I can accomplish using coding,
    the better."
- id: 29846
  author: B2B web design
  author_email: webdesign62@yahoo.com
  author_url: http://www.allianceinteractive.com
  date: '2011-07-17 15:09:38 -0700'
  date_gmt: '2011-07-17 14:09:38 -0700'
  content: great design for CSS button. I’ve tried some before but your list seems
    better
- id: 35224
  author: Pali Madra
  author_email: pali.madra@gmail.com
  author_url: http://palimadra.tumblr.com
  date: '2011-09-13 12:17:46 -0700'
  date_gmt: '2011-09-13 11:17:46 -0700'
  content: "Great tutorial. Thanks. This is the most easy to follow and precise tutorial.
    \n\nOne n00b question. Why did you shift to the RGB mode? Is it because of the
    effect that is being created?\n\nThanks in advance."
- id: 37775
  author: Toufeeq
  author_email: tofu.rahman@gmail.com
  author_url: http://s-tofus.blogspot.com/
  date: '2011-09-29 14:45:15 -0700'
  date_gmt: '2011-09-29 13:45:15 -0700'
  content: Thanks a Lot bud. That was superb and I couldn't wait to add them on my
    blog .... :)
- id: 60120
  author: prakash patidar
  author_email: prr13patidar@gmail.com
  author_url: http://
  date: '2011-12-08 06:46:16 -0800'
  date_gmt: '2011-12-08 05:46:16 -0800'
  content: Thanks, a lot i use tutorial and easy to make sexy button for my website..............
- id: 84362
  author: mebutbetter
  author_email: jamespreadman@gmail.com
  author_url: http://beingmebutbetter.wordpress.com
  date: '2012-01-28 13:56:41 -0800'
  date_gmt: '2012-01-28 12:56:41 -0800'
  content: Thanks for the tutorial, working through it now.
- id: 89819
  author: Steven
  author_email: stevenvanoosten@gmail.com
  author_url: http://www.santoswebdesign.nl
  date: '2012-02-14 00:42:42 -0800'
  date_gmt: '2012-02-13 23:42:42 -0800'
  content: Hi, I read your article. To do this trick for IE7 and IE8 u can use pie,
    http://css3pie.com/. Works beautiful.
- id: 98595
  author: Dave
  author_email: fatherunit@gmail.com
  author_url: http://
  date: '2012-03-20 02:05:18 -0700'
  date_gmt: '2012-03-20 01:05:18 -0700'
  content: "i may have missed something, but you originally created the image \"overlay.png\"
    to provide the gloss effect, yet in your final code you refer to \"button.png\"\r\n...\r\nbackground:url(images/splash/button.png)
    repeat-x center #ffcc00;\r\n...\r\n\r\nshouldn't overlay.png be referenced instead
    of button.png ?\r\n\r\npicky, but for newbies may be confusing."
- id: 98757
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2012-03-20 17:07:04 -0700'
  date_gmt: '2012-03-20 16:07:04 -0700'
  content: '@Dave: Well spotted, I can see why that would be confusing. Have updated
    the code.'
- id: 102274
  author: Aj Banda
  author_email: ajibanda@gmail.com
  author_url: http://www.ajibanda.com/
  date: '2012-04-03 08:21:15 -0700'
  date_gmt: '2012-04-03 07:21:15 -0700'
  content: Thanks for this wonderful suggestion, it really works nicely on my project
- id: 105158
  author: Mikel
  author_email: tech0101@live.com
  author_url: http://phptutorials.ws
  date: '2012-04-14 17:30:12 -0700'
  date_gmt: '2012-04-14 16:30:12 -0700'
  content: I dont like using images since all can be done in just css3 but.. this
    is nice :D :D
---
Last week I launched a holding page for <a href="http://eclipticlabs.com/">Ecliptic Labs</a>, an iPhone development company based in Belfast (keep an eye on them, there's going to be some great stuff from them this year).

Here is the holding page in all it's glory.

<!--more-->

<div style="text-align:center;"><a href="http://eclipticlabs.com/"><img src="http://www.leemunroe.com/wp-content/uploads/ecliptic.jpg" alt="ecliptic.jpg" border="0" width="540" height="362" /></a></div>

One thing you'll notice is the big <strong>'Notify me' button</strong>. One of the great things about this button is that <strong>it isn't a graphic</strong>. It's simply <strong>styled using CSS</strong>.

Advantages of using CSS instead of a graphic:

<ol>
<li><strong>Optimisation</strong> - less file size, less http requests</li>
<li><strong>Reusable</strong> - button can be used over and over again for different actions</li>
<li><strong>Flexible</strong> - the button can stretch or compact depending on length of the text</li>
</ol>

<h4>Styling the button element</h4>

I'm going to be using Firefox 3.6 for the previews below.

<h5>The markup</h5>

<pre><code>
<button>Notify me</button>
</code></pre>
This is how the default button looks.
<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/1.jpg" alt="1.jpg" border="0" width="92" height="55" /></div>

<h5>Basic styling</h5>
First apply some basic styling to get started.
<pre><code>
button{
color:#08233e;
font:2.4em Futura, ‘Century Gothic’, AppleGothic, sans-serif;
padding:14px;
}
</code></pre>

Nothing strange or startling about these styles. This is what we have now.

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/2.jpg" alt="2.jpg" border="0" width="163" height="68" /></div>

<h5>Background</h5>

Let's add a background. Remember, we want to make the button reusable for any colour.

<ol>
<li>Go into Photoshop and create a new image 10px x 100px</li>
<li>Create a white rectangular shape that covers the top half of the canvas on a new layer</li>
<li>Give that layer 30% opacity and make the background transparent</li>
<li>Save that image as <a href="http://www.leemunroe.com/wp-content/uploads/overlay.png">overlay.png</a></li>
</ol>

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/3.jpg" alt="3.jpg" border="0" width="161" height="194" /></div>

Decide what background colour you want to use and apply it to the button along with the overlay you just made.

<pre><code>
background:url(overlay.png) repeat-x center #ffcc00;
</code></pre>

This gives us a nice yellow background with a glossy overlay.

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/4.jpg" alt="4.jpg" border="0" width="178" height="84" /></div>

<h5>Border</h5>

Now get rid of that horrible outset border. Let's give it a fine border that matches the background colour.

<pre><code>
border:1px solid #ffcc00;
</code></pre>

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/5.jpg" alt="5.jpg" border="0" width="187" height="92" /></div>

<h5>Rounded corners</h5>

Make your button a bit friendlier by giving it rounded corners. This is where Webkit and Mozilla browser users will take advantage, while IE browsers will be stuck with sharp corners.

<pre><code>
-moz-border-radius:10px;-webkit-border-radius:10px;border-radius:10px;
</code></pre>

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/6.jpg" alt="6.jpg" border="0" width="182" height="89" /></div>

Starting to look good eh? But a good designer likes to pay attention to detail.

<h5>Pixel perfection</h5>
Now finish off the button with some pixel perfect embossing. We're going to give it a 1 pixel border and a 1 pixel inset shadow.

<pre><code>
border-bottom:1px solid #9f9f9f;
-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);
</code></pre>

Notice how we're using RGBA colours here. This allows us to apply alpha opacity to the colour. In this case, we're giving white a 50% opacity.

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/7.jpg" alt="7.jpg" border="0" width="179" height="86" /></div>

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/8.jpg" alt="8.jpg" border="0" width="179" height="86" /></div>

<h5>Make it clickable</h5>

We know it's a button and that it can be clicked but users might not. Change the cursor to a pointer so users know they can click it.

<pre><code>
cursor:pointer;
</code></pre>

<h5>Hover state</h5>

We now have a pretty sexy looking button. But what about a hover state?

To save us from thinking about a colour for the hover state, we can use the RGBA approach. Let's revisit the background style. Add this after your background declaration.
<pre><code>
background-color:rgba(255,204,0,1);
</code></pre>

Nothing changes. All we did was change it to the same colour but using RGBA.

But how for the button's hover state, give it the same background colour but alter the opacity slightly.

<pre><code>
button:hover{background-color:rgba(255,204,0,0.8);}
</code></pre>

This gives us a slightly different shade of background on hover, giving the user some feedback so they know they've hovered over a clickable button.

<h5>Put it all together</h5>

The final code.

<pre><code>
button{
color:#08233e;
font:2.4em Futura, ‘Century Gothic’, AppleGothic, sans-serif;
padding:14px;
background:url(overlay.png) repeat-x center #ffcc00;background-color:rgba(255,204,0,1);
border:1px solid #ffcc00;
-moz-border-radius:10px;-webkit-border-radius:10px;border-radius:10px;
border-bottom:1px solid #9f9f9f;
-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);
cursor:pointer;
}

button:hover{background-color:rgba(255,204,0,0.8);}

button:active{position:relative;top:2px;}
</code></pre>

I've slipped in an active state as well for the button so the user knows when they've clicked it.

This is how it looks in Firefox:

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/9.jpg" alt="9.jpg" border="0" width="181" height="89" /></div>

<strong>And this is an active preview.</strong>

<style type="text/css">button.preview{
color:#08233e;
font:2.4em Futura, ‘Century Gothic’, AppleGothic, sans-serif;
padding:14px;
background:url(http://www.leemunroe.com/wp-content/uploads/overlay.png) repeat-x center #ffcc00;background-color:rgba(255,204,0,1);
border:1px solid #ffcc00;
-moz-border-radius:10px;-webkit-border-radius:10px;border-radius:10px;
border-bottom:1px solid #9f9f9f;
-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);
cursor:pointer;
}button:hover{background-color:rgba(255,204,0,0.8);}button.preview:active{position:relative;top:2px;}</style>

<div style="text-align:center">
<button class="preview">Notify me</button>
</div>

Remember the button is reusable so if you apply a class to the button, e.g. class="save", you can apply a different colour to this button.

<pre><code>
button.save{
background-color:#a7dd32;background-color:rgba(167,221,50,1);
border-color:#a7dd32;
}

button.save:hover{
background-color:rgba(167,221,50,0.8);
}
</code></pre>
And you'd get something like this.
<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/10.jpg" alt="10.jpg" border="0" width="180" height="91" /></div>

<h5>But what about Internet Explorer?</h5>
Yes, unfortunately IE users won't get the full benefits of the sexy button. However, it doesn't look that bad and to IE users it will seem like there is nothing wrong.

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/11.jpg" alt="11.jpg" border="0" width="171" height="70" /></div>

And IE6? It doesn't support PNG transparency so you can remove the overlay background image with an IE6 conditional stylesheet.

<pre><code>
<!--[if lt IE 7]>
<link rel="stylesheet" href="ie.css" type="text/css" />
<![endif]-->
</code></pre>

Then in ie.css:

<pre><code>
button{background-image:none !important;}
</code></pre>

And there you have it. A beautifully designed button using (pretty much) only CSS.

<a href="http://eclipticlabs.com"><img src="http://www.leemunroe.com/wp-content/uploads/field.jpg" alt="field" title="field" width="540" height="102" class="alignnone size-full wp-image-1770" /></a>

<h4>Further reading</h4>

I highly recommend you check out this great tutorial by Zurb on <a href="http://www.zurb.com/article/266/super-awesome-buttons-with-css3-and-rgba">super awesome buttons with CSS3 and RGBA</a>. A handy tutorial for styling reusable buttons.
