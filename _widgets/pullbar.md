---
layout: page
badge: free
appname: PullBar
iconname: pullbar.png
---

{% include icon-name.html app-name="PullBar" icon-path="pullbar" %}

<!-- <p align="center">
  <img class="app-icon" src="./assets/img/pullbar-128.png">
  <br>
  <span style="font-weight: bold;">PullBar</span>
</p> -->

<p align="center">
  <a href="https://github.com/menubar-apps/PullBar"><img src="https://img.shields.io/badge/-PullBar-black?logo=github&style=flat"></a>
  <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/menubar-apps/pullbar/total">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/menubar-apps/pullbar">
  <img alt="GitHub release (with filter)" src="https://img.shields.io/github/v/release/menubar-apps/pullbar">
</p>
  
<p align="center">
    <a class="appstore-badge" href="https://apps.apple.com/ca/app/pullbar/id1601913905?mt=12&amp;itsct=apps_box_badge&amp;itscg=30200">
    <img class="appstore-badge__icon" src="{{ site.url | append: site.baseurl}}/assets/img/badges/apple.svg">
    <span class="appstore-badge__text">Download on the</span>
    <span class="appstore-badge__storename">Mac App Store</span>
  </a>

   <a class="appstore-badge" href="https://github.com/menubar-apps/PullBar/releases">
    <img class="appstore-badge__icon" src="{{ site.url | append: site.baseurl}}/assets/img/badges/github.svg">
    <span class="appstore-badge__text">Download on the</span>
    <span class="appstore-badge__storename">GitHub Releases</span>
  </a>

  <a class="appstore-badge" href="#" style="background-color: #2e2a24">
    <img class="appstore-badge__icon" src="{{ site.url | append: site.baseurl}}/assets/img/badges/brew.svg">
    <span class="appstore-badge__text">tap: menubar-apps/menubar-apps</span>
    <span class="appstore-badge__storename">pullbar</span>
  </a>
</p>

Native MacOS menubar application to show GitHub Pull Requests in your menu bar! Keep track of created, assigned and review requested Pull Requests:

<p align="center">
  <img width="708" alt="Screen Shot 2022-07-17 at 9 06 36 PM" src="https://user-images.githubusercontent.com/9363150/179432557-f3db115e-fe9d-4f91-ac7c-0d85ce3f9e43.png" style="border-radius: 10px">
</p>

# Features

 - shows assigned, created and review requested pull requests;
 - for each pull request shows title, number, project, author, number of approvals, number of added/deleted lines and how long ago this PR was created:
<p align="center">
  <img width="485" alt="PR-screenshot" src="https://user-images.githubusercontent.com/9363150/184937172-595ef896-080b-43fe-bcea-ec70deb26df4.png" style="border-radius: 10px">
</p>
 - show check suites or check runs information with links to the correstponding builds.

# Installation

There are 3 ways of installing the application: 

 - [Mac App Store](https://apps.apple.com/ca/app/pullbar/id1601913905)
 - Homebrew:
    ```shell
    brew tap menubar-apps/menubar-apps
    brew install pullbar
    ```
 - [Download](https://github.com/menubar-apps/PullBar/releases) from github releases

