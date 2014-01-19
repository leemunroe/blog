---
layout: post
status: publish
published: true
title: How to get MySQL, Ruby, RVM and Rails working on Snow Leopard
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2226
wordpress_url: http://www.leemunroe.com/?p=2226
date: 2011-01-11 17:27:21.000000000 -08:00
comments:
- id: 25090
  author: Carlos Hermoso
  author_email: carlos@carloshermoso.com
  author_url: http://carloshermoso.com
  date: '2011-01-13 16:34:23 -0800'
  date_gmt: '2011-01-13 15:34:23 -0800'
  content: "Hi Lee!\r\n\r\nfollowing you for a long time now. Just wondering, what's
    your opinion on RoR? You studied Rails in the past, didn't you? While I have some
    knowledge in back-end development (PHP, MySQL), I feel way more experienced in
    front-end coding, but I've been feeling like learning Ruby (RoR or whatever) for
    a while.\r\n\r\nThanks for sharing your opinions mate, and greetings from Spain!"
- id: 25091
  author: Updated Northern Ireland&#8217;s Twitter directory &#8211; Freelance Web
    Designer Lee Munroe
  author_email: ''
  author_url: http://www.leemunroe.com/tweetni-update/
  date: '2011-01-17 00:20:50 -0800'
  date_gmt: '2011-01-16 23:20:50 -0800'
  content: '[...] your first Rails application.If you still need to setup Rails, Ruby
    and MySQL on Snow Leopard then take a read at this.Twitter gemUsing the Twitter
    gem it&#8217;s easy to call the Twitter API and find out who is [...]'
- id: 25098
  author: Montana Flynn
  author_email: montana949@gmail.com
  author_url: http://montanaflynn.me
  date: '2011-01-18 23:36:29 -0800'
  date_gmt: '2011-01-18 22:36:29 -0800'
  content: |-
    Thanks for your help... one side note.  In snow leopard typing open just shows the man page, so you just want to type open /usr/

    PS.  The tab order for your comment form is not intuitive.
---
For over a year now <strong>I refused to upgrade</strong> from Leopard to Snow Leopard on Mac OSX. I knew it wouldn't be a simple straight forward procedure.

So this past Christmas, when I had some time to spare, I took the plunge and of course, as expected, not everything worked after.

<strong>It took me a few days to get everything back up and running</strong> so I've noted down some things below to help any other designers/developers who have still to make the jump.

<!--more-->

<h4>Backup your development databases</h4>
Should go without saying but here's your reminder anyway. <strong>Backup everything.</strong> 

Specifically, back up your local databases. For handiness, <strong>backup/copy your MySQL databases (located under /usr/local/mysql/data)</strong> to your desktop. You'll want to use these shortly after upgrading.

<h5>Sidenote: How to open /usr/ in Finder</h5>
I'm usually lost when it comes to working in Terminal. I prefer to see folders in Finder.

In case you didn't know how to locate and open any hidden folders like /usr/ do the following:

<ol>
<li>Open Terminal.app</li>
<li>Type: cd /usr/</li>
<li>Type: open .</li>
</ol>

Simple when you know how.

<h4>Install/Upgrade to Snow Leopard</h4>
Follow the on screen instructions. Should be simple enough and takes a little less than 1 hour.

<h4>Install MySQL</h4>
Go to <a href="http://www.mysql.com/downloads/mysql/">MySQL.com</a> and download the latest version of MySQL.

Just to confuse you there are a few options. Go for the <strong>DMG Archive</strong>. You're most likely looking for the <strong>64-bit </strong>but <a href="http://support.apple.com/kb/ht3696">check first to make sure</a>.

Once downloaded, install MySQL (along with the Startup Item and Preference Pane).

<h4>Restore your development databases</h4>
At this point we have MySQL installed but we don't have any data.

You want to copy the data folder that we previously backed up into your new MySQL folder.

I found this link helpful from Corey. <a href="http://www.idolhands.com/application-and-web-development/sql-and-databases/restore-rails-development-databases-after-snow-leopard-and-mysql-upgrade">Restore development databases after Snow Leopard upgrade</a>.

In short:

<ol>
<li>Turn off MySQL (use the Preference Pane)</li>
<li>Replace /usr/local/mysql/data with your backed up data folder</li>
<li>Turn on MySQL</li>
</ol>

<h4>MySQL is nearly all set</h4>

At this point I tried one of my PHP sites locally however <strong>it didn't work</strong>.

Thanks to <a href="http://www.artin.org/geekblog/2010/12/installing-mysql-5-5-8-on-mac-os-x-snow-leopard/">Aaron's solution here</a>, I was able to get it up and running.

<ol>
<li>Open Terminal.app</li>
<li>Type: sudo /Applications/TextEdit.app/Contents/MacOS/TextEdit /usr/local/mysql/support-files/mysql.server</li>
<li>Find the line starting with basedir and datadir and replace with:<br>basedir=/usr/local/mysql<br>datadir=/usr/local/mysql/data</li>
<li>Save the file</li>
<li>Start MySQL using the System Preferences pane button.</li>
</ol>

<h4>Installing Ruby, rvm and Rails</h4>
<strong>This is where I got completely lost</strong> and wasted a couple of days trying to troubleshoot and get things up and running.

I installed rvm, ruby and the rails gem but couldn't get any local applications to run for one reason or another (usually some sort of gem problem).

In the end I had to give in and ask for help from the talented <a href="http://davidjrice.co.uk/">Mr David Rice</a>, whose conclusion was to do a clean install.

<ol>
<li><a href="http://stackoverflow.com/questions/3558656/how-to-remove-rvm-ruby-version-manager-from-my-system">Remove RVM</a></li>
<li><a href="http://punctuatedproductivity.com/2007/11/01/uninstalling-ruby-installed-by-source-on-os-x/#removing-ruby">Remove Ruby</a></li>
<li><a href="http://developer.apple.com/technologies/xcode.html">Install Xcode</a> if you haven't already done so (p.s. it's a big ass file)</li>
<li><a href="http://www.cowboycoded.com/2010/12/04/setting-up-rails-3-on-mac-osx-snow-leopard-10-6-4/">Install git, RVM, Ruby and Rails</a></li>
</ol>

Hopefully this is you up and running.

<h4>Should it be this difficult?</h4>
I'm not a developer so I was lost quite a bit along the way. Running commands in Terminal is a task in itself.

It seems to be different for everyone so the process above might not be exactly the same for you. And if you're a developer you might be saying to yourself "Why did he need to do that?". <strong>Tell me if anything above looks odd.</strong>

<strong><em>If someone can create a button that once clicked, installs everything you need (in all the right places) to get a Rails project running locally, that would be great thanks.</em></strong>

Big thanks to David Rice for his help and to all the websites mentioned above. <a href="http://stackoverflow.com/">Stackoverflow</a> is your friend in situations like this.

