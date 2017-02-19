---
title: Songs
permalink: /songs/
layout: page
---

<div id="songs">
	<p class="text-center">Total amount of songs: {{site.data.songs_array | size}}</p>
	<div class="form-group text-center">
		<input class="search" placeholder="Search" />
		<div class="songs-buttons">
			<button class="sort" data-sort="artist">
		    Sort by artist
		  </button>
		  <button class="sort" data-sort="title">
		    Sort by title
		  </button>
	  </div>
	  <div class="songs-buttons categories">
	  	<button class="filter" data-filter="all">
	  		All
	  	</button>
	  	<button class="filter" data-filter="party">
	  		Party/Bar
	  	</button>
	  	<button class="filter" data-filter="wedding">
	  		Wedding
	  	</button>
	  	<button class="filter" data-filter="holiday">
	  		Holiday
	  	</button>
	  	<button class="filter" data-filter="other">
	  		Other
	  	</button>
	  </div>
  </div>
	<ul class="list songs-list">
		{% for song in site.data.songs_array %}
			<li>
				{% if song.id %}
					<a href="/listen#{{song.id}}">
						<span class="artist">{{song.artist}}</span> - <span class="title">{{song.title}}</span>
					</a>
				{% else %}
					<span class="artist">{{song.artist}}</span> - <span class="title">{{song.title}}</span>
				{% endif %}
					<span class="tags camo">{{song.tags}}</span>
			</li>
		{% endfor %}
	</ul>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script src="/assets/js/songs.js"></script>