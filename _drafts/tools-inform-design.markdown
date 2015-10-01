---
layout: post
status: publish
published: true
title: '5 Tools That Help Inform Design Decisions'
---
I’ve written before about the [tools I use for design](http://www.leemunroe.com/macbook-tools-for-web-design/). These implementation tools are indispensable and part of my daily workflow.

Other tools that I find indispensable are third party services that I use to gather information and help inform design decisions. **I’m always surprised when I talk to other designers who don’t use these types of tools for user research and insights.** Without these tools I’d be blind and making decisions based on intuition and best practices.

> Designing with best practices and intuition can only get you so far.

Both quantitative and qualitative research help us validate decisions, discover new opportunities, measure and improve experiences. We don't want to make decisions based purely on data. But if there is data available or an existing user base, **we should be doing everything we can to collect and understand it**, before designing our solutions.

The following are tools I’m using in some or most of my web projects to gather data and information that help inform design decisions for each project. I highly recommend trying them out.

## 1. Intercom

[Intercom](http://intercom.io) has a suite of products that enable you to communicate with customers.

### How I use it

Primarily for user research. Before working on a new feature I’ll use it to **segment existing users** based on what they have done e.g. users that have signed up more than 90 days ago and have used feature X.

Then I’ll **email or communicate with them** via the app, ask them questions, set up a time to chat or point them towards a survey. Later in the process I can **circle back** with these people and show them **work in progress** or set up usability tests.

### Why it’s great

Before having something like Intercom I **previously would have had to bug an engineer** to do some sort of SQL query and pull a list of customers that I would then manually contact. Nobody wants to waste time doing that. With Intercom I don’t have to bug anyone and it saves me time.

<div class="media">
  <img src="{{site.baseurl}}/img/intercom.jpg" alt="Intercom in Mailgun">
  <p class="media-caption">Intercom integrated with Mailgun's Control Panel</p>
</div>

## 2. Wufoo

[Wufoo](http://www.wufoo.com/) is a tool for creating forms and reports.

### How I use it

If I want some **quantitative data** e.g. getting data or feedback on a feature idea that hasn't been built yet, I’ll create and send a survey out to a bunch of people.

### Why it’s great

The WYSIWYG form builder is really **easy to use** as is their report builder. I also like their options for [hidden fields](http://www.wufoo.com/guides/using-hidden-fields-forms/) e.g. I can track exactly who completed the form if I know their email address beforehand.

<div class="media">
  <img src="{{site.baseurl}}/img/wufoo.jpg" alt="Wufoo survey">
  <p class="media-caption">Example report from Wufoo</p>
</div>

## 3. Mixpanel

[Mixpanel](https://mixpanel.com/) tracks events and actions that users are taking in your app.

### How I use it

To track key actions that users are doing e.g. clicked create button, created a record, deleted a record. Enables me to look back at the **history of a particular user** and see what exactly they did or create **funnels and cohort analysis** based on collections of data.

### Why it’s great

It tells me what users are doing and I can use these metrics to **measure how new features and changes affect behaviour** over time.

<div class="media">
  <img src="{{site.baseurl}}/img/mixpanel.jpg" alt="Mixpanel funnel">
  <p class="media-caption">Funnel visualization for a series of events</p>

  <img src="{{site.baseurl}}/img/mixpanel2.jpg" alt="Mixpanel cohort">
  <p class="media-caption">Cohort analysis for a particular event</p>
</div>

## 4. Google Analytics

[GA](https://www.google.com/analytics/) is a powerful tool. It tracks a lot of stuff, primarily page views and visits, but also does a whole lot more.

### How I use it

Include GA script on every page so I have a general sense of how many people use the app.

Two key things I look at in more detail are **goals and funnels / paths**. Set up goals and measure how conversions perform over time. Funnels and paths help me visualize how people are using the product and their path to completing these goals.

### Why it’s great

It collects a lot of data **out of the box**. Data you don’t even think you need, which comes in useful at a later date. And it's free.

<div class="media">
  <img src="{{site.baseurl}}/img/ga.jpg" alt="Google Analytics">
  <p class="media-caption">Behaviour flow diagram</p>
</div>

## 5. FullStory

[FullStory](https://www.fullstory.com/) records and plays back videos of user sessions.

### How I use it

Unobtrusively **observe how users are using an app** e.g. watching new users sign up and onboard, watching what users were doing right before they contact support.

### Why it’s great

I’ve used a few tools like this in past. The problem always was looking back through the videos takes so much time. I like FullStory's filtering abilities. I’m able to **filter out particular user segments based on their attributes** or pages they’ve visited.

<div class="media">
  <img src="{{site.baseurl}}/img/fullstory.jpg" alt="Full Story">
  <p class="media-caption">FullStory user sessions</p>
</div>

## Bonus: Segment

You can **manage all these third party services through Segment**. [Segment](https://segment.com) is a hub, or container, for collecting data that you can then off to any other third party service.

### How I use it

When starting a new web project I’ll include Segment’s script and set up any **event/user tracking with their API**. Then I can **turn on other third party tools** through their control panel.

### Why it’s great

**Previously** I would have had to touch code and deploy a new version for every single new script or service I wanted to implement. Or **bug a developer** if I didn’t have the capacity to do it. Even if I just wanted to try something out.

Now I can do it myself through a simple GUI e.g. when I started using FullStory on a project, I just wanted to try it and see if it was any good. I was able to try it out by **turning it on in Segment for a couple of hours and then turned it off again**. I got the benefit of everything being tracked out of the box. **No developer involvement.** No asking permission to use it. No touching code. No deploying. No need to remove a script after the trial.

<div class="media">
  <img src="{{site.baseurl}}/img/segment.jpg" alt="Segment">
  <p class="media-caption">Segment integration dashboard</p>
</div>

## Conclusion

There are a lot of great tools out there that enable us to **collect data, talk to users and help inform decisions before we put pen to paper or open up a new Sketch canvas**.

That being said, remember to use these to help inform, not drive, decisions.

> Data and A/B test are valuable allies, and they help us understand and grow and optimize, but they’re not a replacement for clear-headed, strong decision-making. Don’t become dependent on their allure. Sometimes, a little instinct goes a long way.
> &mdash; [Julie Zhuo](https://medium.com/the-year-of-the-looking-glass/the-agony-and-ecstasy-of-building-with-data-56215764d67c)

**What tools are you using to help inform design decisions?**
