/**
 * Created by ruiyou on 2016/7/27.
 */

//当用户提交表单的时候，在 CommentForm 中调用这个回调函数：
var CommentForm = React.createClass({
   handleSubmit: function (e) {
       e.preventDefault();
       var author = this.refs.author.value.trim();
       var text = this.refs.text.value.trim();
       if (!text || !author ) {
           return;
       }
       this.props.onCommentSubmit = {author: author, text: text};
       this.refs.author.value = '';
       this.refs.text.value = '';
       return;
   },
    render: function () {
        return (
            <div className="commentForm" onSubmit={this.handleSubmit} >
                <input type="text" placeholder="You Name" ref="author" />
                <input type="text" placeholder="Say something……" ref="text"/>
                <input type="submit" value="post" />
            </div>
        );
    }
});