/**
 * Created by Ethan on 16/6/6.
 */
var TreeMenu = React.createClass({displayName: "TreeMenu",
    render: function () {
        return (
            React.createElement("div", {id: "treeMenuWrap"}, 
                React.createElement("div", {id: "treeMenu"}
                )
            )
        );
    }
});


$(function () {
    var options = {
        showTags: true,
        data: TreeData
    };

    $('#treeMenu').treeview(options);
});

var TreeData = [
    {
        text: '预约',
        href: '#',
        backColor: '#337ab7',
        color: '#ffffff',
        nodes: [
            {
                text: '会议室预约',
                href: '#'
            },
            {
                text: '车辆预约',
                href: '#'
            }
        ]
    },
    {
        text: '申请',
        href: '#',
        backColor: '#337ab7',
        color: '#ffffff',
        nodes: [
            {
                text: '出差申请',
                href: '#'
            },
            {
                text: '批准申请',
                href: '#'
            },
            {
                text: '物品采购申请',
                href: '#'
            },
            {
                text: '我的申请',
                href: '#'
            },
            {
                text: '我的审批',
                href: '#',
                tags: ['4']
            }
        ]
    },
    {
        text: '报表输出',
        href: '#',
        backColor: '#337ab7',
        color: '#ffffff',
        nodes: [
            {
                text: '车辆预约',
                href: '#'
            },
            {
                text: '出差申请',
                href: '#'
            },
            {
                text: '批准申请',
                href: '#'
            },
            {
                text: '物品采购申请',
                href: '#'
            }
        ]
    }
];