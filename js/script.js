// jq
$(document).ready(function(){
	//--------------------------- alert
	// alert("hello");
	// $('button').click(function(){
	//  alert("welcome");
	// })
	$('#btn').on('click', function(){
		alert("welcome");
	})
	// ------------------------hide
	$('#hide').on('click', function(){
		$('#tsh').hide('slow');
	})
	// --------------------------show
	$('#show').on('click', function(){
		$('#tsh').show('fast');
	})
	// --------------------------Toggle
	$('#togg').on('click', function(){
		$('#tsh').toggle(1000);
	});


	// ------------------------fade hide
	$('#h_hide').on('click', function(){
		$('#tsh_h').fadeOut('slow');
	});
	// --------------------------fade show
	$('#s_show').on('click', function(){
		$('#tsh_h').fadeIn('fast');
	});
	// --------------------------fade Toggle
	$('#t_togg').on('click', function(){
		$('#tsh_h').fadeToggle(1000);
	});

	// ---------------------------------collups
	$('.ques').on('click', function(){
		$('.answ').slideToggle('500');
	});

	// -----------------------ul li first hide 
	 $("#f_hide").on('click', function(){
    	$("ul li:first").hide();
  	});
	 //----------------------- button hide
 	$("#b_hide").on('click', function(){
    $("#b_hide").hide();
  	});

 	//----------------- mouseleave alart
 	$("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
  	});

 	$("#p1").mousedown(function(){
    alert("Mouse down over p1!");
  	});

// -----------------------------background-color
 	$("input").focus(function(){
    $(this).css("background-color", "lightblue");
  	});
  	$("input").blur(function(){
    $(this).css("background-color", "lightcyan");
  	});
// ----------------------click and hide
  	$("p").on("click", function(){
    $(this).hide();
  	});

// -----------------------------------slide down panel
	$("#flip").on("click", function(){
    $("#panel").slideDown(5000);
  	});
  	$("#stop").on ("click", function(){
    $("#panel").stop();
  	});
// --------------------------------------chaining
	$("button").on("click", function(){
    $("#p_1").css("color", "red").slideUp(2000).slideDown(2000);
  	});

// ------------------------------------Get Content
  	$("#btn1").on("click", function(){
    alert("Text: " + $("#test").text());
  	});
  	$("#btn2").on("click", function(){
    alert("HTML: " + $("#test").html());
  	});


 // ------------------------------Appended text
  	 $("#btn_1").on("click", function(){
    $("p").append(" <b>Appended text</b>.");
  	});

  	$("#btn_2").on("click", function(){
    $("ol").append("<li>Appended item</li>");
  });
//------------------------------ remove elements
  	$("button").on("click", function(){
    $("#div1").remove();
  });


$("#btn3").on("click", function(){
    $("#div11").addClass("important blue");
  });

  });
