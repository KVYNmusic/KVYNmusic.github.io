---
title: Listen
permalink: /listen/
layout: page
---

<div id="media">
	<div class="form-group text-center">
		<!-- <input class="search" placeholder="Search" /> --> <!-- no need for a search bar, right? -->
		<div class="songs-buttons">
			<button class="filter" data-filter="all">
				All
			</button>
		  <button class="filter" data-filter="audio">
		  	Audio
		  </button>
		  <button class="filter" data-filter="video">
		  	Video
		  </button>
	  </div>
  </div>
	<ul class="list media-list">
		{% for item in site.data.media %}
			<li>
				<p class="title" id="{{item.id}}">{{item.title}}</p>
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
				<p class="type camo">{{item.type}}</p>
			</li>
		{% endfor %}
	</ul>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="/assets/js/listen.js"></script>
