$.ajax({
  url: "http://api.tumblr.com/v2/blog/dana-lee-graphics.tumblr.com/posts/photo?api_key=GCXjNaLltIgQ0LQC9K8eS4xg1xwHEwmEcaPK9OYnVcnDLbqyaN&limit=7",
    dataType: 'jsonp',
    success: function(posts){
      var postings = posts.response.posts;
      console.log(postings);
      var imgPath = '';

      for (var i in postings) {
        var p = postings[i];
        imgPath += '<a href=' + p.post_url + '><img src=' + p.photos[0].original_size.url + '></a>';
      }

      $('.portfolioImg').append(imgPath);

    }
});


$(document).ready(function() {
	$('body').on('click', '#about', function() {

	$('html, body').animate({
	      scrollTop: $(".hello-world").offset().top
	  }, 500);
	  return false;
	});
	
	$('body').on('click', '#links', function() {
	  $('html, body').animate({
	      scrollTop: $("#links-header").offset().top
	  }, 500);
	  return false;
	});	

	$('body').on('click', '#projects', function() {
	  $('html, body').animate({
	      scrollTop: $("#projects-header").offset().top
	  }, 500);
	  return false;
	});	

	$('body').on('click', '#contact', function() {
	  $('html, body').animate({
	      scrollTop: $("#contact-header").offset().top
	  }, 500);
	  return false;
	});	

	$('body').on('click', '#portfolio', function() {
	  $('html, body').animate({
	      scrollTop: $("#portfolio-header").offset().top
	  }, 500);
	  return false;
	});	

	$('body').on('mouseenter mouseleave', 'img.main-photo-1', function() {
	  $('img.main-photo-1').attr({
	    src: $(this).attr('data-photoone-src')
	    , 'data-photoone-src': $(this).attr('src')
	  });
	});	

	$('body').on('mouseenter mouseleave', 'img.main-photo-2', function() {
	  $('img.main-photo-2').attr({
	    src: $(this).attr('data-phototwo-src')
	    , 'data-phototwo-src': $(this).attr('src')
	  });
	});
});