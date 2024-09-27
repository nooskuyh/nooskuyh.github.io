---
title: "POSTECH SV Lab - Members"
permalink: /members
layout: members
---

### Faculty

<div style="margin-bottom: 20px;"></div>

{% assign number_printed = 0 %}
{% for member in site.data.faculty %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-6 clearfix member-profile">
  <img src="/images/teampic/{{ member.photo }}" class="shadow p-3 mb-5 bg-white rounded" width="40%" style="float: left" />
  <h4 class="member-name" >{{ member.name }}</h4>
  <div class="member-info"> {{ member.info }} <br></div>
  <div class="member-link"><a href="mailto:{{ member.email }}">{{member.email}}</a></div>
  <div style="margin-bottom:7px;"></div>
  
  <div class="member-link"><a href="mailto:{{ member.email }}">Homepage</a></div>
  <div class="member-link"><a href="mailto:{{ member.email }}">Linkedin</a></div>
  
  <ul style="overflow: hidden">

{% if member.number_educ == 1 %}

  <li> {{ member.education1 }} </li>
  {% endif %}

{% if member.number_educ == 2 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

{% if member.number_educ == 3 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

{% if member.number_educ == 4 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

{% if member.number_educ == 5 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}

</div>
{% endif %}
<hr />

### Students

<div style="margin-bottom: 20px;"></div>

{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-6 clearfix member-profile">
  <img src="/images/teampic/{{ member.photo }}" class="shadow p-3 mb-5 bg-white rounded" width="40%" style="float: left" />
  <h4 class="member-name" >{{ member.name }}</h4>
  <div class="member-info"> {{ member.info }} <br></div>
  <div class="member-link"><a href="mailto:{{ member.email }}">{{member.email}}</a></div>
  <div style="margin-bottom:7px;"></div>
  <div class="member-link"><a href="mailto:{{ member.email }}">Homepage</a></div>
  <div class="member-link"><a href="mailto:{{ member.email }}">Linkedin</a></div>

  <ul style="overflow: hidden">

{% if member.number_educ == 1 %}

  <li> {{ member.education1 }} </li>
  {% endif %}

{% if member.number_educ == 2 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

{% if member.number_educ == 3 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

{% if member.number_educ == 4 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

{% if member.number_educ == 5 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}

</div>
{% endif %}
<hr />

<!-- ### Undergraduates

<div style="margin-bottom: 20px;"></div>

{% assign number_printed = 0 %}
{% for member in site.data.undergraduates %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <h4>{{ member.name }}</h4>
  email: <{{ member.email }}>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}

</div>
{% endif %}
----->



<!-- ### Former Members


<div style="margin-bottom: 20px;"></div>


<!-- <div class="col-sm-4 clearfix">
<h4>Visitors</h4>
{% for member in site.data.alumni_visitors %}
{{ member.name }}
{% endfor %}
</div> -->

<!-- <div class="col-sm-4 clearfix">
<h4>Master students</h4>
{% for member in site.data.alumni_msc %}
{{ member.name }}
{% endfor %}
</div> -->

<ul>
  {%- for member in site.data.alumni_members -%}
  <li>
    <b>{{ member.name }}</b> ({{ member.info }}) : {{ member.affiliation }}<br>
  </li>
  {%- endfor -%}

</ul>

<br/> -->
