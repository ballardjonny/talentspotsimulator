$(document).ready(function(){

   // jQuery methods go here...
    $('#titleinput').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#output1').text(txtBoxVal);   //assigns value to your div
    });

    $('#recruitername').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#recruiternameoutput').text(txtBoxVal);   //assigns value to your div
    });

    $('#companyname').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#companynameoutput').text(txtBoxVal);   //assigns value to your div
    });

    $('#messageinput').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#messageoutput').text(txtBoxVal);   //assigns value to your div
    });

    $('#spotdate').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#spotdateoutput').text(txtBoxVal);   //assigns value to your div
    });

    $('#spotlocation').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#spotlocationoutput').text(txtBoxVal);   //assigns value to your div
    });

    $('#rsvpdeadline').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#rsvpdeadlineoutput').text(txtBoxVal);   //assigns value to your div
    });



    $('#jcrole').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#jcroleoutput').text(txtBoxVal);   //assigns value to your div
    });
    $('#jcsalary').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#jcsalaryoutput').text(txtBoxVal);   //assigns value to your div
    });
    $('#jclocation').keyup(function(){   //triggers when keyup in textbox
         var txtBoxVal =$(this).val();
        $('#jclocationoutput').text(txtBoxVal);   //assigns value to your div
    });


});
