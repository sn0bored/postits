
var Board = function( selector ) {

  this.PostItsGroup = []
  var $elem = $( selector );
};

Board.prototype = {
  addPostIt: function() {
    var newone = new PostIt()
    this.PostItsGroup.push(newone);
  }
}

var PostIt = function() {
  this.content = ""
  // this.coord = $(this).position();
};

PostIt.prototype = {
  // updateposition: function(){
  //   this.coord = $(this).position();
  // };

  renderPostIt: function() {
    this.domElement = $("<div class='post-it'></div>");
    var header = "<div class='header'><a href='#'> x </a></div>";
    var content = "<div class='content'>" + this.content + "</div>";
    this.domElement.append(header);
    this.domElement.append(content);
    $('#board').append(this.domElement);
  }
}

$(function() {

  board = new Board('#board');
  
  $('.post-it .content').on('click', function(event){
    event.stopPropagation();
    console.log(this)
  })  

  $('#board').on('click', function(){
    board.addPostIt();
    // newone.renderPostIt()
    $('.post-it').draggable({ handle: ".header"})
  })
  
});

