"use strict";

var App = function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      "div",
      { className: "content-wrapper" },
      React.createElement(
        "div",
        { className: "hero" },
        React.createElement(
          "div",
          { className: "quote" },
          React.createElement(
            "p",
            { className: "quote-author" },
            "MARK MANSON"
          ),
          React.createElement(
            "h1",
            { className: "title" },
            "THE",
            React.createElement("br", null),
            " DARK SIDE ",
            React.createElement("br", null),
            "OF THE ",
            React.createElement("br", null),
            " DIGITAL ",
            React.createElement("br", null),
            "NOMAD"
          ),
          React.createElement(
            "div",
            { className: "quote-button" },
            "TRAVEL"
          )
        )
      ),
      React.createElement(Content, null)
    ),
    React.createElement(Pagination, null),
    React.createElement(CommentPage, null)
  );
};

var Content = function Content() {
  return React.createElement(
    "div",
    { className: "article-wrapper" },
    React.createElement(
      "p",
      null,
      " The following is the original piece I wrote for CNN last year about location independent entrepreneurs, also known as “digital nomads.” Since the whole “Work Online, Travel the World and Live the Dream” angle had been done to death in a million places, I decided to go the other direction and show the dark side of being a digital nomad — the challenges one faces, the emotional pitfalls, the social sacrifices."
    ),
    React.createElement(
      "p",
      null,
      "Predictably, CNN hated it. The editors hacked it to pieces and asked me to rewrite sections to make it less gloomy. And since they’re CNN and I’m just an asshole with a book about smut, I said OK."
    )
  );
};

var Pagination = function Pagination() {
  function closeCommentPage(e) {
    console.log('comment page is showing');
    var commentWrapperEle = document.querySelector('.comment-wrapper');
    commentWrapperEle.classList.add('is-show');
  }

  return React.createElement(
    "div",
    { className: "pagination" },
    React.createElement(
      "div",
      null,
      "CLOSE"
    ),
    React.createElement(Bubbles, null),
    React.createElement("i", { onClick: closeCommentPage, className: "pagination-comment fa fa-comment-o", "aria-hidden": "true" })
  );
};

var CommentPage = function CommentPage() {
  function showCommentPage(e) {
    var commentWrapperEle = document.querySelector('.comment-wrapper');
    commentWrapperEle.classList.remove('is-show');
  }
  return React.createElement(
    "div",
    { className: "comment-wrapper" },
    React.createElement("i", { onClick: showCommentPage, className: "close-comment-page fa fa-times", "aria-hidden": "true" }),
    React.createElement(
      "p",
      null,
      " COMMENTS (45) "
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        { className: "comment" },
        React.createElement(
          "div",
          { className: "comment-profile" },
          React.createElement("i", { className: "fa fa-user fa-4x", "aria-hidden": "true" })
        ),
        React.createElement(
          "div",
          { className: "comment-content" },
          React.createElement(
            "div",
            { className: "comment-owner" },
            React.createElement(
              "strong",
              null,
              "jonathandunn"
            ),
            " • 3 hours ago"
          ),
          React.createElement(
            "div",
            { className: "comment-detail" },
            "Good point! There are travel bloggers. Then there are freelancers: coders mainly."
          )
        )
      ),
      React.createElement(
        "li",
        { className: "comment" },
        React.createElement(
          "div",
          { className: "comment-profile" },
          React.createElement("i", { className: "fa fa-user fa-4x", "aria-hidden": "true" })
        ),
        React.createElement(
          "div",
          { className: "comment-content" },
          React.createElement(
            "div",
            { className: "comment-owner" },
            React.createElement(
              "strong",
              null,
              "jonathandunn"
            ),
            " • 3 hours ago"
          ),
          React.createElement(
            "div",
            { className: "comment-detail" },
            "Good point! There are travel bloggers. Then there are freelancers: coders mainly."
          )
        )
      )
    )
  );
};

var Bubbles = function Bubbles() {
  var handleClick = function handleClick(e) {
    e.preventDefault();
    var contentWrapperEle = document.querySelector('.content-wrapper');
    var bubblesEle = document.querySelectorAll('.bubble');
    bubblesEle.forEach(function (b, i) {
      if (b == e.target) {
        contentWrapperEle.style.right = i * 100 + 'vw';
      } else {
        b.classList.remove('is-active');
      }
    });
    e.target.classList.add('is-active');
  };

  return React.createElement(
    "div",
    { className: "bubbles" },
    React.createElement("span", { onClick: handleClick, className: "bubble is-active" }),
    React.createElement("span", { onClick: handleClick, className: "bubble" })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));