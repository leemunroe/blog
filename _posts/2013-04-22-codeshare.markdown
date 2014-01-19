---
layout: post
status: publish
published: true
title: 'My first Node.js app: CodeShare.io'
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2996
wordpress_url: http://www.leemunroe.com/?p=2996
date: 2013-04-22 17:31:56.000000000 -07:00
comments:
- id: 153942
  author: Raul
  author_email: sup@raulrincon.me
  author_url: http://raulrincon.me
  date: '2013-04-22 18:11:59 -0700'
  date_gmt: '2013-04-22 17:11:59 -0700'
  content: "CodeShare has been such a good tool for me, sometimes I don't have my
    editor around, and well, I can still write the code, and have it stored for me
    when I get back home.\r\n\r\nCodeShare does that and also more. I've recommended
    it to a couple of professors of LUZ (La Universidad del Zulia, one of my states
    biggest universities) and they're highly interested in making use of. :)\r\n\r\nCheers!"
- id: 153946
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2013-04-24 07:48:45 -0700'
  date_gmt: '2013-04-24 06:48:45 -0700'
  content: '@Raul: That''s great to hear mate. Let me know if there''s anything I
    can do to improve the experience.'
---
I hooked up <strong>Firebase</strong> with <strong>Ace</strong> Editor to create a <strong>real-time code sharing</strong> tool <a href="http://codeshare.io/">CodeShare.io</a>

<a href="http://codeshare.io/"><img src="http://www.leemunroe.com/wp-content/uploads/code.jpg" alt="Code" border="0" width="600" /></a>

<h4>Learning Node.js and Express</h4>

The best way to learn a language is to build something with that language. 

I've been slowly learning Node.js for a couple of months and this was a very simple "Hello World" style app to develop as there isn't much needed server-side.

Node.js is very light weight and fast. If you're interested in learning it (and <strong>Express, a framework for Node</strong>) take a look at these tutorials and examples:

<ul>
<li><a href="http://nodejs.org/">Install Node.js</a></li>
<li><a href="http://runnable.com/express">Express examples you can run in your browser</a></li>
<li><a href="http://javascriptplayground.com/blog/2012/04/node-js-a-todo-app-with-express">A simple todo app with Node.js and Express</a></li>
<li><a href="https://devcenter.heroku.com/articles/nodejs">Deploying Node.js apps to Heroku</a></li>
</ul>

<h4>Real time data storage with Firebase</h4>

The other thing I wanted to experiment with for this project was <a href="https://www.firebase.com/">Firebase</a>. It feels like every day there's a new headline hitting Hacker News that involves Firebase in some way. It's an exciting product.

<a href="http://drbl.in/hsya"><img src="http://www.leemunroe.com/wp-content/uploads/sparta.gif" alt="Sparta" border="0" width="400" /></a>

<a href="http://drbl.in/hsya">View this on Dribbble</a>

Firebase enables you to very quickly <strong>store data, so you don't even need your own server</strong>. Perfect if you're a Designer like me who doesn't like managing servers and databases. On top of that, any <strong>data changes are real time</strong>.

It's just a matter of including the Firebase script on your page. Their documentation is very straight forward. Check out this <a href="https://www.firebase.com/tutorial/">5 minute Firebase tutorial</a>.

<h4>Results</h4>

There are a couple of tools that already enable code sharing, and there are even some real-time solutions, so I tried to make it simple enough that all the focus was on the code editor with little effort needed to create or share code.

Use it for sharing snippets of code, debugging or teaching others how to program.

There's no sign up and it's free to use.

<a href="http://codeshare.io" class="button">Launch CodeShare.io</a>

Would love to hear any feedback or feature requests you have below or you can <a href="https://news.ycombinator.com/item?id=5564233">join the discussion on Hacker News</a>.
