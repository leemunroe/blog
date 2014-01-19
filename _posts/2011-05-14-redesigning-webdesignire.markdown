---
layout: post
status: publish
published: true
title: Redesigning WebDesignire - a showcase of Irish web design
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2409
wordpress_url: http://www.leemunroe.com/?p=2409
date: 2011-05-14 18:13:50.000000000 -07:00
comments:
- id: 25299
  author: Jordan Moore
  author_email: madebyjordan@gmail.com
  author_url: http://madebyjordan.com
  date: '2011-05-16 13:45:19 -0700'
  date_gmt: '2011-05-16 12:45:19 -0700'
  content: "It's looking great Lee! I'm keen on reading your evaluation of Sass in
    particular out of the tools you've used. Compass looks terrific but sadly for
    me it's Rails-only.\r\n\r\nNice conclusion about gallery sites - no harm in them
    at all. They are all about first impressions as you mentioned."
- id: 25300
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2011-05-17 12:33:45 -0700'
  date_gmt: '2011-05-17 11:33:45 -0700'
  content: "Thanks Jordan. You do need Ruby installed to run Compass, but it doesn't
    have to be on a Rails project. Your project/framework could be as small as 1 HTML
    page and a stylesheet.\r\n\r\nIt does mean getting your hands dirty with Terminal
    though  :-s"
- id: 25517
  author: 51 Website Design
  author_email: thejaydawg@gmail.com
  author_url: http://51websitedesign.com/
  date: '2011-05-23 02:51:42 -0700'
  date_gmt: '2011-05-23 01:51:42 -0700'
  content: Awesome! So, it looks at the site and take a picture itself?
- id: 25690
  author: Michael Mallon
  author_email: michaelmallon60@hotmail.com
  author_url: http://www.reflex-studios.com
  date: '2011-05-26 11:04:05 -0700'
  date_gmt: '2011-05-26 10:04:05 -0700'
  content: "Always liked WebDesignire, it is nice to see what other people in the
    area are doing.\r\n\r\nI have been thinking about redeveloping best of video sites
    and might look into Bluga.net webthumb API, looks like it could save alot of time."
- id: 25708
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2011-05-26 16:16:21 -0700'
  date_gmt: '2011-05-26 15:16:21 -0700'
  content: The screenshots aren't perfect but certainly save a lot of time. For this
    instance where it's just a small snapshot it does the job.
- id: 26355
  author: تصميم مواقع
  author_email: pask86@hotmail.com
  author_url: http://simacom.de/webdesign
  date: '2011-06-04 18:55:42 -0700'
  date_gmt: '2011-06-04 17:55:42 -0700'
  content: great and nice..
- id: 26636
  author: mag for women
  author_email: nishantcm@yahoo.com
  author_url: http://magforwomen.com
  date: '2011-06-08 13:42:57 -0700'
  date_gmt: '2011-06-08 12:42:57 -0700'
  content: these galleries are very good for getting design inspiration. i cannot
    get enough of them
- id: 27038
  author: JANNY pyper
  author_email: Jann@carbontype.com
  author_url: http://
  date: '2011-06-13 00:39:30 -0700'
  date_gmt: '2011-06-12 23:39:30 -0700'
  content: Lee, try firefox addon "screengrab!"
---
I just relaunched <a href="http://webdesignire.com/">WebDesignire</a>. WebDesignire is a website showcasing <strong>"beautiful web design from Ireland and Northern Ireland"</strong>. It's a side project that I initially launched in 2009 but due to lack of time I haven't been able to update it in quite some time. The new site is built with <strong>Ruby on Rails</strong>, and much of the original functionality has been stripped to keep it simple.

<!--more-->

<h4>Why it needed re-designed and re-developed</h4>

<h5>The old site</h4>

<div style="text-align:center;"><a href="http://webdesignire.com"><img src="http://www.leemunroe.com/wp-content/uploads/oldsite.jpg" alt="oldsite.jpg" border="0" width="540" height="410" /></a></div>

The original site was built using <strong>Wordpress</strong>. Wordpress is a fantastic framework but it was far too bloated for a project like this. 99% of the Wordpress functionality wasn't needed.

Maintenance and <strong>keeping the site updated was also an issue</strong>. For every website that was submitted I would have to do several tasks including taking screenshots, saving screenshots, uploading screenshots etc.

Lots to do there, hence the reason I had no time to update it.

<h5>The new site</h5>

<div style="text-align:center;"><a href="http://webdesignire.com"><img src="http://www.leemunroe.com/wp-content/uploads/newsite1.jpg" alt="newsite.jpg" border="0" width="540" height="305" /></a></div>

Using Rails I was able to develop a minimal web app that only included the functionality that it actually needed - <strong>submitting and approving websites</strong>.

Using the very cool <a href="http://webthumb.bluga.net/home">Bluga.net webthumb API</a>, the web app is able to automatically take, resize and save screenshots of the websites.

Approving and publishing a site now literally takes one click.

<h4>Experimental for me</h4>

As with any side project I was able to experiment and learn a few new things.

For this project I was able to try out:

<ul>
<li><a href="http://haml-lang.com/">Haml</a></li>
<li><a href="http://sass-lang.com/">Sass</a></li>
<li><a href="http://compass-style.org/">Compass</a></li>
<li><a href="https://github.com/simplificator/rwebthumb">Simplificator rwebthumb gem</a></li>
</ul>

Am <strong>loving the combination of Sass and Compass for writing CSS</strong>. Will follow up with a more detailed post on this soon.

<h4>How useful are 'CSS galleries'?</h4>

Galleries like this have to be taken with a pinch of salt. Of course they don't represent all the great sites that are out there and they certainly <strong>don't take into account user experience or what's below the surface of the iceberg</strong>. It's a visual snapshot of a bunch of websites that form a good first impression. 

Love 'em or hate 'em I still think it's interesting and useful to see who's delivering quality websites locally.

<h4>Do you know any cracking Irish websites?</h4>

<a href="http://webdesignire.com/suggest">Submit them to WebDesignire</a>. Even better if it's not one of your own sites ;-)

Looking for clean, well structured websites with a good mix of type, colour, shape, texture and whitespace etc. HTML5 and CSS3 use is a bonus.
