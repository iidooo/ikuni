/**
 * Created by Ethan on 16/5/13.
 */

var Actions = Reflux.createActions(['login']);

var Store = Reflux.createStore({

    listenables: [Actions],

    onLogin: function (data) {
        location.href = Page.top;
    }
});


var Login = React.createClass({displayName: "Login",
    handleLogin: function () {
        Actions.login(this.state);
    },
    render: function () {
        return (
            React.createElement("div", {id: "formLogin", className: "form-horizontal"}, 
                React.createElement("div", {id: "divLogo", className: "form-group"}, 
                    React.createElement("img", {src: "../img/login/logo.png"})
                ), 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {className: "col-sm-4 control-label"}, "用户名"), 

                    React.createElement("div", {className: "col-sm-8"}, 
                        React.createElement("input", {type: "text", className: "form-control", placeholder: "请输入用户名"})
                    )
                ), 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {htmlFor: "inputPassword", className: "col-sm-4 control-label"}, "密 码"), 

                    React.createElement("div", {className: "col-sm-8"}, 
                        React.createElement("input", {type: "password", className: "form-control", id: "inputPassword", placeholder: "请输入密码", 
                               value: ""})
                    )
                ), 

                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {htmlFor: "selectLanguage", className: "col-sm-4 control-label"}, "语 言"), 

                    React.createElement("div", {className: "col-sm-8"}, 
                        React.createElement("select", {id: "selectLanguage", className: "form-control", defaultValue: "zh-cn"}, 
                            React.createElement("option", {value: "ja-jp"}, "日本語"), 
                            React.createElement("option", {value: "zh-cn"}, "中文")
                        )
                    )
                ), 

                React.createElement("div", {className: "form-group"}, 
                    React.createElement("div", {className: "col-sm-offset-4 col-sm-8"}, 
                        React.createElement("a", {id: "btnLogin", href: "index.html", className: "btn btn-primary btn-block", 
                           onClick: this.handleLogin}, "登录")
                    )
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(Login, null),
    document.getElementById('page')
);

