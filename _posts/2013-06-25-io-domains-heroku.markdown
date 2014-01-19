---
layout: post
status: publish
published: true
title: How to set up your first .io domain (with Heroku)
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 3028
wordpress_url: http://www.leemunroe.com/?p=3028
date: 2013-06-25 13:30:43.000000000 -07:00
comments:
- id: 154336
  author: Greg
  author_email: me@gre.gs
  author_url: http://gre.gs
  date: '2013-06-26 02:11:36 -0700'
  date_gmt: '2013-06-26 01:11:36 -0700'
  content: "If I'm not mistaken, don't CNAME records require a \".\" to be applied
    after the URL? \r\n\r\nI encountered issues with this in the past when setting
    up custom domains for other services using the Expert Mode. In Normal Mode is
    shows an error when trying to save a CNAME without the \".\"."
- id: 154337
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2013-06-26 05:35:10 -0700'
  date_gmt: '2013-06-26 04:35:10 -0700'
  content: '@Greg: Good catch. Updated.'
- id: 154368
  author: Rene
  author_email: info@renesebastian.nl
  author_url: http://www.renesebastian.nl
  date: '2013-07-01 08:17:41 -0700'
  date_gmt: '2013-07-01 07:17:41 -0700'
  content: Thanks for the Gandi offer! Saves allot :)
- id: 154369
  author: Chris Southam
  author_email: me@csoutham.com
  author_url: http://www.csoutham.com
  date: '2013-07-01 12:18:59 -0700'
  date_gmt: '2013-07-01 11:18:59 -0700'
  content: "Good shout on Gandi and the discount code. Thank you.\r\nJust ordered
    mine for half the cost that everywhere else seems to be :)\r\n\r\nCheers Lee!"
- id: 154530
  author: Charlie Dowler
  author_email: charliedowler15@gmail.com
  author_url: http://charliedowler.com
  date: '2013-07-20 18:52:12 -0700'
  date_gmt: '2013-07-20 17:52:12 -0700'
  content: Awesome, thanks for the code. Bought my very own .io :-)
- id: 154569
  author: Ricardo A. Rubio
  author_email: rickarubio@gmail.com
  author_url: http://www.rickarubio.com
  date: '2013-08-07 07:41:13 -0700'
  date_gmt: '2013-08-07 06:41:13 -0700'
  content: Thank you for writing this article! I plan on using my .io domain (rar.io)
    as a rails resume site for myself. Thanks for distilling the process!
---
.io Domains are all the rage in the startup/developer world. A couple of favourites include <a href="http://www.preact.io/">Preact.io</a>, <a href="https://www.intercom.io">Intercom.io</a>, <a href="http://github.io">GitHub.io</a>  and <a href="http://codepen.io/">CodePen.io</a>. 

As the .com market is saturated, it opens up an opportunity to claim a domain name that you want for your project or startup.

Having shipped a couple of .io's myself recently (<a href="http://codeshare.io/"> CodeShare.io</a>, <a href="http://flask.io/"> Flask.io</a>) I thought I'd share the process of setting up your own (if you're using Heroku).

<h4>1. See what .io domains are available</h4>

I use <a href="http://domai.nr/">Domainr</a> for this.

It searches for you in realtime across various domain extensions, including .com .io .co

<img src="http://www.leemunroe.com/wp-content/uploads/domainr.jpg" alt="domainr" width="300" />

<h4>2. Register your .io domain (with Gandi)</h4>

I shopped around and found <a href="https://www.gandi.net/">Gandi</a> to be the best price for a .io domain at $39 (£29) *

* See the end of this post for a 30% discount code

<a href="http://gandi.net"><img src="http://www.leemunroe.com/wp-content/uploads/gandi.jpg" alt="gandi" width="800"/></a>

<h4>3. Set up a zone file on Gandi</h4>

To point your Gandi .io domain to your server, you need to set up a new DNS zone file. 

From your list of domains, select your new .io domain, then find the Zone files area to edit. 

<img src="http://www.leemunroe.com/wp-content/uploads/zone.jpg" alt="zone" width="800" />

Click "Copy to edit" to make a new zone file. Since Gandi uses version control, you will need to make a new version to edit it. Give it any name you like.

<img src="http://www.leemunroe.com/wp-content/uploads/copy.jpg" alt="copy" width="500" />

If you're using Heroku, you'll want to add Heroku A records and the CNAME of your heroku app.

<pre><code>
@ 10800 IN A 174.129.212.2
@ 10800 IN A 75.101.145.87
@ 10800 IN A 75.101.163.44
www 10800 IN CNAME myapp.herokuapp.com.
</code></pre>

Just cut and paste this into your zone file and edit (use expert mode).

Remember you have to apply the zone file ("Use this version") for it to become active.

<img src="http://www.leemunroe.com/wp-content/uploads/version.jpg" alt="version" width="700" />

<h4>4. Add the domain to Heroku</h4>

In your Heroku app settings add the www and naked domain name.

<img src="http://www.leemunroe.com/wp-content/uploads/heroku.jpg" alt="heroku" width="800" />

<h4>5. Tell the world you have a .io domain</h4>

That should be you ready for action. Time to submit it to <a href="https://news.ycombinator.com/submit">Hacker News</a>.

<h4>Bonus: 30% Off .io domains from Gandi</h4>

When I told <a href="http://gandi.net">Gandi</a> about this post they were kind enough to offer a discount code for .io domains.

Use <strong>IO4LESS</strong> before July 31st 2013 for 30% off all .io domains on Gandi.

<strong><em>Do you have a .io domain? Share it below.</em></strong>

<h4>Further reading</h4>
<ul>
<li><a href="https://devcenter.heroku.com/articles/custom-domains">Custom domains on Heroku</a></li>
<li><a href="http://wiki.gandi.net/en/dns/zone">Zone files on Gandi</a></li>
</ul>
