/**
 * Created by ruiyou on 2016/7/26.
 */

var CommontBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);