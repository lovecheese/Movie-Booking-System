/**
 * 
 */

$(document).ready(function() {
    
    /*  define variable */

    var httpRequest;

    drawLine_1();
    drawLine_2();
    drawLine_3();
    
    /*  Mouse Function*/


    $('.div_class_1').mouseenter(function() {
        $(this).css('border', '1px solid pink');
    });

    $('.div_class_1').mouseleave(function() {
        if ($(this).find('input').is(':focus')) {
            $(this).css('border', '1px solid pink');
        } else {
            $(this).css('border', '1px solid grey');
        }
    });

    $('.Register').mouseenter(function() {
        $(this).css('cursor', 'pointer');
    });

    $('.p_span').mouseenter(function() {
        $(this).css('cursor', 'pointer');
    });

    $('.Onchange').mouseenter(function() {
        $(this).css('cursor', 'pointer');
    });

    /*  Click Function  */


    $('input').click(function() {
        $('input').parents('.div_class_1').css('border', '1px solid grey');
        $(this).parents('.div_class_1').css('border', '1px solid pink');
    });

    $('.clear').click(function() {
        $(this).siblings('input').val("");
        $(this).siblings('input').focus();
        $(this).css('visibility', 'hidden');
    });

    $('.Onchange').click(function() {
        if($(this).text() == '邮箱验证') {
            $(this).parents('.Span_1').siblings('.div_class_1').children('.content')
                         .html('<span class="p_span_2">邮箱验证</span>');
            $(this).parents('.Span_1').siblings('.div_class_1').children('input').
                    attr('placeholder', '请输入邮箱');
            $(this).text('手机验证');
        } else if ($(this).text() == '手机验证') {
            $(this).parents('.Span_1').siblings('.div_class_1').children('.content')
                         .html('<span class="p_span_2">手机验证</span>');
            $(this).parents('.Span_1').siblings('.div_class_1').children('input').
                    attr('placeholder', '请输入手机号');
            $(this).text('邮箱验证');
        }
    });

    $('.p_span').click(function() {
        window.location.href = 'Login.html';
    });

    /*  Other  */


    $('input').focus(function() {
        $('input').parents('.div_class_1').css('border', '1px solid grey');
        $(this).parents('.div_class_1').css('border', '1px solid pink');
        $(this).attr('placeholder', '');
    });

    $('input').blur(function() {
        $(this).parents('.div_class_1').css('border', '1px solid grey');

        if ($(this).attr('id') == 'username') {
            $(this).attr('placeholder', '您的账号或用户名');
        } else if ($(this).attr('id') == 'password') {
            $(this).attr('placeholder', '建议至少使用两种字符组合');
        } else if ($(this).attr('id') == 'confirm_password') {
            $(this).attr('placeholder', '请重新输入密码');
        } else if ($('.Onchange').text() == '邮箱验证') {
            $(this).attr('placeholder', '请输入手机号');
        } else if ($('.Onchange').text() == '手机验证') {
            $(this).attr('placeholder', '请输入邮箱');
        }
    });

    $('#username').focus(function() {
            $(this).parents('.div_class_1').siblings('.Span_1').css('visibility', 'visible');
    　　　　});

    $('#username').blur(function() {
        $(this).parents('.div_class_1').siblings('.Span_1').css('visibility', 'hidden');
    });

    $('#password').focus(function() {
        $(this).parents('.div_class_1').siblings('.Span_1').css('visibility', 'visible');
    });

    $('#password').blur(function() {
        $(this).parents('.div_class_1').siblings('.Span_1').css('visibility', 'hidden');
    });

    $('#confirm_password').focus(function() {
        $(this).parents('.div_class_1').siblings('.Span_1').css('visibility', 'visible');
    });

    $('#confirm_password').blur(function() {
         if ($(this).attr('id') == 'confirm_password') {
            if ($('#confirm_password').val() != "") {
                if ($('#confirm_password').val() != $('#password').val()) {
                    $(this).parents('.div_class_1').css('border', '1px solid red');
                    $(this).parents('.div_class_1').siblings('.Span_1')
                　　　　　　　.html('<span>两次输入密码不一致</span>');
                    $(this).parents('.div_class_1').siblings('.Span_1')
                       .css('color', 'red');
                } else {
                    $(this).parents('.div_class_1').siblings('.Span_1')
                           .css('visibility', 'hidden');
                    $(this).siblings('.clear').css('background-image',
                                  'url(../../Image/Icon_check_1.png)')
                }
            } else {
                $(this).parents('.div_class_1').siblings('.Span_1').css('visibility', 'hidden');
                $(this).parents('.div_class_1').siblings('.Span_1')
                　　　　　　　.html('<span>请再次输入密码</span>');
                $(this).parents('.div_class_1').siblings('.Span_1')
                       .css('color', 'grey');
            }
        }
        
    });

    $('#contact').focus(function() {
        if ($('.Onchange').text() == '手机验证') {
            $(this).parents('.div_class_1').siblings('.Span_1').children('.Span_2')
               .html('<span>通过验证后，你可以使用该邮箱登录和找回密码</span>');
        } else {
            $(this).parents('.div_class_1').siblings('.Span_1').children('.Span_2')
               .html('<span>通过验证后，你可以使用该手机号登录和找回密码</span>');
        }
        $(this).parents('.div_class_1').siblings('.Span_1').children('.Span_2')
               .css('visibility', 'visible');
    });

    $('#contact').blur(function() {
        $(this).parents('.div_class_1').siblings('.Span_1').children('.Span_2')
               .css('visibility', 'hidden');
    });

    $('#username').bind('input propertychange', function() {
        var value = $('#username').val();
        if (value != "") {
            $(this).siblings('.clear').css('visibility', 'visible');
            $(this).parents('.div_class_1').siblings('.Span_1')
                   .html('<span>支持中文、字母、数字、"_"的组合, 6-20个字符</span>');
            $(this).parents('.div_class_1').siblings('.Span_1').css('color', 'grey');
        } else {
            $(this).siblings('.clear').css('visibility', 'hidden');
        }
    });

    $('#password').bind('input propertychange', function() {
        var value = $('#password').val();
        if (value != "") {
            $(this).siblings('.clear').css('visibility', 'visible');
            $(this).parents('.div_class_1').siblings('.Span_1')
                   .html('<span>建议使用数字、字母和符号两种或以上的组合, 6-20个字符</span>');
            $(this).parents('.div_class_1').siblings('.Span_1').css('color', 'grey');
        } else {
            $(this).siblings('.clear').css('visibility', 'hidden');
        }

    });

    $('#confirm_password').bind('input propertychange', function() {
        var value = $('#confirm_password').val();
        if (value != "") {
            $(this).siblings('.clear').css('visibility', 'visible');
            $(this).parents('.div_class_1').siblings('.Span_1')
                   .html('<span>请再次输入密码</span>');
            $(this).parents('.div_class_1').siblings('.Span_1').css('color', 'grey');
        } else {
            $(this).siblings('.clear').css('visibility', 'hidden');
        }
    });

    $('#contact').bind('input propertychange', function() {
        var value = $('#contact').val();
        if (value != "") {
            $(this).siblings('.clear').css('visibility', 'visible');
            if ($('.Onchange').text() == "邮箱验证")　{
                $(this).parents('.div_class_1').siblings('.Span_1').children('.Span_2')
                   .html('<span>完成验证后，你可以使用该手机号登录和找回密码</span>');
            } else {
                $(this).parents('.div_class_1').siblings('.Span_1').children('.Span_2')
                   .html('<span>完成验证后，你可以使用该邮箱登录和找回密码</span>');
            }
            $(this).parents('.div_class_1').siblings('.Span_1').children('.Span_2')
                   .css('color', 'grey');
        } else {
            $(this).siblings('.clear').css('visibility', 'hidden');
        }
    });

    /*  Ajax  */

    $('.Register').click(function(e) {
        var verify = true;
        if ($('#username').val() == "") {
            verify = false;
            $('#username').parents('.div_class_1').css('border', '1px solid red');
            $('#username').parents('.div_class_1').siblings('.Span_1')
                          .css('visibility', 'visible');
            $('#username').parents('.div_class_1').siblings('.Span_1')
                        　　.html('<span>账号不能为空</span>');
            $('#username').parents('.div_class_1').siblings('.Span_1')
                   .css('color', 'red');
        }
        if ($('#password').val() == "") {
            verify = false;
            $('#password').parents('.div_class_1').css('border', '1px solid red');
            $('#password').parents('.div_class_1').siblings('.Span_1')
                          .css('visibility', 'visible');
            $('#password').parents('.div_class_1').siblings('.Span_1')
                   　　　　　　　.html('<span>密码不能为空</span>');
            $('#password').parents('.div_class_1').siblings('.Span_1')
                   .css('color', 'red');

        }
        if ($('#confirm_password').val() == "" || ($('#confirm_password').val()
                               != $('#password').val())) {
            verify = false;
            $('#confirm_password').parents('.div_class_1').css('border', '1px solid red');
            $('#confirm_password').parents('.div_class_1').siblings('.Span_1')
                          .css('visibility', 'visible');  
        }
        if ($('#contact').val() == "") {
            verify = false;
            $('#contact').parents('.div_class_1').css('border', '1px solid red');
            $('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2')
                          .css('visibility', 'visible');
            if ($('.Onchange').text() == '邮箱验证')　{
                $('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2')
                   .html('<span>手机号不能为空</span>');
            } else if ($('.Onchange').text() == '手机验证'){
                $('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2')
                   .html('<span>邮箱不能为空</span>');
            }
            $('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2')
                   .css('color', 'red');
        }
        if (verify == true) {
            e.preventDefault();
            var form = document.getElementById("form_1");
            var formData = new FormData(form);
            httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange=handleResponse;
           // httpRequest.setRequestHeader("Cache-Control", "no-cache");
            httpRequest.open("POST", "http://localhost:8081/Movie_Ticket/Register", true);
            httpRequest.send(formData);
        }
    });

    
    function handleResponse(e)  {  // e                      处理COOKIES
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            if (httpRequest.responseText == "1")　{
            	$('#username').parents('.div_class_1').siblings('.Span_1').css('visibility', 'visible');
            	$('#username').parents('.div_class_1').css("border", "1px solid red");
                $('#username').parents('.div_class_1').siblings('.Span_1').html("<span>该用户已注册</span>");
                $('#username').parents('.div_class_1').siblings('.Span_1').css('color', 'red');
            } else if (httpRequest.responseText == "2") {
            	$('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2').css('visibility', 'visible');
            	$('#contact').parents('.div_class_1').children('.Span_2').css("border", "1px solid red");
                $('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2').html("<span>该手机号已注册</span>");
                $('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2').css('color', 'red');
            } else if (httpRequest.responseText == "3") {
            	$('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2').css('visibility', 'visible');
            	$('#contact').parents('.div_class_1').children('.Span_2').css("border", "1px solid red");
                $('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2').html("<span>该邮箱已注册</span>");
                $('#contact').parents('.div_class_1').siblings('.Span_1').children('.Span_2').css('color', 'red');
            } /*else if (httpRequest.responseText == "OK_1" || httpRequest.responseText == "OK_2") {
            	 alert("注册成功");
            	 window.location.href = "../HTML/HomePage.html";
           }*/
        }
    }

    /*  Function  */

    function drawLine_1() {
        var tex = document.getElementById('canvas1').getContext('2d');
        var Height = $('#canvas1').height();
        var Width = $('#canvas1').width();
        var point1_x = 0;
        var point1_y = 0.9 * Height;
        var point2_x = Width;
        var point2_y = 0.9 * Height;

        tex.lineWidth = 40;
        tex.strokeStyle = 'rgba(210, 206, 206, 0.5)';
        tex.shadowColor = '#C3BDBD';
        tex.shadowBlur = 50;
        tex.shadowOffsetX = 0;
        tex.shadowOffsetY = 25;

        tex.beginPath();
        tex.moveTo(point1_x, point1_y);
        tex.lineTo(point2_x, point2_y);
        tex.closePath();

        tex.stroke(); 
    }

    function drawLine_2() {
        var Height = $('.middle_class').height();
        var Width = $('.middle_class').width();

        $('.middle_class').html('<canvas id="canvas2" width="20"></canvas>');
        $('#canvas2').height(Height);
        var tex = document.getElementById('canvas2').getContext('2d');
        
        tex.strokeStyle = '#ADA0A0';
        tex.translate(1.0, 0.5);
        tex.lineWidth = 1; 
        
        tex.beginPath();
        tex.moveTo(19, 0);
        tex.lineTo(19, Math.abs(Height));
        tex.closePath();
        
        tex.stroke();
        
    }

    function drawLine_3() {
        $('.line_class_1').html('<canvas id="canvas3" width="190" height="50"></canvas>');

        var tex = document.getElementById('canvas3').getContext('2d');

        tex.strokeStyle = '#ADA0A0';
        tex.lineWidth = 1;
        tex.translate(0.5, 0.5);

        tex.beginPath();
        tex.moveTo(0, 15);
        tex.lineTo(190, 15);
        tex.closePath();
        tex.stroke();
    }

  /* function test_regular_expression(username) {
        var pattern = /^[\u4eoo-\u9fa5a-zA-Z0-9_]+$/;
    }*/


});