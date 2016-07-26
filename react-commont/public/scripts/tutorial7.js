/**
 * Created by ruiyou on 2016/7/26.
 */

//sanitize: true ，
// 告诉 marked 转义掉评论文本中的 HTML 标签而不是直接原封不动地返回这些标签。

var Comment = React.createClass({
   rawMarkup: function () {
       var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
       return { _html: rawMarkup };
   },
   render: function () {
       return (
         <div className="comment">
             <h1 className="commentAuthor">
                 {this.props.author}
             </h1>
             <span dangerouslySetInnerHTML={this.rawMarkup()} />
         </div>
       );
   }
});