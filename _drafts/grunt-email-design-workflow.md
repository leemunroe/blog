---
layout: post
title: Optimize your email design workflow with Grunt.js
---

Designing emails sucks. Old skool html, tables, inline css, varying css support, various clients, devices and browsers to test on.

As part of a Rackspace hack day, I created [this Grunt.js](https://github.com/leemunroe/grunt-email-design) file to to make designing and testing email templates a bit easier and maintainable.

#### How it works

##### 1. Compiles SCSS to CSS

<p class="aligncenter"><img src="{{site.baseurl}}/wp-content/uploads/sass.jpg" alt="SCSS to CSS" width="300"></p>

I like to use [SCSS](http://sass-lang.com/) to write styles as it gives you many advantages including variables, mixins, nesting etc. 

##### 2. Assembles the templates

<p class="aligncenter"><img src="{{site.baseurl}}/wp-content/uploads/templates.jpg" alt="Handlebars to HTML" width="500"></p>

Typically you’ll want to use the same layout, header and footer in your emails. Using handlebars we keep the email content separate from the layout.

##### 3. Inlines CSS

<p class="aligncenter"><img src="{{site.baseurl}}/wp-content/uploads/inline.jpg" alt="Inline CSS" width="500"></p>

Unfortunately it’s still necessary to inline your CSS for most email clients to render. Instead of doing that manually (which would be such a pain) [premailer](https://github.com/premailer/premailer) will do it for you.

##### 4. Uploads image assets to a CDN

<p class="aligncenter"><img src="{{site.baseurl}}/wp-content/uploads/cdn.jpg" alt="CDNify" width="400"></p>

If testing locally it’s fine to use your images relative path, but when you send an email to your inbox you’ll want to use an absolute path. Using Rackspace [Cloud Files](http://www.rackspace.com/cloud/files/) this will upload all your images to a CDN and update the urls in your email templates.

##### 5. Sends you the email

<p class="aligncenter"><img src="{{site.baseurl}}/wp-content/uploads/send.jpg" alt="Send email" width="400"></p>

It’s no good opening up your email in your browser to see how it looks as every email client renders it differently. Sending the email to yourself allows you to test the design in your email client.

Bonus: If you use Litmus to test emails, you can easily send the email to Litmus to do the testing for you.


#### Requirements

* [Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt `npm install grunt-cli -g`
* [Ruby](https://rvm.io/rvm/install)
* Premailer `gem install premailer hpricot nokogiri`
* [Mailgun](http://www.mailgun.com)
* Rackspace Cloud Files (optional) - [developer discount](http://developer.rackspace.com/devtrial/)
* [Litmus](http://www.litmus.com) (optional)

#### Open sourced on GitHub

<p class="aligncenter"><a href="https://github.com/leemunroe/grunt-email-design"><img src="{{site.baseurl}}/wp-content/uploads/github.jpg" alt="Fork on GitHub" width="700"></a></p>

<p><a href="https://github.com/leemunroe/grunt-email-design" class="button">Fork/clone/download it from GitHub</a></p>

Some good discussions going on [Hacker News](https://news.ycombinator.com/item?id=7765279) and [Reddit](http://www.reddit.com/r/web_design/comments/25wyy1/a_grunt_workflow_for_designing_and_testing_html/).

What do you think? Do you find this useful? I’m curious if designers typically working on emails are able to follow the instructions when it comes to working with Grunt.js, Node.js and Ruby Gems or if I should make it simpler.

p.s. We're hiring [Front-End Developers and Designers](https://social.icims.com/job/board/index/id/251831?group=NjA5&isd_source=web&isd_pub=251831) at Rackspace in San Francisco, San Antonio and Blacksburg. You get to hack on useful things like this and solve problems.



