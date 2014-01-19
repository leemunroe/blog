---
layout: post
status: publish
published: true
title: How to design a parallax recruiting page
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2855
wordpress_url: http://www.leemunroe.com/?p=2855
date: 2012-09-18 09:31:33.000000000 -07:00
comments:
- id: 153412
  author: al
  author_email: technik@hotmail.co.uk
  author_url: http://
  date: '2012-09-19 19:48:36 -0700'
  date_gmt: '2012-09-19 18:48:36 -0700'
  content: Saw the site a few days ago. Looks great visually but I find myself disliking
    the parallax effect generally. I find it slow and disorienting. Also seems to
    end up in "scroll bloat" where you spend more time scrolling than actually reading
    the content
- id: 153414
  author: Josh
  author_email: jata16@gmail.com
  author_url: http://joshuaaustin.com
  date: '2012-09-21 06:28:59 -0700'
  date_gmt: '2012-09-21 05:28:59 -0700'
  content: Love the site and appreciate the list of resources...no doubt I will be
    using a lot of them in the future!
- id: 153416
  author: Rubber Wristband    
  author_email: everydaywristbands@gmail.com
  author_url: http://www.everydaywristbands.com/
  date: '2012-09-22 08:57:47 -0700'
  date_gmt: '2012-09-22 07:57:47 -0700'
  content: Very nice explanation here. this was so nice to read this article, and
    so many new stuff :)
---
Recruiting and hiring pages typically lack creativity, are filled with lists of requirements and company history information that usually isn't very exciting.

Some <a href="http://jobs.apple.com/index.ajs?BID=1&method=mExternal.showJob&RID=119257&CurrentPage=2">examples</a> <a href="http://www.google.com/about/jobs/locations/mountain-view/engineering/ux/interaction-designer-mountain-view.html">of</a> <a href="https://careers.microsoft.com/jobdetails.aspx?ss=&pg=0&so=&rw=1&jid=74858&jlang=en">said</a> <a href="https://tas-yahoo.taleo.net/careersection/jobdetail.ftl?job=36799&lang=en&sns_id=twitter#.UFAosUG2bnU.twitter">pages</a>.


<img src="http://www.leemunroe.com/wp-content/uploads/boring.jpg" alt="Boring" border="0" width="600" height="270" />


We're <a href="http://www.kareo.com/design">hiring a UX Designer</a> at Kareo and we wanted to make sure that this wasn't another job listing that no one took notice of.

On top of that, we wanted to showcase that <strong>what us designers do on a day to day basis at Kareo is pretty cool</strong>. The healthcare industry is an interesting space and one of the advantages of designing healthcare software is that there's a lot of room for improvement.

So I put this page together to help capture some eyes, and thought I'd share my experience designing it.

<a href="http://www.kareo.com/design"><img src="http://www.leemunroe.com/wp-content/uploads/hiring.jpg" alt="Hiring" border="0" width="600" height="434" /></a>

<h4>Quality photography</h4>

<strong>Professional photos of what happens in the workspace</strong> is a great way to help people visualise what they'll be doing, how they'll be working and who they'll be working with.

We were lucky to have <a href="http://www.facebook.com/pages/Josh-Gunder-Photography/330918703586808">Josh Gunder</a> on our team who just so happens to be a fantastic photographer, and he helped us take some shots around the office.

<img src="http://www.leemunroe.com/wp-content/uploads/photography.jpg" alt="" title="photography" width="600" height="400" class="alignnone size-full wp-image-2860" />


<h4>Visual themes</h4>

For this particular page I used a different visual theme for each section, which takes more time to experiment with than I thought.

Using a combination of <a href="https://typekit.com/">Typekit</a>, <a href="http://kuler.adobe.com/">Kuler</a>, <a href="https://github.com/subtlepatterns/SubtlePatterns">Subtle Patterns</a>, <a href="http://pictos.cc/server/">Pictos icons</a> I experimented with different styles to help give the page more character and make it visually appealing.


<h4>Parallax effect</h4>

This page isn't over loaded with parallax effects, but has some nice subtleties. I started by using <code>background-position:fixed;</code> which kept the background photos static while the user scrolls.

Then I added some effects using the awesome <a href="http://johnpolacek.github.com/scrollorama/">Scrollarama jQuery plugin</a> that <a href="https://twitter.com/johnpolacek">John Polacek</a> put together. It has several scrolling effects you can use, parallax being just one of them.

Using Scrollorama it's very easy to add an effect to an element. 

<pre><code>scrollorama.animate('.iphoneapp',{ delay: 0, duration: 600, property:'left', start:-800, end:0 });</code></pre>


<h4>Promotion</h4>

Of course once the page is ready for action you need to promote it somehow.

<strong>Social networks</strong> is an obvious start. With the hope that it has some originality friends and followers would help spread the word.

We listed the position on various <strong>job boards</strong> including <a href="http://dribbble.com/jobs">Dribbble</a>, <a href="http://www.krop.com/#!/">Krop</a> and <a href="http://www.coroflot.com/">Coroflot</a>.



<h4>The finished product</h4>

<a href="http://www.kareo.com/design"><img src="http://www.leemunroe.com/wp-content/uploads/year.jpg" alt="Year" border="0" width="600" height="422" /></a>


<h4>Inspiration</h4>

We're not the first company to put together a creative recruiting page. Here are some others who took the time and effort to do something different.

<a href="http://www.sharethrough.com/careers/"><img src="http://www.leemunroe.com/wp-content/uploads/st5.jpg" alt="Sharethrough" border="0" width="600" height="391" /></a>

<a href="http://leadvisualdesigner.intercom.io/"><img src="http://www.leemunroe.com/wp-content/uploads/intercom1.jpg" alt="Intercom" border="0" width="600" height="566" /></a>

<a href="http://www.airbnb.com/jobs"><img src="http://www.leemunroe.com/wp-content/uploads/airbnb.jpg" alt="Airbnb" border="0" width="600" height="444" /></a>
