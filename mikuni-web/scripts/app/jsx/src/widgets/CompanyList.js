/**
 * Created by Ethan on 16/6/6.
 */

var CompanyList = React.createClass({
    render: function () {
        var companyList = <CompanyListSelect/>;
        if (this.props.render == "group") {
            companyList = <CompanyListGroup/>;
        }
        return (
            <div id="companyListWrap">
                {companyList}
            </div>
        );
    }
});

var CompanyListGroup = React.createClass({
    render: function () {
        return (
            <div id="companyList" className="list-group">
                <a href="#" className="list-group-item active">三国上海</a>
                <a href="#" className="list-group-item">上海三国</a>
                <a href="#" className="list-group-item">成都三国</a>
                <a href="#" className="list-group-item">天津三国</a>
                <a href="#" className="list-group-item">浙江三国</a>
            </div>
        );
    }
});

var CompanyListSelect = React.createClass({
    render: function () {
        return (
            <div id="companyList">
                <select className="form-control">
                    <option>三国上海</option>
                    <option>上海三国</option>
                    <option>成都三国</option>
                    <option>天津三国</option>
                    <option>浙江三国</option>
                </select>
            </div>
        );
    }
});