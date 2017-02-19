---
title: Live
permalink: /live/
layout: page
---

<!-- fb video player -->
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '313788505690814',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

<div class="text-center">

	{% if site.live %}

	<p>Check out KVYN playing live!</p>

	<div class="fb-video" data-href="{{site.live_url}}" data-allowfullscreen="true" data-width="500"></div>

	<p style="margin-top:30px;">To request a song, please use the form below. Click <a href="/songs">here</a> for a list of songs that KVYN knows.</p>

  <div class="iframe-container">
	 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSehe_aL46yfkSPAJW3S3JrVrqkzerl1xRYwtIP68dpYE3AXRw/viewform?embedded=true" width="500" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </div>

{% else %}

	<p>KVYN is not currently live, but here is his latest live stream:</p>

	{% assign latest = site.data.media | where: "type", "facebook" | last %}
	{{ latest.embed }}

{% endif %}

</div>


