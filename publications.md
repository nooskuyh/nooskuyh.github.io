---
title: "POSTECH SV Lab - Publications"
permalink: /publications
---

### Publications

<div class="btn-group filter-button-group" role="group">

    {%- for tag in site.data.pubtypes -%}
    <button type="button" class="btn btn-primary" data-filter=".{{ tag.slug }}">{{ tag.name }}</button>
    {%- endfor -%}
    <button type="button" class="btn btn-primary" data-filter="*">All</button>

</div>

<div style="height: 10px;"></div>

<!--Display Research Publications-->
<div class="grid">
	{% assign grouped_items = site.data.publist | group_by: 'year' %}

    {% for item in grouped_items %}
    	{% if item.name > '2014' %}
    		{% assign sorted_pubs = item.items | sort: 'month' | reverse %}
    		{% capture alltags %}
    			{% for tag in site.data.pubtypes %}
    				{{ tag.slug }}
    			{% endfor %}

    		{% endcapture %}

    		{% assign matchingpubs = site.data.publist | where: "year", item.name %}
    		{% capture matchingtags %}
    			{% for pub in matchingpubs %}
    				{{ pub.tag }}
    			{% endfor %}
    		{% endcapture %}
    		{% assign matchingtags = matchingtags | split: ' ' | uniq | join: ' ' %}

    		<h4 class="element-item {{ matchingtags }}">{{ item.name }}</h4>
    		{% for publi in sorted_pubs %}
    			<div class="element-item {{ publi.tag }}">
    				<a href="{{ publi.link.url }}">{{ publi.title }}</a><br />
    				<em>{{ publi.authors }} </em><br />

    				{{ publi.venue }}, {{ publi.year }}
    				<br><br>
    			</div>
    		{% endfor %}
    	{% endif %}
    {% endfor %}

</div>

<button class="before btn btn-group" style="margin-bottom:20px"> before 2015 </button>

<div class="grid" >
<div class="before-element" style="display: none;">
    {% for item in grouped_items %}
    	{% if item.name <= '2014' %}
    		{% assign sorted_pubs = item.items | sort: 'month' | reverse %}
    		{% capture alltags %}
    			{% for tag in site.data.pubtypes %}
    				{{ tag.slug }}
    			{% endfor %}

    		{% endcapture %}

    		{% assign matchingpubs = site.data.publist | where: "year", item.name %}
    		{% capture matchingtags %}
    			{% for pub in matchingpubs %}
    				{{ pub.tag }}
    			{% endfor %}
    		{% endcapture %}
    		{% assign matchingtags = matchingtags | split: ' ' | uniq | join: ' ' %}

    		<h4 class="element-item {{ matchingtags }}">{{ item.name }}</h4>
    		{% for publi in sorted_pubs %}
    			<div class="element-item {{ publi.tag }}">
    				<a href="{{ publi.link.url }}">{{ publi.title }}</a><br />
    				<em>{{ publi.authors }} </em><br />

    				{{ publi.venue }}, {{ publi.year }}
    				<br><br>
    			</div>
    		{% endfor %}
    	{% endif %}
    {% endfor %}

</div>

<script src="http://code.jquery.com/jquery-3.1.0.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3.0/dist/isotope.pkgd.js"></script>
<script>
	// init Isotope
	var $grid = $('.grid').isotope({
		// options
		layoutMode: 'vertical',
		transitionDuration: 1
	});
	// filter items on button click
	$('.filter-button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	$('.btn-group button.btn').on('click', function () {
		$('.btn-group button.btn').removeClass('focus');
		$(this).addClass('focus');
	});
	$(document).ready(function(){
		$('.before').click(function(){
			var targetDiv = $('.before-element');
			
			if (targetDiv.css('display') === 'none') {
				targetDiv.css('display', ''); 
				var offset = targetDiv.offset().top;

				// Adjust the scroll position slightly above the div
				$('html, body').animate({
					scrollTop: offset - 160 
				}, 500);
			} else {
				targetDiv.css('display', 'none');
			}
		});
	});
</script>

</div>
