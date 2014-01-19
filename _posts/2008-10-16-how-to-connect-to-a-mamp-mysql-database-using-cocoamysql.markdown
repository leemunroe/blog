---
layout: post
status: publish
published: true
title: How to connect to a MAMP MySQL database using CocoaMySQL
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 296
wordpress_url: http://www.leemunroe.com/?p=296
date: 2008-10-16 12:00:00.000000000 -07:00
comments:
- id: 177
  author: Phil Thompson
  author_email: hello@philthompson.co.uk
  author_url: http://imgiseverything.co.uk/
  date: '2008-10-24 11:12:41 -0700'
  date_gmt: '2008-10-24 10:12:41 -0700'
  content: Ah, yes I remember this form when I first setup MAMP/CocoaMySQL. Actually,
    I tend to use MySQL Tools' Administrator and/or Query browser for my MySQL needs
    and don't use CocoaMySQL but perhaps I should give it another whirl.
- id: 328
  author: JesperA
  author_email: jesper.andersson@limmared.com
  author_url: ''
  date: '2008-11-09 11:00:05 -0800'
  date_gmt: '2008-11-09 10:00:05 -0800'
  content: Thanks for the tip, CocoaMySQL (now Sequel Pro) works great, one question
    though, is it possible to connect to a MySQL database that´s not on my computer?
- id: 330
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2008-11-09 14:56:57 -0800'
  date_gmt: '2008-11-09 13:56:57 -0800'
  content: '@JesperA: Yes you should be able to, as long as your host allows it'
- id: 7792
  author: Julia
  author_email: julia80@btinternet.com
  author_url: ''
  date: '2009-05-22 11:24:10 -0700'
  date_gmt: '2009-05-22 10:24:10 -0700'
  content: I have spent ages trying to figure this out. I put in my very specific
    google query with little hope of an answer and here it is!  Thankyou thankyou
    thankyou!
- id: 8410
  author: Paul
  author_email: pwiegers@gmail.com
  author_url: www.phpswivel.com
  date: '2009-06-17 17:28:29 -0700'
  date_gmt: '2009-06-17 16:28:29 -0700'
  content: thanks a million! That was just the information I needed...
- id: 11606
  author: JK
  author_email: jonnd@comcast.net
  author_url: ''
  date: '2009-09-30 01:40:23 -0700'
  date_gmt: '2009-09-30 00:40:23 -0700'
  content: "This post is a little lifesaver to those of us dabblers in the realm of
    MySQL (who don't understand the gory details, nor want to).  In Sequel Pro (CocoaMySQL's
    replacement), this hint can be used to connect to MAMP MySQL, but isn't required.
    \ In Sequel Pro, there are two ways to connect (actually, three, but SSH is over
    my head): Standard and Socket.  In Standard, you can connect using host \"127.0.0.1\"
    and port \"8889\".  In Socket, you can connect using host \"localhost\" and socket
    \"/applications/mamp/tmp/mysql/mysql.sock\".  Some of this info is also alluded
    to on the welcome page that opens when you start up MAMP.    By the way, for any
    Rapidweaver users out there, you can use this hint for viewing MAMP MySQL data
    (via PHP scripts) live in Rapidweaver's preview mode.  The PHP script to make
    the MySQL connection just specifies the host as the path to the socket, instead
    of \"localhost\", for example:\r\n$con = mysql_connect(\":/applications/mamp/tmp/mysql/mysql.sock\",\"root\",\"root\");\r\nNote
    the \":\" at the start of the path."
- id: 12036
  author: joey
  author_email: 07sfkong@stu.edu.cn
  author_url: ''
  date: '2009-10-12 04:00:11 -0700'
  date_gmt: '2009-10-12 03:00:11 -0700'
  content: hello guy, can you send me a example code how to connet to mysql with cocoaMSQL
    in iphone? i have problem with that. thanks a lot.
- id: 27659
  author: Dave
  author_email: dave@brochures.ca
  author_url: ''
  date: '2011-06-20 19:43:04 -0700'
  date_gmt: '2011-06-20 18:43:04 -0700'
  content: |-
    This came in very handy... thanks Lee.

    Also works with Sequel Pro. =)
---
I came across this problem when I converted to a Mac and I was trying to connect to a MySQL database on MAMP using CocoaMySQL. CocoaMySQL wasn't able to connect to the database. Thought the solution may be useful to others.

<!--more-->

<h4>Settings</h4>
Host:localhost
User:root
Password:root

If you try to connect now you may get the following error:
<strong>Unable to connect to host localhost.
Be sure that the address is correct and that you have the necessary privileges.
MySQL said: Access denied for user 'root'@'localhost' (using password: YES)</strong>

<div class="blog-img"><img src="http://www.leemunroe.com/wp-content/uploads/picture-91.png" alt="CocoaMySQL error" border="0" width="410" height="151" /></div>

<h4>Solution</h4>
So here's the extra bit. Enter the following in the <strong>socket</strong> field:
<strong>/applications/mamp/tmp/mysql/mysql.sock</strong>

<div class="blog-img"><img src="http://www.leemunroe.com/wp-content/uploads/picture-30.png" alt="Picture 30.png" border="0" width="261" height="346" /></div>

Happy days!
