
var widthheightvideotest = (function (proto) {

  proto = {
    loadResponsiveVideo : function () {
      var options = {
        playListQuery : "videobyuuids.aspx?uuids=b464b082-6561-47c2-9d01-f2b0ba810172", 
        mostViewedPlayListQuery: "videobytag.aspx?mk=us&vs=2&ns=Fox%20Sports_Gallery&tag=top%20news&ipt=1&responseEncoding=json", 
        autoplay: true
      };

      MsnVideoUx.render("FSRedesign", "FSFeaturedVideo", {
        "FSVideoWidgetPlayer.DefaultVideo" : options.playListQuery,
        "FSVideoWidgetPlayer.DefaultPlaylist" : options.mostViewedPlayListQuery,
        "FSVideoWidgetPlayer.AutoPlayVideo" : options.autoplay
      }, {
        csid : "ux-cms-en-us-sports"
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

      $('#ResizeVideoLink').on("click", function () {
        that.run();
      });

      $('#LoadVideoLink').on('click', function () {
        that.loadResponsiveVideo();
      });
    }
  };

  return {
    init : function () {
      var that = Object.create(proto);

      that.connect();

      return that;
    }
  };
}());
