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

var Top = React.createClass({
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
            <div id="top">
                <Header/>

                <div className="main">
                    <div className="col-sm-2 company-side-bar">
                        <CompanyList render="group"/>
                    </div>
                    <div className="col-sm-10">
                        <MenuGroupList/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
});

var MenuGroupList = React.createClass({
    render: function () {
        return (
            <div>
                <div className="margin-top-30 padding-left-15"><h3><a className="text-decoration-underline" href="../pages/main.html">进入主界面</a></h3></div>
                <div id="menuGroupList" className="margin-top-30">
                    <div className="col-md-4">
                        <div className="list-group">
                            <a href="#" className="list-group-item active title">预约功能</a>
                            <a href="order-meeting.html" className="list-group-item">会议室预约</a>
                            <a href="order-vehicle.html" className="list-group-item">车辆预约</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="list-group">
                            <a href="#" className="list-group-item active title">申请&amp;审批</a>
                            <a href="apply-list.html" className="list-group-item">我的申请一览</a>
                            <a href="approval-list.html" className="list-group-item">我的审批一览&nbsp;<span
                                className="badge">4</span></a>
                            <a href="apply-trip.html" className="list-group-item">出差申请</a>
                            <a href="apply-asset.html" className="list-group-item">批准申请</a>
                            <a href="apply-purchase.html" className="list-group-item">物品采购申请</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="list-group">
                            <a href="#" className="list-group-item active title">报表输出</a>
                            <a href="order-report-vehicle.html" className="list-group-item">车辆预约</a>
                            <a href="apply-report-trip.html" className="list-group-item">出差申请</a>
                            <a href="apply-report-trip.html" className="list-group-item">批准申请</a>
                            <a href="apply-report-trip.html" className="list-group-item">物品采购申请</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Top />,
    document.getElementById('page')
);