/**
 * Created by ruiyou on 2016/7/26.
 */

var CommentList = React.createClass({
   render: function () {
       var commentNodes = this.props.data.map(function (comment) {
           return (
               <Comment author={comment.author}>
                   {comment.text}
               </Comment>
           );
       });
       return (
           <div className="commentList">
               {commentNodes}
           </div>
       );
   }
});

ReactDOM.render(
    <CommentList data={data} />,
    document.getElementById('content')
);