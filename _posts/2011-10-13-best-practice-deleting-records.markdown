---
layout: post
status: publish
published: true
title: A better user experience for deleting records
author: Lee
author_login: admin
author_email: lee@leemunroe.com
author_url: http://www.leemunroe.com
wordpress_id: 2563
wordpress_url: http://www.leemunroe.com/?p=2563
date: 2011-10-13 06:01:06.000000000 -07:00
comments:
- id: 39987
  author: Avangelist
  author_email: andy@avangelistdesign.com
  author_url: http://blog.avangelistdesign.com
  date: '2011-10-13 17:26:02 -0700'
  date_gmt: '2011-10-13 16:26:02 -0700'
  content: "I think that dropbox has this concept sewn up. The ability to store deletion
    for a period of days after the event means that the action is recoverable for
    a considerable time after.\r\n\r\nIt's always good to safeguard uncommon events,
    but providing robust options after they've occurred is a true art."
- id: 39989
  author: Des Traynor
  author_email: destraynor@gmail.com
  author_url: http://intercom.io
  date: '2011-10-13 17:33:46 -0700'
  date_gmt: '2011-10-13 16:33:46 -0700'
  content: "Nice Lee. \r\n\r\nTo be honest, I'd come at this from the other angle.
    \r\nUndo is a must have, whereas Confirmation dialogues are optional. \r\n\r\nA
    quick hack, if you're into such things, think of undo as the same concept as confirmation.
    Except the entire interface is one big \"Yes\" button and the little undo button
    is the only \"Cancel\" button\r\n\r\n\r\nAza Raskin wrote a good piece about this,
    way back . http://www.alistapart.com/articles/neveruseawarning"
- id: 40001
  author: Lee
  author_email: lee@leemunroe.com
  author_url: http://www.leemunroe.com
  date: '2011-10-13 19:16:32 -0700'
  date_gmt: '2011-10-13 18:16:32 -0700'
  content: "@Des: Good point. “Never use a warning when you mean undo.”\r\n\r\n@Avangelist:
    Great example, didn't realise you could view deleted files. They actually have
    quite a few steps to delete too"
- id: 42708
  author: Gareth Watson
  author_email: gdpwatson@gmail.com
  author_url: http://twitter.com/gdpwatson
  date: '2011-10-26 15:58:24 -0700'
  date_gmt: '2011-10-26 14:58:24 -0700'
  content: "If I showed you how our banking app allows our customers to validate new
    users you would condemn me to the deepest pit in hell and never speak my name
    again!\r\n\r\nI'll not get into but let's just say that on occasion I'll get a
    call from a customer wondering why the new user that they activated never received
    their PIN in the mail (an automated process upon confirming the new user) only
    to find that the customer accidentally deleted the new user! Whoopsie!"
---
A good user experience doesn't always mean making things easy for users to do.

I was working on a project that involved listing records that users can add, edit and delete.

My first iteration included a delete action for each record that when clicked, the user would be asked to confirm if they wanted to delete the record or not. Clicking confirm, or pressing return, would then delete said record.

This is a typical flow for deleting records. It's often the out-of-the-box technique for some web development frameworks, when you scaffold a Rails project for example.

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/delete12.gif" alt="delete1.gif" border="0" width="508" height="910" /></div>

I presented the prototype to the team and Ken Browning made a good point that <strong>users will rarely need to delete records</strong> on this screen, and using this flow there's a chance they may <strong>accidentally delete records</strong>. It's relatively easy to click on the delete icon (maybe not knowing what it does) and then press return by accident. Then what are they to do?

<h4>Actions that have permanent consequences shouldn't be easy to do</h4>

A better technique is one which a lot of web applications like Gmail use.


<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/delete2.gif" alt="delete2.gif" border="0" width="508" height="1387" /></div>

<ol>
<li>User checks the record (or multiple records) they want to delete</li>
<li>The rows they select are highlighted and the delete button is now active</li>
<li>The user scrolls to the bottom of the table</li>
<li>User clicks "Delete selected records"</li>
<li>User confirms deletion</li>
</ol>

The 2-click process just became a <strong>1/multi-click, scroll, 2-click process</strong>, making deleting a record a lot harder, which is good (in this instance). <strong>We safeguard against users making accidental deletions.</strong>

<h4>Bonus: Allow the user to undo the action</h4>

<div style="text-align:center;"><img src="http://www.leemunroe.com/wp-content/uploads/delete3.gif" alt="delete3.gif" border="0" width="509" height="448" /></div>

Allowing users to undo actions adds a bit of development time, but if it's possible (and especially if you're working with very important data) it's a good idea to let users undo their actions.
