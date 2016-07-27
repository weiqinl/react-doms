/**
 * Created by ruiyou on 2016/7/27.
 */
var CommentForm = React.createClass({
   render: function () {
       return (
         <form className="commentForm">
             <input type="text" placeholder="Your name"/>
             <input type="text" placeholder="Say something..."/>
             <input type="button" value="post" />
         </form>
       );
   }
});