
for (var i= 0; i < document.querySelectorAll(".bi").length; i++){
    document.querySelectorAll(".bi")[i].addEventListener("click", handleClicked);
    function handleClicked(){
        this.style.color ="white";

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "A":
                var audio = new Audio("sounds/s1.mp3");
                audio.play();     
                break;
            case "B":
                var audio = new Audio("sounds/s2.mp3");
                audio.play();     
                break; 

            case "C":
                var audio = new Audio("sounds/s3.mp3");
                audio.play();     
                break;       
            
            case "D":
                 var audio = new Audio("sounds/s4.mp3");
                audio.play();     
                break; 
                
            case "E":
                var audio = new Audio("sounds/s5.mp3");
                audio.play();     
                break;



            default:
                this.innerHTML
        }


      



}
}


















// var audio = new Audio("sounds/s1.mp3");
// audio.play();
