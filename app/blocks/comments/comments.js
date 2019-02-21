$('#send-comments').click (function () {
	var email = $('#email').val ();
	var name = $('#name').val ();
	var message = $('#msg').val ();
    $('.form-warrning__info').text ("");
	$.ajax({
		url:    	'send.php',
		type:		'POST',
		cache: 		false,
		data:   	{'name':name, 'email':email, 'msg':message},
		dataType:	'html',
		beforeSend: function () {
			$('#send-comments').attr("disabled", "disabled");
            $('.form-warrning__load').addClass("form-warrning_loader-show");
		},
		success: function(data) {
			if (data == true) {
				$('#name').val ("");
				$('#email').val ("");
				$('#msg').val ("");
				$('.form-warrning__info').text ("Сообщение отправлено");
				$('#email').css ("border-color", "#60fc8c");
				$('#name').css ("border-color", "#60fc8c");
				$('#msg').css ("border-color", "#60fc8c");
			} else {
				setTimeout(function () {
					if (data == false)
						$('.form-warrning__info').text ("Проблема в работе сервера.Повторте через несколько минут");
					else {
						switch (data) {
						case "Имя не указано":
						$('#name').css ("border-color", "#f7b4b4");
						$('.form-warrning__info').text ("Имя не указано");
						break;
						case "Сообщение не указано":
						$('#msg').css ("border-color", "#f7b4b4");
						$('.form-warrning__info').text ("Сообщение не указано");
						break;
						case "Неправильный e-mail":
						$('#email').css ("border-color", "#f7b4b4");
						$('.form-warrning__info').text ("Неправильный e-mail");
						default:
						$('#email').css ("border-color", "#f7b4b4");
						$('#msg').css ("border-color", "#f7b4b4");
						$('#name').css ("border-color", "#f7b4b4");
						$('.form-warrning__info').text ("Заполнитевсе поля");
						}
					}

            	}, 1000);
			}
			
			setTimeout(function () {
                $('#send-comments').removeAttr ("disabled");
                $('.form-warrning__load').removeClass("form-warrning_loader-show");
            }, 1000);
        },
        error:function(data) {
            setTimeout(function () {
                $('#send-comments').removeAttr ("disabled");
                $('.form-warrning__load').removeClass("form-warrning_loader-show");
            }, 1000);
            $('.form-warrning__info').text ("Проблема работы сервера");
        }
	});
});

let $textarea = $('.comments-form .form .form-right .input'),
$buttonComFormOtv = $(".msg-com__btn");

$buttonComFormOtv.on('click',function(e){
    e.preventDefault();
    $textarea.val($(this).data("usname")+", ");
    let destination = $('.comments-form').offset().top;
    $('html').animate({ scrollTop: destination }, 800);
});
