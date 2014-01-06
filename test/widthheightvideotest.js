
var widthheightvideotest = (function () {

  return {
    init : function () {
      function run() {
        //wrapper
        var wH = $(".wrap").height();
        var wW = $(".wrap").width();
        //video
        var videoH = $(".video").height(wH - 2); /* '-2' is optional to avoid the overflow if you want to see the edges. i added this -2 because i gave the borders 1px on both divs so you can see whats happening */
        var videoW = $(".video").width(wW - 2); /* '-2' is optional to avoid the overflow if you want to see the edges.  i added this -2 because i gave the borders 1px on both divs so you can see whats happening */
      }

      $('.b').on("click", run);
    }
  };
}());
