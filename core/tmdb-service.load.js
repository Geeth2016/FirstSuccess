montageDefine("49c9e31","core/tmdb-service",{dependencies:["montage/core/core","montage/core/range-controller","montage/core/promise","./category-controller","./jsonp-transport"],factory:function(e,t){var n=e("montage/core/core").Montage,o=e("montage/core/range-controller").RangeController,r=e("montage/core/promise").Promise,a=e("./category-controller").CategoryController,l=e("./jsonp-transport").shared,i="dbf71473cf25bbd06939baef47b626eb",c="https://api.themoviedb.org/3/movie/now_playing?api_key="+i,s="https://api.themoviedb.org/3/movie/upcoming?api_key="+i,u="https://api.themoviedb.org/3/movie/top_rated?api_key="+i,d="https://api.themoviedb.org/3/movie/popular?api_key="+i,p="https://api.themoviedb.org/3/movie/";t.TmdbService=n.specialize({constructor:{value:function(){this.categories=(new o).initWithContent([]),this.categories.avoidsEmptySelection=!0}},load:{value:function(){var e=this;e.latestBoxOffice=new a("Box Office","box_office"),e.upcoming=new a("Upcoming","upcoming"),e.topDvdRentals=new a("Top Rated","rentals"),e.inTheaters=new a("Popular","in_theaters"),e.latestBoxOffice.contentController.addRangeAtPathChangeListener("selection",this,"handleMovieSelectionChange"),e.upcoming.contentController.addRangeAtPathChangeListener("selection",this,"handleMovieSelectionChange"),e.topDvdRentals.contentController.addRangeAtPathChangeListener("selection",this,"handleMovieSelectionChange"),e.inTheaters.contentController.addRangeAtPathChangeListener("selection",this,"handleMovieSelectionChange");var t=this.loadLatestBoxOfficeMovies().then(function(t){return e.latestBoxOffice.contentController.content=t,e.categories.content.push(e.latestBoxOffice,e.inTheaters,e.upcoming,e.topDvdRentals),e.categories.select(e.latestBoxOffice),t}).then(function(t){t&&t.length>0&&e.preloadMovie(t[0])});return t.then(function(){return[e.loadUpcomingMovies(),e.loadTopRated(),e.loadPopular()]}).spread(function(t,n,o){return e.upcoming.contentController.content=t,e.topDvdRentals.contentController.content=n,e.inTheaters.contentController.content=o,[t,n,o]}).spread(function(t,n,o){t&&t.length>0&&e.preloadMovie(t[0]),n&&n.length>0&&e.preloadMovie(n[0]),o&&o.length>0&&e.preloadMovie(o[0])}).done(),t}},categories:{value:null},latestBoxOffice:{value:null},upcoming:{value:null},topDvdRentals:{value:null},inTheaters:{value:null},loadLatestBoxOfficeMovies:{value:function(){return l.makeRequest(c,"tmdb").then(function(e){return e.results})}},loadUpcomingMovies:{value:function(){return l.makeRequest(s,"tmdb").then(function(e){return e.results})}},loadTopRated:{value:function(){return l.makeRequest(u,"tmdb").then(function(e){return e.results})}},loadPopular:{value:function(){return l.makeRequest(d,"tmdb").then(function(e){return e.results})}},loadMovie:{value:function(e){return l.makeRequest(p+e.id+"?api_key="+i+"&append_to_response=trailers","tmdb").then(function(e){return e})}},loadReleases:{value:function(e){return l.makeRequest(p+e.id+"/releases?api_key="+i,"tmdb").then(function(e){return e})}},preloadMovie:{value:function(e){if(e&&!e.loaded){var t,n=this;return e.loaded=!0,this.loadMovie(e).then(function(e){return t=e.runtime,n.loadReleases(e)}).then(function(o){var r=o.countries[0].certification;0===r.length&&(r="none");for(var a=0,l=n.categories.content.length;l>a;a++)for(var i=n.categories.content[a],c=0,s=i.contentController.content.length;s>c;c++){var u=i.contentController.content[c];u.id===e.id&&(i.contentController.content[c].mpaaRating=r,i.contentController.content[c].runtime=t,i.contentController.content[c].loaded=!0)}})}return r.resolve()}},handleMovieSelectionChange:{value:function(){var e=this,t=this.categories.selection.one();if(t&&t.contentController&&t.contentController.selection)for(var n=0,o=t.contentController.content.length;o>n;n++){var r=t.contentController.content[n];if(r===t.contentController.selection[0]){this.preloadMovie(t.contentController.content[n+1]).then(function(){e.preloadMovie(t.contentController.content[n+2])}).then(function(){e.preloadMovie(t.contentController.content[n+3])});break}}}}}),t.shared=new t.TmdbService}});