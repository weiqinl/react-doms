/**
 * Created by ruiyou on 2016/7/26.
 */
//我们通过 this.props 来访问传入组件的数据，键名就是对应的命名属性，
// 也可以通过 this.props.children 访问组件内嵌的任何元素。

var Comment = React.createClass({
   render: function () {
       return (
         <div className="comment">
             <h2 className="commentAuthor">
                 {this.props.author}
             </h2>
             {this.props.children}
         </div>
       );
   }
});