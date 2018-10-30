$(document).ready(function(){

   // jQuery methods go here...
    $('#titleinput').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#output1').text(txtBoxVal);   //assigns value to your div
    });

    $('#messageinput').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#messageoutput').text(txtBoxVal);   //assigns value to your div
    });

});
