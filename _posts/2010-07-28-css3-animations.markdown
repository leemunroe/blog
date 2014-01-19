---
layout: post
status: publish
published: true
title: Start Experimenting With CSS3 Keyframe Animations
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2052
wordpress_url: http://www.leemunroe.com/?p=2052
date: 2010-07-28 11:01:40.000000000 -07:00
comments:
- id: 24532
  author: Mark McCorkell
  author_email: mark@markmccorkell.com
  author_url: http://markmccorkell.com
  date: '2010-07-28 12:50:00 -0700'
  date_gmt: '2010-07-28 11:50:00 -0700'
  content: Nice demo, Lee! I was neck deep in CSS3 a few month ago when re-designing
    my site, but haven't really been using it too much lately because I have been
    doing mostly design work. But this may have just gave me the kick in the ass I
    needed to start experimenting some more!
- id: 24533
  author: DarkRedman
  author_email: contact@darkredman.fr
  author_url: http://www.darkredman.fr/
  date: '2010-07-28 21:23:08 -0700'
  date_gmt: '2010-07-28 20:23:08 -0700'
  content: It's an awesome demonstration and i love CSS3 features ! But when all main
    webbrowsers(such IE, Firefox, Safari, Chrome and Opera) will implements all CSS3
    syntax and features ?!
- id: 24537
  author: Peter Gasston
  author_email: p_gasston@yahoo.com
  author_url: http://broken-links.com/
  date: '2010-07-29 10:44:19 -0700'
  date_gmt: '2010-07-29 09:44:19 -0700'
  content: I actually think this is quite a clumsy syntax and these kinds of animations
    would be better performed with JavaScript. AFAIK none of the other browsers are
    interested in implementing this at the moment, so it may end up remaining a WebKit-only
    syntax.
- id: 24540
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2010-07-29 16:37:37 -0700'
  date_gmt: '2010-07-29 15:37:37 -0700'
  content: "@Mark: Thanks Mark, let me know how you get on.\r\n\r\n@DarkRedman @Peter:
    Interesting opinion. Curious why JS is better? Of course they're not obligated
    to support it, but the fact it is in the W3C spec is a step towards further browser
    support."
- id: 24542
  author: Peter Gasston
  author_email: p_gasston@yahoo.com
  author_url: http://broken-links.com/
  date: '2010-07-29 18:50:39 -0700'
  date_gmt: '2010-07-29 17:50:39 -0700'
  content: "Just that, as I said, I find the syntax a bit clunky: first, it's in percentages,
    so if you have, for example, a 6.5s long animation, and you want something to
    happen on exactly 4s, you'd have to get your calculator out to work out the percentage;
    second, inheritance acts on each keyframe, so if you want to have, for example,
    a border-width to change from 1px to 10px in the first frame, then something else
    to happen in the second frame, you have to specify the border-width again or else
    it reverts to the original value:\r\n\r\nfrom {\r\nborder-width: 1px;\r\ncolor:
    red;\r\n} \r\n50% { border-width: 10px; } \r\nto {\r\nborder-width: 10px;\r\ncolor:
    blue;\r\n}\r\n\r\nI just think you'd be better off using JS: first to control
    the timings, which could be specified in seconds instead of percentages; and second,
    to only specify the properties which need to change on each frame.\r\n\r\nBeing
    in the W3C spec just means it is being offered for review, it doesn't make any
    guarantees that it will ever become a recommendation. I think if CSS3 animations
    do become a reality, it won't be with this syntax."
- id: 24543
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2010-07-29 19:19:05 -0700'
  date_gmt: '2010-07-29 18:19:05 -0700'
  content: Good point Peter re. time specific animations, looks like it could do with
    some syntax improvements. Didn't know about the inheritance problem either.
- id: 24545
  author: M Burke
  author_email: klockheed@gmail.com
  author_url: http://radongas.blogspot.com
  date: '2010-07-29 19:36:04 -0700'
  date_gmt: '2010-07-29 18:36:04 -0700'
  content: Or you could ~draw~ it in Flash using drawing tools rather than lines and
    lines of code... oh wait we don't like Flash?
- id: 24546
  author: Peter Gasston
  author_email: p_gasston@yahoo.com
  author_url: http://broken-links.com/
  date: '2010-07-29 19:49:38 -0700'
  date_gmt: '2010-07-29 18:49:38 -0700'
  content: "Just after I wrote that comment I downloaded Safari 5.01 and I saw this
    in the changelog:\r\n\r\n\"More accurate timing for CSS animations\"\r\n\r\nI
    don't know what that means yet, though; it doesn't seem to be documented anywhere."
- id: 24548
  author: pouya saadeghi
  author_email: pmedia.ir@gmail.com
  author_url: http://www.pasargad-graphic.com
  date: '2010-07-29 23:17:21 -0700'
  date_gmt: '2010-07-29 22:17:21 -0700'
  content: "webkit is always cool :D\r\nthanks"
- id: 24601
  author: Anthony Calzadilla
  author_email: anthony.calzadilla@gmail.com
  author_url: http://www.anthonycalzadilla.com
  date: '2010-08-04 16:03:51 -0700'
  date_gmt: '2010-08-04 15:03:51 -0700'
  content: "Hi Lee,\r\nGood overview of keyframe animation. If anyone is interested
    in some complex examples of css3 animation check out:\r\n\r\nCSS3 Starwars AT-AT
    Walker\r\nhttp://www.anthonycalzadilla.com/css3-ATAT/\r\n\r\nCSS3 Spiderman\r\nhttp://www.optimum7.com/css3-man/"
- id: 24727
  author: Siteroom
  author_email: info@siteroom.co.uk
  author_url: http://www.siteroom.co.uk
  date: '2010-10-06 13:08:40 -0700'
  date_gmt: '2010-10-06 12:08:40 -0700'
  content: As nice as they are, it's difficult to see them being used in production
    until they've been standardised across all the web browsers. Nice introduction
    though.
- id: 24740
  author: keith
  author_email: inblues@gmail.com
  author_url: http://www.xininvoice.com
  date: '2010-10-18 12:43:56 -0700'
  date_gmt: '2010-10-18 11:43:56 -0700'
  content: Wow! thanks for sharing. This is cool css3 animation experience.
- id: 31498
  author: Mauritius Web Design
  author_email: web@mauseo.com
  author_url: http://www.webdesignmu.com/
  date: '2011-08-09 06:25:45 -0700'
  date_gmt: '2011-08-09 05:25:45 -0700'
  content: Awesome its such a shame that some browsers is still incompatible with
    CSS3 btw thanks for sharing
- id: 34586
  author: CSS load
  author_email: pratamishus@yahoo.com
  author_url: http://cssload.net
  date: '2011-09-09 19:46:42 -0700'
  date_gmt: '2011-09-09 18:46:42 -0700'
  content: Awesome!!! I also would recommend http://cssload.net, which is the first
    loading css animation generator
- id: 43348
  author: Endy
  author_email: pensilendy@gmail.com
  author_url: http://pensilendy.blogspot.com/
  date: '2011-10-29 00:06:41 -0700'
  date_gmt: '2011-10-28 23:06:41 -0700'
  content: what a great css3 function....amazing..
- id: 51472
  author: Ravinder
  author_email: ravinder.babbar@gmail.com
  author_url: http://
  date: '2011-11-19 12:24:39 -0800'
  date_gmt: '2011-11-19 11:24:39 -0800'
  content: Great Tutorial
- id: 101225
  author: nathanS
  author_email: nathanscovell@yahoo.com
  author_url: http://
  date: '2012-03-30 16:10:18 -0700'
  date_gmt: '2012-03-30 15:10:18 -0700'
  content: I was wondering if you would know how to make one div use the keyframe
    animation by rolling over a different div?
- id: 103823
  author: 7ooof.net
  author_email: mr.dark41@hotmail.com
  author_url: http://www.7ooof.net/
  date: '2012-04-09 16:59:19 -0700'
  date_gmt: '2012-04-09 15:59:19 -0700'
  content: cool thanks
- id: 103837
  author: inventory
  author_email: csk_13@hotmail.com
  author_url: http://www.xininventory.com
  date: '2012-04-09 18:00:20 -0700'
  date_gmt: '2012-04-09 17:00:20 -0700'
  content: Awesome! i learn something new from here. Thanks
- id: 147757
  author: dave
  author_email: satastuff@live.com
  author_url: http://www.css3builder.com
  date: '2012-08-13 18:24:29 -0700'
  date_gmt: '2012-08-13 17:24:29 -0700'
  content: See www.css3builder.com. It does all the math for the keyframe timings
    to create a pure css3 gallery.  Get the timing exactly right for each project.
    I built it to save time, like hours.
---
You can now produce stunning animations with CSS3. Did you know that? Of course you did.

CSS3 animations are the new kid on the block. It's a big step. Although <strong>they haven't really taken centre stage yet as only the webkit browsers support them.</strong>

For this reason they're used sparingly, in a lot of cases for <strong>experimental purposes or as 'hidden gems'</strong>, but that doesn't mean you should shy away from getting stuck in.

It was only recently I experimented myself so I thought I'd share a beginner's demo with you.

<!--more-->


<h4>How to do CSS3 keyframe animations</h4>

Keyframe animations involve you setting the object state (or property) at different stages of an animation.

<h5>Setup the environment</h5>
Let's setup a little demo. I'm going to start with two basic boxes.

<pre><code>
<div class="box1"></div>
<div class="box2"></div>
</code></pre>

Now apply some basic styling so we can see them.

<pre><code>
.box1{
width:200px;
height:200px;
background:rgba(255,0,0,0.5);
position:absolute;
top:100px;
left:50%;
margin-left:-100px;
}

.box2{
width:200px;
height:200px;
background:rgba(0,0,255,0.5);
position:absolute;
top:100px;
left:90%;
margin-left:-100px;
}
</code></pre>

And you've got yourself two boxes.

<div style="text-align:center;"><a href="http://leemunroe.com/animation/animation1.html"><img src="http://www.leemunroe.com/wp-content/uploads/demo1.gif" alt="demo1.gif" border="0" width="540" height="182" /></a></div>

<a href="http://leemunroe.com/animation/animation1.html">View demo.</a>

<h5>Setup the animation affect</h5>
Setup the animation affect and call it 'movingbox'.

<pre><code>
@-webkit-keyframes movingbox{
0%{left:90%;}
50%{left:10%;}
100%{left:90%;}
}
</code></pre>

<strong>movingbox</strong> is the name we're giving the animation. It's up to you what you want to call it.

The keyframes we've setup for this animation are at 0% (start), 50% (halfway through) and 100% (end). The properties we've set at these keyframes are different positions. You can set any properties you like here.

So far we still have two static boxes.

<div style="text-align:center;"><a href="http://leemunroe.com/animation/animation1.html"><img src="http://www.leemunroe.com/wp-content/uploads/demo11.gif" alt="demo1.gif" border="0" width="540" height="182" /></a></div>

<a href="http://leemunroe.com/animation/animation2.html">View demo.</a>

<h5>Apply the keyframe animation</h5>

Our last step applies the magic to the object of our choosing. We're going to apply it to 'box2'.

<pre><code>
.box2{
-webkit-animation:movingbox 5s infinite;
}
</code></pre>

<strong>movingbox</strong> calls the animation we want to use, which we have already defined.


<strong>5s</strong> states we want the animation movement to last 5 seconds.

<strong>infinite</strong> means the animation will keep going and going.

We now have a CSS3 animation - box2 should be moving from right to left and back again. (Note: remember this only works in Safari and Chrome).

<div style="text-align:center;"><a href="http://leemunroe.com/animation/animation3.html"><img src="http://www.leemunroe.com/wp-content/uploads/demo3.gif" alt="demo3.gif" border="0" width="540" height="271" /></a></div>

<a href="http://leemunroe.com/animation/animation3.html">View demo.</a>

<h4>More CSS3 animation properties</h4>

This is a very simple example I have used here, and is just to help beginners get started.

For the -webkit-animation property, there are a number of other values you can try:
<ul>
<li>-webkit-animation-name: [any name you like];</li>
<li>-webkit-animation-iteration-count: [number, infinite];</li>
<li>-webkit-animation-timing-function: [linear, ease,ease-in, ease-out];</li>
<li>-webkit-animation-duration: [time];</li>
<li>-webkit-animation-delay: [time];</li>
</ul>

For the @-webkit-keyframes rule, instead of using percentage as keyframes, we can also declare a from and to state. You can also make it transform while animating.

<pre><code>
@-webkit-keyframes movingbox{
from{left:90%;-webkit-transform: rotate(0deg);}
to{left:10%;-webkit-transform: rotate(360deg);}
}
</code></pre>

<a href="http://leemunroe.com/animation/animation4.html">View demo.</a>

<h4>CSS3 animations in action</h4>

See if you can spot the @keyframe animations on these sites (note: you'll need to use a webkit browser like Safari or Chrome to see the animations in action).

<h5><a href="http://neography.com/experiment/circles/solarsystem/">Our Solar System</a></h5>
<div style="text-align:center;"><a href="http://neography.com/experiment/circles/solarsystem/"><img src="http://www.leemunroe.com/wp-content/uploads/solar.jpg" alt="solar.jpg" border="0" width="540" height="543" /></a></div>

Our Solar System using pure CSS3 for planets and orbits.

<h5><a href="http://futureofwebdesign.com/404/">Future Of Web Design</a></h5>
<div style="text-align:center;"><a href="http://futureofwebdesign.com/404/"><img src="http://www.leemunroe.com/wp-content/uploads/fowd3.jpg" alt="fowd.jpg" border="0" width="540" height="295" /></a></div>

404 pages are always a nice place to experiment with stuff that only us geeks will get.

<h5><a href="http://hardboiledwebdesign.com/">Hard Boiled Web Design</a></h5>
<div style="text-align:center;"><a href="http://hardboiledwebdesign.com/"><img src="http://www.leemunroe.com/wp-content/uploads/hardboiled.jpg" alt="hardboiled.jpg" border="0" width="540" height="301" /></a></div>

If the teaser site is anything to go by this book from Andy Clarke should be a good CSS3 reference.

<h5><a href="http://massiveblue.com/">Massive Blue</a></h5>
<div style="text-align:center;"><a href="http://massiveblue.com/"><img src="http://www.leemunroe.com/wp-content/uploads/massive.jpg" alt="massive.jpg" border="0" width="540" height="362" /></a></div>
Sam Brown's portfolio animation is subtle but beautifully executed.

<h5><a href="http://eclipticlabs.com">Ecliptic</a></h5>
<div style="text-align:center;"><a href="http://eclipticlabs.com"><img src="http://www.leemunroe.com/wp-content/uploads/ecliptic3.jpg" alt="ecliptic.jpg" border="0" width="540" height="400" /></a></div>

This was my experiment, a hidden 'Easter egg' on the Ecliptic website.

<h4>Conclusion</h4>

In regards to usefulness, the CSS3 animations above aren't that. But <strong>they do let you, the designer, experiment</strong> with the latest techniques available.

<strong>Make a point of working a CSS3 animation into your next project just so you can get a feel for how they work.</strong> Then in the near future, when more browsers adopt them, you'll be able to make some <strong>really attractive user interfaces without a gif or Javascript effect in sight</strong>.

<strong><em>Have you experimented with CSS3 animations yet?</em></strong>

<h4>Further reading</h4>
<ul>
<li><a href="http://www.w3.org/TR/css3-animations">CSS3 animation properties on W3</a></li>
<li><a href="http://24ways.org/2009/css-animations">Mr Max Voltar on CSS Animations</a></li>
<li><a href="http://webkit.org/blog/324/css-animation-2/">CSS Animation on Surfin' Safari</a></li>
</ul>
 
