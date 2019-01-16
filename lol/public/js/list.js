(function () {
    "use strict";
    var styList = ['amusement','inform','news','event','tutorial'];
    var typList = ['视频','公告','新闻','其他','赛事','教学','论坛'];
    var newsList = [
        //tab-index=0
        [
            {
                tit:'胜者组决赛iGvsTOP 谁能率先德杯总决赛！',
            },
            {
                style:styList[1],
                type:typList[0],
                tit:'教你一招：7分钟学会彗星流蛇女玩法',
                date:'12-21'
            },
            {
                style:styList[2],
                type:typList[1],
                tit:'峡谷之巅第三赛季奖励即将开放领取',
                date:'12-21'
            },
            {
                style:styList[2],
                type:typList[2],
                tit:'漫威合作首部漫画《艾希：战母》正式公布',
                date:'12-20'
            },
            {
                style:styList[3],
                type:typList[2],
                tit:'电竞真人秀 《超越吧！英雄》概念预告',
                date:'12-20'
            },
            {
                style:styList[2],
                type:typList[3],
                tit:'叙事回顾：2018和未来',
                date:'12-19'
            },
            {
                style:styList[2],
                type:typList[1],
                tit:'12月21日免费英雄更换公告',
                date:'12-19'
            }
        ],
        //tabindex=1
        [
            {
                tit:'2018冰雪节：冬境乐园活动开启',
            },
            {
                style:styList[1],
                type:typList[1],
                tit:'关于“极限闪击”公平游戏的公告',
                date:'12-21'
            },
            {
                style:styList[1],
                type:typList[1],
                tit:'游戏环境公示及处罚名单12月21日',
                date:'12-21'
            },
            {
                style:styList[1],
                type:typList[1],
                tit:'黑色玫瑰观战系统维护公告',
                date:'12-20'
            },
            {
                style:styList[1],
                type:typList[1],
                tit:'峡谷之巅第三赛季奖励即将开放领取',
                date:'12-20'
            },
            {
                style:styList[1],
                type:typList[1],
                tit:'12月21日免费英雄更换公告',
                date:'12-19'
            },
            {
                style:styList[1],
                type:typList[1],
                tit:'12月17日比赛服下载地址更新公告',
                date:'12-17'
            }
        ],
        //tabindex=2
        [
            {
                tit:'恭喜iG勇夺德玛西亚杯冠军！',
            },
            {
                style:styList[3],
                type:typList[4],
                tit:'少年成名 Knight成国产中单牌面',
                date:'12-23'
            },
            {
                style:styList[3],
                type:typList[4],
                tit:'从联赛垫底到德杯决赛 TOP成长的一年',
                date:'12-23'
            },
            {
                style:styList[0],
                type:typList[0],
                tit:'12月22日TOP5：Knight 天秀操作 主宰比赛',
                date:'12-23'
            },
            {
                style:styList[0],
                type:typList[0],
                tit:'德杯：Rookie现场飙歌 神超体验不灭之握',
                date:'12-22'
            },
            {
                style:styList[3],
                type:typList[4],
                tit:'Scout乌鸦团战救主 EDG复仇淘汰RNG',
                date:'12-22'
            },
            {
                style:styList[3],
                type:typList[4],
                tit:'Knight灵性抢龙 SwordArT首次在LPL庆生',
                date:'12-22'
            }
        ],
        //tabindex=3
        [
            {
                tit:'佐伊刀妹并称王牌 黄金左手招牌解析',
            },
            {
                style:styList[4],
                type:typList[5],
                tit:'德杯五大强势刺客 妖姬领衔秒人不眨眼',
                date:'12-23'
            },
            {
                style:styList[4],
                type:typList[5],
                tit:'德杯三大下路组合盘点 伊泽塔姆骑脸输出',
                date:'12-23'
            },
            {
                style:styList[4],
                type:typList[5],
                tit:'瑞兹开启余震模式 正义荣耀成为新核心',
                date:'12-22'
            },
            {
                style:styList[4],
                type:typList[5],
                tit:'版本T1级中单 输出流加里奥德杯大热',
                date:'12-22'
            },
            {
                style:styList[0],
                type:typList[0],
                tit:'教你一招：7分钟学会彗星流蛇女玩法',
                date:'12-20'
            },
            {
                style:styList[4],
                type:typList[5],
                tit:'版本三大热门ADC！卢锡安卡莎成首选',
                date:'12-20'
            }
        ],
        //tabindex=4
        [
            {
                tit:'【问拳头特别版】新英雄妮蔻',
            },
            {
                style:styList[1],
                type:typList[6],
                tit:'为英雄而战 重金招募美工小能手',
                date:'12-24'
            },
            {
                style:styList[1],
                type:typList[6],
                tit:'【话题】德杯最惊艳的镜头是？',
                date:'12-24'
            },
            {
                style:styList[1],
                type:typList[6],
                tit:'极限闪击模式或将成为永久模式',
                date:'12-24'
            },
            {
                style:styList[1],
                type:typList[6],
                tit:'S9小赛季奖励曝光 Ming生日收获祝福',
                date:'12-24'
            },
            {
                style:styList[1],
                type:typList[6],
                tit:'恭喜IG勇夺德杯冠军 Letme疑似退役？',
                date:'12-24'
            },
            {
                style:styList[2],
                type:typList[3],
                tit:'《英雄联盟:我的时代》46章：老狼生气了',
                date:'12-23'
            }
        ]
    ]
    var tabList = ['综合','公告','赛事','攻略','社区'];
    var $tabs = $('.m-news .part-tab-title').children();
    var $tab = $('.m-news .part-tab-title');
    var $contents = $('#J_newsListContainer').children();
    for (var i = 0;i<$tabs.length;i++){
        $tabs[i].innerHTML=tabList[i];
    }
    var openlist = newsList[0];
    $contents[0].firstElementChild.innerHTML=openlist[0].tit
    for (var i=1;i<openlist.length;i++){
        $contents[i].className = 'newsitem';
        $contents[i].className+=' '+openlist[i].style;
        $contents[i].firstElementChild.innerHTML=openlist[i].type;
        $contents[i].children[1].innerHTML=openlist[i].tit;
        $contents[i].lastElementChild.innerHTML=openlist[i].date;
    }
    $tabs.on('mouseenter',function () {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        var index =$(this).index();
        var arr = newsList[index];
        $contents[0].firstElementChild.innerHTML=arr[0].tit
        for (var i=1;i<arr.length;i++){
            $contents[i].className = 'newsitem';
            $contents[i].className+=' '+arr[i].style;
            $contents[i].firstElementChild.innerHTML=arr[i].type;
            $contents[i].children[1].innerHTML=arr[i].tit;
            $contents[i].lastElementChild.innerHTML=arr[i].date;
        }
    })
})()
var $promo = $('#J_promo');
var length = $('#promoImgList li').length;
var i = 0;
var interval = setInterval(function () {
    //console.log(i)
    if(i==length) {i=0;}
    $promo.children().first().css({
        marginLeft: 820*i*-1,
        transition:'all .3s'
    });
    $('#promoTitleList .selected').removeClass(' selected')
    $('#promoTitleList').children().eq(i).addClass(' selected')
    i++;
},3000)
$('#promoTitleList span').on('mouseenter',function () {
    i = $(this).index();
    $('#promoTitleList .selected').removeClass(' selected');
    $('#promoTitleList').children().eq(i).addClass(' selected');
    $promo.children().first().css({
        marginLeft: -820*i,
        transition:'all .2s'
    });
    clearInterval(interval);
})
$('#promoTitleList span').on('mouseleave',function () {
    interval = setInterval(function () {
        if(i==length) i=0;
        $promo.children().first().css({
            marginLeft: -820*i,
            transition:'all .2s'
        });
        $('#promoTitleList .selected').removeClass(' selected')
        $('#promoTitleList').children().eq(i).addClass(' selected')
        i++;
    },3000)
})