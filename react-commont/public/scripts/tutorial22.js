/**
 * Created by ruiyou on 2016/7/28.
 */

var Comment = React.createClass({
   rawMarkup: function () {
       var md = new Remarkable();
       var rawMarkup = md.render(this.props.children.toString());
       return { _html: rawMarkup };
   },
    render: function () {
        return (
          <div className="comment">
              <h2 className="commentAuthor">
                  {this.props.author}
              </h2>
              <span dangerouslySetInnerHTML={this.rawMarkup()} />
          </div>
        );
    }
});