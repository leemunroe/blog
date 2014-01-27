---
layout: post
status: publish
published: true
title: 5 Things I learned designing for high-resolution retina displays
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2956
wordpress_url: http://www.leemunroe.com/?p=2956
date: 2013-03-26 08:00:25.000000000 -07:00
comments:
- id: 153811
  author: Kevin
  author_email: Hi@kevindevine.ie
  author_url: http://kevindevine.ie
  date: '2013-03-27 00:52:25 -0700'
  date_gmt: '2013-03-26 23:52:25 -0700'
  content: It's a common sense tip but one I've found handy. Retina assets, sprites,
    font sizes etc should be even numbers, i.e. divisible by two. Makes the scaling
    down a lot easier.
- id: 153818
  author: Hermanto Lim
  author_email: nackle2k10@gmail.com
  author_url: http://bonfirelab.com
  date: '2013-03-27 17:47:51 -0700'
  date_gmt: '2013-03-27 16:47:51 -0700'
  content: Excellent tips! What is the resolution you use when designing in photoshop?
- id: 153825
  author: Jordy Meow
  author_email: inscr@meow.fr
  author_url: http://www.totorotimes.com
  date: '2013-03-28 01:51:08 -0700'
  date_gmt: '2013-03-28 00:51:08 -0700'
  content: "Didn't you try the WP Retina 2x plugin for WordPress? Not only it uses
    retina.js, but also uses two other methods (a server handler, and a server-side
    rewriter). It also creates automatically all the @2x images for you, so you don't
    have to think about anything at all. Retina.js is the slowest method.\r\n\r\nAlways
    inserting the @2x images could be an \"okay\" solution, unfortunately WordPress
    by default will use those images original sizes and will not re-size down.\r\n\r\nI
    strongly agree with you on this: \"More detail doesn't necessarily mean more data\".
    I noticed that on a normal screen you can use JPG quality = 80-85%, but on a Retina
    you can use a much lower quality (65%-75%) for the same kind of results (relatively
    speaking).\r\n\r\nThanks for your article ^^"
- id: 153826
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2013-03-28 03:20:27 -0700'
  date_gmt: '2013-03-28 02:20:27 -0700'
  content: "@Kevin: Excellent tip.\r\n\r\n@Hermanto: On a Retina MacBook, the default
    resolution (2560 x 1600) at 100% zoom. But if I'm on a standard display I'll have
    that zoomed to 200%. Actually hopping back and forth between Retina and non-Retina
    (e.g. Thunderbolt display) gets quite confusing.\r\n\r\n@Jordy: Great advice,
    will check it out. Didn't know there was a server-side Wordpress solution."
- id: 153828
  author: Al
  author_email: technik@hotmail.co.uk
  author_url: http://www.awkm.org
  date: '2013-03-28 14:46:00 -0700'
  date_gmt: '2013-03-28 13:46:00 -0700'
  content: Seems like a lot of extra work (and heavier site sizes) to accommodate
    a relative handful of users.
- id: 153829
  author: Simon Goellner
  author_email: simey.me@gmail.com
  author_url: http://simey.me
  date: '2013-03-28 15:24:01 -0700'
  date_gmt: '2013-03-28 14:24:01 -0700'
  content: "What's the deal with devices such as the new Galaxy S4 which has a much
    greater pixel density than iDevices? \r\n\r\nHow does this kind of thing work?\r\nDo
    we forget about Retina and design for S4 (like you're suggesting we design for
    Retina and forget about HTC OneX and Galaxy S3  pixel densities?)\r\nDo we create
    a 3x and 4x for the future?\r\n\r\nThis hurts my brain."
- id: 153831
  author: Al
  author_email: technik@hotmail.co.uk
  author_url: http://www.awkm.org
  date: '2013-03-28 19:08:40 -0700'
  date_gmt: '2013-03-28 18:08:40 -0700'
  content: "Have to agree with Simon.\r\n\r\nThis sort of duplication is short-termist
    and will lead to sites that need more \"hacks\" and fixes as time goes by.\r\n\r\nAs
    a lot of \"design types\" use Apple products they fall into the trap of accommodating
    them and become miopic towards the other myriad devices and platforms that the
    vast majority use.\r\n\r\nIn reality sites, and designers, need to rapidly simplify
    their approach to web design and development. It might sound a bit luddite but
    that's just the fact of the matter these days. Making it look good isn't the goal
    now - making it work seamlessly and simply is."
- id: 153843
  author: Chatman R.
  author_email: theguy@notebookandpenguin.com
  author_url: http://notebookandpenguin.com
  date: '2013-03-29 20:03:35 -0700'
  date_gmt: '2013-03-29 19:03:35 -0700'
  content: "For about the past year, I've been using Adaptive Images to serve resolution-appropriate
    assets from the server. Scott Jehl's Picturefill is a great client-side solution
    for serving retina assets. I agree with Simon that things are only going to escalate,
    but I disagree that this is a bad thing.\r\n\r\nCall me a masochist, but I'm rather
    excited that the device landscape is forcing us to challenge our methods. Performance
    is high priority, but we can and should allow a few trade-offs for an effective
    design. It's up to us to decide just how far to go with it. \r\n\r\nThe thing
    about Retina displays: they're not going away. We see this with every new technology:
    only a handful have it now, but eventually it's going to become more affordable
    and we'll see it explode. It happened when LCD monitors released years ago, it
    was prohibitive in cost then, but now it would be odd to see a CRT monitor on
    a desk.\r\n\r\nWe can't think of this in terms of Apple products, because this
    kind of technology isn't Apple-exclusive. In my opinion, it would be more annoying
    to retroactively design for retina/HD displays when they become common than to
    invest a little more time considering them now. Honestly, I'd say ignoring them
    is the short-term solution."
- id: 153846
  author: Guillaume Lambert
  author_email: falzhobel@gmail.com
  author_url: http://falzhobel.ca
  date: '2013-03-30 02:31:38 -0700'
  date_gmt: '2013-03-30 01:31:38 -0700'
  content: "Great read there!\r\n\r\nI have an out-of-the-subject question: do you
    use your 13\" MBP Retina in \"best for retina\" mode? Im looking at buying one
    to upgrade from a MBA 13\", but the 1280 x 800 resolution is bothering me a little.
    I dont like using external screen so that would be my main and only display. \r\n\r\nWould
    you still recommend it or do you think i should go with a 15\" ?\r\n\r\nThanks
    and sorry for getting out of the subject here. \r\n\r\nKeep up the good work!"
- id: 153857
  author: Tareq
  author_email: tareq@wedevs.com
  author_url: http://tareq.wedevs.com
  date: '2013-03-31 15:21:23 -0700'
  date_gmt: '2013-03-31 14:21:23 -0700'
  content: "How do you handle it when you design? I am not a designer, but a developer.
    I don't know Illustrator, only some basic photoshop knowledge. So what approach
    do you take? Create an image in high def and scale it down for normal screen?
    \r\n\r\nBTW, I am on a retina 13\" MBP."
- id: 153894
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2013-04-08 13:13:07 -0700'
  date_gmt: '2013-04-08 12:13:07 -0700'
  content: "@Simon @Al: Definitely not, you can configure your media query to target
    any screen greater than a certain pixel density. For example, the media query
    I used above targets any device with a dpi greater than 192. \r\n\r\nAgreed it
    might be a bit of extra work. Depends on the size of your project, type of project,
    your target user, budget etc. on whether or not you want to support it right now.
    \r\n\r\n@Guillaume: Yes that's how I use it. I hook it up to a Thunderbolt now
    and again although it can get a bit confusing switching back and forth. I think
    the 13\" is perfect though. Keeps you focused.\r\n\r\n@Tareq: Yes, right now I'm
    designing @2x in Photoshop. Then if I need to I'll scale it down."
- id: 153905
  author: Web Design Denver
  author_email: ellen.zoneth@gmail.com
  author_url: http://www.tagteamdesign.com/
  date: '2013-04-12 03:08:33 -0700'
  date_gmt: '2013-04-12 02:08:33 -0700'
  content: Nice tips you have shared here. Awesome post! I liked it so much. It's
    been really great to be here.
- id: 153917
  author: Jan
  author_email: jan.riggert@grabarzundpartner.de
  author_url: http://
  date: '2013-04-15 14:28:05 -0700'
  date_gmt: '2013-04-15 13:28:05 -0700'
  content: "\"Or every embedded image can have larger dimensions than needed, and
    then you explicitly set the width of that image.\"\r\n\r\nThank you very much
    for that idea!\r\n\r\nI will go this way, because then it will not only on Retina
    products, but on any HiRes display around.\r\n\r\nThanks, Jan"
- id: 153963
  author: Responsive Web Design
  author_email: ppc@ordev.co.uk
  author_url: http://www.oneresult.co.uk/responsive/
  date: '2013-04-29 17:07:59 -0700'
  date_gmt: '2013-04-29 16:07:59 -0700'
  content: some great insights there, thanks for the post, tweeted and shared!
- id: 153964
  author: Scott Anderson
  author_email: info@abandondesign.com
  author_url: http://
  date: '2013-04-29 22:11:14 -0700'
  date_gmt: '2013-04-29 21:11:14 -0700'
  content: "Lee, I just got my retina machine this weekend. Do you have any recommendations
    on how to actually design (in Photoshop) on your retina machine?\r\n\r\nI was
    pretty surprised to find out that viewing my 72dpi, web ready, files at their
    normal output size renders everything very blurry during the actual design process."
- id: 153966
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2013-05-01 02:53:39 -0700'
  date_gmt: '2013-05-01 01:53:39 -0700'
  content: '@Scott: Do you have the latest Photoshop? I know the latest release is
    retina ready, but it''s only a recent (3 months ago) update. One thing that I
    find slightly confusing though is going back and forth between retina and non-retina
    (e.g. external display).'
- id: 153969
  author: Scott Anderson
  author_email: info@abandondesign.com
  author_url: http://
  date: '2013-05-01 14:23:55 -0700'
  date_gmt: '2013-05-01 13:23:55 -0700'
  content: '@Lee: I do have the latest update, which fixed the blurry Photoshop UI.
    However, I''m still left with a pit in my stomach as I attempt to design at a
    blurry 200% on my Retina. I don''t have an external monitor set up yet, but I
    plan to at this point.'
- id: 154184
  author: Myles K
  author_email: myles@4dk.me
  author_url: http://
  date: '2013-05-29 04:00:36 -0700'
  date_gmt: '2013-05-29 03:00:36 -0700'
  content: I'm in the same boat Scott is. I just got my macbook pro retina (15 inch)
    and designing in photoshop has been a nightmare. fonts looks horrible and pixelated,
    and it's just a giant head trip trying to design anything web related when everything
    is being upscaled. I find myself disabling the retina display and working at the
    1650 resolution just so I can actually breathe and get some work done. It's a
    massive headache. Any guidance would be greatly appreciated.
- id: 154296
  author: Ryan
  author_email: Mail@ryanchan.ca
  author_url: http://ryanchan.ca
  date: '2013-06-17 07:33:42 -0700'
  date_gmt: '2013-06-17 06:33:42 -0700'
  content: Thanks so much for the info on this!  You really helped clear up a lot
    of questions I may have had.
---
I was lucky enough to receive a 13" MacBook Pro with Retina display for work a few months back.

It's a beautiful device. At first I didn't think it would make a big difference but after using for a day it's hard to go back to other displays. It's like the transition from VHS to DVD or SD to HD.

The first website I designed while having the Retina display was <a href="http://runnable.com">Runnable.com</a> and of course I was <strong>now more inclined  to design for high-resolution screens</strong> as I notice the results on a daily basis.

Below are just a few techniques I learned while designing for high-res devices.

<h4>1. Use media queries for high-res CSS styles</h4>

Using CSS media queries you can <strong>target any device with a high-resolution screen</strong> and provide it with <strong>alternate styles</strong>.

It's very straight forward, and some what similar to providing responsive or alternate mobile styles.

{% highlight css %}
@media only screen and (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi) {
  /* High-res styles go here */
}
{% endhighlight %}

This should be enough, but if you want to target other highish-res screens, you can read up on Chris Coyier's <a href="http://css-tricks.com/snippets/css/retina-display-media-query/">Retina Display Media Query post here</a>.



<h4>2. Have two versions of your CSS sprites: standard dimensions and @2x</h4>

Maykel Loomans wrote a very useful post last year on using CSS Sprites to <a href="http://miekd.com/articles/using-css-sprites-to-optimize-your-website-for-retina-displays/">optimize your website for Retina displays</a>.

Loomans recommends having <strong>two sprite files, one for standard and one for high-res</strong>.

<img src="http://www.leemunroe.com/wp-content/uploads/sprites.jpg" alt="Sprites" border="0" />

Using the <strong>media query I shared above</strong>, simply change the background image reference and then resize the background image.

{% highlight css %}
@media only screen and (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi) {
  .logo{
    background-image:url(assets/sprite@2x.png);
    background-size:500px 500px; /* This replicates the original standard sprite dimensions, and assumes the actual dimensions of sprite@2x.png are 1000x1000px */
  }
}
{% endhighlight %}



<h4>3. Serve up larger html embedded images with Javascript</h4>

The sprite solution above is only good for assets referenced in your CSS. But what about images on your page?

<a href="http://imulus.com/">Imulus</a> developed a useful plugin <a href="http://retinajs.com/">Retina.js</a> that solves this for you.

The script will check your server to see if you have any image source with @2x at the end.

For example:

{% highlight html %}
<img src="/images/my_image.png" />
{% endhighlight %}

Retina.js will look for:

<pre><code>"/images/my_image@2x.png"</code></pre>

See their <a href="http://retinajs.com/">documentation</a> on how to implement.



<h4>4. More detail doesn't necessarily mean more data</h4>

Daan Jobsis conducted a very interesting experiment last year looking at <a href="http://blog.netvlies.nl/design-interactie/retina-revolution/">pixel quality, image dimensions and compression</a>.

<strong>More pixels = better display. But, more pixels doesn't necessarily have to mean 4 or 5 times more data. More detail can be accomplished with less kilobytes.</strong>

<blockquote>
<p>The bottomline is that heavy compression doesn’t affect the final image as much as you would expect. This is because of the greater amount of pixels in the Retina image, compression artefacts are scaled down and therefore almost unnoticeable.</p>
</blockquote>

<img src="http://www.leemunroe.com/wp-content/uploads/clouds.jpg" alt="Clouds" border="0" />

Basically an image can have larger dimensions, but can also be compressed more and you still get great results on a high-res screen.

You can see <a href="http://blog.netvlies.nl/design-interactie/retina-revolutie-follow-up/">various image dimensions, file size and quality comparisons in Daan's follow up post here</a>.


<h4>5. You can just use the same image assets for both standard and high-res screens</h4>

I've talked above about how to serve up alternate assets for high-res screens. <strong>The downside of this is having to maintain two versions of graphical assets and images.</strong>

Turns out you can use the same assets.

For example, with <strong>CSS sprites you can use the @2x version for all users</strong>, and let your CSS do the resizing for all users. Or every embedded image can have <strong>larger dimensions</strong> than needed, and then you <strong>explicitly set the width</strong> of that image.

The pros of this are that you <strong>maintain one version</strong>.

The cons, depending on how you compress the assets, <strong>your users may have to download larger files than they actually need</strong>.

<h4>Bonus: Don't forget your Retina-ready favicon</h4>

Nothing is more telling <strong>whether a website has invested in support for high-res screens than your favicon</strong>. And it's a very simple fix.

Ensure your favicon is <strong>32x32px</strong> and you're golden.

Use <a href="http://iconverticons.com/online/">iConvert</a> to convert a PNG to ICO.


<h4>Conclusion</h4>

High-res screens, in particular the MacBook Pro with Retina display, are fantastic and I highly recommend Designers invest in them.

More and more devices have high-res and if you want your product or website to look professional to users of these devices, you should put some thought into how they look.

<strong>My preference is to only maintain one version of each graphical asset</strong> instead of two (I'm lazy), so I'll typically have an @2x sprite that I resize for all users.  I'll also try to save highly compressed images in large dimensions for web so they look good when resized in the browser.

Some other, more obvious, techniques that I haven't mentioned above are making good use of CSS, @font-face, <a href="http://www.leemunroe.com/icon-fonts/">icon fonts</a> and SVG, instead of relying on bitmap images.

<strong><em>Have you any other advice designing for high-resolution?</em></strong>
