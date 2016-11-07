/* clone test. */

/* commited a comment test for "git push" from andre pc at home */


/*
define('components/video', ['jquery', 'http://img1.video.s-msn.com/s/js/vxp_min.js'], function($) {

    //from content.navHeader.func.jsp
    function renderNavVideoFeed(options) {
        MsnVideoUx.render("FSMobileVideoGallery", "FSFeaturedGalleryHeader" + options.feedCounter, {
            "FSRDefaultGalleryPlaylistMobile.VideoContent" : options.feedUrl
        }, {
            csid : "ux-cms-en-us-sports"
        });
    }

    //from inlineVideo.jsp
    function renderVideo(options) {
        MsnVideoUx.render("FSRedesign", "FSFeaturedVideo" + options.nodeName, {
            "FSVideoWidgetPlayer.DefaultVideo" : options.playListQuery,
            "FSVideoWidgetPlayer.DefaultPlaylist" : options.mostViewedPlayListQuery,
            "FSVideoWidgetPlayer.AutoPlayVideo" : options.autoPlay
        }, {
            csid : "ux-cms-en-us-sports"
        });
    }

    function renderGallery(options) {
        MsnVideoUx.render("FSMobileVideoGallery", "FSFeaturedGallery", {
            "FSRDefaultGalleryPlaylistMobile.VideoContent" : options.mostViewedPlayListQuery,
            "FSRRecentGalleryPlaylistMobile.VideoContent" : options.mostRecentPlayListQuery,
            "FSVideoWidgetPlayer.AutoPlayVideo" : options.autoplay
        }, {
            csid : "ux-cms-en-us-sports"
        });
    }

    //from msnResponsiveVideo.jsp
    function changeDimensions() {
        var msnVideoElem = $(".msnResponsiveVideoPlayer");
        var vidObjects = msnVideoElem.find("object");
        var computedWidth = msnVideoElem.width();
        var computedHeight = parseInt(computedWidth * 0.5625, 10);
        if (computedHeight > 0) {
            vidObjects.attr("height", computedHeight + "px");
            msnVideoElem.find(".vxp_content,.vxp_richEmbedContainer").height(computedHeight);
            msnVideoElem.find("#FSFeaturedVideo").height((computedHeight));
        }
    }

    function renderResponsiveVideo(options) {
        MsnVideoUx.render("FSRedesign", "FSFeaturedVideo", {
            "FSVideoWidgetPlayer.DefaultVideo" : options.playListQuery,
            "FSVideoWidgetPlayer.DefaultPlaylist" : options.mostViewedPlayListQuery,
            "FSVideoWidgetPlayer.AutoPlayVideo" : options.autoplay
        }, {
            csid : "ux-cms-en-us-sports"
        });
    }

    function renderMobileGalleryVideo(options) {

        MsnVideoUx.render("FSMobileVideoGallery", "FSFeaturedGallery", {
            "FSRDefaultGalleryPlaylistMobile.VideoContent" : options.mostViewedPlayListQuery,
            "FSRRecentGalleryPlaylistMobile.VideoContent" : options.mostRecentPlayListQuery,
            "FSVideoWidgetPlayer.AutoPlayVideo" : options.autoplay
        }, {
            csid : "ux-cms-en-us-sports"
        });

    }

    function getAssets(options) {
        require([options.scriptPath]);

        var style = options.stylePath;
        $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', style));
    }

    return {
        renderVideo : renderVideo,
        renderGallery : renderGallery,
        changeDimensions : changeDimensions,
        renderResponsiveVideo : renderResponsiveVideo,
        renderMobileGalleryVideo : renderMobileGalleryVideo,
        getAssets : getAssets,
        renderNavVideoFeed : renderNavVideoFeed
    }

});
*/
