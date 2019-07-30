var count = 0;
function allowDrop(ev){
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var thetag = ev.target.nodeName;
var theanswer = ev.target.className;
var data=ev.dataTransfer.getData("Text");
  if(thetag == "TERM"){
    null;
  }
  else{
    ev.target.appendChild(document.getElementById(data));
    checkAnswer(data, theanswer);
  }

}

function checkAnswer(theterm, theiranswer){
  var stripped = theterm.replace('drag', '');
  var _0xc89b=["","\x62\x6F\x74\x68","\x61\x6E\x73\x31","\x61\x6E\x73\x32"];var theanswers=[_0xc89b[0],_0xc89b[1],_0xc89b[2],_0xc89b[3],_0xc89b[2],_0xc89b[2],_0xc89b[2],_0xc89b[3],_0xc89b[2],_0xc89b[1],_0xc89b[3]];
  if(theiranswer == theanswers[stripped]){
    count++;
    $("#"+theterm+" wr").remove();
    $('#'+theterm).append(" <r>&#x2713;</r>");
    $('#'+theterm).css( 'cursor', 'default' );
    $("#"+theterm).droppable({
      drop: function( event, ui ) {
        $( this ).html( $( event.originalTarget ).html() );
        $( ui.draggable ).draggable( "destroy" );
      }
    });
    $('#'+theterm).on('dragstart', function(event) { event.preventDefault(); });
  }
  else if(theiranswer=="box"){
    null;
  }
  else{
    $("#"+theterm+" wr").remove();
    $('#'+theterm).append(" <wr>&#x2717;</wr>");
  }
  if(count==10){
    $('.box').html("<h3>You Win</h3>");
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    if(isFirefox==true){
      $('#replay').css( "display", "block");
      $('#replay').css("margin-top", "200px");
      $('#replay').css("margin-left", "44%");
    }
    else{
      $('#win').css( "display", "block");
      restartbutton();
    }
  }
}

function restartbutton(){
  setTimeout(function() {
    //$('#win').hide();
    $('#replay').css( "display", "block");
  },2000);
}


function restartgame(){
  alert("This button will restart the game");
  //window.location.reload();
}
