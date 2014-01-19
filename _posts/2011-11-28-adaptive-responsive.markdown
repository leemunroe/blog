---
layout: post
status: publish
published: true
title: Going from adaptive to fully responsive
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2647
wordpress_url: http://www.leemunroe.com/?p=2647
date: 2011-11-28 09:16:40.000000000 -08:00
comments:
- id: 56936
  author: Wayne McManus
  author_email: wayne@roundedworks.com
  author_url: http://www.roundedworks.com
  date: '2011-12-01 13:16:22 -0800'
  date_gmt: '2011-12-01 12:16:22 -0800'
  content: "Good read, with some useful pointers.\r\n\r\nAbout to 'responsify' my
    site and this will come in handy. Keep up the good work!"
- id: 57628
  author: bus rental
  author_email: blanetorino@gmail.com
  author_url: http://alliancetransport.com.sg
  date: '2011-12-03 01:49:17 -0800'
  date_gmt: '2011-12-03 00:49:17 -0800'
  content: this is really informative. thanks.
- id: 67244
  author: Lee Gustin
  author_email: ltgustin@gmail.com
  author_url: http://www.leegustin.com
  date: '2011-12-22 01:07:33 -0800'
  date_gmt: '2011-12-22 00:07:33 -0800'
  content: |-
    Great article Lee :) Thanks for the link to the 1140 grid, I have been considering doing fully responsive and that grid system looks pretty solid.

    cheers
- id: 72828
  author: Zap! Media
  author_email: craig@zapmedia.co.uk
  author_url: http://www.zapmedia.co.uk
  date: '2012-01-02 09:26:00 -0800'
  date_gmt: '2012-01-02 08:26:00 -0800'
  content: Great article, thanks for sharing.  A few of our clients have already noticed
    a need for Responsive Web Design. In our opinion, this will be a BIG trend for
    web design in 2012.
- id: 76014
  author: Andrea Ballerino
  author_email: andre.brasile@gmail.com
  author_url: http://andreaballerino.com/
  date: '2012-01-08 19:30:37 -0800'
  date_gmt: '2012-01-08 18:30:37 -0800'
  content: Great article! Thanks.
- id: 87306
  author: Tony Bianco
  author_email: tony@3h2h.com
  author_url: http://www.3h2h.com
  date: '2012-02-06 05:01:55 -0800'
  date_gmt: '2012-02-06 04:01:55 -0800'
  content: Fantastic article on responsive design. The MQFramework was a great find,
    well worth the article. Would be cool if there was a Boilerplate/MQFramework implementation.
    Although in our designs instead of using the 960 grid we typically use the 978px
    grid. However with most desktops using large monitors why not use 1140px!
- id: 107621
  author: Jesus Bejarano
  author_email: bejaranojesus7@gmail.com
  author_url: http://
  date: '2012-04-24 15:40:25 -0700'
  date_gmt: '2012-04-24 14:40:25 -0700'
  content: Excellent article keep going for more
- id: 108169
  author: Sara
  author_email: info@thecssgallerysubmission.com
  author_url: http://thecssgallerysubmission.com
  date: '2012-04-26 18:13:11 -0700'
  date_gmt: '2012-04-26 17:13:11 -0700'
  content: Great Information sharing, my site is not responsive in less than 1280
    resolutions, it really helps to implement as responsive
- id: 110138
  author: René
  author_email: r.samsen@live.nl
  author_url: http://
  date: '2012-05-04 23:10:31 -0700'
  date_gmt: '2012-05-04 22:10:31 -0700'
  content: "It's a great article to read!\r\n\r\nHowever, i've got a question.\r\nWith
    these tips given, a site is fully responsive you say.\r\nBut you'll always keep
    a @media query to style mobile sites, isn't it?\r\nYou use it yourself with this
    site I saw in the source code.\r\n\r\nAm I missing the point at your first statement
    that sites should be flexible? Or am I wrong?"
---
Back in April I wrote a post about experimenting with <a href="http://www.leemunroe.com/responsive-design/">responsive web design</a>, and how my website responded, or adapted, to different devices and browser widths.

After reading Ethan Marcotte's <a href="http://www.abookapart.com/products/responsive-web-design">Responsive Web Design book</a>, I realised that there is a difference between responsive and adaptive web design.

According the Ethan, who also coined the phrase "Responsive Web Design", there are three components to a responsive design:

<ol>
<li>A flexible, grid-based layout</li>
<li>Flexible images and media</li>
<li>Media queries</li>
</ol>

<h4>Flexible is the keyword</h4>

Until recently I had a site that <strong>adapted to the user's device</strong>, depending on the available screen width. If it was less than or equal to 480px, the site would adapt and styles would change to suit that user who were more than likely on a mobile device. Anyone else was served the normal 960px width site.

The CSS looked a bit like this:

<pre><code>@media only screen and (max-width: 480px) {
INSERT MOBILE STYLES HERE
}</code></pre>

But there was nothing <strong>flexible</strong> about this approach. It adapted to one other screen size, it didn't respond to varying screen sizes.

<h4>Target/context = result</h4>

Instead of setting widths and type in pixels, which are fixed, <strong>set widths and type in percentages or ems</strong>.

This will give you a flexible design, and the <strong>widths and sizes will automatically respond depending on their relative bounding box</strong>.

After reading Ethan's book I spent little over 1 hour converting my site from adaptive to responsive. Here is the step by step process:

<h4>How to make your site fully responsive</h4>

<h5>1. Flexible typesetting</h5>
Change all type sizes to <strong>ems</strong>.

Assuming you want your base font size to be 16px (context), which is typically the browser default, the <strong>body font-size is therefore 100%</strong>. All other font sizes are then relative to this font size using ems.

target/context = result

Therefore if we want our H1 to be 72px (target):

<strong>72</strong>(target) / <strong>16</strong>(context) = <strong>4.5</strong>(result)

<pre><code>font-size:4.5em/* 72 / 16 */;</code></pre>

<h5>2. Flexible grid</h5>
Change column widths to <strong>percentages (or ems)</strong> rather than pixels.

Give your container a max-width. This will be the bounding box for your grid. <strong>Everything within the box is then relative to the max width</strong>, or the width of the browser (if less than the max width).

<a href="http://cssgrid.net/">1140 CSS Grid</a> is a useful boilerplate with a flexible responsive grid.

<h5>3. Flexible images</h5>

Give all images a max-width of 100%. This will ensure they don't 'break' your design.

<pre><code>img{max-width:100%};</code></pre>


<h5>4. Box-sizing</h5>
One issue I've always had with fluid grids is making input field widths flush with the grid. You want a textarea to be 100% width of the parent div, but you also want it to have a 2px border and 5px padding. Thanks to <a href="http://css-tricks.com/7323-box-sizing/">box-sizing:border-box</a> we have a solution.

<pre><code>textarea{padding:5px;border:2px solid #ddd;width:100%;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;</code></pre>

<h5>5. Additional hacks</h5>

There may be additional hacks like positioning and width issues you have to think about. In my case, the jQuery slider plugin I was using on the homepage needed a fixed width.

Thankfully, <a href="http://twitter.com/#!/PendragonDev/status/138668910353448960">Jordan Burke</a> was able to recommend <a href="http://flex.madebymufffin.com/">FlexSlider</a>, a fully responsive jQuery slider plugin.

<div style="text-align:center;"><a href="http://leemunroe.com/about"><img src="http://www.leemunroe.com/wp-content/uploads/ipad1.jpg" alt="" title="ipad" width="600" height="395" class="alignnone size-full wp-image-2651" /></a></div>


<h4>Further reading</h4>

<ul>
<li><a href="http://cssgrid.net/">1140 CSS Grid</a> - A fully responsive CSS boilerplate</li>
<li><a href="http://goldilocksapproach.com/">The Goldilocks Approach to Responsive Web Design</a> - Nice article and boilerplate from Front, focused on responsive design from the content out</li>
<li><a href="http://mqframework.com/">MQFramework</a> - A useful responsive CSS framework</li>
</ul>
