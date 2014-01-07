
var widthheightvideotest = (function (proto) {

  proto = {
    getAsVideoHTML : function (opts) {

      console.log('opts', opts);
      var videoHTML = '' +
        '<video id="video" class="video"' +
        '       controls preload="auto" width="640" height="264">' +
        '  <source src=":srcMp4" type="video/mp4" />' +
        '</video>';

      videoHTML = videoHTML.replace(/:srcMp4/, opts.mp4);

      return videoHTML;
      //console.log('videoHTML', videoHTML, opts);
      /*
      <video id="example_video_1" class="video-js vjs-default-skin"
      controls preload="auto" width="640" height="264"
      poster="http://video-js.zencoder.com/oceans-clip.png"
      data-setup='{"example_option":true}'>
        <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
       */
   },

    loadResponsiveVideo : function () {
      var that = this;
      var tplUrl = 'http://edge2.catalog.video.msn.com/relatedVideos.aspx?uuids=383b5802-e9a4-414c-96fb-0ab1f7c0db65&ff=82&rct=1,3,5,6&mk=us&alg=0&ps=16';

      $.ajax({
	url: tplUrl,
	error: function(e) {
	  //renderResults(e.responseText);
	},
	success: function (data) {
          // once loaded... several new namespaces are be defined
          // MsnVideo2, MsnVideo, MsnVideoUX*

          var videoDataObj = simpleconvertxml.getXMLAsObj(data);

          var sampleMP4 = videoDataObj.videos.video[0].videoFiles.videoFile[0].uri;
          var videoHTML = that.getAsVideoHTML({ 
            mp4 : sampleMP4 
          });

          MsnVideoUx.render("FSRedesign", "FSFeaturedVideo", {
            "FSVideoWidgetPlayer.DefaultVideo" : "videobytag.aspx?mk=us&vs=2&ns=Fox%20Sports_Gallery&tag=top%20news&ipt=1",
            "FSVideoWidgetPlayer.DefaultPlaylist" : "videobytag.aspx?mk=us&vs=2&ns=Fox%20Sports_Gallery&tag=top%20news&ipt=1&responseEncoding=json",
            "FSVideoWidgetPlayer.AutoPlayVideo" : true
          }, {
            csid : "ux-cms-en-us-sports"
          });

          var videoContainerElem = document.getElementById('FSFeaturedVideo');
          if (videoContainerElem) {
          
            console.log('videoHTML', videoHTML, videoContainerElem);
            //videoContainerElem.innerHTML = videoHTML;
            //videoContainerElem.appendChild(data);
          }
        },
	complete: function(e) {
	  //  console.log("completed, ", e);
	}
      });
    },

    run : function () {
      //wrapper
      var wH = $(".wrap").height();
      var wW = $(".wrap").width();
      //video
      var videoH = $(".video").height(wH - 2); /* '-2' is optional to avoid the overflow if you want to see the edges. i added this -2 because i gave the borders 1px on both divs so you can see whats happening */
      var videoW = $(".video").width(wW - 2); /* '-2' is optional to avoid the overflow if you want to see the edges.  i added this -2 because i gave the borders 1px on both divs so you can see whats happening */
    },
      
    connect : function () {
      var that = this;

      $('.b').on("click", function () {
         that.run();
      });
    }
  };

  return {
    init : function () {
      var that = Object.create(proto);

      that.loadResponsiveVideo();
      that.connect();

      return that;
    }
  };
}());
