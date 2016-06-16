/**
 * Created by Ethan on 16/5/13.
 */

var HeaderActions = Reflux.createActions(['logout']);

var HeaderStore = Reflux.createStore({
    listenables: [HeaderActions],
    onLogout: function (data) {


    },
});
var Header = React.createClass({
    getInitialState: function () {
        return {
            user: {}
        };
    },
    render: function () {
        return (
            <header className="header">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <LOGO/>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <MainMenu/>
                            <LoginInfo roleName='测试用户1' userName={this.state.user.userName}/>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
});

var LOGO = React.createClass({
    render: function () {
        return (
            <div>
                <a href={Page.top}><img src="../img/logo-sm.png"/></a>
            </div>
        );
    }
});

var MainMenu = React.createClass({
    render: function () {
        return (
                <h1 className="nav navbar-nav line-height-50">三国办公自动化管理系统</h1>
        );
    }
});

var LoginInfo = React.createClass({
    handleClick: function () {
        location.href = Page.login;
    },

    render: function () {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">您好，{this.props.roleName} {this.props.userName}</a></li>
                <li><button className="margin-top-10" type="button" onClick={this.handleClick}>注销</button></li>
            </ul>
        );
    }
});