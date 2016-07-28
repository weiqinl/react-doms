/**
 * Created by ruiyou on 2016/7/26.
 */
var Comment = React.createClass({
   render: function () {
       return (
         <div className="comment">
             <h2 className="commentAuthor">
                 {this.props.author}
             </h2>
             {marked(this.props.children.toString())}
         </div>
       );
   }
});