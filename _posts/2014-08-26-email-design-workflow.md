---
layout: post
title: Email Design Workflow
---

After attending [The Email Design Conference](https://litmus.com/conference) last week, it was interesting to see that pretty much **every designer has a different workflow** when it comes to designing emails.

Inspired by [Brian](https://twitter.com/briangraves), [Fabio](https://twitter.com/flcarneiro) and [Kevin](https://twitter.com/KEVINgotbounce) who shared their email design processes, I thought I’d share my own. In particular, designing [these transactional emails](https://github.com/mailgun/transactional-email-templates) (as I rarely design promotional emails these days).

For this post I’m going to look specifically at front-end implementation of the emails.

<div class="post-highlight">Sidenote: If it's <a href="http://htmlemail.io">HTML Email Templates</a> you're looking for, I've put together a bundle of fully responsive templates for startups, developers and marketers. Includes notifications, a monthly newsletter, a welcome email and more. Visit <a href="http://htmlemail.io">HTMLemail.io</a> to preview and download them.</div>


## The tools I use

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-design.jpg" alt="Design Tools"></p>

* Sketch
* Sublime
* Grunt
* SCSS
* Handlebars
* GitHub
* Mailgun
* Litmus


## Visual design

Using Sketch I’ll mock up how the email might look. At this point I’m experimenting with colors, layout and hierarchy. I’m **not trying to achieve pixel perfect mockups**. Emails never look the same across all clients, so I’m not going to waste time on pixel perfection.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-sketch.jpg" alt="Sketch" width="600"></p>

For transactional emails I believe it’s important to be focused. Each use case is different, but by being focused I mean removing all the fluff. **Recipients shouldn’t be distracted by fancy graphics, social media icons, and verbose copy** if the goal of the email is to get them to click one button.


## Coding HTML emails

I’ll start off with a boilerplate that I know works. I think [Zurb](http://zurb.com/ink/) does a great job with their boilerplates. I went a step further and created a [very simple email template](https://github.com/leemunroe/html-email-template), which I’ve now integrated with a [Grunt workflow](https://github.com/leemunroe/grunt-email-design) (more on that in a bit).

My preference is to **use SCSS for CSS** (I can’t imagine not using SCSS now).

### What is SCSS?

SCSS, or Sassy CSS, extends CSS and gives it extra powers. It enables you to write things like this:

{% highlight scss %}
$primary-color:blue;
$secondary-color:red;

.btn-primary{
     background-color:$primary-color;
     &:hover{
          background-color:$secondary-color;
     }
}
{% endhighlight %}

This is a very simple example using variables and nesting. There is [so much more you can do with SCSS](http://sass-lang.com/). It makes managing your styles a dream.


### Templating and layouts

Chances are the header and footer of your emails aren’t going to change. Therefore some sort of templating comes in useful.

I use [Handlebars](http://handlebarsjs.com/) and split my emails up into something like this.

{% highlight text %}
+-- layouts
|   +-- default.hbs
+-- emails
|   +-- email1.hbs
|   +-- email2.hbs
|   +-- email3.hbs
{% endhighlight %}


### Inlining CSS

Before sending out HTML emails, **you should inline your CSS**. There are a few options for how to accomplish this. I use [Premailer](http://premailer.dialect.ca/), which I have baked into my Grunt task.

Other options include manually writing your CSS inline (ouch!), using one of the other online inliners available, or a lot of ESPs will handle this for you before sending out your email. It will look something like this:

{% highlight css %}
<a href="http://www.mailgun.com" class="btn-primary" style="font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background: #348eda; margin: 0; padding: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">Confirm email address</a>
{% endhighlight %}

### Using Grunt to run these tasks for you

Using [Grunt](http://gruntjs.com/) I’m able to run a set of tasks using Javascript.

I’ve [open-sourced my Grunt workflow here](https://github.com/leemunroe/grunt-email-design), which does the following.

1. Compiles your SCSS to CSS
1. Builds your HTML templates
1. Inlines your CSS
1. Shoots out a test email

The **end result is HTML email templates with CSS inlined**, along with a **preview delivered to my inbox**.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-grunt.jpeg" alt="Grunt Email Design" width="600"></p>



## Testing emails in different clients, browsers, devices and OSs

First of all it’s a good idea to **send yourself an email** to your own client. I use [Mailgun](http://www.mailgun.com) to shoot myself the email. Then I check it in Gmail and on my iPhone.

Secondly you want to see how it will look in **all those other devices and clients that people are using**. This is where [Litmus](http://www.litmus.com) kicks ass. Send your email to Litmus and they will show you the results in whatever clients you care about.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-litmus.png" alt="Litmus Email Test" width="600"></p>


## Back-end integration

At this point I have a solid HTML email template designed. Since these are transactional emails, typically triggered by user actions, the next step is integrating them into my code base.

### Sending email

It’s a good idea to use a 3rd party email service (Mailgun is a good option) instead of managing your own email infrastructure. Then all you need to do is make an API call and they handle the delivery.

### Code integration

This differs depending on what language and framework you’re using, and at this point you should be working closely with a developer.

For integrating into code (e.g. a Rails app), my preference is to copy across all the original files (SCSS, templates, layouts) and **have the application handle the CSS compiling, templating and inlining** (using [Premailer-Rails](https://github.com/fphilipe/premailer-rails)). If using an ESP or third party service to do the sending, some of them handle the inlining of CSS, some don't.

The best approach is to look at the documentation for the email service you decide on. They should have a library for your language of choice and good documentation on the subject.


## What’s your email design process?

I’m very curious to learn how other designers are managing this. What text editor are you using to put together your emails? **What’s your workflow when it comes to sharing emails with developers, or integrating them into your code base?** Share your comments.
