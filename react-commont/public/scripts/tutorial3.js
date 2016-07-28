/**
 * Created by ruiyou on 2016/7/26.
 */

var CommentBox = React.createClass({
   render: function () {
       return (
         <div className="commentBox">
             <h1>Comments</h1>
             <CommentList />
             <CommentForm />
         </div>
       );
   }
});