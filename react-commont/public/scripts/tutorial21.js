/**
 * Created by ruiyou on 2016/7/28.
 */

var CommentForm = React.createClass({
    getInitialState: function () {
        return {author: '' ,text: ''}
    },
    handleAuthorChange: function (e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function (e) {
        this.setState({text: e.target.value});
    },
   handleSubmit: function (e) {
       e.preventDefault();
       var author = this.state.author.trim();
       var text = this.state.text.trim();
       if (!text || !author) {
           return;
       }
       this.props.onCommentSubmit({author: author, text: text});
       this.setState({author: '', text: ''});
   },
    render: function () {
        return (
            <div className="commentForm" onSubmit={this.handleSubmit} >
                <input type="text" placeholder="You name" value={this.state.author} onChange={this.handleAuthorChange} />
                <input type="text" placeholder="Say something……"  value={this.state.text} onChange={this.handleTextChange} />
                <input type="submit"        value="post" />
            </div>
        );
    }
});