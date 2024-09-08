---
title: "POSTECH SV Lab - Research"
permalink: /research
---

### Research

{% for proj in site.research %}

<h4>Last updated: {{ proj.date | date: "%F" }}</h4>
<div class="row">
<div class="col-md-4">
<img src="/images/respic/{{ proj.img-url }}" alt="" style="width : 100%">
</div>
<div class="col-md-8">
<h4>{{ proj.title }}</h4>
<button type="button" class="btn btn-outlin-primary" onclick="location.href='{{ proj.url }}'">Project Page</button>
</div>
</div>
{% endfor %}
