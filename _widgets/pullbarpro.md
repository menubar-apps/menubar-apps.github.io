---
layout: page
description: Your GitHub review queue and pull request status in the menu bar
badge: free + iap
price: 0
appname: PullBar Pro
pagelink: pullbar-pro
aliases: pull-bar-pro pullbarpro
iconfoldername: pullbar-pro
---
<p align="center">
  <a class="appstore-badge" href="https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&amp;itsct=apps_box_badge&amp;itscg=30200">
    <img class="appstore-badge__icon" src="{{ site.url | append: site.baseurl}}/assets/img/badges/apple.svg">
    <span class="appstore-badge__text">Download on the</span>
    <span class="appstore-badge__storename">Mac App Store</span>
  </a>
</p>

<p align="center">Free download · Pro Unlock is a $1.99 one-time purchase, no subscription · macOS 14 or later</p>

<img class="rounded-corners" src="{{ site.url | append: site.baseurl}}/assets/img/screenshots/pull-bar-pro/pull-bar-pro-8.png">

PullBar Pro keeps your GitHub pull requests one click away in the macOS menu bar. See which PRs are waiting for your review, and follow the reviews and CI status of the PRs you created, are assigned to, or were mentioned in.

### Free vs Pro

| | Free | Pro Unlock |
|---|:---:|:---:|
| Review Requested tab | ✓ | ✓ |
| Assigned, Created, Mentioned and Reviewed tabs | – | ✓ |
| Sorting and filters on every tab | ✓ | ✓ |
| Price | free | $1.99, one-time |

**Coming from PullBar?** PullBar Pro adds Mentioned and Reviewed tabs, editable tab searches, per-tab sorting and filters, and Sign in with GitHub.

### Sign in with GitHub

Sign in with your GitHub account in a few clicks. No username or token setup needed. You can still use a personal access token, for example with GitHub Enterprise Server.

### Pull Request Details

For each PR, view the title, repository, PR number, author and optionally the author's avatar and labels. Also shown are the number of reviews, additions and deletions, and the CI status. Right-click a PR to copy its title, link or branch name.

### Tabs

Enable up to five tabs: Review Requested, Assigned, Created, Mentioned and Reviewed. Reorder them and edit the search query behind each tab. The blue dot on a tab shows that some of its PRs have unseen changes.

<img class="rounded-corners" src="{{ site.url | append: site.baseurl}}/assets/img/screenshots/pull-bar-pro/pull-bar-pro-9.png">

### Sorting and Filters

Sort each tab by recently updated, recently created, title or repository. Filter by repository, or show only PRs that are unread, have changes requested, failing checks, conflicts, or are drafts.

### Keyboard Support

Assign a keyboard shortcut to open the app. While the app is open, switch between tabs with <kbd>⌘cmd</kbd> + <kbd>1</kbd> through <kbd>⌘cmd</kbd> + <kbd>5</kbd>, depending on the number of enabled tabs.

<img class="rounded-corners" src="{{ site.url | append: site.baseurl}}/assets/img/screenshots/pull-bar-pro/pull-bar-pro-7.png">

### CI Status

GitHub reports CI results as checks or as commit statuses. PullBar Pro shows both, with links to the corresponding builds.

<img class="rounded-corners" src="{{ site.url | append: site.baseurl}}/assets/img/screenshots/pull-bar-pro/pull-bar-pro-3.png">

<img class="rounded-corners" src="{{ site.url | append: site.baseurl}}/assets/img/screenshots/pull-bar-pro/pull-bar-pro-4.png">

### Reviews

For each pull request, see the number of approvals, comments and change requests, with the reviewer's name and a direct link to the review.

<img class="rounded-corners" src="{{ site.url | append: site.baseurl}}/assets/img/screenshots/pull-bar-pro/pull-bar-pro-6.png">

# Features

- Pull request details: title, repository, number, author, labels, reviews, additions/deletions, CI status
- Up to five reorderable tabs with editable searches: Review Requested, Assigned, Created, Mentioned, Reviewed
- Per-tab sorting and filters
- Sign in with GitHub, or use a personal access token
- GitHub.com, GitHub Enterprise Cloud and GitHub Enterprise Server
- Keyboard shortcuts for opening the app and switching tabs

# FAQ

**Which permissions does PullBar Pro need?**

The `repo` scope. It is the only GitHub scope that gives access to private repositories, and it also includes write access. PullBar Pro only reads pull request data.

**Why don't pull requests from my organization show up?**

Some organizations restrict third-party apps. An organization owner has to approve PullBar Pro, or you can sign in with a personal access token instead.

**Does it work with GitHub Enterprise?**

GitHub Enterprise Cloud works with Sign in with GitHub. For GitHub Enterprise Server, use a personal access token and enter your server's API address.

**Where is my token stored?**

In the macOS Keychain. PullBar Pro doesn't collect any data. See the [privacy policy]({{ site.url | append: site.baseurl}}/privacy/pull-bar-pro.html).

<p align="center">
  <a href="https://devhunt.org/tool/pullbar-pro">
    <img src="{{ site.url | append: site.baseurl}}/assets/img/badges/tab_solid.svg" style="width: 220px;">
  </a>
</p>
