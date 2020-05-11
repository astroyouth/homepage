
$(".leadMessage").click(function(){
    
    if($(this).html ="BLUEMARBLE<span>/</span>WEB<span>/</span>DESIGN"){
        $(this).html("ALEX<span>/</span>DALE<span>/</span>ROCKS");
        console.log("A")
    }
    else if($(this).html ="ALEX<span>/</span>DALE<span>/</span>ROCKS"){
        $(this).html("BLUEMARBLE<span>/</span>WEB<span>/</span>DESIGN");
        console.log("B")
    }
   
})
$(".leadMessage").on("mouseenter", function(){
        $(this).css("fontWeight", "bold");
})
$(".leadMessage").on("mouseleave", function(){
    $(this).css("fontWeight", "normal");
})

var blurredImages = $( 'img' );

blurredImages.on( "mouseenter", function () {
  $( this ).addClass( "blurImage" );
})

blurredImages.on( "mouseleave", function () {
  $( this ).removeClass( "blurImage" );
})
