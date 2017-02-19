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
				<div class="iframe-container">
					{{item.embed}}
				</div>
			</p>
		</li>
	{% endfor %}
</ul>
