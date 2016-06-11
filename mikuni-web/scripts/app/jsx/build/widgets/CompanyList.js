/**
 * Created by Ethan on 16/6/6.
 */

var CompanyList = React.createClass({displayName: "CompanyList",
    render: function () {
        return (
            React.createElement("div", {id: "companyListWrap"}, 
                React.createElement("div", {id: "companyList", className: "list-group"}, 
                    React.createElement("a", {href: "#", className: "list-group-item"}, "上海分公司"), 
                    React.createElement("a", {href: "#", className: "list-group-item"}, "成都分公司"), 
                    React.createElement("a", {href: "#", className: "list-group-item"}, "天津分公司"), 
                    React.createElement("a", {href: "#", className: "list-group-item"}, "武汉分公司"), 
                    React.createElement("a", {href: "#", className: "list-group-item"}, "湖北分公司")
                )
            )
        );
    }
});