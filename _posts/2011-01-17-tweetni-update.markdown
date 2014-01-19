---
layout: post
status: publish
published: true
title: Updated Northern Ireland's Twitter directory
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2234
wordpress_url: http://www.leemunroe.com/?p=2234
date: 2011-01-17 10:01:11.000000000 -08:00
comments:
- id: 25094
  author: David Airey
  author_email: comments@davidairey.com
  author_url: http://www.davidairey.com/
  date: '2011-01-17 16:08:11 -0800'
  date_gmt: '2011-01-17 15:08:11 -0800'
  content: The "ratio" addition is a nice touch. Too many people play the numbers
    game. And for what?
- id: 25100
  author: Michael Martin
  author_email: michael@problogdesign.com
  author_url: http://www.problogdesign.com
  date: '2011-01-19 19:09:27 -0800'
  date_gmt: '2011-01-19 18:09:27 -0800'
  content: "Looks awesome Lee. Definitely second David's comment about the ratio,
    that was a great touch!\r\n\r\n(PS - Never realized you'd written it in Rails,
    very cool!)"
- id: 25103
  author: Marcelo
  author_email: marcelo88@gmail.com
  author_url: http://www.southpark.com.br/
  date: '2011-01-21 21:58:26 -0800'
  date_gmt: '2011-01-21 20:58:26 -0800'
  content: |-
    Awesome.
    U did the right thing using html5 and css3, it will be the most important thing in the future, considering search engines and usability.
- id: 25104
  author: Aline Couto
  author_email: alineideias@gmail.com
  author_url: http://www.celulaideias.com.br/
  date: '2011-01-21 22:13:26 -0800'
  date_gmt: '2011-01-21 21:13:26 -0800'
  content: Saddly i`m not from ireland. But tweetin looks pretty cool. New fan of
    your blog.
---
I decided it was time to tidy up the design of <a href="http://tweetni.com/">TweetNI</a>. When I started doing that I decided it was time to tidy up the ruby code behind the design. As a result, I completely redesigned and redeveloped it.

<!--more-->

<h4>What is TweetNI?</h4>

<div style="text-align:center;"><a href="http://tweetni.com"><img src="http://www.leemunroe.com/wp-content/uploads/tweetni_before.jpg" alt="tweetni_before.jpg" border="0" width="500" height="332" /></a>
<em>Old site</em></div>

<h5>1. A directory</h5>

<a href="http://tweetni.com/">TweetNI</a> is a website I set up in 2009 that lists people from Northern Ireland on Twitter.

The hope is that it will help you find people, either to follow or to contact.

If you wanted to find any Northern Irish journalists on Twitter, for example, you could <a href="http://tweetni.com/people?keyword=journalist">search for journalists</a> and assuming they mentioned the word journalist in their description, they would be returned in the results.

<h5>2. A hashtag</h5>

After launching TweetNI I included a little Javascript widget that would show any tweets containing the #tweetni hashtag on the homepage. 

After a while quite a few people were using this hashtag in their daily tweets, including the likes of <a href="http://twitter.com/#!/utvlive">@utvlive</a>, <a href="http://twitter.com/#!/bbcnewsline">@bbcnewsline</a> and <a href="http://twitter.com/#!/nidirect">@nidirect</a>. There could be up to 200 tweets a day containing #tweetni.

<h4>Why the update?</h4>

<div style="text-align:center;"><a href="http://tweetni.com"><img src="http://www.leemunroe.com/wp-content/uploads/tweetni_after.jpg" alt="tweetni_after.jpg" border="0" width="500" height="375" /></a>
<em class="aligncenter">New site</em></div>
<ol>
<li>The <strong>design</strong> was a bit awful looking.</li>

<li><strong>Tweets</strong> weren't actually getting <strong>saved</strong> anywhere, so I was missing out on some good data.</li>

<li><strong>People</strong> were listed by <strong>follower count</strong> by default meaning anyone who follows lots of people (generally to get more followers in return) still got listed high up.</li>

<li>It wasn't that easy to <strong>maintain</strong> thanks to my hacked together code.</li>

<li>I wanted to try out some <strong>Rails 3</strong> development.</li>
</ol>

<h4>How I built it</h4>

It's actually pretty simple to build and there are only a handful of tasks.

<h5>Ruby on Rails</h5>

The website is developed with Ruby on Rails.

Here's a great <a href="http://guides.rubyonrails.org/">step by step guide</a> on setting up your first Rails application.

If you still need to setup Rails, Ruby and MySQL on Snow Leopard then <a href="http://www.leemunroe.com/snow-leopard-mysql-ruby-rails/">take a read at this</a>.

<h5>Twitter gem</h5>

Using the <a href="http://twitter.rubyforge.org/">Twitter gem</a> it's easy to call the Twitter API and find out who is tweeting what.

Search for #tweetni and save the results that are returned. It's that simple.

<h5>HTML5 and CSS3</h5>

As with any personal or side project I got to make the most of <strong>HTML5 elements and CSS3 goodness</strong>.

<h4>From Northern Ireland? Be sure to add yourself</h4>

To join TweetNI all you need to do is <a href="http://twitter.com/home?status=Just%20joined%20Northern%20Ireland's%20Twitter%20directory%20http://tweetni.com%20%23tweetni">tweet</a> "<strong>Just joined Northern Ireland's Twitter directory http://tweetni.com #tweetni</strong>"

Okay, <strong>maybe not the nicest way to register people</strong> (OAuth is slicker) but one that helps spread the word at the same time and it's quick and painless to implement.

<strong><em>Have you developed any projects using the Twitter API?</em></strong>
