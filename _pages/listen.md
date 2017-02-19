---
title: Listen
permalink: /listen/
layout: page
---

<ul class="media-list">
	{% for item in site.data.media %}
		<li>
			<p>{{item.title}}</p>
			<p>
				{% if item.type == 'video' %}
					<div class="iframe-container">
						{{item.embed}}
					</div>
				{% else %}
					<div class="iframe-container audio">
						{{item.embed}}
					</div>
				{% endif %}
			</p>
		</li>
	{% endfor %}
</ul>
