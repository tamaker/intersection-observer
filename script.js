$(document).ready(function () {
   
   
   const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
         if(entry.isIntersecting) {

            const lazyImage = entry.target
            setTimeout(function(){
                  var newClr = '#'+getColor();
                  $(lazyImage).css('background-color', newClr);
                  console.log(newClr);
            }, 1000)
            
            
         }
      })
   });
   


   
   
   function getColor() {
      var randoColor = Math.floor(Math.random() * 16777215).toString(16);
     
      return Math.floor(Math.random() * 16777215).toString(16);
   }
   for (i = 0; i < 300; i++) {

      setTimeout(function(){
         $("#wrapper").append(
            '<div class="divBox" id="div' +
               i +
               '" style="background-color: null">' +
               i +
               "</div>"
         );
      }(i))

   }
      // LAZY LOAD IMAGES USING INTERSECTION OBSERVER API -- makes use of /js/lazyload_images.js
      $('.divBox').each(function(cdi, cdival){
         imageObserver.observe(cdival);
         console.log(cdi)
      })
   
});




