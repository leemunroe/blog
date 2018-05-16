---
layout: post
title: Things I've Learned About Sending Email, for Web Designers and Developers
---

In 2013 I joined [Mailgun](http://www.mailgun.com), an email service acquired by Rackspace. Since joining the team I've learned a lot about building email, sending email and the industry that I knew little to nothing about before. Some might be obvious to you, some not so much.

Here's a **series of notes I think are helpful to know if you're dealing with email** as a designer or developer.

<div class="post-highlight">Sidenote: If it's <a href="http://htmlemail.io">HTML Email Templates</a> you're looking for, I've put together a bundle of fully responsive templates for startups, developers and marketers. Includes notifications, a monthly newsletter, a welcome email and more. Visit <a href="http://htmlemail.io">HTMLemail.io</a> to preview and download them.</div>

### Types of email

Emails can typically be grouped into the following:

* Marketing/Promotional
* Transactional
* Life-cycle

### Email services for marketing purposes

There are a lot more **ESPs (Email Service Providers)** than I could have imagined. I used to think your options were Campaign Monitor and Mailchimp. Nope, lots more.

Here are just a few of the better known providers:

* [Campaign Monitor](https://www.campaignmonitor.com/)
* [Mailchimp](http://mailchimp.com/)
* [Sendicate](http://www.sendicate.net/)
* [Emma](http://myemma.com/)
* [Exact Target](http://www.exacttarget.com/)

### Email services for developers

Mailgun, for example, is for developers. Our customers typically send **transactional emails (receipts, alerts, welcome, password reset etc.) through our API or SMTP**, although they can send any type of email they desire. The product is primarily an API focused on deliverability and automation over WYSIWYG tools.

Some of the leaders in this pack are:

* [Mailgun](https://www.mailgun.com)
* [Sendgrid](https://www.sendgrid.com)
* [Mandrill](https://www.mandrill.com)
* [Postmark](https://postmarkapp.com/)

An alternative to a service is to roll your own email server with something like [Postfix](http://www.postfix.org/). The downside with this is it's up to you to implement the tracking, unsubscribing and getting your emails delivered into inboxes.

### Life-cycle/behaviour based email services

When users sign up to your product, service or mailing list, there are a number of services that help with **onboarding and re-engagement**.

Some of those include:

* [Intercom](http://intercom.io/)
* [Customer.io](http://customer.io/)
* [Drip](https://www.getdrip.com/)
* [Vero](http://getvero.com/)
* [ConvertKit](http://convertkit.com/)

### Email list best practices

**Don’t buy email lists.** Maybe there are a handful of legit services out there but you’re best to stay away from buying lists altogether.

My experience is any one that buys an email list, they suffer a lot of bounces, their IP gets a bad reputation, and **ISPs block their emails or they go to spam**.

**[Double opt in](http://en.wikipedia.org/wiki/Opt-in_email).** Personally, I used to dislike this as a user. Having to **verify your email** adds an extra step to the process. But it makes sense and **stops people from abusing your email** by signing you up for lists without your permission. It also helps keep your lists clean.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-optin1.jpg" width="400" alt="Double opt in"></p>
<p class="aligncenter"><img src="{{site.baseurl}}/img/email-optin2.jpg" width="400" alt="Double opt in"></p>

### CAN-SPAM

These are your **legal requirements** when sending email, enforced by the [CAN-SPAM Act](http://en.wikipedia.org/wiki/CAN-SPAM_Act_of_2003) of 2003.

1. Don’t use false or misleading header information.
1. Don’t use deceptive subject lines.
1. Identify the message as an ad.
1. Tell recipients where you’re located.
1. Tell recipients how to opt-out of receiving future email from you.
1. Honor opt-out requests promptly.
1. Monitor what others are doing on your behalf.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-spam2.jpg" width="400" alt="CAN-SPAM Requirements"></p>

Mailchimp has a good list of [email legal requirements by country](http://kb.mailchimp.com/accounts/compliance-tips/terms-of-use-and-anti-spam-requirements-for-campaigns).

### Email templates

There are a lot of terrible emails out there. Clunky. Themed. Verbose. Pointless.

I'm definitely a fan of keeping emails simple, removing waste and having one purpose and call-to-action per email. **I’ve open-sourced a few "simple" email templates** and there are a few others I’d recommend:

* [Simple responsive HTML email template](https://github.com/leemunroe/html-email-template)
* [Transactional email templates](https://github.com/mailgun/transactional-email-templates)
* [Ink](http://zurb.com/ink/) by Zurb
* [Salted](https://github.com/rodriguezcommaj/salted) by Jason Rodriguez

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-template2.jpg" width="600" alt="Free templates"></p>

### Email analytics and measuring performance

This will differ *vastly* depending on what you do, your industry, the type of emails you send and the context, but in general:

* 20% is a good open rate
* 3-7% is a good click through rate
* 5% is a poor bounce rate
* 0.01% is a poor spam rate
* 1% is a poor unsubscribe rate

Also remember that **open rates and click through rates can be vanity metrics** (read "they don't really matter"). At the end of the day what you **really want to track is that end goal or conversion**.

Google’s [URL builder](https://ga-dev-tools.appspot.com/campaign-url-builder/) can help with this if you're using Google Analytics.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-stats1.jpg" width="600" alt="Track conversions"></p>

### Reputation and score

Your emails have a reputation and score associated with them. This affects how ISPs (Internet Service Providers, also known as mailbox providers) deal with your email, **whether they accept it or reject it, and whether they put it in your inbox or straight to spam**.

Things that contribute:

* IP reputation (check yours with [SenderScore](https://senderscore.org/))
* Domain name signatures ([DKIM](http://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) and [SPF](http://en.wikipedia.org/wiki/Sender_Policy_Framework))
* Bounce rates and complaint rates

### Building HTML emails

Email design is still in the dark ages. Due to the **numerous email clients and devices**, there are various ways your email will get rendered for users. This means you have to:

* Write HTML using **table markup**
* **[Inline CSS](https://htmlemail.io/inline/)** before sending (some ESPs will do this for you)
* Use older well supported CSS styles (**be careful with CSS3**)

I’ve written before about optimizing your [email design workflow](http://www.leemunroe.com/email-design-workflow/) and have open-sourced a [Grunt email design task](https://github.com/leemunroe/grunt-email-design) to help with this.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-workflow1.jpeg" width="600" alt="Workflow"></p>

### Image rendering

Some clients will show your images by default. Some won't. Keep this in mind when including images in your email content. This also affects tracking metrics as typically images will be used to track opens.

* **Outlook blocks image rendering by default**
* Apple Mail doesn't
* Gmail doesn't (anymore)

Litmus has a good <a href="https://litmus.com/blog/the-ultimate-guide-to-email-image-blocking">guide to image blocking</a>.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-images1.jpg" width="400" alt="Blocked images"></p>



### Test emails before you send them

I don't think I've ever sent an email successfully first time. **There is always something to fix**. There is always a typo. There is always a rendering issue in Outlook.

A few ways you can test your emails:

* Send an email to yourself and check it on a desktop client (Outlook), web client (Gmail) and mobile client (iOS Mail)
* [Litmus](https://litmus.com/) or [Email on Acid](https://www.emailonacid.com/) can automate tests for you
* Proof read the content as well as checking the layout renders
* A/B test varying types of content, lengths of content and subject lines

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-test1.png" width="400" alt="Test emails"></p>
<p class="aligncenter"><img src="{{site.baseurl}}/img/email-test2.png" width="600" alt="Test emails"></p>

### Sending bulk email and queues

When you send a lot of email (imagine a campaign with millions of emails) **they don’t all send instantaneously**. They can only be sent as fast as the servers/IPs can handle. Keep in mind that all recipients may not receive the email at *exactly* the same time.

So if you’re sending millions of emails at once, you probably want quite a few IPs to handle the load.

### MIME and multi-part

A plain text email is just that, plain text. An HTML email is just HTML. Most emails you send or receive are MIME (Multipurpose Internet Mail Extensions) multi-part emails. **They combine both plain text and HTML**, and leave it up to the recipient to decide which to render.

When you send an email, transactional or bulk, **you should include both the HTML and plain text versions**.

Also note, your email client may render plain text emails as HTML e.g. Gmail will add some default styles and turn URLs into links.

Pro tip: In Gmail, select "Show original" from the dropdown to see the full MIME.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-mime1.gif" width="400" alt="View MIME"></p>

### Responsive emails

Today it's more important than ever to support email on mobile devices. It has been reported that **over 50% of email opens happen on mobile devices**. Some clients do and some don’t support media queries.

When you write media queries don’t inline them like the rest of your styles. Keep these in your head.

Media queries are currently supported in iOS Mail, Android native client, Windows Phone and supposedly Blackberry.

Litmus has a good article on [media query support in email](https://litmus.com/help/email-clients/media-query-support/).

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-responsive1.jpg" width="400" alt="Media query support"></p>


### Email client breakdown

Litmus [keep track](http://emailclientmarketshare.com/) of the current breakdown, based on their own internal stats. Keep in mind this is probably not the same for your customer base, but a good indicator to go by.

1. Apple iPhone 27%
1. Gmail 17%
1. Apple iPad 12%
1. Outlook 9%
1. Apple Mail 8%

Remember **not all emails can be tracked**. Email tracking is done via pixel tracking, so only those clients with images enabled report back.

<p class="aligncenter"><img src="{{site.baseurl}}/img/email-clients1.jpg" width="400" alt="Email client market share"></p>

### Recommended reading
* [HTML Email Pocket Guide](http://www.fivesimplesteps.com/products/html-email) by Andy Croll
* [Professional HTML Email](http://professionalemaildesign.com/) by Jason Rodriguez
* Campaign Monitor [guides](https://www.campaignmonitor.com/guides/)
* Mailchimp [guides](http://mailchimp.com/resources/)
* Litmus [blog](https://litmus.com/blog/)

### My personal etiquette for email

Some rules I try to stick to when writing or sending email (internal and external). These aren’t rules for everyone and they are mostly subjective.

* Keep it **short** (5 sentences max)
* **Number** your questions and todos
* Don't add **long signatures**
* Think carefully before you throw your company logo in there
* And whatever you do don't throw it in as an attachment
* Likewise when it comes to social media icons - don’t just throw them in there for the sake of it
* End the email with the **recipient's name** - people love their own name (not yours)
* Don’t needlessly cc others into email chains
* Use a real email address (**not no-reply@**) to send emails
* Use joyful email subject lines
* Try to remove “I” from your emails
* Keep it focused - **one primary objective** and call-to-action per email
* Be consistent; sender (name and email), template, branding, voice and tone
* Remember that people don't read everything, so make use of hierarchy; buttons, headings, bold text, colours

### Conclusion

Email is a beast. My notes above are a high level overview and you could deep dive into every one of those points. Hopefully it gives you a quick intro into the world of building and sending email.

For next steps I recommend you read the books and guides mentioned above, these [email best practices](https://documentation.mailgun.com/best_practices.html) and look at my [email design workflow](http://www.leemunroe.com/email-design-workflow/) if you're designing HTML emails.
