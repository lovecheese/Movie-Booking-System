/**
 * 
 */

$(document).ready(function() {

	/*  Variable  */
	
	var httpRequest;
	
	
	/*   Mouse Function   */

    $('.div_class_1, .div_class_2').mouseenter(function() {
    	$(this).css('border', '1px solid pink');
    });

    $('.div_class_1, .div_class_2').mouseleave(function() {
        if ($(this).find('input').is(':focus')) {
        	$(this).css('border', '1px solid pink');
        } else {
        	$(this).css('border', '1px solid grey');
        }
    });

    $('.Register').mouseenter(function() {
    	$(this).addClass('add');
    	$('.Submit').css('color', 'grey');
    });

    $('.Register').mouseleave(function() {
    	$(this).removeClass('add');
    	$('.Submit').css('color', '#EB1A12');
    });

    $('.p_class').mouseenter(function() {
    	$(this).addClass('p_class_add');
    	$(this).css('cursor', 'pointer');
    	$('.Submit').css('color', 'grey');
    });

    $('.p_class').mouseleave(function() {
    	$(this).removeClass('p_class_add');
    	$('.Submit').css('color', '#EB1A12');
    });


    /*  Click Function  */


    $('.Register').click(function() {
    /*$(this).adjustsImageWhenHighlighted('NO');*/  //点击按钮时按钮会跳动--解决方案一:自己设计一个按钮
    	window.location.href='Register.html';
    });

    $('.p_class').click(function() {
    	window.open('ForgetPassword.html');
    });

    $('.image_class').click(function() {
    	$(this).siblings('.Input').val("");
    	$(this).css('visibility', 'hidden');
    	$(this).siblings('.Input').focus();
    });

    
    /*   Ajax  */
    
    $('.Submit').click(function(e) {
    	    var flag = true;
    	    if ($("#username").val() == "") {
    	    	   flag = false;
    	    	   $("#username").parents(".div_class_1").css("border", "1px solid red");
    	    	   $(".Span_1").css("visibility", "visible");
    	    	   $(".Span_1").html("<span class = 'p_input_class'>用户框内不能为空</span>");
    	    }
    	    if ($("#password").val() == "") {
    	    	   flag = false;
    	    	   $("#password").parents(".div_class_2").css("border", "1px solid red");
    	    	   $(".Span_2").css("visibility", "visible");
    	    	   $(".Span_2").html("<span class = 'p_input_class'>密码框内不能为空</span>");
    	    }
    	    
    	    if (flag == true) {
    	    	e.preventDefault();
                var form = document.getElementById("form_1");
                var formData = new FormData(form);
                httpRequest = new XMLHttpRequest();
                httpRequest.onreadystatechange=handleResponse;
        	    httpRequest.open("POST", "http://localhost:8081/Movie_Ticket/Login", true);
        	    httpRequest.send(formData);
    	    };
    });
    
    function handleResponse() {
    	  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    		    /*if (httpRequest.responseText == "OK") {
    		    	  window.location.href = "../HTML/HomePage.html";
    		    } else  */if (httpRequest.responseText == "u_n_e") {
    		    	   $(".Span_1").css("visibility", "visible");
    		    	   $(".Span_1").html("<span class = 'p_input_class'>用户不存在</span>");
    		    } else if (httpRequest.responseText == "p_w") {
    		    	  // TODO
    		    	$(".Span_2").css("visibility", "visible");
    		    	$(".Span_2").html("<span class = 'p_input_class'>密码错误</span>");
    		    }
    	  } else if (httpRequest.readyState == 4 && httpRequest.status == 404) {
    		      window.location.href = "../HTML/Error404.html";   //// TODO  
    	  } else if (httpRequest.readyState == 4 && httpRequest.status == 500) {
    		    /// TODO
    	  } 
    }
    
    /*  Other  */

    $('#username').focus(function() {
    	$(this).parents('.div_class_1').css('border', '1px solid pink');
    	$('.Span_1').css('visibility', 'hidden');
    });

    $('#password').focus(function() {
    	$(this).parents('.div_class_2').css('border', '1px solid pink');
    	$('.Span_2').css('visibility', 'hidden');
    });

    $('#username').blur(function() {
    	$(this).parents('.div_class_1').css('border','1px solid grey');
    });

    $('#password').blur(function() {
    	$(this).parents('.div_class_2').css('border','1px solid grey');
    });

    $('#username').bind('input propertychange', function() {
    	var value = $('#username').val();
    	if (value != "") {
    		$(this).siblings('.image_class').css('visibility', 'visible');
    	} else {
    		$(this).siblings('.image_class').css('visibility', 'hidden');
    	}
    });

    $('#password').bind('input propertychange', function() {
    	var value = $('#password').val();
    	if (value != "") {
    		$(this).siblings('.image_class').css('visibility', 'visible');
    	} else {
    		$(this).siblings('.image_class').css('visibility', 'hidden');
    	}
    });


    /*  Function  */

});