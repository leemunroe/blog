---
layout: post
status: publish
published: true
title: How to send automated email in Ruby on Rails (with Mailgun)
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 3122
wordpress_url: http://www.leemunroe.com/?p=3122
date: 2013-10-10 00:01:27.000000000 -07:00
comments: []
---
If you're developing an app it's highly likely you'll have to send automated transactional emails; confirmation emails, reset password, social notifications etc.

I've had to do this a bunch of times recently so thought I'd document it for other developers.

<h4>Assumptions</h4>

You have a Rails project and you want to send an email when a certain event occurs. Lets assume that once a record is created you want to send an email notification to yourself.

If you don't have a Rails project yet, learn how to <a href="http://guides.rubyonrails.org/getting_started.html ">create your first Rails app here</a>.

<h4>Sign up for Mailgun</h4>

<a href="http://mailgun.com">Mailgun</a> is a developer tool and API for sending transactional emails. You get <strong>10,000 emails per month for free</strong>.

Create an account and add a subdomain to start (you can add your own custom domain later).

<h4>Ruby on Rails Action Mailer</h4>

<a href="http://guides.rubyonrails.org/action_mailer_basics.html">Action Mailer</a> enables you to send emails from your application using mailer classes and views.

Generate your mailer by typing this in Terminal:

{% highlight bash %}
rails g mailer model_mailer new_record_notification
{% endhighlight %}

<strong>model\_mailer</strong> is the name of the mailer and <strong>new\_record\_notifcation</strong> is the method. You can name these anything you like, whatever makes sense for your project, and you can add more methods later.

Notice this creates a bunch of files.

<code>model\_mailer.rb</code> is where the logic will go for sending email and <code>new\_record\_notification.text.erb</code> is the content of the email that will be sent.

<h4>Configure your development environment</h4>

This is where you put your Mailgun settings.

Log in to <a href="http://mailgun.com/cp">Mailgun</a> and click on your subdomain (or domain) to find your SMTP settings.

<img src="http://www.leemunroe.com/wp-content/uploads/smtp.jpg" alt="smtp" width="600" />

Now open up <code>config/environments/development.rb</code>

There should already be some default settings here. Add the following:

{% highlight ruby %}
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  :authentication => :plain,
  :address => "smtp.mailgun.org",
  :port => 587,
  :domain => "MYDOMAIN.mailgun.org",
  :user_name => "postmaster@MYDOMAIN.mailgun.org",
  :password => "MYPASSWORD"
}
{% endhighlight %}

Be sure to <strong>replace MYDOMAIN</strong> with your Mailgun subdomain.

<h4>Add logic to send the emails</h4>

Open up <code>app/mailers/model\_mailer.rb</code> and change the default from email:

{% highlight ruby %}
default from: "me@MYDOMAIN.com"
{% endhighlight %}

Then define your new\_record\_notification method:

{% highlight ruby %}
def new_record_notification(record)
  @record = record
  mail to: "recipient@MYDOMAIN.com", subject: "Success! You did it."
end
{% endhighlight %}

Couple of things to note above:

<ul>
<li>The "to:" is the email recipient. This could be you or a user, depending on the use case.</li>
<li>We're passing the "record" model. This will allow us to use those values in the email content if we wish.</li>
</ul>

<h4>Create a view template (content) for the email</h4>

Open up <code>app/views/model\_mailer/new\_record\_notification.text.erb</code>

In this view we add the body content of our email. Remember we passed the record model so you can use it for some values if you like.

{% highlight html %}
Hi,

A new record has been added: <%= @record.name %>

Thanks
{% endhighlight %}

<h4>Send the email</h4>

Last thing to do is to call the email method from your controller.

Whenever you want to send this email, in this case when a new record is created, call this mailer method:

{% highlight ruby %}
ModelMailer.new_record_notification(@record).deliver
{% endhighlight %}

To clarify, your full create action might look something like this:

{% highlight ruby %}
def create
  @record = Record.new
    
  if @record.save
    ModelMailer.new_record_notification(@record).deliver
    redirect_to @record
  end
end
{% endhighlight %}

<h4>All done</h4>

Now you can use Mailgun's logs to check sent and delivered emails. When you're ready, add your custom domain to Mailgun and configure your action mailer settings in production.rb

You should also read the following:
<ul>
<li><a href="http://railscasts.com/episodes/61-sending-email-revised">Sending Email Railscast</a></li>
<li><a href="http://documentation.mailgun.com/">Mailgun documentation</a></li>
</ul>
