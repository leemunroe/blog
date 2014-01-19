---
layout: post
status: publish
published: true
title: How to get your website's rich snippets displayed on Google search results
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2254
wordpress_url: http://www.leemunroe.com/?p=2254
date: 2011-02-28 10:01:38.000000000 -08:00
comments:
- id: 25128
  author: Clive Walker
  author_email: clive.walker@cvwdesign.co.uk
  author_url: http://www.cvwdesign.co.uk/
  date: '2011-02-28 20:52:59 -0800'
  date_gmt: '2011-02-28 19:52:59 -0800'
  content: |-
    Have been adding hReview to a pub website I run. Definitely worth doing. It seems that Google just want aggregated hReview data. Is that your experience? In my case, I don't actually want the *aggregated* data showing so I have used display: none (the individual hReviews are still displayed). Is that what you have done?

    As an aside, how do you find managing reviews when the place owner complains about negative comments?
- id: 25129
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2011-03-01 15:46:09 -0800'
  date_gmt: '2011-03-01 14:46:09 -0800'
  content: '@Clive: Which site is that Clive? Yes I marked up both (aggregated and
    individual) with the hope that Google will use the individual reviews at some
    stage too (although haven''t noticed this working yet). Managing negative comments
    is awkward :-/'
- id: 25130
  author: Clive Walker
  author_email: clive.walker@cvwdesign.co.uk
  author_url: http://www.cvwdesign.co.uk/
  date: '2011-03-01 16:25:40 -0800'
  date_gmt: '2011-03-01 15:25:40 -0800'
  content: "@Lee: I should have added a link; it's Horsham Pub Guide http://www.horshampub.co.uk
    but only a few pages have hReview so far. This one, for example, http://www.horshampub.co.uk/boars-head.php.
    I've used an include pattern for the pub's hCard in each hReview. I was advised
    that this was a good thing although some browser microformats extensions don't
    seem to recognise this and I may change if Google does not like.\r\n\r\nPlease
    excuse some of the mark-up, it's an older site and needs a recode/clean-up!"
- id: 25131
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2011-03-02 02:48:46 -0800'
  date_gmt: '2011-03-02 01:48:46 -0800'
  content: '@Clive: Taking a look at Boars Head and using the Google Chrome extension
    shows me the reviewer''s hCard separate from the review. Although the aggregated
    review does seem to be working.'
- id: 25132
  author: Clive Walker
  author_email: clive.walker@cvwdesign.co.uk
  author_url: http://www.cvwdesign.co.uk/
  date: '2011-03-02 09:38:52 -0800'
  date_gmt: '2011-03-02 08:38:52 -0800'
  content: "@Lee: The Chrome extension does seem to show the hCard separate. I'm not
    sure if that indicates a problem with what I've done or if that's the way it works.
    Do you have an example where the extension shows the hCard as part of the hReview?
    \r\n\r\nThe Google Rich Snippets Testing Tool associates the hCard with the hReview.
    I have checked the page with the Operator Firefox add-on debug tool. This seems
    to show the hCard is part of the review. I've done some checking on the microformats.org
    site but the hReview Creator tool is out of action so I cannot see the mark-up
    from that."
- id: 25134
  author: TurkReno
  author_email: turkreno@turkreno.com
  author_url: http://www.turkreno.com
  date: '2011-03-03 08:19:44 -0800'
  date_gmt: '2011-03-03 07:19:44 -0800'
  content: This makes for a great advanced intro to Microdata. It can be used for
    more than just reviews. Thanks for sharing.
- id: 25148
  author: Steve
  author_email: steve.lemaitre@gmail.com
  author_url: ''
  date: '2011-03-21 14:02:40 -0700'
  date_gmt: '2011-03-21 13:02:40 -0700'
  content: "Per Google, you shouldn't mark these chunks up as \"display:none;\", you
    should instead hide them in  tags.\r\n\r\nTag it as:\r\n\r\n \r\n\r\n    OR\r\n\r\n
    \r\n \r\n \r\n\r\nThis way it doesn't show up for the client, but the search engine
    gets to read it."
- id: 25149
  author: Steve
  author_email: steve.lemaitre@gmail.com
  author_url: ''
  date: '2011-03-21 14:05:16 -0700'
  date_gmt: '2011-03-21 13:05:16 -0700'
  content: "OK... so my meta tags didn't show up... lol!\r\n\r\nHide them in MeTa
    tags... like this:\r\n\r\n{ &lt;-- used instead of HTML bracket\r\n\r\n{meta itemprop
    = &#039;worst&#039; content = &#039;1&#039;}\r\n{meta itemprop = &#039;best&#039;
    content = &#039;5&#039;}\r\n{meta itemprop = &#039;rating&#039; content = &#039;1.5}"
- id: 26026
  author: Sid
  author_email: theblogote@gmail.com
  author_url: http://
  date: '2011-05-31 20:00:17 -0700'
  date_gmt: '2011-05-31 19:00:17 -0700'
  content: "Makes a lot of sense now. I hah a hard time finding out how rich snippet
    actually works.\r\n\r\nHappy that one of your site has made it in the search with
    those ratings. \r\n\r\nHowever, I'd like to know if we can deploy RDFa breadcrumb
    onto WordPress sites?"
- id: 106530
  author: ijac
  author_email: ijac.wei@gmail.com
  author_url: http://organicnanao.blogspot.com/
  date: '2012-04-20 09:04:11 -0700'
  date_gmt: '2012-04-20 08:04:11 -0700'
  content: Thank you. It`s helpful for me.
- id: 109167
  author: Luật doanh nghiệp
  author_email: topiclaw@gmail.com
  author_url: http://topiclaw.com
  date: '2012-04-30 17:10:12 -0700'
  date_gmt: '2012-04-30 16:10:12 -0700'
  content: I already as theo how to your and has been!Thank you very much!
- id: 130674
  author: jon hope
  author_email: jonhope1@live.co.uk
  author_url: http://
  date: '2012-06-26 12:17:43 -0700'
  date_gmt: '2012-06-26 11:17:43 -0700'
  content: You have said nothing most folk already know, i wanted to know more about
    the code and where it goes!!!
- id: 147158
  author: Sumit
  author_email: aumicen@gmail.com
  author_url: http://www.sumitrawat.in
  date: '2012-08-10 10:53:22 -0700'
  date_gmt: '2012-08-10 09:53:22 -0700'
  content: nice way of expressing how to use it. thanks
---
Two years ago when we launched <a href="http://lookaly.com">Lookaly</a>, a local review website for Northern Ireland, we included microformats that would tell the "Google bots" some useful information about the reviews we were receiving on our site.

Only last week our rich snippets started appearing on results. Hallelujah!

<!--more-->

<img src="http://www.leemunroe.com/wp-content/uploads/stars1.jpg" alt="" title="stars" width="540" height="180" class="alignnone size-full wp-image-2256" />

If you've ever read an article, book or listened to someone talk about microformats they'll usually say all you need to do us mark up your page with microformats. <strong>But it's not that easy.</strong>

<h4>What are these rich snippets you speak of?</h4>

Google displays extra information with their search results where applicable.

Websites like TripAdvisor, Yelp, Amazon etc. stand out over other search results with their star ratings. The hope is that if Google show Lookaly star ratings along with their results, it will increase click throughs (which it has done already).

<h4>1. Mark it up with microformats</h4>
<img src="http://www.leemunroe.com/wp-content/uploads/markup1.jpg" alt="" title="markup" width="540" height="100" class="alignnone size-full wp-image-2260" />


You can markup the following with extra information for Google:

<ol>
<li><a href="http://www.google.com/support/webmasters/bin/answer.py?answer=146645">Reviews</a></li>
<li><a href="http://www.google.com/support/webmasters/bin/answer.py?answer=146646">People</a></li>
<li><a href="http://www.google.com/support/webmasters/bin/answer.py?answer=146750">Products</a></li>
<li><a href="http://www.google.com/support/webmasters/bin/answer.py?answer=146861">Businesses</a></li>
<li><a href="http://www.google.com/support/webmasters/bin/answer.py?answer=173379">Recipes</a></li>
<li><a href="http://www.google.com/support/webmasters/bin/answer.py?answer=164506">Events</a></li>
</ol>

<h4>2. Test to make sure it works</h4>
<img src="http://www.leemunroe.com/wp-content/uploads/test.jpg" alt="" title="test" width="540" height="230" class="alignnone size-full wp-image-2259" />


Use the <a href="http://www.google.com/webmasters/tools/richsnippets">Google rich snippets testing tool</a> to make sure it's picking up your data.

As a Google Chrome user I also found the <a href="https://chrome.google.com/extensions/detail/oalbifknmclbnmjlljdemhjjlkmppjjl">Michromeformats extension</a> very useful.

<h4>3. Submit your site to Google</h4>

<a href="http://www.google.com/support/webmasters/bin/request.py?contact_type=rich_snippets_feedback">Submit your site here.</a>

<h4>4. Be patient</h4>

I've submitted Lookaly at least 10 times over the past 2 years and have never heard back from Google (even when they accepted us).

I don't know how they work but all I can do is assume they only approve websites that they see as:

<ol>
<li>A reliable source of reviews</li>
<li>Have a substantial amount of reviews</li>
<li>Are marked up correctly</li>
</ol>

If you're able to tick these boxes then you shouldn't have a problem.

It's fantastic that Google have enabled rich snippets for Lookaly and a great milestone to reach. If you're wondering, Lookaly has over 5,000 reviews and 10,000 business listings for Northern Ireland.

<strong><em>Have you attempted and/or had any success with Google rich snippets?</em></strong>

<h4>Useful links</h4>

<ul>
<li><a href="http://www.google.com/support/webmasters/bin/answer.py?hl=en&answer=99170">Google rich snippets</a></li>
<li><a href="http://www.google.com/webmasters/tools/richsnippets">Rich snippets testing tool</a></li>
<li><a href="http://googlewebmastercentral.blogspot.com/2009/05/introducing-rich-snippets.html">Introducing rich snippets</a></li>
</ul>
