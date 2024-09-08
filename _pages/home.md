---
title: "Home"
layout: homelay
excerpt: "POSTECH SV Lab"
sitemap: false
permalink: /
---

<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
    </ol>

    <!-- Items -->
    <div class="carousel-inner" markdown="0">
        <div class="item active">
            <img src="/images/slider/1.jpg" alt="Slide 1" />
        </div>
        <div class="item">
            <img src="/images/slider/2.jpg" alt="Slide 2" />
        </div>
        <div class="item">
            <img src="/images/slider/3.jpg" alt="Slide 3" />
        </div>
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

We study automated techniques to verify the reliability, security, and safety of complex software, including cyber-physical systems and artificial intelligence systems.

**Logic and Algorithms for Software Verification.** Software is everywhere, but it can be buggy, unpredictable, and vulnerable to attacks. The goal of software verification is to ensure the reliability, security, and safety of software. In this research, we study automated algorithms for software verification, based model checking, computational logic, and satisfiability modulo theories (SMT). 
[[CAV'22](https://link.springer.com/chapter/10.1007/978-3-031-13185-1_26)]
[[ASE'21](https://ieeexplore.ieee.org/document/9678719)]
[[POPL'19](https://dl.acm.org/doi/10.1145/3290364)]


**Modeling and Verification of Autonomous Cyber-Physical Agents.** Autonomous cyber-physical agent systems, such as self-driving cars and drones, must meet strong safety requirements. The goal of this study is to develop techniques to model and verify these systems before actual implementation, which can avoid possible accidents during prototype testing. [[ISOLA'22](https://link.springer.com/chapter/10.1007/978-3-031-19759-8_4)]
[[CAV'21](https://link.springer.com/chapter/10.1007/978-3-030-81685-8_23)]
[[EMSOFT'21](https://dl.acm.org/doi/10.1145/3477036)]


**Automated Analysis of Safety-Critical AI Software.** AI-based technologies such as deep neural networks are being applied to safety-critical applications, e.g., self-driving cars and air traffic control systems. The subject of this research is to develop new techniques to prove the safety requirements of AI-based systems, to prevent accidents or security problems caused by software errors.


**Join Our Lab!**

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

{%- for banner in site.data.banners -%}
<pre class="comm">
  {{ banner.info }}
</pre>
{%- endfor -%}

 
**Cooperation**

<div class="row">
  <div class="col-sm-6 text-center">
  <img src="images/logopic/staar_logo.png" style="height: : 45px" />
  </div>
  <div class="col-sm-6 text-center">
  <img src="images/logopic/samsung_logo.png" style="height: 20px ; margin-top: 13px; margin-bottom: 3px" />
  </div>
</div>
<div class="row">
  <div class="col-sm-6 text-center">
  <img src="images/logopic/iitp_logo.png" style="height: 38px ; margin-top: 3px; margin-bottom: 3px" />
  </div>
</div>

<br>