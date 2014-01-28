---
layout: post
status: publish
published: true
title: Motherplate - A bare bones HTML5 CSS3 SCSS responsive boilerplate
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 3060
wordpress_url: http://www.leemunroe.com/?p=3060
date: 2013-07-09 09:38:03.000000000 -07:00
comments:
- id: 154426
  author: Barry Corrigan
  author_email: mail@barrycorrigan.com
  author_url: http://barrycorrigan.com
  date: '2013-07-10 10:39:27 -0700'
  date_gmt: '2013-07-10 09:39:27 -0700'
  content: "Eventually got round to setting SASS and Compass up. I found your step-by-step
    guide easy to follow.\r\n\r\nOne tip I found though for anyone who is interested.
    If you get this error when installing SASS\r\n\r\n\"You don't have write permissions
    into the /Library/Ruby/Gems/1.8 directory.\"\r\n\r\nSimply add sudo when in Terminal.
    E.g:\r\n\r\nsudo gem update --system\r\nsudo gem install compass\r\n\r\nJust thought
    I would share."
- id: 154438
  author: Zac
  author_email: zachalbert@gmail.com
  author_url: http://www.zachalbert.com
  date: '2013-07-11 17:33:25 -0700'
  date_gmt: '2013-07-11 16:33:25 -0700'
  content: Looks really awesome! I do the same thing (deleting a bunch of stuff out
    of H5BP), so this looks like it'll save me a lot of time. Thanks for sharing!
- id: 154453
  author: Robby Joe
  author_email: robbyjoe87@gmail.com
  author_url: http://Dallas.fortuneinnovations.com
  date: '2013-07-12 12:25:21 -0700'
  date_gmt: '2013-07-12 11:25:21 -0700'
  content: Thanks for sharing .......
---
A few years back I blogged about having a ready to use <a href="http://www.leemunroe.com/reusable-website-framework/"> HTML framework</a> for your projects. 

A lot has changed since then. Resources like HTML5 Boilerplate and Bootstrap have come along, and my own boilerplate has evolved a lot.

For a long time I was using H5BP, then I realised there was a lot of it I didn't use, so I cut it down to what I needed and then started using SCSS and Compass. 

What remains is <a href="https://github.com/leemunroe/motherplate">Motherplate</a>.

<img src="http://www.leemunroe.com/wp-content/uploads/structure.jpg" alt="structure" width="300" />

<h4>Bare bones</h4>

This isn't meant to compete with <a href="http://html5boilerplate.com/">H5BP</a>, <a href="http://twitter.github.io/bootstrap/">Bootstrap</a>, <a href="http://960.gs/">960GS</a> or <a href="http://inuitcss.com/">inuit.css</a>. They are all great frameworks that I highly recommend.

Motherplate is a lighter boilerplate with CSS styles I typically use on most web projects.

<strong>It doesn't include any visual styling. It doesn't even have any components</strong> in there like navigation or modal windows. But what it does give me is a nice <strong>bare bones CSS </strong>base to build upon.

<a href="http://www.leemunroe.com/motherplate/example.html">See an example</a>.


<h4>SCSS and Compass</h4>

Don't know what SCSS is? <a href="http://sass-lang.com/">SCSS</a> (or SASS, or Sass CSS) is a CSS pre-processor.

What does this mean? Basically you can do a lot of cool stuff with CSS to help you maintain it and streamline your development.

For example, this SCSS:
{% highlight css %}
// Set primary color variable
$primary-color: purple;

// Use primary color variable in nested CSS
ul{
  li{
    a{
      color:$primary-color;
    }
  }
}
{% endhighlight %}

Becomes this CSS:
{% highlight css %}
ul li a{
  color:purple;
}
{% endhighlight %}

<a href="http://compass-style.org/">Compass</a> adds an extra layer on top of SCSS with more cool stuff so you don't have to worry about browser specific prefixes and so forth.

For example, this SCSS using Compass:
{% highlight css %}
div{
  @include border-radius(5px);
}
{% endhighlight %}

Becomes this CSS:
{% highlight css %}
div{
  -webkit-border-radius:5px;
  -moz-border-radius:5px;
  -ms-border-radius:5px;
  -o-border-radius:5px;
  border-radius:5px;
}
{% endhighlight %}

SCSS requires Ruby and getting a little dirty with Terminal commands. But it's very straight forward. 

If you're new to SCSS and want a quick way to try it out, I recommend reading <a href="http://web-design-weekly.com/2013/04/10/why-you-scared-of-sass/">Why You Scared Of Sass?</a> then heading over to <a href="http://codepen.io/">CodePen</a> or using <a href="http://hammerformac.com/">Hammer for Mac</a> where you can try writing it for yourself (without worrying about Terminal commands).


<h4>Key features (and/or differentiators)</h4>

<h5>Use shiv instead of modernizr</h5>
For a long time I used modernizr but then I realised for most projects I rarely needed it, apart from the shiv for HTML5 elements to work nicely with old browsers.

<h5>Responsive grid</h5>
There is a 12-column responsive grid ready for action.

<h5>Font Awesome</h5>
Icon fonts are awesome and Font Awesome is a great way to have icons ready.

<h5>Normalize</h5>
Normalize.css is a great CSS reset.

<h5>SCSS/Compass</h5>
As mentioned above, this makes it so much more easier to write CSS.


<h4>How to use for static websites</h4>

<h5>Install Ruby</h5>

Motherplate uses SASS and Compass, which rely on Ruby.

Macs come pre-installed with Ruby but if you need to you can <a href="http://www.ruby-lang.org/en/downloads/">download ruby here</a>.

<h5>Install the compass gem</h5>

Open up terminal (or command line) and install compass.

{% highlight bash %}
$ gem update --system 
$ gem install compass
{% endhighlight %}

<h5>Download Motherplate</h5>

<a href="http://github.com/leemunroe/motherplate">Download</a> and copy the motherplate files into your new project folder.

<h5>Run compass watch</h5>

In terminal go to your project folder and run compass.

{% highlight bash %}
$ cd sites/mynewproject/
$ compass watch
{% endhighlight %}

Make sure you run the compass watch command in the same directory as the config.rb file.

Compass watch watches for any changes you make to your SCSS files.

<h5>Only edit the SCSS files</h5>

When you make changes to any of the scss files, your <code>main.css</code> file will be automatically updated. <strong>You don't edit main.css directly</strong>, compass takes care of that for you.

<h5>Customise</h5>

Edit the files that exist or add your own SCSS files where it makes sense.

I tend to put a lot of styles in _layout.scss and for most projects I'll typically add additional SCSS files like <code>_nav.scss</code> <code>_modals.scss</code> <code>_notifications.scss</code> <code>_home.scss</code> etc. This keeps it tidy, easier to maintain and easier for others to collaborate.

When you create a new SCSS file just remember to import it into main.scss

<img src="http://www.leemunroe.com/wp-content/uploads/partials.jpg" alt="partials" width="162" height="189" class="alignnone size-full wp-image-3064" />



<h4>For Rails apps</h4>

Rails makes use of the asset pipeline, plus you can use the compass gem, so you don't need to worry about running the compass command.

Make sure you have the <code>sass-rails</code> gem and <code>compass</code> gem in your gem file. 

Copy Motherplate's <code>scss</code> folder into app/assets/stylesheets.

Then in <code>app/assets/stylesheets/application.css.scss</code> you can <code>@import</code> the scss files.



<h4>For Wordpress blogs</h4>

For a Wordpress template, it's important to have a <code>style.css</code> file in the root of your template folder.

When you copy the Motherplate files into your theme folder, change the config.rb file so that the css_dir is set to the root "/" and rename css/scss/main.scss to <code>style.scss</code>

Now when you run <code>compass watch</code> from your Wordpress template folder, style.css should then compile.




<h4>Thoughts?</h4>

If you haven't used SCSS or Compass before this is probably very confusing, and it was harder to explain how to use this than I thought.

<strong><em>Would love to know your thoughts on how to make this boilerplate better or if I can make the documentation clearer. Please ask any questions you have below.</em></strong>

<a href="http://github.com/leemunroe/motherplate" class="button">View Motherplate on GitHub</a> or <a href="https://github.com/leemunroe/motherplate/archive/master.zip">download it as a zip</a> or <a href="http://www.leemunroe.com/motherplate/example.html">see the example</a>.
