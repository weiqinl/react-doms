/**
 * Created by ruiyou on 2016/7/26.
 */
var CommentBox = React.createClass({
   getInitialState: function () {
       return {data: []};
   } ,
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