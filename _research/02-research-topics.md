---
---   

<h3>Research Projects</h3>

{% for proj in site.researchtopics %}


<div class="row" style="margin-left:0; margin-right:0">
    <a href="{{ proj.url }}"><h4>{{ proj.title }}</h4> </a>
    
<div class="col-md-4">
<a href="{{ proj.url }}">
<img src="/images/respic/{{ proj.img-url }}" alt="" style="width : 100%"></a>
</div>
<div class="col-md-8">
    {{ proj.intro }}
</div>
</div>
<br>
{% endfor %}
<!-- <h4>Last updated: {{ proj.date | date: "%F" }}</h4> -->