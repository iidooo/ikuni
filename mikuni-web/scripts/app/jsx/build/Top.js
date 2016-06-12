/**
 * Created by Ethan on 16/5/31.
 */

var Actions = Reflux.createActions(['search']);

var Store = Reflux.createStore({
    listenables: [Actions],
    onSearch: function (data) {

        var url = URL.server + API.searchContentList;
        data.appID = SecurityClient.appID;
        data.secret = SecurityClient.secret;
        data.accessToken = sessionStorage.getItem(SessionKey.accessToken);
        data.userID = sessionStorage.getItem(SessionKey.userID);

        // 检查token是否过期
        if (data.accessToken == null || data.accessToken == "" || data.userID == null || data.userID == "") {
            location.href = Page.login;
            return false;
        }

        data.sortField = "CreateTime";
        data.channelID = 1;
        data.pageSize = 10;
        data.contentType = "2";

        var self = this;

        var callback = function (result) {
            if (result.status == 200) {
                self.trigger(result.data);
            } else {
                console.log(result);
            }
        };

        ajaxPost(url, data, callback);
    },
});

var Top = React.createClass({displayName: "Top",
    mixins: [Reflux.connect(Store, 'contentListData')],
    getInitialState: function () {
        return {
            contentListData: {
                page: {},
                contentList: []
            }
        };
    },
    render: function () {
        return (
            React.createElement("div", {id: "top"}, 
                React.createElement(Header, null), 

                React.createElement("div", {className: "main"}, 
                    React.createElement("div", {className: "col-sm-2 company-side-bar"}, 
                        React.createElement(CompanyList, {render: "group"})
                    ), 
                    React.createElement("div", {className: "col-sm-10"}, 
                        React.createElement(MenuGroupList, null)
                    )
                ), 
                React.createElement(Footer, null)
            )
        );
    }
});

var MenuGroupList = React.createClass({displayName: "MenuGroupList",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "margin-top-30 padding-left-15"}, React.createElement("h3", null, React.createElement("a", {className: "text-decoration-underline", href: "../pages/main.html"}, "进入主界面"))), 
                React.createElement("div", {id: "menuGroupList", className: "margin-top-30"}, 
                    React.createElement("div", {className: "col-md-4"}, 
                        React.createElement("div", {className: "list-group"}, 
                            React.createElement("a", {href: "#", className: "list-group-item active title"}, "预约功能"), 
                            React.createElement("a", {href: "order-meeting.html", className: "list-group-item"}, "会议室预约"), 
                            React.createElement("a", {href: "order-vehicle.html", className: "list-group-item"}, "车辆预约")
                        )
                    ), 
                    React.createElement("div", {className: "col-md-4"}, 
                        React.createElement("div", {className: "list-group"}, 
                            React.createElement("a", {href: "#", className: "list-group-item active title"}, "申请&审批"), 
                            React.createElement("a", {href: "apply-list.html", className: "list-group-item"}, "我的申请一览"), 
                            React.createElement("a", {href: "approval-list.html", className: "list-group-item"}, "我的审批一览 ", React.createElement("span", {
                                className: "badge"}, "4")), 
                            React.createElement("a", {href: "apply-trip.html", className: "list-group-item"}, "出差申请"), 
                            React.createElement("a", {href: "apply-asset.html", className: "list-group-item"}, "批准申请"), 
                            React.createElement("a", {href: "apply-purchase.html", className: "list-group-item"}, "物品采购申请")
                        )
                    ), 
                    React.createElement("div", {className: "col-md-4"}, 
                        React.createElement("div", {className: "list-group"}, 
                            React.createElement("a", {href: "#", className: "list-group-item active title"}, "报表输出"), 
                            React.createElement("a", {href: "order-report-vehicle.html", className: "list-group-item"}, "车辆预约"), 
                            React.createElement("a", {href: "apply-report-trip.html", className: "list-group-item"}, "出差申请"), 
                            React.createElement("a", {href: "apply-report-trip.html", className: "list-group-item"}, "批准申请"), 
                            React.createElement("a", {href: "apply-report-trip.html", className: "list-group-item"}, "物品采购申请")
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Top, null),
    document.getElementById('page')
);