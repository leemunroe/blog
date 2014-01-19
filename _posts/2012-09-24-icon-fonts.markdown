---
layout: post
status: publish
published: true
title: Why icon fonts are awesome
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2874
wordpress_url: http://www.leemunroe.com/?p=2874
date: 2012-09-24 09:32:09.000000000 -07:00
comments:
- id: 153422
  author: Sebi Lasse
  author_email: input@sebastianlasse.de
  author_url: http://
  date: '2012-09-25 18:55:09 -0700'
  date_gmt: '2012-09-25 17:55:09 -0700'
  content: |-
    perfect piece -
    and btw: there are severeal "mixing" tools around to mix your own icon font,
    e.g. http://fontello.com/ (free)
- id: 153449
  author: Lexi
  author_email: alexistowsend@gmail.com
  author_url: http://eacsoft.com/
  date: '2012-10-19 12:16:55 -0700'
  date_gmt: '2012-10-19 11:16:55 -0700'
  content: Thanks for listing down cool icon fonts, Font Awesome is the perfect one
    for my new project :) Thanks for the tip!
- id: 153512
  author: Darryl Manco
  author_email: tdsdarrylmanco@gmail.com
  author_url: http://www.texdesignstudio.com/?utm_source=leemonroeblog&amp;utm_medium=link&amp;utm_content=iconfontswonderful&amp;utm_campaign=backlink
  date: '2012-11-04 05:48:09 -0800'
  date_gmt: '2012-11-04 04:48:09 -0800'
  content: I never though of using icon fonts the way Drew spotlights.  Something
    new to put into action.  Thanks for the inspiration!
---
I've been using icon fonts for a few projects lately instead of graphical icons. 

There are several advantages to using icon fonts.

<ol>
<li><strong>Scale</strong> them with CSS</li>
<li><strong>Color</strong> them with CSS</li>
<li>Add <strong>shadows</strong> with CSS</li>
<li>Change <strong>opacity</strong> with CSS</li>
<li><strong>Rotate</strong> with CSS</li>
<li>Basically make any changes <strong>without opening Photoshop</strong> and editing a sprite</li>
<li>They <strong>automatically scale for retina</strong> displays</li>
</ol>

See for yourself. Chris Coyier put together a fantastic tool help you <a href="http://css-tricks.com/examples/IconFont/">see how awesome icon fonts are</a>.

<h4>List of icon fonts</h4>

Icon fonts are getting more and more popular. A few of my favourites:

<ul>
<li><a href="http://medialoot.com/item/signify-free-icon-font/">Signify Lite</a></li>
<li><a href="http://fortawesome.github.com/Font-Awesome/">Font Awesome</a></li>
<li><a href="http://www.zurb.com/playground/foundation-icons">Foundation</a></li>
<li><a href="http://symbolset.com/">Symbolset</a></li>
<li><a href="http://pictos.cc/font/">Pictos</a> and <a href="http://pictos.cc/server/">Pictos Server</a></li>
</ul>

<img src="http://www.leemunroe.com/wp-content/uploads/pictos.jpg" alt="Pictos" border="0" width="600" height="367" />

<h4>How to apply icon fonts</h4>

Drew Wilson put together a useful article on <a href="http://pictos.cc/articles/using-icon-fonts/">how to use icon fonts</a>.

In summary:

<h5>HTML</h5>

<pre><code><a href="" class="icon" data-icon="G">My Link</a></code></pre>

<h5>CSS</h5>

<pre><code>@font-face { 
	font-family: Signify; 
	src: url('signifylite-webfont.ttf'); 
} 

.icon:before {
	font-family: 'Signify';
	content: attr(data-icon);
	-webkit-font-smoothing: antialiased;
	vertical-align: text-bottom;
	margin-right:5px;
}</code></pre>


<strong><em>Are you using icon fonts yet?</em></strong>
