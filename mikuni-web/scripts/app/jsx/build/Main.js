/**
 * Created by Ethan on 16/5/20.
 */

var Actions = Reflux.createActions(['save', 'getContent', 'delete']);

var Store = Reflux.createStore({
    listenables: [Actions],
    onSave: function (data) {
        var pageMode = sessionStorage.getItem(SessionKey.pageMode);
        var url = "";
        if (pageMode == "1") {
            url = URL.server + API.createContent;
        } else if (pageMode == "2") {
            url = URL.server + API.updateContent;
        } else {
            alert("请指定正确的pageMode参数！");
            return false;
        }
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        data.userID = sessionStorage.getItem(SessionKey.userID);
        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "" || data.userID == null || data.userID == "") {
            location.href = Page.login;
            return false;
        }

        // 内容图片列表解析成json
        var $pictureList = $("img[id^=contentPicture]");
        var pictureList = [];
        $.each($pictureList, function (index, object) {
            pictureList[index] = object.src;
        });
        data.pictureList = JSON.stringify(pictureList);

        data.channelID = 1;
        data.contentType = "2";
        data.status = "1";

        var self = this;
        var callback = function (result) {
            if (result.status == 200) {
                alert("内容保存成功，主编审核通过后会自动发布到毒电波APP！");
                location.href = Page.myContentList;
            } else {
                console.log(result);
                alert("内容保存失败！");
            }
        };

        ajaxPost(url, data, callback);
    },
    onGetContent: function (data) {
        var url = URL.server + API.getContent;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        data.userID = sessionStorage.getItem(SessionKey.userID);
        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "" || data.userID == null || data.userID == "") {
            location.href = Page.login;
            return false;
        }

        var self = this;
        var callback = function (result) {
            if (result.status == 200) {
                if (result.data.pictureList.length > 0) {
                    $.each(result.data.pictureList, function (index, object) {
                        createContentPicture(object.pictureURL);
                    });
                }
                self.trigger(result.data);
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    },
    onDelete: function (data) {
        var url = URL.server + API.deleteContent;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        data.userID = sessionStorage.getItem(SessionKey.userID);
        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "" || data.userID == null || data.userID == "") {
            location.href = Page.login;
            return false;
        }

        var self = this;
        var callback = function (result) {
            if (result.status == 200) {
                location.href = Page.myContentList;
            } else {
                alert("删除出现异常，请联系管理员");
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    },
});

var Main = React.createClass({displayName: "Main",
    mixins: [Reflux.connect(Store, 'content')],
    getInitialState: function () {
        return {
            content: {
                contentTitle: "",
                contentSubTitle: "",
                contentImageTitle: "",
                contentSummary: "",
                contentBody: "",
                source: "",
                sourceURL: ""
            }
        };
    },
    render: function () {
        return (
            React.createElement("div", {id: "top"}, 
                React.createElement(Header, null), 

                React.createElement("div", {className: "container-fluid"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sm-2"}, 
                            React.createElement(CompanyList, null), 
                            React.createElement("div", null, 
                                React.createElement(TreeMenu, null)
                            )
                        ), 
                        React.createElement("div", {className: "col-sm-9"}, 
                            React.createElement("div", {className: "margin-top-30 padding-left-15"}, React.createElement("h3", null, React.createElement("a", {className: "text-decoration-underline", href: "../pages/top.html"}, "返回首页")))
                        )
                    )
                ), 

                React.createElement(Footer, null)
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Main, null),
    document.getElementById('page')
);
