/*          sorry for this code          */
/* may the js gods have mercy on my soul */
function changeBackground(){
  var regexp = /(\d+)(?!.*\d)/;
  var background_src = document.getElementById("left-gifs").style.background;
  var background_count = parseInt(regexp.exec(background_src)[0]);
  var new_bg_cnt = background_count+1;
  if( background_count == 4 ){
    new_bg_cnt = 1;
  }
  var new_bg_src = background_src.replace(background_count, new_bg_cnt);

  document.getElementById("left-gifs").style.background=new_bg_src;
  document.getElementById("left-gifs").style.backgroundSize="100%";
  document.getElementById("right-gifs").style.background=new_bg_src;
  document.getElementById("right-gifs").style.backgroundSize="100%";
}
