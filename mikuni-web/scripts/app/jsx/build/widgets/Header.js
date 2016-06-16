/**
 * Created by Ethan on 16/5/13.
 */

var HeaderActions = Reflux.createActions(['logout']);

var HeaderStore = Reflux.createStore({
    listenables: [HeaderActions],
    onLogout: function (data) {


    },
});
var Header = React.createClass({displayName: "Header",
    getInitialState: function () {
        return {
            user: {}
        };
    },
    render: function () {
        return (
            React.createElement("header", {className: "header"}, 
                React.createElement("nav", {className: "navbar"}, 
                    React.createElement("div", {className: "container-fluid"}, 
                        React.createElement("div", {className: "navbar-header"}, 
                            React.createElement(LOGO, null)
                        ), 
                        React.createElement("div", {id: "navbar", className: "navbar-collapse collapse"}, 
                            React.createElement(MainMenu, null), 
                            React.createElement(LoginInfo, {roleName: "测试用户1", userName: this.state.user.userName})
                        )
                    )
                )
            )
        );
    }
});

var LOGO = React.createClass({displayName: "LOGO",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("a", {href: Page.top}, React.createElement("img", {src: "../img/logo-sm.png"}))
            )
        );
    }
});

var MainMenu = React.createClass({displayName: "MainMenu",
    render: function () {
        return (
                React.createElement("h1", {className: "nav navbar-nav line-height-50"}, "三国办公自动化管理系统")
        );
    }
});

var LoginInfo = React.createClass({displayName: "LoginInfo",
    handleClick: function () {
        location.href = Page.login;
    },

    render: function () {
        return (
            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "您好，", this.props.roleName, " ", this.props.userName)), 
                React.createElement("li", null, React.createElement("button", {className: "margin-top-10", type: "button", onClick: this.handleClick}, "注销"))
            )
        );
    }
});