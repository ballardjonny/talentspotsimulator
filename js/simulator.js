$(document).ready(function(){
    $('#titleinput').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#output1').text(txtBoxVal);
    });
    $('#recruitername').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#recruiternameoutput').text(txtBoxVal);
    });
    $('#companyname').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#companynameoutput').text(txtBoxVal);
    });
    $('#messageinput').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#messageoutput').text(txtBoxVal);
    });
    $('#spotdate').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#spotdateoutput').text(txtBoxVal);
    });
    $('#spotlocation').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#spotlocationoutput').text(txtBoxVal);
    });
    $('#rsvpdeadline').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#rsvpdeadlineoutput').text(txtBoxVal);
    });
    $('#jcrole').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#jcroleoutput').text(txtBoxVal);
    });
    $('#jcsalary').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#jcsalaryoutput').text(txtBoxVal);
    });
    $('#jclocation').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#jclocationoutput').text(txtBoxVal);
    });
    $('#pushnotification').keyup(function(){
         var txtBoxVal =$(this).val();
        $('#pushnotificationoutput').text(txtBoxVal);
    });
});
