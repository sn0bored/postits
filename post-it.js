
var Board = function( selector ) {
  // Your board related code goes here
  
  // Use $elem to access the DOM element for this board

  var $elem = $( selector );
  
  function initialize() {
    this.PostItsGroup = []
    // What needs to happen when this object is created?
  };

  initialize();
};
// var Board = function() {
//   this.PostItsGroup = []
// }

// Board.prototype = {
//   addPostIt: function(PostIt) {
//     this.PostItsGroup.push(PostIt)
//   },
//   renderBoard: function() {
//     PostIt.renderPostIt();
//   }
// }

var PostIt = function() {
  // Your post-it related code goes here
  this.title = "";
  this.content = "";
  this.x_position = "";
  this.y_position = "";
};

PostIt.prototype = {
  renderPostIt: function() {
    this.domElement = $("<div class='post-it'></div>");
    var header = "<div class='header'>" + this.title + "<a href='#'> x </a></div>";
    var content = "<div class='content'>" + this.content + "</div>";
    this.domElement.append(header);
    this.domElement.append(content);
  }
}

$(function() {
  // Board.new('#board');
  // post.renderPostIt();

  $('.post-it').draggable();
  // This code will run when the DOM has finished loading
  
});

