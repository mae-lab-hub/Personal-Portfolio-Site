/* 
File name      : app.js
Student’s Name : Asmae Allou  
StudentID      : 301159608
Date           : 29-09-21
*/

/* Outputs in console when page is loaded */ 


(function(){

    function Start()
    {
        console.log("App has started.....");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for (button of deleteButtons){

            button.addEventListener('click',(event)=>{

                if(!confirm("Are you sure?")){
                    event.preventDefault();
                    window.location.assign(window.location.href); 
                  
                    
                }
            });
        }

    }

    window.addEventListener("load", Start)


})();


