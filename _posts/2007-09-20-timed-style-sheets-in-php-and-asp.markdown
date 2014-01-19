---
layout: post
status: publish
published: true
title: Timed style sheets in PHP and ASP
author: lee
author_login: lee
wordpress_id: 30
wordpress_url: http://www.leemunroe.com/blog/index.php/2007/09/20/timed-style-sheets-in-php-and-asp/
date: 2007-09-20 13:08:55.000000000 -07:00
comments:
- id: 39
  author: Harry Roberts
  author_email: ''
  author_url: http://www.harry.prdesign-studio.co.uk
  date: '2007-11-15 17:59:33 -0800'
  date_gmt: '2007-11-15 17:59:33 -0800'
  content: Hi Lee, thanks for the props! The ASP version looks pretty similar, I have
    no ASP knowledge, how easy is it to learn? Harry
- id: 40
  author: Harry
  author_email: ''
  author_url: http://www.harry.prdesign-studio.co.uk
  date: '2007-11-15 18:03:46 -0800'
  date_gmt: '2007-11-15 18:03:46 -0800'
  content: Cool, I might take a look at it!
- id: 41
  author: ??
  author_email: ''
  author_url: ''
  date: '2007-11-15 18:04:27 -0800'
  date_gmt: '2007-11-15 18:04:27 -0800'
  content: ??????????????~
- id: 42
  author: Harry
  author_email: ''
  author_url: http://www.harry.prdesign-studio.co.uk
  date: '2007-11-15 18:04:53 -0800'
  date_gmt: '2007-11-15 18:04:53 -0800'
  content: 'Lee, found another site which uses timed css: http://www.mariusroosendaal.com/.
    Quite nice I think you''ll agree.'
- id: 43
  author: lee
  author_email: lee@leemunroe.com
  author_url: http://
  date: '2007-11-15 17:59:34 -0800'
  date_gmt: '2007-11-15 17:59:34 -0800'
  content: No problem Harry. Both very similar in regards to structure but PHP syntax
    is more C++ based where as asp is very visual basic like and runs on IIS. I think
    if you know one it wouldn't take long to learn the other. Would recommend learning
    asp.NET over asp as it's the most recent and apparently a lot more powerful.
---
You may or may not have noticed that my site has a timed style sheet. Visit the site during the day and it has a day theme, early evening a sunset theme and during the night a night theme (you can also click the icons at the bottom left of the site to view each theme). I often get emails asking how it's done. It's very simple, and here's how.
<ul>
	<li>Harry Roberts @ <a href="http://www.prdesign-studio.co.uk/HarryRoberts/" title="Harry Roberts">www.prdesign-studio.co.uk</a> explains in a simple tutorial <a href="http://www.prdesign-studio.co.uk/HarryRoberts/index.php?2007/09/10/08/15/29-create-a-timed-stylesheet-using-php" title="PHP timed style sheets">how to implement the timed style sheets in PHP</a></li>
	<li>The guys @ <a href="http://www.5key.net/">www.5key.net</a> explain <a href="http://66.249.91.104/translate_c?hl=en&amp;langpair=zh%7Cen&amp;u=http://5key.net/blog/article.asp%3Fid%3D305" title="Timed style sheet">how to implement the timed style sheet in both PHP and ASP</a> (<a href="http://5key.net/blog/article.asp?id=305">click here for non-translated version</a>)</li>
</ul>
Please do check out their sites do see how it's done and thanks for the refferal guys.
<h5>The basics</h5>
How the timed style sheets are achieved is very simple. Basically I have three style sheets entitled day.css, sunset.css &amp; night.css. The code checks to see what time it is and if it is between 7am and 5pm, the output is day.css. Between 5pm &amp; 8pm sunset.css and 8pm &amp; 7am night.css. That's all there is to it.
<h5>PHP</h5>
<code>&lt;link rel="stylesheet" type="text/css" href="&lt;?php $hour = date("H"); if ($hour &gt;= 7 and $hour &lt; 17) echo "day.css"; elseif ($hour &gt;= 17 and $hour &lt; 20) echo "sunset.css"; else echo "night.css"; ?&gt;" /&gt;</code>
<h5>ASP</h5>
<code>&lt;link rel="stylesheet" type="text/css" href="&lt;%if time &gt;= #07:00# and time &lt;= #17:00# then
theme = "day.css"
elseif time &gt; #17:00# and time &lt;= #20:00# then
response.write "sunset.css"
else
response.write "night.css"
end if%&gt; </code>
<p align="center"><img src="http://www.leemunroe.com/wp-content/uploads/2007/11/night.jpg" alt="CSS themes" /></p>
