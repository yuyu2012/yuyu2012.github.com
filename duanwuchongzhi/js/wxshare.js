
(function ($) {
  

   if(location.href.toLowerCase().indexOf("isin=ttjj")==-1 && location.search.toLowerCase().indexOf("from=")>-1)
    {
                location.search=""; 
    }
   

    var wx_shareInfo = {
        imgUrl: "https://"+location.host+"/2016/duanwuchongzhi/images/wx.png",
        link: location.href,
        title: "端午小长假赚钱攻略",
        desc: "6月7日15点前充值活期宝 享端午小长假收益"
    };





    var wx_config = function (data) {
        return {

            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        }
    };

    var wx_shareEvent = function () {
        wx.onMenuShareTimeline({
            title: wx_shareInfo.title,
            desc: wx_shareInfo.desc,
            link: wx_shareInfo.link,
            imgUrl: wx_shareInfo.imgUrl,
            success: function () {

            },
            cancel: function () {

            }
        });

        wx.onMenuShareAppMessage({
            title: wx_shareInfo.title,
            desc: wx_shareInfo.desc,
            link: wx_shareInfo.link,
            imgUrl: wx_shareInfo.imgUrl,
            type: '',
            dataUrl: '',
            success: function () {

            },
            cancel: function () {

            }
        });

        wx.onMenuShareQQ({
            title: wx_shareInfo.title,
            desc: wx_shareInfo.desc,
            link: wx_shareInfo.link,
            imgUrl: wx_shareInfo.imgUrl,
            success: function () {

            },
            cancel: function () {

            }
        });

        wx.onMenuShareWeibo({
            title: wx_shareInfo.title,
            desc: wx_shareInfo.desc,
            link: wx_shareInfo.link,
            imgUrl: wx_shareInfo.imgUrl,
            success: function () {

            },
            cancel: function () {

            }
        });
    };


    
             $.getJSON("https://fundhd.eastmoney.com/wx?url=" + encodeURIComponent(location.href), function (data) {

                wx.config(wx_config(data));

                wx.ready(wx_shareEvent);
            });
            
            
            
            
            
            
})(window.jQuery);