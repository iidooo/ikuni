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
                    React.createElement("label", {className: "col-sm-3 control-label"}, "ユーザー"), 

                    React.createElement("div", {className: "col-sm-9"}, 
                        React.createElement("input", {type: "text", className: "form-control", placeholder: "ユーザー"})
                    )
                ), 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {htmlFor: "inputPassword", className: "col-sm-3 control-label"}, "パスワード"), 

                    React.createElement("div", {className: "col-sm-9"}, 
                        React.createElement("input", {type: "password", className: "form-control", id: "inputPassword", placeholder: "パスワード", 
                               value: ""})
                    )
                ), 

                React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {htmlFor: "selectLanguage", className: "col-sm-3 control-label"}, "言語"), 

                    React.createElement("div", {className: "col-sm-9"}, 
                        React.createElement("select", {id: "selectLanguage", className: "form-control", defaultValue: "ja-jp"}, 
                            React.createElement("option", {value: "ja-jp"}, "日本語"), 
                            React.createElement("option", {value: "zh-cn"}, "中国語")
                        )
                    )
                ), 

                React.createElement("div", {className: "form-group"}, 
                    React.createElement("div", {className: "col-sm-offset-3 col-sm-9"}, 
                        React.createElement("a", {id: "btnLogin", href: "index.html", className: "btn btn-primary btn-block", 
                           onClick: this.handleLogin}, "登録")
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

