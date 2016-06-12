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
                <a href="#" className="list-group-item">上海分公司</a>
                <a href="#" className="list-group-item">成都分公司</a>
                <a href="#" className="list-group-item">天津分公司</a>
                <a href="#" className="list-group-item">武汉分公司</a>
                <a href="#" className="list-group-item">湖北分公司</a>
            </div>
        );
    }
});

var CompanyListSelect = React.createClass({
    render: function () {
        return (
            <div id="companyList">
                <select className="form-control">
                    <option>上海分公司</option>
                    <option>成都分公司</option>
                    <option>天津分公司</option>
                    <option>武汉分公司</option>
                    <option>湖北分公司</option>
                </select>
            </div>
        );
    }
});