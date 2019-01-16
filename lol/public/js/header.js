$(function(){
    $.ajax({
        url:"header2.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll('.comm-head2');
        }
    })
    $.ajax({
        url:"header.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll('.comm-head');
        }
    })
    $.ajax({
        url:"footer.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll('#afooter');
        }
    })
    $.ajax({
        url:"footer2.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll('#footWrap');
        }
    })
})