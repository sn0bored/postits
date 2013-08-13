
var Board = function( selector ) {
  this.postItsGroup = []
  var $elem = $( selector );
};

Board.prototype = {
  addpostIt: function(postIt) {
    this.postItsGroup.push(postIt);
  },

  deletepostIt: function(postIt) {
    var i = this.postItsGroup.indexOf(postIt);
    this.postItsGroup.splice(i,1)
 }
}

var postIt = function() {
  this.content = ""
  // this.coord = $(this).position();
};

postIt.prototype = {
  // updateposition: function(){
  //   this.coord = $(this).position();
  // };

  renderpostIt: function(location) {
    this.domElement = $("<div class='post-it'></div>");
    var header = "<div class='header'><a href='#'> x </a></div>";
    var content = "<div class='content'>" + this.content + "</div>";
    this.domElement.append(header);
    this.domElement.append(content);
    this.domElement.position({
      of: event
    });
    $('#board').append(this.domElement);
  },

  renderContent: function(postIt) {
    this.content = postIt.val()

  }
}

$(function() {

  board = new Board('#board');
  
   $('#board').on('click', '.content', function(event){
     event.stopPropagation();
   })  

  $('#board').on('click', function(e){
    var newone = new postIt()
    board.addpostIt(newone);
    newone.renderpostIt(e);
    $('.post-it').draggable({ handle: ".header"})
  })
  
 $('#board').on('click', 'a', function(event){
    event.stopPropagation();
    console.log('delete post')
    board.deletepostIt($(this).closest('.post-it'))
    $(this).closest('.post-it').remove();
  });

 
  
});

