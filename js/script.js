/*          sorry for this code          */
/* may the js gods have mercy on my soul */
function changeBackground(){
  var leftGifs = document.getElementById("left-gifs");
  var rightGifs = document.getElementById("right-gifs");

  var regexp = /dogeSidebar(\d)/;
  var background_src = leftGifs.style.background;
  var background_count = parseInt(regexp.exec(background_src)[1]);
  
  // make sure we select the correct new bg
  var new_bg_cnt = background_count+1;
  if( background_count == 5 ){
    new_bg_cnt = 1;
  }

  // replace the number of the background in the src
  var new_bg_src = background_src.replace(background_count, new_bg_cnt);

  leftGifs.style.background=new_bg_src;
  leftGifs.style.backgroundSize="100%";
  rightGifs.style.background=new_bg_src;
  rightGifs.style.backgroundSize="100%";
}
