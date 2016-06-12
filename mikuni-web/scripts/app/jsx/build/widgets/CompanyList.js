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
                React.createElement("a", {href: "#", className: "list-group-item"}, "上海分公司"), 
                React.createElement("a", {href: "#", className: "list-group-item"}, "成都分公司"), 
                React.createElement("a", {href: "#", className: "list-group-item"}, "天津分公司"), 
                React.createElement("a", {href: "#", className: "list-group-item"}, "武汉分公司"), 
                React.createElement("a", {href: "#", className: "list-group-item"}, "湖北分公司")
            )
        );
    }
});

var CompanyListSelect = React.createClass({displayName: "CompanyListSelect",
    render: function () {
        return (
            React.createElement("div", {id: "companyList"}, 
                React.createElement("select", {className: "form-control"}, 
                    React.createElement("option", null, "上海分公司"), 
                    React.createElement("option", null, "成都分公司"), 
                    React.createElement("option", null, "天津分公司"), 
                    React.createElement("option", null, "武汉分公司"), 
                    React.createElement("option", null, "湖北分公司")
                )
            )
        );
    }
});