---
layout: post
status: publish
published: true
title: How to deploy your Rails app with Capistrano (to Dreamhost)
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2245
wordpress_url: http://www.leemunroe.com/?p=2245
date: 2011-01-26 10:01:29.000000000 -08:00
comments:
- id: 25115
  author: 防音
  author_email: boon@yahoo.co.jp
  author_url: http://www.soundenvironment.jp/
  date: '2011-02-04 12:54:29 -0800'
  date_gmt: '2011-02-04 11:54:29 -0800'
  content: Everything is gonna be all right.
- id: 25118
  author: comportementaliste ile de france
  author_email: consultant@yopmail.com
  author_url: http://www.consultantchien.fr/
  date: '2011-02-14 14:01:29 -0800'
  date_gmt: '2011-02-14 13:01:29 -0800'
  content: |-
    Thanks Lee! I've followed your how to and it worked perfectly!
    Regards.
---
I've been doing a bit of Rails development recently. I've actually been doing what I would call 'basic' Rails development for a couple of years now on and off. 

However, <strong>I'd never used Capistrano</strong> to deploy a web app before. It was always one of those other things that I would have to learn. But recently, with the re-launched <a href="http://tweetni.com">TweetNI</a>, I decided to sit down and figure it out.

It didn't go quite as smoothly as I had planned so here's a quick overview to help you get up and running.

<!--more-->

<h4>What is Capistrano?</h4>

<blockquote>Capistrano is a utility and framework for executing commands in parallel on multiple remote machines, via SSH.
&mdash; <a href="https://github.com/capistrano/capistrano">GitHub</a></blockquote>

Sounds a bit complicated but in a nutshell, <strong>you run a command (or two) via Terminal (or Command Line) and your Rails app is 'automagically' up and running on your server</strong>.

If you've ever deployed a Rails app manually like I have before, you might have uploaded the files via <strong>FTP</strong>, then created your database in <strong>PHPMyAdmin</strong>, then <strong>'touched' the restart.txt</strong> file via SSH (yep, so old skool).

Capistrano combines all this into a couple of commands.

<h4>Setup Capistrano</h4>

Assuming you have Terminal open on a mac, run the following commands:

<h5>1. Install the gem</h5>

<pre><code>gem install capistrano</code></pre>

<h5>2. Tell your app you want to deploy with Capistrano</h5>

<pre><code>cd your_app_folder
capify .</code></pre>

<h5>3. Configure deploy.rb</h5>
There is a new file for you to configure under <strong>/config/deploy.rb</strong>

I'm going to assume you're <strong>*not* using SVN or Git</strong> for this project (it just so happens I didn't use them for this project).

Copy and paste the following:

<pre><code>require 'bundler/capistrano'

set :application, "tweetni.com" # Your application location on your server goes here

default_run_options[:pty] = true

set :repository,  "."
set :scm, :none
set :deploy_via, :copy

set :checkout, 'export'

set :user, 'username' # Your username goes here
set :use_sudo, false
set :domain, 'tweetni.com' # Your domain goes here
set :applicationdir, "/home/#{user}/#{application}"
set :deploy_to, applicationdir

role :web, domain                 
role :app, domain                          
role :db,  domain, :primary => true 


set :chmod755, "app config db lib public vendor script script/* public/disp*"

namespace :deploy do
  
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
  
end</code></pre>

Make sure you change your app folder, username and domain to your settings.

<h5>4. Setup your server</h5>

<pre><code>cap deploy:setup</code></pre>

You only need to run this command once.

Each time you deploy, <strong>SSH will ask for your password</strong>.

<h5>5. Deploy</h5>
<pre><code>cap deploy:cold
cap deploy:web:enable
cap deploy:migrations</code></pre>

<h5>You're up and running</h5>
If everything went to plan you should be up and running.

From now on any time you make any changes you just need to run the following:
<pre><code>cap deploy</code></pre>

<h4>On Dreamhost</h4>

I don't know if I did something wrong along the process but after step 5 I couldn't get my app to run so<strong> I sent Dreamhost a little support question</strong> and they replied saying:

<blockquote>Sorry about that, I needed to create a symlink to bundle. Give it a try now and write back in if you're still having an issue.</blockquote>

Not sure if this happens every time but try giving support a shout if it does.

<strong><em>Hope this is helpful to someone.</em></strong>

<h4>Further reading</h4>
<ul>
<li><a href="http://www.maxkpage.com/blog/capistrano-rails-deploy-without-svn-or-git/">Deploy with Capistrano without SVN or Git</a></li>
<li><a href="https://github.com/capistrano/capistrano">Official Capistrano page</a></li>
<li><a href="http://wiki.dreamhost.com/Capistrano">Capistrano on Dreamhost</a></li>
</ul>
