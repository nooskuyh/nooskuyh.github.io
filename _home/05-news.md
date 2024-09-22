---
title: "News"
---

<h2>Recent News</h2>
<div
    class="w3-container"
    style="
    background: #f0f8ff;
    padding: 25px;
    border-radius: 10px;
    border: 1px solid #5d8aa8;
    "
>
    <div style="text-align: left">
    <u>Happenings of the last few months</u>
    <span style="display: block; margin-bottom: 1em"></span>
    <div class="news">
        <ul style="list-style-position: outside; padding: 20px">
        {% for new in site.data.news %} {% if forloop.index0 < 10 %}
        <li>
            <span> {{new.date}} {{ new.details }} </span>
        </li>
        {% endif %} {% endfor %}
        </ul>
    </div>
    <a href="/news"><div class="right">....more</div></a>
    </div>
</div>
