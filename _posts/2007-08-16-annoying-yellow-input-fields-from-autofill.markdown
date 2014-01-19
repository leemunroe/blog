---
layout: post
status: publish
published: true
title: Annoying yellow input fields from autofill
author: lee
author_login: lee
wordpress_id: 25
wordpress_url: http://www.leemunroe.com/blog/index.php/2007/08/16/annoying-yellow-input-fields-from-autofill/
date: 2007-08-16 22:07:39.000000000 -07:00
comments:
- id: 33
  author: John Burley
  author_email: john_burley@hotmail.com
  author_url: http://www.burlster.com
  date: '2008-04-01 14:42:26 -0700'
  date_gmt: '2008-04-01 14:42:26 -0700'
  content: |-
    Superb fix.  I'd been wondering about this, and was about to use some obscure JavaScript fix myself before I found your article.

    Thanks,

    John
- id: 34
  author: cdk
  author_email: cdkuhnert@hotmail.com
  author_url: ''
  date: '2008-06-17 15:54:39 -0700'
  date_gmt: '2008-06-17 15:54:39 -0700'
  content: Where exactly did you all post "background:#585858 !important;"
- id: 35
  author: lee
  author_email: lee@leemunroe.com
  author_url: http://
  date: '2008-06-17 19:23:58 -0700'
  date_gmt: '2008-06-17 19:23:58 -0700'
  content: |-
    @cdk
    It goes in your css style sheet as the background for your input. So if your form has an id of 'myform' then:

    #myform input{
    background:#585858 !important;
    }

    Hope this helps
- id: 10308
  author: Judi
  author_email: itwasalie@gmail.com
  author_url: http://mystary.com
  date: '2009-08-25 06:36:46 -0700'
  date_gmt: '2009-08-25 05:36:46 -0700'
  content: Wow, thanks for the fix. I could have never thought of that. This is much
    more simpler than that crazy JavaScript.
- id: 32296
  author: Freelancelot
  author_email: freelancelot@gmail.com
  author_url: http://
  date: '2011-08-18 23:29:21 -0700'
  date_gmt: '2011-08-18 22:29:21 -0700'
  content: |-
    Awesome. This will fix the newly-implemented, dreaded yellow fields present in Safari v5.1 when autofill is active, which is turned on by default. Looks awful on sites where the yellow clashes with the design, so this is a welcome fix.

    Many thanks!!
---
If you have the Google tool bar installed on any of your browsers, I'm sure you've come across yellow input fields in forms. This is a feature called autofill that highlights the fields that the tool bar can automatically fill for you. If you're a web designer, these can be particularly annoying:
<ul>
	<li>They may not fit in with your site's colour scheme</li>
	<li>User's may get confused into thinking these are the only required fields</li>
	<li>If you're trying to spice up the look of your form, it makes things ugly</li>
</ul>
<p class="blogimg" align="center"><img src="http://www.leemunroe.com/wp-content/uploads/2007/11/input1.gif" alt="Input problem" /></p>
Until recently I have always accepted that that was the way it was going to be. I have Google tool bar installed on Firefox. Installed it ages ago and use it occasionally to look up page ranks however, in my opinion it's pretty useless. With the latest versions of Firefox and Explorer I don't think you need it, just gets in the way, so I keep it hidden.

I was trying to spruce up a form by adding a background image to input boxes and the fields were turning yellow, as usual, but this time I decided to look up a solution to my problem. Incidentally, you can turn the autofill feature off, but users visiting the site most likely have it turned on. I came across a few Javascript solutions, which I thought would do the trick, until I eventually discovered that there was a simple solution to the problem the whole time. Simply by adding !important after my CSS line, the browser will obey my style rather than the autofill style.
<code>background:#585858 !important;</code>
<p class="blogimg" align="center"><img src="http://www.leemunroe.com/wp-content/uploads/2007/11/input2.gif" alt="Input solved" /></p>

A simple solution to an annoying problem. My advice is to remove Google tool bar in the first place, but as a web designer it's handy to know what some of your users might be seeing.
