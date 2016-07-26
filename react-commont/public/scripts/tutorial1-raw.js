/**
 * Created by ruiyou on 2016/7/26.
 */
/*
*   javascript语法
* */
var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function () {
        return (
            React.createElement('div', {className: "commentBox"},
                "Hello, world! I am a CommentBox."
            )
        );
    }
});

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
);