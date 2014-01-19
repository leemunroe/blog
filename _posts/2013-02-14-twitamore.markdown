---
layout: post
status: publish
published: true
title: Twit Amore one year on
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2925
wordpress_url: http://www.leemunroe.com/?p=2925
date: 2013-02-14 08:11:33.000000000 -08:00
comments: []
---
Last Valentine's Day I launched <a href="http://www.leemunroe.com/who-do-you-love-on-twitter/">Twit Amore</a>, a website that tells you <strong>who you "love" on Twitter</strong>. Nothing game changing, just a bit of fun.

The website has received some significant traffic over the past 365 days.

<ul>
<li>Visits <strong>1,516,429</strong></li>
<li>Unique visitors <strong>1,143,399</strong></li>
<li>Pageviews <strong>5,196,460</strong></li>
<li>Avg. visitor duration <strong>02:51</strong></li>
</ul>

On average that's around 4,000 visits a day. A lot more than expected to be honest.

<img src="http://www.leemunroe.com/wp-content/uploads/pageviews.jpg" alt="Pageviews" border="0" />

It has made its way around the world, starting from UK/Ireland, to Europe, US, South America, Middle East, Japan. Most recently it's been very popular in Saudi Arabia.

<img src="http://www.leemunroe.com/wp-content/uploads/map.jpg" alt="Map" border="0" />

Last year it got some initial coverage from <a href="http://mashable.com/2012/02/14/twit-amore/">Mashable</a>, but because of my shawdy programming the servers couldn't handle it and it constantly crashed. This resulted in me throwing more web dynos at Heroku (which gets expensive very quickly).

I spent the last couple of weeks debugging and optimising with help from <a href="https://airbrake.io/">Airbrake</a> and <a href="http://newrelic.com/">New Relic</a>, so it should be much more reliable now.

To help with performance, the website only calculates the outcome of who you love once and then saves and caches it. 

<strong>As Valentine's Day 2013 is here I've wiped the database clean so you can try it out again.</strong>

<a href="http://twitamore.com" class="button">See who you love on Twitter</a>

Happy Valentine's Day.
