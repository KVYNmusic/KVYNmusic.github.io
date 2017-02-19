---
title: Listen
permalink: /listen/
layout: page
---

<ul class="media-list">
	{% for item in site.data.media %}
		<li>
			<p>{{item.title}}</p>
			<p>{{item.embed}}</p>
		</li>
	{% endfor %}
</ul>
