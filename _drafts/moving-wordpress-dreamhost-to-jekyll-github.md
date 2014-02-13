---
layout: post
title: Lessons learned switching from Wordpress on Dreamhost to Jekyll on GitHub
---

Recently I switched my website from Wordpress, which I hosted on Dreamhost, to Jekyll, which I now host on GitHub. This post is an overview of why, how and any pain points I came across during the migration.

#### Why switch from Wordpress to Jekyll?

I've been on Wordpress now for 7 or 8 years. It's a great tool. However *my website is fairly simple*. I have 3 pages and a blog. Wordpress is big, it's complex, and runs on PHP. [Jekyll](http://jekyllrb.com/) is a light weight satic site generator.

I also seen this as a good *learning opportunity*. After reading [Anna's tutorial](http://24ways.org/2013/get-started-with-github-pages/) on using GitHub Pages, I was keen to try it out with Jekyll. Also seen this as an opportunity to use Grunt for the first time, again after reading a [24 Ways tutorial](http://24ways.org/2013/grunt-is-not-weird-and-hard/) by Chris Coyier.

#### Why switch from Dreamhost to GitHub?

I've had a Dreamhost account for a long time. I use it to register domains and to host Wordpress and static sites (Rails or Node.js apps I'll put on Heroku). My personal site was the biggest site, which gets around 30,000 pageviews/mth.

For this I was paying Dreamhost $120/yr for an account + $30ish/mth for a VPS; *~$480/yr*.

[GitHub Pages](http://pages.github.com/) on the other hand, is *free*.

I'm usually on a machine with a dev environment, with Git and access to GitHub so writing a new blog post or making a change isn't a problem. Even if I'm not, I can log on to GitHub and use the UI as a CMS. GitHub seems reliable and my blog is a heck of a lot faster than it was before. Therefore I've been able to cancel my Dreamhost VPS and save myself some beer money.

#### The switch is easy, but will probably take longer than you think

Import blog posts. Import comments. Find a commenting solution. URL structures. Existing urls matching up. Pagination.
I thought I could do it one Saturday. But I was learning Jekyll for the first time and then came up against all this other stuff I forgot about. So it took me a Saturday and a few week nights in total.

* Read [this GitHub Pages tutorial](http://24ways.org/2013/get-started-with-github-pages/) from Anna Debenham
* Then read the [Jekyll docs](http://jekyllrb.com/)

##### URL structures

You can see all the code for my blog [publicly on GitHub](https://github.com/leemunroe/blog). Here is the current _config.yml file:

{% highlight yml %}
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

Notice `permalink: /:title` this was the url format of my Wordpress blog. I wanted to ensure that all existing URLs matched up so I didn't have to worry about 301s,302s,404s or losing search engine rankings.

The paginate url follows a similar pattern `paginate_path: /blog/page/:num`.

##### Importing posts from Wordpress

Jekyll has you covered.

Install the [jekyll-import gem](http://import.jekyllrb.com/docs/installation/) then follow [these instructions for Wordpress](http://import.jekyllrb.com/docs/wordpress/).

##### Images and wp-uploads

Don't forget to download your wp-uploads folder. Typically where all your blog images and uploads go. Also keep in mind that your posts most likely have absolute paths to these images so you'll want to keep them in the same folder, unless you do a find/replace.

Hosting how to

Pagination

##### Comments

Finding a comments solution was an easy choice with Disqus.

They have a super handy Wordpress export tool that will take all your existing comments and map them up with the same blog post, base on its url.

##### Pointing your domain to GitHub Pages

GitHub have a useful [how-to article](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) for this.

I added 3 records:

# A: 192.30.252.153 (for leemunroe.com)
# A: 192.30.252.154 (for leemunroe.com)
# CNAME: leemunroe.github.io (for www.leemunroe.com)

Note that you also have to add a `CNAME` file to your repo, with your domain name written here.

{% highlight yml %}
www.leemunroe.com
{% endhighlight %}

The annoying part comes when you don't know if you've done this right or not as it can take a while for DNS changes to propogate. You could be left waiting 15 minutes or 15 hours, wondering whether the changes you made were correct.

Working with grunt

Open source

##### Other things easily forgot

* [Generating a sitemap with Jekyll](http://davidensinger.com/2013/03/generating-a-sitemap-in-jekyll-without-a-plugin/)
* [Adding RSS to Jekyll](http://blog.drewinglis.com/2013/03/18/adding-rss.html)

#### Other useful articles

* [How to: Wordpress to Jekyll](http://paulstamatiou.com/how-to-wordpress-to-jekyll/) by Paul Stamatiou
* [Using GitHub Pages to host your website](http://blog.teamtreehouse.com/using-github-pages-to-host-your-website) by Treehouse




<p class="aligncenter"><a href="http://www.producthunt.co"><img src="{{site.baseurl}}/wp-content/uploads/ph.jpg" alt="Product Hunt" width="600"></a></p>