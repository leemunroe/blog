---
layout: post
status: publish
published: true
title: 'Quicktip: Update your Wordpress copyright date automatically'
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 832
wordpress_url: http://www.leemunroe.com/?p=832
date: 2009-01-08 14:04:50.000000000 -08:00
comments:
- id: 1356
  author: Harry Roberts
  author_email: harry@csswizardry.com
  author_url: http://csswizardry.com/
  date: '2009-01-08 14:53:32 -0800'
  date_gmt: '2009-01-08 13:53:32 -0800'
  content: "Old news ;)\r\nhttp://csswizardry.com/index.php?2008/07/30/21/30/19-six-useful-tips-for-improving-development-efficiency/\r\n\r\nNah,
    it is very useful - this is the first year I actually used it too."
- id: 1365
  author: THEODIN
  author_email: contact@theodin.co.uk
  author_url: http://www.theodin.co.uk
  date: '2009-01-09 12:24:37 -0800'
  date_gmt: '2009-01-09 11:24:37 -0800'
  content: Its always the simple things that trip us up! Thanks for the post!!
- id: 1371
  author: preaxz
  author_email: arie.putranto@gmail.com
  author_url: http://arie.putranto.com
  date: '2009-01-09 17:56:43 -0800'
  date_gmt: '2009-01-09 16:56:43 -0800'
  content: "Well, it hink it would be better if it said\r\nCopyright 200X-2009 ...
    :)\r\n\r\nanyway, have you see studiopress.com .. well, how do you think?"
- id: 1372
  author: preaxz
  author_email: arie.putranto@gmail.com
  author_url: http://arie.putranto.com
  date: '2009-01-09 17:57:03 -0800'
  date_gmt: '2009-01-09 16:57:03 -0800'
  content: "Well, it hink it would be better if it said\r\nCopyright 200X-2009 ...
    :)"
- id: 1490
  author: Josh Drake
  author_email: mail@tutorialwow.com
  author_url: http://www.tutorialwow.com/
  date: '2009-01-17 16:15:12 -0800'
  date_gmt: '2009-01-17 15:15:12 -0800'
  content: "I just wrote a post similar to this on my own blog!  You can check it
    out at this link:\r\n\r\nhttp://www.tutorialwow.com/articles/34-websites-that-are-still-in-2008/\r\n\r\nGreat
    minds think alike. ;)"
- id: 1559
  author: preaxz
  author_email: arie.putranto@gmail.com
  author_url: http://preaxz.com
  date: '2009-01-21 07:17:40 -0800'
  date_gmt: '2009-01-21 06:17:40 -0800'
  content: Hmm.. i got inspiration all of the sudden. What if we put some conditional
    tags to show copyright date, which is probably useful for post that really is
    posted on 2008 ...
- id: 19974
  author: 5 Copyright Steps Before Launching Any Site | PlagiarismToday
  author_email: ''
  author_url: http://www.plagiarismtoday.com/2010/03/10/5-copyright-steps-to-take-before-launching-any-site/
  date: '2010-03-10 20:10:31 -0800'
  date_gmt: '2010-03-10 19:10:31 -0800'
  content: '[...] sure your footer includes all the basic copyright information including
    the year, which you can configure to update automatically, the copyright symbol,
    your name and the license information for the work (All Rights Reserved, [...]'
- id: 76049
  author: Damian Gostomski
  author_email: damian.gostomski@googlemail.com
  author_url: http://gostomski.co.uk
  date: '2012-01-08 21:01:24 -0800'
  date_gmt: '2012-01-08 20:01:24 -0800'
  content: "I've written a short snippet which is an improvement over this, as it
    supports date ranges, so all you enter is the start date, and then it will display
    it as just that year, or that year to the current one if applicable\r\n\r\nCheck
    it out at http://www.gostomski.co.uk/snippet/better-auto-updating-copyright-date"
---
New year, time to go through all your websites and blogs and update the copyright date that you placed in the footer, right?

Not if you were smart and developed your site so it updates automatically.

<!--more-->
<h4>Solution</h4>
PHP and Wordpress can update your copyright year automatically.

Just place this code where you want the year to appear and voila, your year will change to 2009 (and will update automatically for years to come).

<pre><code><?php echo date('Y'); ?></code></pre>

Admittedly I hadn't done this myself until today ;)

<h4>Don't use the_time</h4>
I seen a couple of solutions using <a href="http://codex.wordpress.org/Template_Tags/the_time">the_time tag</a> in Wordpress, but this only displays the year of the last blog post in the_loop.
