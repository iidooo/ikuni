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
                    <label className="col-sm-3 control-label">ユーザー</label>

                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="ユーザー"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="col-sm-3 control-label">パスワード</label>

                    <div className="col-sm-9">
                        <input type="password" className="form-control" id="inputPassword" placeholder="パスワード"
                               value=""/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="selectLanguage" className="col-sm-3 control-label">言語</label>

                    <div className="col-sm-9">
                        <select id="selectLanguage" className="form-control" defaultValue="ja-jp">
                            <option value="ja-jp">日本語</option>
                            <option value="zh-cn">中国語</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-3 col-sm-9">
                        <a id="btnLogin" href="index.html" className="btn btn-primary btn-block"
                           onClick={this.handleLogin}>登録</a>
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

