---
layout: post
status: publish
published: true
title: Tips and hacks for creating your own Wordpress theme
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 221
wordpress_url: http://www.leemunroe.com/?p=221
date: 2008-10-06 13:58:16.000000000 -07:00
comments:
- id: 101
  author: Paddy
  author_email: paddy@thebigwordproject.com
  author_url: http://blog.iampaddy.com
  date: '2008-10-06 16:26:58 -0700'
  date_gmt: '2008-10-06 15:26:58 -0700'
  content: "Some good tips there Mr Munroe.  Busy putting together a wordpress theme
    as we speak so some of these hacks will come in handy!  \r\n\r\nKeep up the good
    work :)"
- id: 103
  author: Jonno Riekwel
  author_email: jonnotie@gmail.com
  author_url: http://jonnotie.nl
  date: '2008-10-07 13:44:19 -0700'
  date_gmt: '2008-10-07 12:44:19 -0700'
  content: I have tons of bookmarks with posts like this. But, you've got some tips
    that I didn't see before. Thanks.
- id: 104
  author: Brandon Cox
  author_email: brandon@egracecreative.com
  author_url: http://www.egracecreative.com
  date: '2008-10-07 14:09:11 -0700'
  date_gmt: '2008-10-07 13:09:11 -0700'
  content: Awesome list. I was just looking last night for a way to disable the full-size
    image resizing issue - timely! Thanks!
- id: 106
  author: Nathan Rice
  author_email: ncrice@gmail.com
  author_url: http://www.nathanrice.net/
  date: '2008-10-07 14:59:32 -0700'
  date_gmt: '2008-10-07 13:59:32 -0700'
  content: "Great list, indeed. A few suggested improvements though, if I may:\r\n\r\nFor
    full sized images:\r\nInsert the following into your theme's functions.php file
    -- \r\n$content_width = 500;\r\n$GLOBALS['content_width'] = 500;\r\n\r\nJust change
    the 500 to the width of your content area.  That way, images won't be too big
    or too small.  Inserting full sized images could very well break your layout so
    you need to limit them to something.  This method lets you do just that.\r\n\r\nUnique
    Category Single Page\r\nThe method you outlined here does indeed work, but there
    is an easier and far more efficient way to do it, thanks to a reader from my blog
    who informed me --\r\nhttp://www.nathanrice.net/blog/wordpress-single-post-templates/\r\n\r\nHope
    that helps everyone!"
- id: 107
  author: Armen
  author_email: reacharmen@gmail.com
  author_url: http://premiumthemesreviewed.com/
  date: '2008-10-07 15:41:52 -0700'
  date_gmt: '2008-10-07 14:41:52 -0700'
  content: "Nice one, Lee.\r\n\r\nStyling the 'read more' tag is something often neglected.\r\n\r\nStumbled!"
- id: 108
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://
  date: '2008-10-07 16:02:11 -0700'
  date_gmt: '2008-10-07 15:02:11 -0700'
  content: "@Nathan That unique category single page hack is very good indeed! (\r\nhttp://www.nathanrice.net/blog/wordpress-single-post-templates/)\r\nIt's
    strange how this isn't supported by default. Thanks for sharing."
- id: 109
  author: Website Design
  author_email: afox@alfredfox.com
  author_url: http://www.alfredfox.com
  date: '2008-10-07 22:12:27 -0700'
  date_gmt: '2008-10-07 21:12:27 -0700'
  content: Great article. I really dig your theme here. Great use of browns. I don't
    think we see enough brown on the internet. Good stuff.
- id: 124
  author: Zul
  author_email: curseshadow@gmail.com
  author_url: http://www.zulhatfi.com
  date: '2008-10-16 18:22:19 -0700'
  date_gmt: '2008-10-16 17:22:19 -0700'
  content: Hi..all of this is really great.. but can i ask you a question about the
    customization of read more.. how can i change it to an image as a button?
- id: 125
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://
  date: '2008-10-17 00:42:33 -0700'
  date_gmt: '2008-10-16 23:42:33 -0700'
  content: "@zul Instead of inserting 'Read this article' you can insert an img tag
    <code><img src=\"someimage.gif\"></code>\r\n\r\nRead more about it here http://codex.wordpress.org/Customizing_the_Read_More"
- id: 126
  author: Zul
  author_email: curseshadow@gmail.com
  author_url: http://www.zulhatfi.com
  date: '2008-10-17 07:09:08 -0700'
  date_gmt: '2008-10-17 06:09:08 -0700'
  content: hi lee.. i try it before but i can't make it.. there's no image displayed
    when i put this  , but when i put this &lt;img src="/images/myimage.gif" alt=""
    /&gt; .. there's an error appear.. can u help me solve this problem?
- id: 127
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://
  date: '2008-10-17 10:53:01 -0700'
  date_gmt: '2008-10-17 09:53:01 -0700'
  content: "@zul can you direct me to an example page so I can take a look? I'm assuming
    you've put the image that you want to use in your images folder?\r\n\r\nAlso remember
    how to reference images in your theme folder:\r\n<code><img src=\"<?php bloginfo('template_directory');
    ?>/images/myimage.gif\" alt=\"\" /></code>"
- id: 265
  author: John
  author_email: john@mildfuzz.com
  author_url: http://www.mildfuzz.com
  date: '2008-10-31 11:16:36 -0700'
  date_gmt: '2008-10-31 10:16:36 -0700'
  content: "Really great article, thought I'd add my 2 cents. I have recently written
    an article about design inspiration, which I thought would marry up with this
    on quite well\r\n\r\nyou can find it @ www.mildfuzz.com/?p=30\r\n\r\nGreat work
    and great blog Lee"
- id: 434
  author: TyclawaySam
  author_email: atrossetoophy@gmail.com
  author_url: ''
  date: '2008-11-18 04:30:44 -0800'
  date_gmt: '2008-11-18 03:30:44 -0800'
  content: "i want to share my free wordpress theme here.\r\n\r\nPreview:\r\nhttp://www.elegantthemes.com/preview/eVid/\r\n\r\nDownload:\r\nhttp://www.sendspace.com/file/6uv0n2"
- id: 1023
  author: Dmitriy
  author_email: domen@domen.name
  author_url: http://vanilla-man.com/
  date: '2008-12-19 15:35:54 -0800'
  date_gmt: '2008-12-19 14:35:54 -0800'
  content: Hey, great post! Thanks for all these hacks, but I'm wondering how did
    you make that all your Pages has different layout. For example 'Profile' - it
    isn't post, right? And main page has completely different layout. Could you describe
    these hints, please?
- id: 1037
  author: Vanilla Man
  author_email: my.depression@gmail.com
  author_url: http://vanilla-man.com/blog/
  date: '2008-12-20 02:37:05 -0800'
  date_gmt: '2008-12-20 01:37:05 -0800'
  content: Oh man.. disregard my question. I've read I think 10 different ways to
    do this(some of them are really hard and didn't worked) and found one simple solution
    - the templates! I bet you using exactly this way to do this! :)
- id: 1039
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2008-12-20 03:13:42 -0800'
  date_gmt: '2008-12-20 02:13:42 -0800'
  content: '@Vanilla-man: Glad you were able to figure it out. Yes, templates for
    specific pages. Take a look at http://codex.wordpress.org/Pages#Creating_Your_Own_Page_Templates
    if you haven''t already'
- id: 1250
  author: Albert
  author_email: albert@inetforu.com
  author_url: http://www.inetforu.com
  date: '2009-01-03 19:35:38 -0800'
  date_gmt: '2009-01-03 18:35:38 -0800'
  content: This is a very useful information for anyone who want to make a custom
    layout for there blog.
- id: 1427
  author: Kevin
  author_email: kevin@kevindevine.ie
  author_url: http://www.kevindevine.ie
  date: '2009-01-13 22:27:32 -0800'
  date_gmt: '2009-01-13 21:27:32 -0800'
  content: Hey Lee, Currently working on a new site and coming back to this blog post
    for reference. Some great tips, cheers
- id: 1441
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2009-01-14 20:48:29 -0800'
  date_gmt: '2009-01-14 19:48:29 -0800'
  content: '@Kevin: Nice one, even I come back to check this post to remind myself
    lol'
---
<a href="http://www.wordpress.org">Wordpress</a> is a great blogging engine. It's easy to get it up and running and there's a lot of free themes available. But if you want to be a bit more creative and design your own theme or even use Wordpress as a CMS (content management system), this can be easily done. The <a href="http://www.leemunroe.com/new-website-design-is-up-and-running/">recent redesign of my website</a> has used Wordpress as a CMS.  I've noted several useful tips and hacks that I came across while designing my theme that may come in useful. 
<!--more-->
Before using the snippets below you might want to start with the basics of designing your own theme. Check out these useful websites for step by step guides on designing your own themes and templates.
<ul>
	<li><a href="http://www.wpdesigner.com/2007/02/19/so-you-want-to-create-wordpress-themes-huh/">So you want to create Wordpress themes huh?</a></li>
	<li><a href="http://codex.wordpress.org/Stepping_Into_Templates">Official Wordpress codex</a></li>
	<li><a href="http://themetation.com/2008/07/14/how-to-create-wordpress-themes-from-scratch-part-1/">How to create a Wordpress theme from scratch</a></li>
</ul>
<h4>Referencing images in your theme</h4>
Referencing images in your stylesheet (style.css) are relative.
<pre><code>background:url(images/myimage.gif)</code></pre>
Referencing images in your html templates are absolute so use the template directory tag.
<pre><code><img src="<?php bloginfo('template_directory'); ?>/images/myimage.gif" alt="" /></code></pre>
<h4>Full size images</h4>
Wordpress 2.6 resizes your images to 500px width, even when you tick the full width option, so there's a hack to get around this. Go to /wp-includes/media.php on line 84 and comment that line (//)
<pre><code>// any other type: use the real image and constrain it
// list( $width, $height ) = image_constrain_size_for_editor( $meta['width'], $meta['height'], $size );</code></pre>
This way instead of <code><img class="..." src="..." alt="" width="..." height="..." /></code> you will get <code><img class="..." src="..." alt="" /></code> 
Thanks to <a href="http://wordpress.org/support/profile/401469">parisoto</a> for this hack.
<h4>Exclude specific categories</h4>
If you want to exclude or only include specific categories, e.g. you only want your portfolio page to include posts with the portfolio category, use query posts before your loop.
<pre><code><?php query_posts('cat=-2'); ?></code></pre>
This would remove the category with ID 2 from the list. You can get your category IDs by hovering or clicking on them in your admin area.  I noticed this can cause a pagination problem though, so if you're paginating use the code below.
<pre><code><?php
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
query_posts($query_string . "&cat=-2&paged=$paged");
?></code></pre>
<h4>Unique category templates</h4>
Just name your template file category-ID.php and this will be a specific template for that category e.g. category-2.php
<h4>Unique category single page</h4>
In your single.php template do a check to see which category your post is in, then redirect it to another template for that category.
<pre><code>
<?php
	if ( in_category('2') ) {
  include(TEMPLATEPATH . '/single-2.php');
	}else{
	include(TEMPLATEPATH . '/single-all.php');
	}
?></code></pre>
<h4>Nice page titles</h4>
Put the name of the current page followed by a hyphen.
<pre><code><?php wp_title(' - ',true,'right');?>Freelance Web Design</code></pre>
This would return something like "Portfolio - Freelance Web Design" 
<img class="alignnone size-full wp-image-226" title="picture-8" src="http://www.leemunroe.com/wp-content/uploads/picture-8.png" alt="" />
<h4>Fancy tags</h4>
Set up your tags list.
<pre><code><?php the_tags('<ul class="tags clearfix"><li>', '</li><li>', '</li></ul>'); ?></code></pre>
This produces similar to the following HTML.
<pre><code>
<ul class="tags">
	<li><a rel="tag" href="http://www.leemunroe.com/tags/cms/">CMS</a></li>
</ul>
</code></pre>
Then apply some CSS to style them as you like.
<pre><code>ul.tags{
list-style: none;
margin:0;
}

ul.tags li{
display: inline;
}

ul.tags li{
display:block;
float:left;
padding-left:12px;
background:url(images/tag.gif) left no-repeat;
margin:0 5px 5px 0;
}

ul.tags li a{
display:block;
float:left;
height:22px;
padding:3px 12px 0 0;
background:url(images/tag.gif) right no-repeat;
}</code></pre>
<img class="alignnone size-full wp-image-234" title="picture-13" src="http://www.leemunroe.com/wp-content/uploads/picture-13.png" alt="" />
<h4>Customise read more</h4>
Customise the "Read more" link that separates your post. In your index.php where it says:
<pre><code><?php the_content(); ?></code></pre>
Put the text that you want your link to say between the brackets.
<pre><code><?php the_content('Read this article'); ?></code></pre>
The more link has a class of 'more-link' so apply some CSS to style it.
<pre><code>.more-link{
padding:10px;
background:#3c3028;
font-weight: bold;
float: right;
}</code></pre>
<img class="alignnone size-full wp-image-237" title="picture-14" src="http://www.leemunroe.com/wp-content/uploads/picture-14.png" alt="" />
<h4>Highlight author's comments</h4>
Add an .authcomment style.
<pre><code>.authcomment{
background:#fff;
}</code></pre>
comments.php has a line like this:
<pre><code><li class=”<?php echo $oddcomment; ?>” id=”comment… </code></pre>
Change it to this:
<pre><code><li class=”<?php
/* Only use the authcomment class from style.css if the user_id is 1 (admin) */
if (1 == $comment->user_id)
$oddcomment = “authcomment”;
echo $oddcomment;
?>” id=”comment… </code></pre>
<img class="alignnone size-full wp-image-229" title="picture-11" src="http://www.leemunroe.com/wp-content/uploads/picture-11.png" alt="" /> 
Thanks to <a href="http://www.mattcutts.com/blog/highlight-author-comments-wordpress/">Matt Cutts</a> for this hack.
<h4>Archive dropdown box</h4>
After a year or more of blogging your archive list can get pretty long so shorten it down with a dropdown box.
<pre><code><select name="archive-dropdown" onchange='document.location.href=this.options[this.selectedIndex].value;'>
<option value=""><?php echo attribute_escape(__('Select Month')); ?></option>
<?php wp_get_archives('type=monthly&format=option&show_post_count=0'); ?> </select></code></pre>
<img class="alignnone size-full wp-image-230" title="picture-12" src="http://www.leemunroe.com/wp-content/uploads/picture-12.png" alt="" />
<h4>Further reading</h4>
Hopefully there's a few useful tips in there that will save you having to figure them out for yourself. I recommend checking out the links below for further Wordpress theme tips.
<ul>
	<li><a href="http://www.webdesignerwall.com/tutorials/wordpress-theme-hacks/">Wordpress theme hacks</a></li>
	<li><a href="http://yoast.com/perfect-wordpress-theme/">10 checks to the perfect Wordpress theme</a></li>
	<li><a href="http://www.graphicdesignblog.co.uk/wordpress-as-a-cms-content-management-system/">Wordpress as a CMS</a></li>
	<li><a href="http://wpcandy.com/articles/tutorials/the-wordpress-help-sheet.html">The Wordpress help sheet</a></li>
</ul>
</li>
