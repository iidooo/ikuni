/**
 * Created by Ethan on 16/6/6.
 */

var CompanyList = React.createClass({displayName: "CompanyList",
    render: function () {
        var companyList = React.createElement(CompanyListSelect, null);
        if (this.props.render == "group") {
            companyList = React.createElement(CompanyListGroup, null);
        }
        return (
            React.createElement("div", {id: "companyListWrap"}, 
                companyList
            )
        );
    }
});

var CompanyListGroup = React.createClass({displayName: "CompanyListGroup",
    render: function () {
        return (
            React.createElement("div", {id: "companyList", className: "list-group"}, 
                React.createElement("a", {href: "#", className: "list-group-item active"}, "三国上海"), 
                React.createElement("a", {href: "#", className: "list-group-item"}, "上海三国"), 
                React.createElement("a", {href: "#", className: "list-group-item"}, "成都三国"), 
                React.createElement("a", {href: "#", className: "list-group-item"}, "天津三国"), 
                React.createElement("a", {href: "#", className: "list-group-item"}, "浙江三国")
            )
        );
    }
});

var CompanyListSelect = React.createClass({displayName: "CompanyListSelect",
    render: function () {
        return (
            React.createElement("div", {id: "companyList"}, 
                React.createElement("select", {className: "form-control"}, 
                    React.createElement("option", null, "三国上海"), 
                    React.createElement("option", null, "上海三国"), 
                    React.createElement("option", null, "成都三国"), 
                    React.createElement("option", null, "天津三国"), 
                    React.createElement("option", null, "浙江三国")
                )
            )
        );
    }
});