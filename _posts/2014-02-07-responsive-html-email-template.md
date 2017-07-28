---
layout: post
title: Really simple responsive HTML email template
---

I open sourced [this email template](https://github.com/leemunroe/html-email-template) on GitHub recently.
<p class="aligncenter"><a href="https://github.com/leemunroe/html-email-template"><img src="{{site.baseurl}}/wp-content/uploads/email-github.jpg" alt="GitHub" width="600"></a></p>

There are a bunch of great email template resources out there but I find most of them overkill for the use cases I have. Sometimes I just want a really simple email with a clear call to action.

Introducing the really simple html email template. I started off with [Ink's](http://zurb.com/ink/templates.php) basic email template, stripped it down to the bare bones and made some minor modifications.

#### How to use it (and inline CSS)

Unfortunately most email clients require your CSS to be inline. Or at least it should be inline if you want it to look right.

If you're using a marketing service like Campaign Monitor or Mailchimp, they will usually put your CSS inline for you, so you can use the <code>email.html</code> template as is.

If you are sending HTML emails yourself or using a transactional email service like Mailgun, you'll have to put the CSS inline first. When you're done editing <code>email.html</code> use a tool like [Responsive Email CSS Inliner](https://htmlemail.io/inline/) to automatically put your CSS inline. You can see an example of the inlined email in <code>email-inlined.html</code>

#### In testing and production

Here are the [Litmus test results](https://litmus.com/pub/f930102/screenshots) for popular clients.
<p class="aligncenter"><a href="https://litmus.com/pub/f930102/screenshots"><img src="{{site.baseurl}}/wp-content/uploads/email-test.jpg" alt="Litmus" width="600"></a></p>

Here's a screenshot of it in production.
<p class="aligncenter"><img src="{{site.baseurl}}/wp-content/uploads/email-production.jpg" alt="Litmus" width="600"></p>

#### Download and contribute

You can [clone it from GitHub](https://github.com/leemunroe/html-email-template) or <a href="https://github.com/leemunroe/html-email-template/archive/master.zip" class="button">download the email template here</a>

The repo already has a few contributions. Feel free to make any tweaks or fixes you feel necessary and submit a pull requests and if you're using this on your own project I'd love to hear about it.

#### More useful email resources

* [Ink](http://zurb.com/ink/) - Responsive email templates from Zurb
* [Sending email best practices](http://documentation.mailgun.com/best_practices.html#email-best-practices) - By Mailgun
* [Automated emails and customer respect](http://insideintercom.io/automated-emails-customer-respect/) - By Intercom
* [CSS Guide](http://www.campaignmonitor.com/css/) - A complete breakdown of the CSS support for every popular client
