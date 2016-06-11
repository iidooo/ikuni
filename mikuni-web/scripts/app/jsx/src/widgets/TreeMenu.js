/**
 * Created by Ethan on 16/6/6.
 */
var TreeMenu = React.createClass({
    render: function () {
        return (
            <div id="treeMenuWrap">
                <div id="treeMenu">
                </div>
            </div>
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
        backColor: '#f5f5f5',
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
        backColor: '#f5f5f5',
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
        backColor: '#f5f5f5',
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