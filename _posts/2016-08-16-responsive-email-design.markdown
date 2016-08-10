---
layout: post
published: true
title: Things I've Learned About Responsive Email Design
---
This is a third post in a series of things I’ve learned about email, including sending emails and building HTML email templates.

I’ve spent the last few years in the developer tools industry, 2 of those years having been Design Lead at Mailgun by Rackspace, the email service for developers. Here’s a brain dump of things I’ve learned about responsive email design.

## Some Mobile Email Stats

* Email opens on mobile are at 50% and rising. The exact metric depends on what report you check, and what audience you cater for, but I think we can all agree this is important. [Source](http://www.emailmonday.com/mobile-email-usage-statistics).

* Gmail has 900m users, 75% of which are on mobile. [Source](https://techcrunch.com/2015/05/28/gmail-now-has-900m-active-users-75-on-mobile/).

* [Email Client Market Share](http://emailclientmarketshare.com/), as of August 2016, has iPhone at 33%, iPad at 11%, Android at 10% (that’s over 50%!).

* Mailchimp found that unique clicks amongst mobile users for responsive campaigns rose from 2.7% to 3.1% — a nearly 15% increase. [Source](https://mailchimp.com/resources/research/impact-of-mobile-use-on-email-engagement/).

* For every $1 spent, $44.25 is the average return on email marketing investment. 64% of decision-makers read their email via mobile devices. [Source](https://www.salesforce.com/blog/2013/07/email-marketing-stats.html).


## Responsive Design

What is responsive design? Ethan Marcotte coined the phrase “<a href="http://alistapart.com/article/responsive-web-design">responsive web design</a>” back in 2010.

> "By marrying fluid, grid-based layouts and CSS3 media queries, we can create one design, that, well, responds to the shape of the display rendering it."
> Ethan Marcotte

When he wrote his article he was talking about web design. So how does this apply to email? We can still make use of fluid design, grid based layouts and media queries, the problem is not all clients support these. So we need some hacks along the way.


## Mobile client support

StyleCampaign provides a great breakdown of <a href="http://stylecampaign.com/blog/2012/10/responsive-email-support/">media query support</a> in mobile clients.

### Mobile clients that DO support media queries
* iOS native 
* iOS Outlook
* Android native

### Mobile clients that DO NOT support media queries
* iOS Gmail
* iOS Inbox
* iOS Yahoo
* Android Gmail
* Windows

Which means, like everything else in email, we need a bunch of hacks and methods for emails to be truly responsive and bulletproof for mobile.


## Responsive email techniques

Fluid... Adaptive... Responsive...

Max width 600px, single column, fixed width


## Building responsive emails

A list of things to remember when building responsive emails:

- Use !important in your media queries to over power inline CSS
- Apple recommends minimum button height be 44px on mobile devices
- Create your images @2x for retina displays, and remember to set the height and width otherwise they will break Outlook
- Remember to compress those images to reduce the file size
- Keep subject lines fewer than 50 characters
- Preheader text is even more important on mobile
- Minimum font size on mobile should be 13px, recommended is 16px for text and 22px for headings
- Don’t use navigation bars in emails, just don't
- Your best bet is to stick with a single column layout
- Sure you can use grids it just gets a bit trickier and requires some conditional hacks for Outlook
- Don’t forget your landing pages should be responsive too
- iOS styles links, dates, addresses and phone numbers as underlined blue text, to get around this have a media query class to override
- Use px over ems
- Use Margin not margin (capital “M”) so margins work in Outlook.com


## Images in responsive emails

For best results on high resolution screens (think retina display on the iPhone) you should save any image assets at least 2x the dimensions you plan to display them at.

For example, if you plan to have header image that is 600px x 100px in your email, then that graphic should be saved at 1200px x 200px. Then in your HTML you set the height and width and it looks nice and crisp.

```html
<img src="logo.png" height="100px" width="600px" alt="Company Logo">
```

Now because we're dealing with responsive email, we need to make sure this looks good on mobile. So you would have a media query that looks like so.

```css
img {
  max-width: 100%;
}
@...
  height: auto !important;
}
```

Without this the image would remain at 600px width even when the viewport is smaller. Now unfortunately all clients support media queries. So something else to add.

```html
asdad
```

Something else to consider is compression. Make sure you compress your images. Consider bandwidth and cellular data connections. Optimize for mobile.


## Wearables and Watches

I haven't done much email testing on watches but Litmus have this great resource on Apple Watch. Key takeaways:
* ada
* adas


## Breaking down simple responsive email template example

I open sourced this template 3 years ago. It is very simple but works across all the major email clients.

Container > Wrapper > Fixed width

As you can see this doesn’t even contain a conditional statement.

However, once we get into grids, we need those conditional statements.


## Conclusion


UPSELL HTMLEMAIL.io
