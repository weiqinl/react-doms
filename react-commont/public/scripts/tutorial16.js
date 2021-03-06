/**
 * Created by ruiyou on 2016/7/27.
 */

var CommentForm = React.createClass({
   handleSubmit: function (e) {
       e.preventDefault();
       var author = this.refs.author.value.trim();
       var text = this.refs.text.value.trim();
       if (!text || !author ) {
           return;
       }
       this.refs.author.value = '';
       this.refs.text.value = '';
       return;
   },
    render: function () {
        return (
          <form className="commentForm" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="You name" ref="author" />
              <input type="text" placeholder="Say something……" ref="text"/>
              <input type="submit" value="post"/>
          </form>
        );
    }
});