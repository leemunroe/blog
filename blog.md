---
layout: default
title: Blog
description: Product and UX Designer in San Francisco, Lee Munroe
---

Posts...

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

![My helpful screenshot]({{ site.baseurl }}/img/tmp.png)