var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * @desc 基于 egret.HttpRequest 封装的 Http 类，主要用来进行网络请求封装
 * @desc post/get 方法返回的都是 promise 对象，可以支持新的 promise/await 新的语法。
 * @example
 * let res = await new Http().post('/api/test', {id: 1});
 */
var Http = (function () {
    /**
     * 构造函数
     */
    function Http() {
        this.request = new egret.HttpRequest();
        this.request.responseType = egret.HttpResponseType.TEXT;
        return this;
    }
    /**
     * post 方法
     * @param url 一个用来包含发送请求的 url 字符串
     * @param param 发送到服务器的数据
     */
    Http.prototype.post = function (url, param) {
        var _this = this;
        if (param === void 0) { param = {}; }
        var timer = null;
        var timeout = Http.timeout;
        return new Promise(function (resolve, reject) {
            _this.request.open(_this.getUrl(url), egret.HttpMethod.POST);
            _this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            _this.request.send(_this.formatPostData(param));
            _this.request.addEventListener(egret.Event.COMPLETE, function (e) {
                var request = e.currentTarget;
                egret.clearTimeout(timer);
                resolve(JSON.parse(request.response));
            }, _this);
            _this.request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
                egret.clearTimeout(timer);
                reject(e);
            }, _this);
            timer = egret.setTimeout(function () {
                reject({
                    msg: "\u8BE5\u94FE\u63A5\u5DF2\u8D85\u65F6: " + timeout,
                    url: url,
                    param: param
                });
            }, _this, timeout);
        });
    };
    /**
     * get 方法
     * @param url 一个用来包含发送请求的 url 字符串
     * @param param 发送到服务器的数据
     */
    Http.prototype.get = function (url, param) {
        var _this = this;
        if (param === void 0) { param = {}; }
        var timer = null;
        var timeout = Http.timeout;
        return new Promise(function (resolve, reject) {
            var getData = _this.formatPostData(param);
            var real_url = _this.getUrl(url);
            if (getData !== '') {
                real_url += "?" + getData;
            }
            _this.request.open(real_url, egret.HttpMethod.GET);
            _this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            _this.request.send();
            _this.request.addEventListener(egret.Event.COMPLETE, function (e) {
                var request = e.currentTarget;
                egret.clearTimeout(timer);
                resolve(JSON.parse(request.response));
            }, _this);
            _this.request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
                egret.clearTimeout(timer);
                reject(e);
            }, _this);
            timer = egret.setTimeout(function () {
                reject({
                    msg: "\u8BE5\u94FE\u63A5\u5DF2\u8D85\u65F6: " + timeout,
                    url: url,
                    param: param
                });
            }, _this, timeout);
        });
    };
    /**
     * 获取完整 url 路径，（主要用来区别本地环境还是什么环境的）
     * @param url 一个用来包含发送请求的 url 字符串
     */
    Http.prototype.getUrl = function (url) {
        if (typeof Http.domain === 'string' && Http.domain.length > 0) {
            return "http://" + Http.domain;
        }
        else if (typeof Http.domain === 'function') {
            var domain = Http.domain();
            if (!domain || domain === '') {
                return url;
            }
            return "http://" + domain + url;
        }
        else {
            return url;
        }
    };
    /**
     * 设置请求的域名
     */
    Http.setDomain = function (domain) {
        if (typeof domain === 'string' || typeof domain === 'function') {
            Http.domain = domain;
        }
        else {
            console.log('setDomain 的参数 domain 必须是一个字符串或者函数');
        }
    };
    /**
     * 格式化传参, eg: {p1: a, p2: b}  ==>  'p1=a&p2=b'
     * @param param 发送到服务器的数据
     */
    Http.prototype.formatPostData = function (param) {
        var arr = [];
        var val = '';
        for (var key in param) {
            // 如果是数组，或者是对象，则进行 JSON.stringify
            if (typeof param[key] === 'object') {
                try {
                    val = JSON.stringify(param[key]);
                }
                catch (e) {
                    console.log("Http.formatPostData \u53C2\u6570\u5F02\u5E38: ", param);
                    val = '';
                }
                arr.push(key + "=" + val);
            }
            else {
                arr.push(key + "=" + param[key]);
            }
        }
        if (arr.length <= 0) {
            return undefined;
        }
        return arr.join('&');
    };
    /**
     * 域名
     */
    Http.domain = null;
    /**
     * 设置的 Http 请求超时时间, 默认30s
     */
    Http.timeout = 30000;
    return Http;
}());
__reflect(Http.prototype, "Http");
