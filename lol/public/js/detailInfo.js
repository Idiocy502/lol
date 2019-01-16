//皮肤轮播
var $nav = $('.defail-skin-nav');
var arr = $('#skinBG').children()
$nav.on('click',function (e) {
    if(e.target.nodeName=='IMG'){
        var name = e.target.alt;
        $('#skinName').html(name);
        $('#skinNAV .current').removeClass('current');
        $(e.target).parent().parent().addClass('current');
        for(var i=0;i<arr.length;i++){
            if(arr[i].title==name){
                var num = i*1240;
                $('#skinBG').css({
                    left:num*-1,
                    transition:'all 0.5s'
                });
            }
        }
    }
})
//推荐出装
function getDt() {
    var propTypes = [
        '起始装备',
        '核心物品',
        '进攻型物品',
        '防御型物品'
    ]
    var $dts = $("#jSearchItemDiv dl[style*='block'] dt");
    for (var i = 0;i<$dts.length;i++){
        $dts[i].innerHTML=propTypes[i];
    }
}
function getBlock(){
    var $blockBox = $("#jSearchItemDiv dl[style*='block'] img[data-title]");
    $blockBox.on('mouseenter',
        function(e){
            var $block = $(e.target);
            if($block.has("[nodeName='IMG']")){
                var str = $block.attr('src');
                var name = $block.attr('alt');
                var price = $block.data('title');
                $block.parent().append(`
                                        <div class="details">
                                            <div class="content">
                                                <img src="${str}" style="display: block;float: left" alt="">
                                                <div style="float: left;margin-left:2px">
                                                <b style="color: #1efa6b;font-weight: bold;font-size: 16px;display: block;height:16px;line-height: 16px;padding: 8px 0 10px">${name}</b>
                                                <span style="color: orange;font-size: 14px">售价或合成费用：${price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    `);
                var i = $block.index();
                var rowIndex = $block.parent().prev().index();
                var rowType = $block.parent().prev().html();
                var $details = $('.details');
                $details.css({
                    background: 'rgba(0,0,0,.8)',
                    width: 290,
                    height: 300,
                    position: 'absolute',
                    border: '1px solid #0b6ee9',
                    borderRadius: 10,
                    display:'block',
                    left:e.clientX-i*20-50,
                    top:35,
                    zIndex:20
                }).children('.content').css({
                    padding: 20
                })
            }
        }
    )
    $blockBox.on('mouseleave',
        function (e) {
            if(e.target.nodeName=='IMG'){
                var $details = $('.details');
                $details.remove();
            }
        }
    )
}
var $tab = $('#infospellsTAB');
$tab.on('click',function (e) {
    if(e.target.nodeName=='A'){
        var $page = $(e.target).parent();
        $('.current').removeClass('current');
        $page.addClass('current');
        if($page.index()==1){
            $('#infospellsTABaramBlocks').css('display','block');
            $('#infospellsTABclassBlocks').css('display','none');
        }else{
            $('#infospellsTABclassBlocks').css('display','block');
            $('#infospellsTABaramBlocks').css('display','none');
        }
    }
    getDt();
    getBlock();
})
getDt();
getBlock();