

        function colorBlack(){
            let bcol=confirm("WOULD YOU LIKE TO ACTIVATE DARK MODE?");
            if (bcol==true) {
                document.body.style.background="black";
                document.querySelectorAll('a')[0].style.color="white";
            }
            else{
                
            }
            
            
           
        }
        function colorWhite(){
            let wcol=confirm("WOULD YOU LIKE TO ACTIVATE LIGHT MODE?");

            if (wcol==true) {

                document.body.style.background="white";
                document.querySelectorAll('a')[0].style.color="rgba(7, 7, 7, 0.638)";
                
            }
            else{

            }
           
            
           
        }