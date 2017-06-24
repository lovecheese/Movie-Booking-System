$(document).ready(function() {
	var count = 0;
	var per_price = 45;

	var myArray = new Array();
	index = 0;

	/*  Mouse Function  */

	



	/*  Click Function */

	$('.seat div ul li').click(function() {
		if ($(this).children('img').attr('src') == '../../Image/Icon_seat_2.png') {
			if (count >= 4) {
				alert("每个订单最多选择4个座位");
			} else {
				$(this).children('img').attr('src', '../../Image/Icon_seat_3.png');
				count++;
				var title = $(this).children('img').attr('title');
				var obj = document.getElementById('span2');
				var obj1 = document.getElementById('span3');
				var obj2 = document.getElementById('span1');
				var str = document.getElementById('span1').innerHTML;
				myArray[myArray.length] = title;
				obj.innerHTML = count;
				obj1.innerHTML = "￥" + count * 45;
				if (count > 0) {
					$('#span3').css('visibility', 'visible');
				}

				if (str == "") {
					obj2.innerHTML = title;
				} else {
					obj2.innerHTML = str + " " + title;
				}
			}
		} else if ($(this).children('img').attr('src') == '../../Image/Icon_seat_3.png') {
			$(this).children('img').attr('src', '../../Image/Icon_seat_2.png');
			count--;
			var title = $(this).children('img').attr('title');
			var obj = document.getElementById('span2');
			var obj1 = document.getElementById('span3');
			var obj2 = document.getElementById('span1');
			var str = document.getElementById('span1').innerHTML;
			
			RemovebyValue(myArray, title);

			obj.innerHTML = count;
			obj1.innerHTML = "￥" + count * 45;
			if (count == 0) {
				$('#span3').css('visibility', 'hidden');
			}

			obj2.innerHTML = str.replace(title, "");
		}
	});


	$('.button').click(function() {
		if (document.getElementById('span2').innerHTML == "0") {
			alert("请选择购买电影票");
		} else {
			$('.shelter').css('display', 'block');
			$('.show').css('display', 'block');

			var seat_text = document.getElementById('span1').innerHTML;
			var tickets_text = document.getElementById('span2').innerHTML;
			var totalprice_text = document.getElementById('span3').innerHTML;
			var version_text = document.getElementById('span4').innerHTML;
			var date_text = document.getElementById('span5').innerHTML;

			var obj = document.getElementById('information1');
			var obj1 = document.getElementById('information2');
			var obj2 = document.getElementById('information3');
			var obj3 = document.getElementById('information4');

			obj.innerHTML = date_text + " " + version_text;
			obj1.innerHTML = seat_text;
			obj2.innerHTML = tickets_text;
			obj3.innerHTML = totalprice_text;
		}
	});

	$('.confirm').click(function() {
		$('.shelter').css('display', 'none');
		$('.show').css('display', 'none');

		var obj = document.getElementById('_span');
		var val = document.getElementById('_span').innerHTML;
		obj.innerHTML = val - count;
		count = 0;

		var obj = document.getElementById('span1');
		var obj1 = document.getElementById('span2');
		var obj2 = document.getElementById('span3');

		obj.innerHTML = "";
		obj1.innerHTML = 0;
		obj2.innerHTML = 0;

		for (var k = 0; k < myArray.length; k++) {
			var row = myArray[k][0];
			var column;
			if (myArray[k].length == 4) {
				column = myArray[k][2];
			} else {
				column = myArray[k][2] + myArray[k][3];
			}

			var ul_item= document.getElementById(row);
			var li_items = ul_item.getElementsByTagName("li");
			var img_item = li_items[column - 1].childNodes[0];
			img_item.src = "../../Image/Icon_seat_1.png";
			img_item.style.cursor = "default";
		}

		$('#span3').css('visibility', 'hidden');

	});


	/*  Other  */

	function RemovebyValue(array, val) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == val) {
				array.splice(i, 1);
				break;
			}
		}
	}
});