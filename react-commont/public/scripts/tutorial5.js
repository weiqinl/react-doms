/**
 * Created by ruiyou on 2016/7/26.
 */

var CommentList = React.createClass({
   render: function () {
       return (
         <div className="commentList">
             <Comment author="lwq">This is one comment</Comment>
             <Comment author="Pete Hunt">This is *another* comment</Comment>
         </div>
       );
   }
});