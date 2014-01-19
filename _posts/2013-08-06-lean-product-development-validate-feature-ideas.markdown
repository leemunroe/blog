---
layout: post
status: publish
published: true
title: 'Lean product development: How to validate a feature idea in 5 minutes'
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 3086
wordpress_url: http://www.leemunroe.com/?p=3086
date: 2013-08-06 07:23:01.000000000 -07:00
comments:
- id: 154601
  author: Roman
  author_email: roma.pesliak@gmail.com
  author_url: http://www.wiseguysedge.com
  date: '2013-08-12 05:24:54 -0700'
  date_gmt: '2013-08-12 04:24:54 -0700'
  content: I am very glad I found this article. You just saved me and my partners
    about 1 week of work developing our sports community website www. Wiseguysedge.com.
    Might you have any articles that can better explain mix panel? I will definitely
    start to read more of your work. Thanks so much!
- id: 154602
  author: Zack
  author_email: jzp5079@gmail.com
  author_url: ''
  date: '2013-08-12 19:44:14 -0700'
  date_gmt: '2013-08-12 18:44:14 -0700'
  content: Is there a good way to differentiate between bots vs. real people here?
- id: 154605
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2013-08-14 20:47:35 -0700'
  date_gmt: '2013-08-14 19:47:35 -0700'
  content: "@Zack: Not sure actually. Apart from adding rel=nofollow to the link (which
    would block a Google bot).\r\n\r\n@Roman: Great to hear. Mixpanel have a lot of
    docs and their support is friendly and quick to reply."
- id: 154624
  author: David Smit
  author_email: davidsmit@gmail.com
  author_url: http://www.7-min.com/
  date: '2013-08-21 04:56:15 -0700'
  date_gmt: '2013-08-21 03:56:15 -0700'
  content: "This is awesome!\r\n\r\nI just implemented a test like this on my site
    (http://www.7-min.com)to see if people would be interested in signing up and logging
    into my application.\r\n\r\nFrom here I would be able to get feedback from them
    to find out what information they are looking for. \r\n\r\nThanks for sharing
    this. Much appreciated."
---
Every product has a back log of ideas and feature requests so how do you know what features are worth the time and effort developing?

In March I shipped <a href="http://flask.io/">Flask</a>, a tool that lets you create and share a to-do list without the hassle of registering, onboarding, downloading, installing etc.

It was an <strong>MVP (Minimal Viable Product)</strong>. I skipped a bunch of features I figured I would implement later. First <strong>I wanted to see if people would use it</strong> and <strong>how</strong> they would use it.

People did use it. And they started creating multiple lists. The problem was that there wasn't a good way to save or access multiple lists from other devices without emailing or bookmarking the URL so I thought about building in user accounts. However, at this point I didn't know if people would sign up.

<strong>With an experiment that took 5 minutes to implement I was able to determine that 20% of users wanted this feature</strong>.


<h4>How to validate a feature request with 5 minutes of effort</h4>

Implementing user accounts (in Rails) would take me 2 weekends of work; registration, accounts, saving lists, removing lists, tracking, designing screens, edge cases etc.

I didn't want to spend the time if it turned out no one signed up so <strong>I ran an experiment</strong>.

<strong>I dropped in a link on the top of the page that said "Sign up to save multiple lists." and tracked the number of clicks it got with Mixpanel.</strong>

<img src="http://www.leemunroe.com/wp-content/uploads/flask1.jpg" alt="flask1" width="600" />

On click, the user would see a popup that alerted them this feature was under development, and they could leave their email if they wanted to be notified.

<img src="http://www.leemunroe.com/wp-content/uploads/flask2.jpg" alt="flask2" width="600" />

What happened was that <strong>20%</strong> of users clicked on the sign up link, and a further <strong>40%</strong> of those left their email address.

<img src="http://www.leemunroe.com/wp-content/uploads/flask3.jpg" alt="flask3" width="600" />

I had my validation (I had originally set a target of 5%). I also had the added bonus of a mailing list of users to announce the new feature to or to run a beta test with.


<h4>Using Mixpanel for tracking events</h4>

<a href="http://mixpanel.com">Mixpanel</a> is a great tool for tracking your users. It's as simple as including their script on your page then tracking a button click with Javascript e.g.

<pre><code>
$("#signup-button").click(function(){
  mixpanel.track("Wants to register")
});
</code></pre>

If you want to record emails like I did, do something like this…

<pre><code>
$("#signup-button").click(function() {
  mixpanel.track("Wants to register"); 
  var email = prompt("Thanks for your interest. This is a feature I'm currently building. Enter your email below and I'll email you as soon as it is ready.");
  if(email){
    mixpanel.track("Registered email", {"email": email}); 
  }
  return false;
});
</code></pre>


<h4>Conclusion</h4>

Ideas and feature requests are great, but they're assumptions until you validate them. Validate by running small experiments.

I was able to determine that 20% of users wanted this feature before spending much time on it and was able to create a list of 300 emails of users that wanted to be notified when this feature was released.

<strong>By validating with a small experiment you can develop a feature with the confidence that you're not wasting your time and effort.</strong>
