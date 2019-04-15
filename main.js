
const video = videojs("my-video", {playbackRates : [0.5, 1, 1.5, 2], fluid: true});
$( document ).ready(function() {
    const video = videojs("my-video");
    let timestamp1 = function() {        
        $("#timeStampBtn").mousedown(function(){
            let time = $("#timeStamp").val();
            video.currentTime(time);
            video.play();
        });
    }

    let navToggle = function() { 
        $("#nav-toggle").on("click", function() {
            $(this).toggleClass("active");
            $("nav").toggleClass("show-nav");
        });
    }

    let timestamp = function() {
        $para = $("p");        
        $(".topic").mousedown(function(){
            let time = this.dataset.timestamp;
            $("nav").toggleClass("show-nav");
            $("#nav-toggle").toggleClass("active");
            video.currentTime(time);
            video.play();
        });
    }

    let reminder = function() {
        video.on("ended", function() {

        });
    }
    
    let closeDialog = function() {
        const $closeBtn = $(".close");
        const $dialog = $("dialog");
        $closeBtn.on("click", function(){
            $dialog.removeAttr("open");
            console.log("hi")
        });
    }
    
    let videoEnd = function() {
        video.on("ended", function(){
            closeDialog();
            $("dialog").attr("open", "true");

        });
    }

    class TimeStamp extends HTMLVideoElement {
        constructor() {
            super(); 
        }

        connectedCallback() {
            const template = document.getElementById('menu-template');
            const node = document.importNode(template.content, true);
            document.getElementById("video-container").appendChild(node);
            navToggle();
            timestamp();
            videoEnd();
          }
    }
    customElements.define("time-stamp", TimeStamp, { extends: "video" });
});


