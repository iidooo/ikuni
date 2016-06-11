/**
 * Created by Ethan on 16/6/6.
 */

var CompanyList = React.createClass({
    render: function () {
        return (
            <div id="companyListWrap">
                <div id="companyList" className="list-group">
                    <a href="#" className="list-group-item">上海分公司</a>
                    <a href="#" className="list-group-item">成都分公司</a>
                    <a href="#" className="list-group-item">天津分公司</a>
                    <a href="#" className="list-group-item">武汉分公司</a>
                    <a href="#" className="list-group-item">湖北分公司</a>
                </div>
            </div>
        );
    }
});