/*==========================================================

                    CONTACT FORM

===========================================================*/

 $(document).ready(function(){
    $("#btn").click(function(){

        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();
        var url = "./php_mailer/mail_handler.php"; // the script where you handle the form input.

        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "" || user_name == " ") {
            $('input[name=name]').css('border-color', '#e41919');
            $('.form-tip').css('color', '#fa225b');
            proceed = false;
        }
        if (user_email == "" || user_name == " ") {
            $('input[name=email]').css('border-color', '#e41919');
            $('.form-tip').css('color', '#fa225b');
            proceed = false;
        }

        if (user_message == "" || user_name == " ") {
            $('textarea[name=message]').css('border-color', '#fa225b');
            $('.form-tip').css('color', '#fa225b');
            proceed = false;
        }
        var atpos = user_email.indexOf("@");
        var dotpos = user_email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=user_email.length) {
            $('input[name=email]').css('border-color', '#fa225b');
            $('.form-tip').css('color', '#fa225b');
            proceed = false;
        }

        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userMessage': user_message
            };
            //Ajax post data to server
            $.ajax({
                type: "POST",
                url: url,
                data: $("#contactForm").serialize(), // serializes the form's elements.
                success: function (data) {
                    $('#contactForm').closest('form').find('input[type=text], textarea').val('');
                    $('#contactForm').closest('form').find('input[type=email], textarea').val('');
                    $('.modal-title').text('Thank You!');
                    $('.modal-body > p').text('Your message has been sent successfully.');
                    $("#contactModal").modal('show');
                },
                error: function(response){
                    $('.modal-title').text('Oops!');
                    $('.modal-body > p').text('There seemed to be an error. Please try again.');
                    $("#contactModal").modal('show');
                }
            });
        }

        return false;
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contactForm input, #contactForm textarea").keyup(function(){
        $("#contactForm input, #contactForm textarea").css('border-color', '');
        $('.form-tip').css('color', '');
    });

});