---
layout: post
status: publish
published: true
title: Useful tips for linking to pdf from html
author: lee
author_login: lee
wordpress_id: 42
wordpress_url: http://www.leemunroe.com/blog/index.php/2007/11/29/useful-tips-for-linking-to-pdf-from-html/
date: 2007-11-29 18:01:25.000000000 -08:00
comments:
- id: 47
  author: gembin
  author_email: gembin@gmail.com
  author_url: ''
  date: '2007-12-03 05:04:10 -0800'
  date_gmt: '2007-12-03 05:04:10 -0800'
  content: nice
- id: 9817
  author: danimeeka
  author_email: julia@blackswanit.com.au
  author_url: http://www.blackswanit.com.au
  date: '2009-08-11 12:19:43 -0700'
  date_gmt: '2009-08-11 11:19:43 -0700'
  content: "I have used #zoom=100 for \"Powerscape Technical Sheet\" on www.test.bparchitects.com.au/publications.html
    and it makes no difference. Perhaps BRIEFLY the PDF opens at 100% zoom, but it
    quickly reverts to full screen, which on my computer renders at 146% zoom. Any
    idea how I can fix that?\r\nThankyou!"
---
Recently a client asked me if it was possible to have a pdf on their website open up at 100% automatically. I said I didn't think it was possible but I'd have a look and see what I could find. Turns out it is possible and there's a bunch of other commands that you can pass to Adobe Reader too.

Check out this useful article entitled <a href="http://www.rdpslides.com/psfaq/FAQ00050.htm">Linking to PDF documents from HTML</a>
<h3>Commands</h3>
When linking simply add a # after the pdf url and enter the command e.g. &lt;a href="mypdf.pdf#zoom=100"&gt;
<ul>
	<li>page=1 (brings you to page number)</li>
	<li>zoom=100 (opens pdf at 100%)</li>
</ul>
<h3>Examples</h3>
<ul>
	<li><a href="http://www.leemunroe.com/wp-content/uploads/2007/11/mesh.pdf#zoom=100">zoom=100</a></li>
	<li><a href="http://www.leemunroe.com/wp-content/uploads/2007/11/mesh.pdf#zoom=50">zoom=50</a></li>
</ul>
