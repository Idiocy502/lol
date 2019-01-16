(function () {
    /**
     * hoverЧ��ͨ�ó�ʼ������
     * ��ͬ������Ԫ����ҪhoverЧ��ʹ��,
     * ����hover�����ߺ�hover��,��hover�����.show��ʽ��.�Ƴ�ʱȥ��
     * showһ��Ϊ{display:block;animation...}
     * ��display:noneʱ,transition��������Ч,�����Ϊanimation��Ϊ���붯��
     * @param hoverFrom ����hover���ѡ����
     * @param hoverLayer ��������hover��ѡ����
     * @param hoverFuncBack hoverʱ�Ļص�����,ѡ��
     * **/
    var T_hoverShowInit = function (hoverFrom, hoverLayer, hoverFuncBack, showDelay) {
        var hover$ = $(hoverLayer);
        var timeout;
        var showTimeout;
        var showDelay = showDelay || 0;
        $(hoverFrom + ',' + hoverLayer).on('mouseenter', function (e) {
            e.preventDefault();
            e.stopPropagation();
            //����hover���hover������
            clearTimeout(timeout);
            clearTimeout(showTimeout);
            showTimeout = setTimeout(function () {
                if (!hover$.hasClass('show')) {
                    hover$.addClass('show');
                    hoverFuncBack && hoverFuncBack();
                }
            }, showDelay);
        }).on('mouseleave', function (e) {
            e.preventDefault();
            e.stopPropagation();
            //�Ƴ�hover���hover������,��ΪԪ�ؼ������Ԫ�ص�ԭ��,���ܻ�Ƶ������out,����ʹ���ӳٱ�����˸
            clearTimeout(timeout);
            clearTimeout(showTimeout);
            timeout = setTimeout(function () {
                hover$.removeClass('show');
            }, 100);
        });
    };
    /** ����hover���� **/
    var TopHoverControl = {
        init: function () {
            //��ʼ������hover
            T_hoverShowInit('.head-nav', '.head-nav-sub', false, 300);
            //��ʼ������hover
            T_hoverShowInit('.head-app-normal', '.head-app-hover');
            //��ʼ��login hover
            T_hoverShowInit('.head-userinfo-normal', '.head-login-hover');
        }
    };
    /** Top��� **/
    var TopModulejs = {
        init: function () {
            TopHoverControl.init();
        }
    };
    TopModulejs.init();
})(window);




