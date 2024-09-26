---
---   

<h3>Research Projects</h3>

{% for proj in site.researchtopics %}


<div class="row" style="margin-left:0; margin-right:0">
    <h4>{{ proj.title }}</h4> 
    
<div class="col-md-4">
<img src="/images/respic/{{ proj.img-url }}" alt="" style="width : 100%">
<button type="button" class="btn btn-outlin-primary" onclick="location.href='{{ proj.url }}'">Project Page</button>
</div>
<div class="col-md-8">
    {{ proj.intro }}
</div>
</div>
<br>
{% endfor %}
<!-- <h4>Last updated: {{ proj.date | date: "%F" }}</h4> -->