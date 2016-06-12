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


var Login = React.createClass({
    handleLogin: function () {
        Actions.login(this.state);
    },
    render: function () {
        return (
            <div id="formLogin" className="form-horizontal">
                <div id="divLogo" className="form-group">
                    <img src="../img/login/logo.png"/>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label">用户名</label>

                    <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="请输入用户名"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="col-sm-4 control-label">密&nbsp;码</label>

                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="inputPassword" placeholder="请输入密码"
                               value=""/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="selectLanguage" className="col-sm-4 control-label">语&nbsp;言</label>

                    <div className="col-sm-8">
                        <select id="selectLanguage" className="form-control" defaultValue="zh-cn">
                            <option value="ja-jp">日本語</option>
                            <option value="zh-cn">中文</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-8">
                        <a id="btnLogin" href="index.html" className="btn btn-primary btn-block"
                           onClick={this.handleLogin}>登录</a>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Login/>,
    document.getElementById('page')
);

