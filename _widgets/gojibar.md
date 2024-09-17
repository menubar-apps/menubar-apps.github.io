---
layout: page
badge: $0.99
appname: GojiBar
iconname: gojibar-128.png
---
<div class="row first-row" markdown="0">
{% include icon-name.html app-name="GojiBar" icon-path="gojibar" %}

<p align="center">
  <a class="appstore-badge" href="https://apps.apple.com/us/app/gojibar/id6471348025?mt=12&amp;itsct=apps_box_badge&amp;itscg=30200">
    <img class="appstore-badge__icon" src="{{ site.url | append: site.baseurl}}/assets/img/badges/apple.svg">
    <span class="appstore-badge__text">Download on the</span>
    <span class="appstore-badge__storename">Mac App Store</span>
  </a>
<a class="appstore-badge" href="https://github.com/menubar-apps/GojiBar/releases/download/trial.1.1/GojiBar.trial.1.1.dmg">
    <img class="appstore-badge__icon" src="{{ site.url | append: site.baseurl}}/assets/img/badges/github.svg">
    <span class="appstore-badge__text">Download</span>
    <span class="appstore-badge__storename">14-days trial</span>
  </a>
</p>
</div>

{% include first-row-divider.html from="#00202e" to="#434C5E" %}

<div class="row second-row">
  <div class="col m8 offset-m2">
  <img class="rounded-corners" src="{{ site.url | append: site.baseurl}}/assets/img/screenshots/gojibar/gojibar-1.png">
  </div>


<div class="col m8 offset-m2" markdown="0" >
<p>Access you Jira tickets with a single click from you menu bar!</p>


<p>This menu bar application streamlines your Jira interactions, making it easier to manage your tasks. You can create customized views to swiftly access issues from various projects, statuses, or any other category you prefer.</p>


<p>For instance, you can set up a tab for issues assigned to you, another for the issues you've created, enabling you to monitor their progress. Additionally, you can create a dedicated tab for managing project backlogs, whether it's for a single project or multiple projects.create on tab for issues assigned to you, another one for created issues, to follow their progress. And another one for a backlog of a project (or even multiple projects).</p>
</div>
<div class="col m8 offset-m2">
# Step-by-Step Guide to Create a JQL Query

1. ### Log In and Access the Search Interface:

    Sign into your JIRA Cloud account.
    Click on "Issues and filters" in the left sidebar or select "Search for issues" in the dropdown if you are in a different section.

2. ### Switch to JQL Search:

    In the search interface, you might see the basic search options by default. Look for a switch or link to Advanced Search and click it. This will open the JQL search interface.

3. ### Begin Crafting Your Query:

    You’ll see a text field where you can enter your JQL query.

4. ### Understand Basic Syntax:

    JQL queries are structured as `field operator value`. For example, `status = "Open"`.

    - `field` refers to the issue attribute (like status, summary, assignee).
    - `operator` is how you want to compare the field (e.g., =, !=, >, <).
    - `value` is what you are comparing the field to (like a specific status name, a user, etc.).

5. ### Use Logical Operators for Complex Queries:

    Combine different criteria using operators like AND, OR, and NOT. E.g., `project = "MYPROJECT" AND status = "Open"`.

6. ### Leverage Functions and Keywords:

    JIRA Cloud also supports various functions like `currentUser()` or dates like `startOfDay()`.

7. ### Execute the Query:

    After typing your query, run it by either pressing Enter or clicking the Search button.

8. ### Refine Your Query as Needed:

    Based on the results, you might want to refine or adjust your query.

9. ### Use created query in GojiBar

    Copy the query and paste it under Preferences -> Tabs in GojiBar.

# Example JQL Queries

Find issues assigned to you in a specific project:
```
project = "MYPROJECT" AND assignee = currentUser()
```

Search for recently updated high-priority issues:

```
priority = High AND updated >= -1w
```

Issues reported by you that are still open:
```
reporter = currentUser() AND status != Closed
```

</div>
</div>