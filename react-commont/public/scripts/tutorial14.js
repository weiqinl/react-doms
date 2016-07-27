/**
 * Created by ruiyou on 2016/7/27.
 */
var CommentBox = React.createClass({
loadCommentsFromServer: function () {
    $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function (data) {
            this.setState({data: data});
        }.bind(this),
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
},
getInitialState: function () {
    return {data: []};
},
componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
},
render: function () {
    return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm />
        </div>
    );
}
});

ReactDOM.render(
    <CommentBox url = "../comments" pollInterval = {2000} />,
    document.getElementById('content')
);