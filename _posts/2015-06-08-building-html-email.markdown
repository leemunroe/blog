---
layout: post
title: Things I've Learned About Building &amp; Coding HTML Email Templates
---

I previously published “[Things I've learned about sending email](http://www.leemunroe.com/sending-email-designers-developers/)". A lot of people seemed to like the post and thought it was a great intro to sending email or quick cheat sheet.

Some people followed up with me and wanted to know more about the building and testing process when it comes to HTML email. Here’s a **brain dump** of what I’ve learned about building and coding HTML emails.

<div class="post-highlight">Sidenote: If it's <a href="http://htmlemail.io">HTML Email Templates</a> you're looking for, I've put together a bundle of fully responsive templates for startups, developers and marketers. Includes notifications, a monthly newsletter, a welcome email and more. Visit <a href="http://htmlemail.io">HTMLemail.io</a> to preview and download them.</div>

### Email clients and rendering engines

Email clients use different rendering engines to render HTML emails:

* Apple Mail, Outlook for Mac, Android Mail and iOS Mail use **WebKit**
* Outlook 2000/02/03 use **Internet Explorer**
* Outlook 2007/10/13 use **Microsoft Word** (yes, Word!)
* Web clients use their browser's respective engine e.g. **Safari uses WebKit, Chrome uses Blink**

Gmail **strips out `<link>` tags and any CSS in the `<style>` tags**, and any other CSS that isn't inlined. Not just Gmail web but also the native Gmail mobile apps.

Remember clients will also add their own flavor of styles on top of yours e.g. Gmail sets all `<td>` fonts to `font-family: arial,sans-serif;`.

Litmus has a handy website dedicated to the current [email client market share](http://emailclientmarketshare.com/), based on their own internal stats (~1 billion emails).

<p class="aligncenter"><img src="{{site.baseurl}}/img/emailclient.png" width="500" alt="Email Client Market Share"></p>

As of April 2015 the top 5 looks like so:

1. Apple iPhone 28%
1. Gmail 16%
1. Apple iPad 11%
1. Outlook 8%
1. Apple Mail 8%

Of course you should **look at your own stats** to know which clients you need to focus on for your recipients.


### MIME Multi-part and plain text

<p class="aligncenter"><img src="{{site.baseurl}}/img/mime.png" width="300" alt="MIME Multi-part"></p>

When you send an email it’s important to send both **plain text and HTML**. You do this by sending your email as multi-part MIME. Even in a world where you think every one uses clients that render HTML, you should still send plain text.

Most ESPs will construct the MIME for you so you don’t really need to worry about it. Some will also create a plain text version for you based on your HTML version.

<p class="aligncenter"><img src="{{site.baseurl}}/img/applewatch.jpg" width="500" alt="Apple Watch email"></p>

Note that with the recent launch of Apple Watch, a **[new MIME](https://litmus.com/blog/how-to-send-hidden-version-email-apple-watch) part has surfaced: `text/watch-html`**. This content will only be displayed in the Apple Watch (and any other clients that support this MIME type going forward).


### Use tables not divs

**Divs have positioning and box model issues** in different clients, in particular those that use Microsoft Word (Outlook) to render. You can use divs if you want but safer to code like it's 1999 and stick to tables.

* Tables instead of divs
* #ffffff instead of #fff
* Padding instead of margins
* CSS2 instead of CSS3
* HTML4 instead of HTML5
* background-color instead of background
* HTML attributes instead of CSS
* Inline CSS instead of stylesheets

These approaches are recommended best practices. You can certainly ignore the safe route and go above and beyond.

When using tables don't forget `border="0" cellpadding="0" cellspacing="0"`. If you're using [Premailer](https://github.com/premailer/premailer) it has special [CSS declarations](https://github.com/premailer/premailer#premailer-specific-css) for applying these HTML attributes.


### Inline CSS

<p class="aligncenter"><img src="{{site.baseurl}}/img/inline.png" width="500" alt="Inline CSS"></p>

Gmail will strip any CSS that isn’t inlined. You have a couple of options here:

* Write CSS inline as you go
* Use a **web-based** CSS inliner
* Use a **programmatic** CSS inliner
* Let your **ESP (Email Service Provider)** handle the inlining for you (if they support it)

Writing inline as you go isn’t exactly a scalable or maintainable solution so I tend not to, but I know a lot of email builders prefer it this way to maintain 100% control. If you do write your CSS inline manually then I recommend **making use of [snippets](http://www.hongkiat.com/blog/sublime-code-snippets/) and/or a templating language** with [partials and helpers](http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers). This will save you repeating yourself.

Web based inliners include [Campaign Monitor](http://inliner.cm/), [Mailchimp](http://templates.mailchimp.com/resources/inline-css/) and Zurb’s [Ink](http://zurb.com/ink/inliner.php).

For a programmatic inliner I typically use the [Premailer gem](https://github.com/premailer/premailer), or another package based on it.

*Sidenote: Check out my [grunt email design workflow](https://github.com/leemunroe/grunt-email-workflow), which will inline your Sass, compress your images, send you a preview and automate a bunch more of useful stuff.*


### Conditional targeting

We can apply specific CSS styles and **show/hide elements and content** for different versions of Outlook.

This would target all Microsoft Word based versions of Outlook:

```html
<!--[if mso]>
<p>Only Microsoft Word based versions of Outlook would see this.</p>
<![endif]-->
```

This would target all IE based versions of Outlook:

```html
<!--[if (IE)]>
<p>Only IE based versions of Outlook would see this.</p>
<![endif]-->
```

We can also target specific version numbers of Outlook:

```html
<!--[if mso 12]>
<p>Only Outlook 2007 would see this.</p>
<![endif]-->
```

More on [conditional statements](http://labs.actionrocket.co/microsoft-outlook-conditional-statements) for Outlook.

We can target WebKit based clients with a media query like this:

```css
.special-webkit-element {
  display: none;
}

@media screen and (-webkit-min-device-pixel-ratio:0) {  
  .special-webkit-element {
    display: block !important;
  }
}
```

More on [media queries](https://litmus.com/blog/understanding-media-queries-in-html-email) for WebKit.


### Mobile, media queries and responsive solutions

With email opens on mobile around the [50% mark](http://www.emailmonday.com/mobile-email-usage-statistics), it's more important than ever to ensure your emails are accessible and usable on smaller devices.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-mobile1.jpg" width="500" alt="Responsive"></p>

There are various solutions for making emails responsive. One of which is using media queries. **Media queries cannot be inlined**, therefore your CSS should look something like this.

```css
<style type="text/css">
  @media only screen and (max-width:480px){

    .container {
      padding: 5px !important;
    }

    img {
      height: auto !important;
      max-width: 100% !important;
    }
  }
</style>
```

`!important;` is important here, for lack of a better word, as you will be overriding your inline styles.

Don't forget to add this to the head of your email:

```html
<meta name="viewport" content="width=device-width" />
```

Some clients will strip out any CSS that isn't inlined, most notably the Gmail mobile apps, therefore this responsive technique will not work for Gmail. [Other](http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919) [solutions](http://www.slideshare.net/flcarneiro/emaildesign-current) exist that do work in Gmail, and you can always go with a 100% fluid width layout or narrow fixed layout for all devices.

Here is ActionRocket's approach to [designing responsive emails](http://labs.actionrocket.co/can-you-just-make-it-responsive).

Things you may want to alter for smaller devices include:

* Font size
* Columns
* Padding
* Hide or show elements

Anna Yeaman has a long list of [media query in email support](http://stylecampaign.com/blog/2012/10/responsive-email-support/), Brian Graves has a great website listing [responsive email resources](http://responsiveemailresources.com/) and Campaign Monitor have a detailed [responsive email design guide](https://www.campaignmonitor.com/guides/mobile/).

*Sidenote: Mailgun has a set of simple [transactional HTML email templates](http://blog.mailgun.com/transactional-html-email-templates/) available for download that are responsive.*


### Bullet proof buttons

It’s painful trying to achieve the perfect cross client button. As mentioned above you should be using tables and table cells for everything. This includes buttons.

My preference is to use this solution. Instead of styling a button like this:

```html
<a href="#" class="btn btn-primary">Click Here</a>
```

I’ll write it like this:

```html
<table border="0" cellspacing="0" cellpadding="0" class="btn btn-primary">
  <tr>
    <td align="center" valign="top">
      <a href="#">Click Here</a>
    </td>
  </tr>
</table>
```

Then once my CSS is inlined it will look like this:

```html
<table border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box; border-collapse: separate !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto; padding-bottom: 15px; margin-left: auto; margin-right: auto;">
  <tr>
    <td align="center" valign="top" style="box-sizing: border-box; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 5px; text-align: center; background: #1271db;">
      <a href="#" style="box-sizing: border-box; color: #ffffff; text-decoration: none; border-radius: 5px; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; text-transform: capitalize; background: #1271db; margin: 0; padding: 12px 25px; border: 1px solid #1271db;">Click Here</a>
    </td>
  </tr>
</table>
```

This is just one way of implementing buttons in emails. I prefer it as it's simpler and doesn't involve image assets or VML. Admittedly it doesn't always look amazing in every client, but I can live with that.

If you need pixel perfection across all clients, [Stig](https://twitter.com/stigm/) from Campaign Monitor created a handy [bullet proof button tool](http://buttons.cm/).

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-buttons.png" width="</div></div>
" alt="Bulletproof buttons"></p>


### Typography

In general it's easier to **stick with standard system fonts**. That includes Helvetica, Arial etc.

However, we can use web fonts like Google fonts. You should put them behind a WebKit conditional media query otherwise Outlook will mess up your type e.g.

```html
<style>
@import url(http://fonts.googleapis.com/css?family=Pacifico);

/* Type styles for all clients */
h1 {
  font-family: Helvetica, Arial, serif;
}

/* Type styles for WebKit clients */
@media screen and (-webkit-min-device-pixel-ratio:0) {  
  h1 {
    font-family: Pacifico, Helvetica, Arial, serif !important;
  }
}
</style>
```

More on [web fonts in email](http://www.emaildesignreview.com/html-email-coding/web-fonts-in-email-1482/) by ActionRocket.

Remember to include font-family, font-size and color on every `<td>` or you risk the client overwriting your carefully chosen type styles.


### Images and videos

Assume images are off/blocked by default.

* Outlook, AOL, Yahoo have images **blocked by default**
* Apple Mail, iOS, Gmail have images turned on

Remember to include good **alt text**. That could either tell the user what the image says or just reference what it is e.g. company logo, photos that link to interesting things

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-images1.jpg" width="600" alt="Images"></p>

You can also be [creative with alt text](http://www.emailmonks.com/blog/email-marketing/creative-use-of-alt-text-in-email-learn-more-with-our-easter-campaign/) for clients that have images turned off.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-images2.jpg" width="400" alt="Alt Text"></p>

Remember to include a basic image reset for all images e.g.

```html
<img src="" alt="" width="" height="" border="0" style="border:0; outline:none; text-decoration:none; display:block;">
```

Animated gifs are supported in most clients. **Outlook 2007-2013 does not support animated gifs**. They fall back to the first frame.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-email3.gif" width="400" alt="Animated gifs"></p>

Other than Jonah Hill screaming, animated gifs are really useful for feature announcements in emails.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-gif1.gif" width="400" alt="Animated gifs"></p>

**Video is supported in iOS, Apple Mail, Outlook.com**. You can use media queries to show/hide the video based on the client. More on [email video support](http://www.emailonacid.com/blog/details/C13/a_how_to_guide_to_embedding_html5_video_in_email) at Email on Acid.

Kevin Mandeville wrote this great tutorial on [coding HTML5 video](https://litmus.com/blog/how-to-code-html5-video-background-in-email) as a background in an email. Impressive stuff and worth a look.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-video1.gif" width="400" alt="Video"></p>

Remember to **compress your media assets** and upload them to a **CDN** (Content Delivery Network e.g. [Rackspace](http://www.rackspace.co.uk/cloud/files) or [AWS](http://aws.amazon.com/)). Most ESPs will handle this for you.

SVG (Scalable Vector Graphics) have a [lot of advantages](https://css-tricks.com/icon-fonts-vs-svg/) when using them for the web. As you would expect, email support [varies](http://emailcodegeek.com/svg-images/) and they require a couple of fallback hacks/conditionals. I typically stay away from SVG in email.

Icon fonts, like [Font Awesome](http://fortawesome.github.io/Font-Awesome/), fall into the same bucket as web fonts (see above). WebKit clients may or may not support them.

For retina ready images, supply a large (2-3x) image and resize it. I’ll typically save a low quality image that has 2x dimensions, which seems to work well (more on [that technique](http://www.leemunroe.com/designing-for-high-resolution-retina-displays/)). 

Keep in mind that for Outlook you should tell the image how wide it should be with a **width attribute** otherwise it may render the actual width of the image and break your email.


### Forms

Support for form elements vary. Best to **stay clear** and link to an **external form** if you need one. Campaign Monitor has some [advice on forms here](https://www.campaignmonitor.com/resources/will-it-work/forms/).

Obviously it depends on what your objectives are. It is safer to stay away from forms but I have seen [RebelMail](http://rebelmail.com/) and [MixMax](https://mixmax.com/) doing interesting things with forms for surveys and ecommerce with good fallback support.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-forms1.png" width="400" alt="Surveys"></p>


### What the heck is VML?

VML (Vector Markup Language) is supported by Outlook. I honestly never use it and try to design emails in a way that I can avoid thinking about it.

> Vector Markup Language (VML) is obsolete in Internet Explorer 10 (quirks and 10 document modes).
> &mdash; [Microsoft](https://msdn.microsoft.com/library/hh801223(v=vs.85).aspx)

VML is **no longer supported in new versions of IE**, although as long as Outlook 2007/10/13 are around you will see it used. Typically for [background images](http://www.emailonacid.com/blog/details/C13/emailology_vector_markup_language_and_backgrounds).


### Can I use CSS3 and HTML5?

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-css3.png" width="300" alt="HTML5 CSS3"></p>

Sort of. Be sure to keep **progressive enhancement** in mind when using these.

Recently I’ve switched to using HTML5 doctype but not other HTML5 elements.

CSS3 wise, like the web, if you include rounded corners, box shadows etc. they will drop back for clients that don’t support them. CSS animations, for example, are supported in WebKit clients. It all comes down to what the **rendering engine** is for each client.


### How do I include Gmail actions in my subject line?

These are handy [actions available for Gmail](https://developers.google.com/gmail/markup/actions/actions-overview). You've probably seen them from the likes of GitHub for issues or Amazon for orders.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-gmail1.png" width="400" alt="Gmail actions"></p>

Adding the code is straight forward. You have [two options](https://developers.google.com/gmail/markup/actions/declaring-actions):

1. JSON-LD
1. Microdata

Getting white listed involves a [few more steps](https://developers.google.com/gmail/markup/registering-with-google). You can test Gmail actions with a @gmail.com address.


### Don’t forget about preheader text

Some clients show **extra descriptions** next to or under the subject lines. These clients include iOS, Apple Mail, Outlook 2013, Gmail, AOL.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-preheader.png" width="500" alt="Preheader text"></p>

Clients will grab the first bit of text they find in your email body and add it here. 

Make the most of this and **add a hidden element** to your body content that appears first. This text should be an extra incentive for the user to open your email. Hide the text like so:

```html
<span style="color: transparent; display: none !important; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Preheader text goes here</span>
```

Use this [subject/preheader tool](http://codepen.io/awoodall/full/XbpMbo/) by Austin Woodall to preview your email subjects and preheaders.

### How do I test my email before sending it?

I always use [Litmus](http://www.litmus.com) as well as emailing myself and checking it on 2 or 3 devices. [Email on Acid](https://www.emailonacid.com/) seems like a good alternative.

<p class="aligncenter"><img src="{{site.baseurl}}/img/build-litmus1.png" width="500" alt="Litmus"></p>

### Conclusion

Building HTML email is a lot like building a web page. 10 years ago. 

Email clients haven't been as progressive as web browsers in adopting new standards, while we users and companies haven't adopted new email clients like we have web browsers. Add to that the rise of mobile, we're left in this state where we have to support so many convoluted clients and versions.

You can keep it simple and design email with a "What's the minimal amount of effort required to get the maximum effect" approach. You can provide a bunch of fallbacks or hacks to ensure your emails are "bulletproof" and look identical across all clients. Or you can go above and beyond and experiment with things like web fonts, SVG, animations, video and provide a supperior experience for those that support it.

***What'd I miss? What advice would you add to this list for any one else reading?***
