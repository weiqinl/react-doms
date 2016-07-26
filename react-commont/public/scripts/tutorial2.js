/**
 * Created by ruiyou on 2016/7/26.
 */

//为CommentList和CommentForm搭建骨架

var CommentList = React.createClass({
   render: function () {
       return (
           <div className="commentList">
               Hello, world! I am a CommentList;
           </div>
       );
   }
});

var CommentForm = React.createClass({
   render: function () {
       return (
           <div className="commentForm">
               Hello, world! I am a CommentForm;
           </div>
       );
   }
});