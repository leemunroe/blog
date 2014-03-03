---
layout: post
title: Lessons learned switching from Wordpress on Dreamhost to Jekyll on GitHub
---

Recently I switched my website from Wordpress, hosted on Dreamhost, to Jekyll, which I now host on GitHub. This post is an overview of why, how and any pain points I came across during the migration.

#### Why switch from Wordpress to Jekyll?

I've been on Wordpress for 7 or 8 years. It's a great tool. However **my website is fairly simple**. I have 3 pages and a blog. Wordpress is big, it's complex, and runs on PHP with a MySQL database. [Jekyll](http://jekyllrb.com/) is a light weight static site generator.

I seen this as a good **learning opportunity**. After reading [Anna's tutorial](http://24ways.org/2013/get-started-with-github-pages/) on using GitHub Pages, I was keen to try it out with Jekyll. On a side note, I also used this opportunity to use Grunt for the first time, again after reading a [24 Ways tutorial](http://24ways.org/2013/grunt-is-not-weird-and-hard/) by Chris Coyier.

#### Why switch from Dreamhost to GitHub?

I've had a Dreamhost account for a long time. I use it to register domains and to host Wordpress and static sites. My personal site was the biggest site on my VPS, which gets ~30,000 pageviews/mth.

For this I was paying Dreamhost $120/yr for an account + $30ish/mth for a VPS; **~$480/yr**.
<p class="aligncenter"><a href="http://www.dreamhost.com"><img src="{{site.baseurl}}/wp-content/uploads/dh.jpg" alt="Dreamhost Cost" width="600"></a></p>

Even at that I would receive a weekly email from Dreamhost about reaching my limits, which is something I never really understood how to fix.

<p class="aligncenter"><img src="{{site.baseurl}}/wp-content/uploads/dhemail.jpg" alt="Dreamhost Emails" width="600"></p>

[GitHub Pages](http://pages.github.com/) on the other hand, is **free**.

I'm usually on a machine with a dev environment, with Git and access to GitHub so writing a new blog post or making a change isn't a problem. Even if I'm not, I can log on to GitHub and use the UI as a CMS. GitHub seems reliable and my blog is a heck of a lot faster than it was before. Therefore I've been able to **cancel my Dreamhost VPS**, downgrade to shared hosting and **save myself some beer money**.

#### The switch is easy, but might take longer than you think

Import blog **posts**. Import **comments**. Find a **commenting** solution. Set up **URL structure**. Make sure **existing urls** matching up. Add **pagination**&hellip;I thought I could do it one Saturday. But between using Jekyll for the first time and a bunch of other stuff I forgot I'd have to do, it took a few extra week nights in total.

##### How to host your blog on GitHub Pages

* Read [this GitHub Pages tutorial](http://24ways.org/2013/get-started-with-github-pages/) from Anna Debenham
* And read the [Jekyll docs](http://jekyllrb.com/)

<p class="aligncenter"><a href="http://www.jekyllrb.com"><img src="{{site.baseurl}}/wp-content/uploads/jekyll.jpg" alt="Jekyll Docs" width="600"></a></p>

##### URL structures

You can see all the code for my blog [publicly on GitHub](https://github.com/leemunroe/blog). Here is the current `_config.yml` file:

{% highlight yaml %}
name: Lee Munroe
markdown: redcarpet
pygments: true
baseurl:
permalink: /:title
paginate: 10
paginate_path: /blog/page/:num
description: Blog of Product and UX Designer Lee Munroe
url: http://www.leemunroe.com
{% endhighlight %}

Notice `permalink: /:title` this was the url format of my Wordpress blog. I wanted to ensure that all existing URLs matched up so I didn't have to worry about 301s, 302s, 404s or losing search engine rankings.

The paginate url follows a similar pattern `paginate_path: /blog/page/:num`.

##### Importing posts from Wordpress

Jekyll has you covered.

Install the [jekyll-import gem](http://import.jekyllrb.com/docs/installation/) then follow [these instructions for Wordpress](http://import.jekyllrb.com/docs/wordpress/).

##### Images and wp-content

Don't forget to download your `wp-content/uploads` folder. Typically where all your blog images and uploads go. Also keep in mind that your posts most likely have absolute paths to these images so you'll want to keep them in the same folder, unless you do a find/replace all.

##### Comments

Finding a comments solution was an easy choice with [Disqus](http://disqus.com).

They have a super handy Wordpress export tool that will take all your existing comments and map them up with the same blog post, base on its url.

##### Pointing your domain to GitHub Pages

GitHub have a useful [how-to article](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) for this.

I added 3 records:

* A: 192.30.252.153 (for leemunroe.com)
* A: 192.30.252.154 (for leemunroe.com)
* CNAME: leemunroe.github.io (for www.leemunroe.com)

Note that you also have to add a file called `CNAME` to your repo, with your domain name written here.

{% highlight yaml %}
www.leemunroe.com
{% endhighlight %}

The annoying part comes when you don't know if you've done this right or not as **it can take a while for DNS changes to propogate**. You could be left waiting 10 minutes or 10 hours, wondering whether the changes you made were correct.

##### Other things easily forgot

* [Generating a sitemap with Jekyll](http://davidensinger.com/2013/03/generating-a-sitemap-in-jekyll-without-a-plugin/)
* [Adding RSS to Jekyll](http://blog.drewinglis.com/2013/03/18/adding-rss.html)
* **Search** - I added a quick and dirty Google search to the footer
* **Contact form** - I removed the contact form and am making do with an email link

#### So far so good

I've been using this new setup for a few weeks now and very happy. I've found my website to be much faster and I'm paying less money. I still use Dreamhost's shared hosting for some sites and quite like their service for registering domains and managing DNS.

This was a great learning opportunity on how to use GitHub Pages and as a result I've since shipped another 2 static websites to GitHub as it's so convenient. Comes in particularly handy for quick landing pages and hackathons.

#### Other useful articles

* [How to: Wordpress to Jekyll](http://paulstamatiou.com/how-to-wordpress-to-jekyll/) by Paul Stamatiou
* [Using GitHub Pages to host your website](http://blog.teamtreehouse.com/using-github-pages-to-host-your-website) by Treehouse