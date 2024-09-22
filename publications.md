---
title: "POSTECH SV Lab - Publications"
permalink: /publications
---

### Publications

<div class="btn-group filter-button-group" role="group">
	<button type="button" class="btn" id="select-all" data-filter="*">All</button>
	{%- for tag in site.data.pubtypes -%}
	<button type="button" class="btn {% if tag.slug == 'conference' %}btn-primary selected{% endif %}" id="select-{{tag.slug}}" data-filter=".{{ tag.slug }}">{{ tag.name }}</button>
	{%- endfor -%}
	<button type="button" class="btn btn-li" data-filter=".before">before 2016</button>
</div>


<div style="height: 10px;"></div>

<!--Display Research Publications-->
<div class="pb">
	{% assign grouped_items = site.data.publist | group_by: 'year' %}

	{% for item in grouped_items %}
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
	{% endfor %}

</div>

<script src="http://code.jquery.com/jquery-3.1.0.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3.0/dist/isotope.pkgd.js"></script>


<script>
	// init Isotope
	var $grid = $('.pb').isotope({
		layoutMode: 'vertical',
		transitionDuration: 1,
		filter: '.conference'
	});
	// filter items on button click
	$('.filter-button-group').on('click', 'button', function () {
		if ($(this).attr('id') !== 'select-all') {
			$('#select-all').removeClass('btn-primary selected');
		}
        if ($(this).attr('id') === 'select-all') {
            // Remove 'btn-primary' and 'selected' classes from all buttons
            $('.filter-button-group button').removeClass('btn-primary selected');
		}
		$(this).toggleClass('btn-primary selected');
		var filters = [];
		$('.filter-button-group button.selected').each(function() {
			filters.push($(this).attr('data-filter'));
		});
		var filterValue = filters.length ? filters.join(', ') : '*';
		$grid.isotope({ filter: filterValue });
		if(filterValue === '*'){
			var targetDiv = $('.before-element');
			targetDiv.css('display', 'none');
		}

	});

	$(document).ready(function() {
		var $grid = $('.pb').isotope({
			// options
			itemSelector: '.element-item',
			layoutMode: 'vertical',
			transitionDuration: 1
		});
	
		// filter items on button click
		$('.filter-button-group').on('click', 'button', function () {
			var $this = $(this);
			var filterValue = $this.attr('data-filter');
	
			// Toggle 'selected' and 'btn-primary' classes on the clicked button
			$this.toggleClass('selected btn-primary');
	
			// Collect all selected filters
			var filters = [];
			$('.filter-button-group button.selected').each(function() {
				filters.push($(this).attr('data-filter'));
			});
	
			// If no filters are selected, set filterValue to an empty string
			filterValue = filters.length ? filters.join(', ') : '*';
	
			// Apply the filter
			$grid.isotope({ filter: filterValue });
	
			console.log("Filter applied: " + filterValue);
		});
	});
</script>