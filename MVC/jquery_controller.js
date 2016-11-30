var Controller = {};

(Controller.user = function($) {
    console.log("ready");

    var nameClick = function() {
        console.log("name click");
    }

    $(function() {
        $("#view").click(nameClick);
    })
})(jQuery)
