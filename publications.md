---
title: "POSTECH SV Lab - Publications"
permalink: /publications
---

### Publications

<div class="btn-group filter-button-group" role="group">

    <button type="button" class="btn btn-primary" data-filter="*">All</button>
    {%- for tag in site.data.pubtypes -%}
    <button type="button" class="btn btn-primary" data-filter=".{{ tag.slug }}">{{ tag.name }}</button>
    {%- endfor -%}

</div>

<div style="height: 10px;"></div>

<!--Display Research Publications-->
<div class="pb">
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

<button class="before btn btn-group" style="margin-bottom:20px"> More... </button>

<div class="pb" >
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
	function adjustFooter(x) {
		console.log("hei");
		var footer = $('.footer');
		var contentHeight = $('.pb').height(); // 현재 body의 전체 높이를 계산
		var elementHeight = $('.before-element').height(); // 현재 body의 전체 높이를 계산
		if(x === 0) {
		console.log("aa");
		console.log(contentHeight);


			footer.css('margin-top', elementHeight + 'px'); // footer의 top 값을 조정
		}
		else {
			footer.css('margin-top', '0px'); // footer의 top 값을 조정
		}
	}

	var $grid = $('.pb').isotope({
		// options
		layoutMode: 'vertical',
		transitionDuration: 1
	});
	// filter items on button click
	$('.filter-button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
		if(filterValue === '*'){
			var targetDiv = $('.before-element');
			targetDiv.css('display', 'none');
			adjustFooter(1);
		}
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
				adjustFooter(0);
				var offset = targetDiv.offset().top;

				// Adjust the scroll position slightly above the div
				$('html, body').animate({
					scrollTop: offset - 160 
				}, 500);
			} else {
				adjustFooter(1);
				targetDiv.css('display', 'none');
			}
		});
	});


</script>
