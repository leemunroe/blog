---
layout: post
status: publish
published: true
title: A better way to deal with Internet Explorer conditional styles
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2430
wordpress_url: http://www.leemunroe.com/?p=2430
date: 2011-05-30 10:01:03.000000000 -07:00
comments:
- id: 25938
  author: Taryn
  author_email: taryn@phenomenoodle.com
  author_url: http://www.phenomenoodle.com
  date: '2011-05-30 11:26:04 -0700'
  date_gmt: '2011-05-30 10:26:04 -0700'
  content: I like it! IE conditionals drive me mad (IE itself drives me mad...), and
    this seems like an elegant solution. Thanks!
- id: 25942
  author: Pete Hawkins
  author_email: pete@phawk.co.uk
  author_url: http://phawk.co.uk
  date: '2011-05-30 13:24:22 -0700'
  date_gmt: '2011-05-30 12:24:22 -0700'
  content: "A good technique. I myself slightly prefer to keep ie fixes etc in a separate
    stylesheet, the modern browsers won't download it, so your only serving additional
    requests to IE users (they deserve it!).\r\nI like knowing that my css is neat
    and fixes are all applied separately. Easier to drop support of old browsers in
    the future as well."
- id: 25948
  author: Carson Shold
  author_email: carson@carsonshold.com
  author_url: http://www.carsonshold.com
  date: '2011-05-30 14:16:40 -0700'
  date_gmt: '2011-05-30 13:16:40 -0700'
  content: "I've seen a few people use these and it's great. I currently use 'CSS
    Browser Selector' - it uses JavaScript to detect the browser and add the class
    to the html tag, much like the above method. Best part is, this method also adds
    a class for Gecko (Firefox), Opera, Safari and Chrome.\r\n\r\nSome people make
    the argument against it because of a JavaScript dependency, but if someone is
    using Facebook, then they'll have JS enabled. That's the way I look at it at least.\r\n\r\nCheck
    it out http://rafael.adm.br/css_browser_selector/"
- id: 25950
  author: Brendan Rice
  author_email: Brendan@gumpshen.com
  author_url: http://www.gumpshen.com
  date: '2011-05-30 14:26:56 -0700'
  date_gmt: '2011-05-30 13:26:56 -0700'
  content: Have just discovered HTML 5 boilerplate recently as well, learned a lot
    from looking through the comments in the code. Can see me using it as a starting
    point for all projects.
- id: 26105
  author: Remkus
  author_email: remkus@forsite.nu
  author_url: http://www.forsite.nu
  date: '2011-06-01 19:24:01 -0700'
  date_gmt: '2011-06-01 18:24:01 -0700'
  content: 'Thematic has been doing this for ages already. Very easy to use that code
    and apply it to your own theme: http://themes.svn.wordpress.org/thematic/0.9.7.7/library/extensions/dynamic-classes.php'
- id: 26113
  author: Evan Warner
  author_email: ewarner@gmail.com
  author_url: http://www.twitter.com/evanwarner
  date: '2011-06-01 20:54:31 -0700'
  date_gmt: '2011-06-01 19:54:31 -0700'
  content: I'm with Pete on this one. I would rather give an extra HTTP request (a
    handful of milliseconds most likely) to the browsers that are dying out rather
    than burden the growing percentage of users on more standards-compliant browsers
    with the weight of the extra CSS. Then when IE6 or 7 support is dropped, it's
    just a matter of deleting a comment and a file.
- id: 26116
  author: Maneesh Prabhalayam
  author_email: mymaneesh@gmail.com
  author_url: http://
  date: '2011-06-01 21:41:39 -0700'
  date_gmt: '2011-06-01 20:41:39 -0700'
  content: nice technique..
- id: 26354
  author: تصميم مواقع
  author_email: pask86@hotmail.com
  author_url: http://simacom.de/webdesign
  date: '2011-06-04 18:54:25 -0700'
  date_gmt: '2011-06-04 17:54:25 -0700'
  content: good tips thanks a lot..
- id: 32808
  author: Trisha Cupra
  author_email: me@trishacupra.com
  author_url: http://rockingthepjs.com/
  date: '2011-08-24 06:22:57 -0700'
  date_gmt: '2011-08-24 05:22:57 -0700'
  content: I had to add just one little IE7 hack, and I didn't want to create a whole
    new file just for one tiny line of code. This was a very handy solution.
- id: 83100
  author: Steve
  author_email: sypashley@me.com
  author_url: http://www.northernalliance.co.uk/
  date: '2012-01-25 16:41:54 -0800'
  date_gmt: '2012-01-25 15:41:54 -0800'
  content: How does this work? This seems pretty good, won't you get issues when using
    older browsers?
---
For a few years now <strong>I've been using one or two conditional stylesheets</strong> to help with cross browser support, or in other words 'to help fix Internet Explorer'. But recently I've been trying out Paul Irish's technique.

<!--more-->

<h4>HTML5 Boilerplate</h4>

If you haven't already go over to <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a> and take a look at the notes. In particular look through the code for each file.

HTML5 Boilerplate is a <strong>bare bones framework</strong> for any web project, with all the best practice resets, styles, htaccess settings etc. in place.

I've been using bits and pieces of the HTML5 boilerplate for a while now and one of the things I like in particular is <strong>how it deals with conditional styles for Internet Explorer</strong>.

<h4>IE conditional stylesheets</h4>

Most of the sites I work on usually include something like this:

{% highlight html %}
<!--[if lt IE 7]>
<link rel="stylesheet" href="ie.css" /> 
<![endif]-->
{% endhighlight %}

This was to fix anything that looked out of place in IE6, usually fixes for pngs, floats, widths, positioning etc.

In some cases <strong>the site might have 2 or 3 of these conditional stylesheets</strong> for IE7 and IE8 fixes also.

<h4>Adding conditional classes to the html tag</h4>

Recently I've started using something like this instead:

{% highlight html %}
<!--[if lt IE 7]><html class="ie6" lang="en-GB"><![endif]-->
<!--[if IE 7]><html class="ie7" lang="en-GB"><![endif]-->
<!--[if IE 8]><html class="ie8" lang="en-GB"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en-GB"><!--<![endif]-->
{% endhighlight %}

This <strong>adds classes to the HTML tag</strong> in the different versions of IE, enabling you to target them with different CSS rules. 

If the user isn't using Internet Explorer then it only recognises the <strong>html lang="en-GB"</strong> tag.

So you can do stuff like this in your core stylesheet:

{% highlight css %}
fieldset legend{background-color:#f6f6f6;}
.ie6 fieldset{position:relative;}
.ie6 fieldset legend{position: absolute;top: -.5em;left: .2em;}
{% endhighlight %}

This works better for a couple of reasons:

<ol>
<li>Less HTTP requests (calling 1 stylesheet rather than 2 or 3)</li>
<li>It keeps your CSS rule in one place</li>
</ol>

<strong><em>What do you think, nice technique?</em></strong>

<h4>Further reading</h4>
<ul>
<li><a href="http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/">Conditional stylesheets vs CSS hacks? Answer: Neither!</a></li>
<li><a href="http://html5boilerplate.com/">HTML5 Boilerplate</a></li>
</ul>
