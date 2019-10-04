

function check(){
	var ans1 = document.getElementById("Input1").value;
	var ans2 = document.getElementById("Input2").value;
	var ans3 = document.getElementById("Input3").value;
	var ans4 = document.getElementById("Input4").value;
	var ans5 = document.getElementById("Input5").value;
	var ans6 = document.getElementById("Input6").value;
	var ans7 = document.getElementById("Input7").value;
	var ans8 = document.getElementById("Input8").value;
	var ans9 = document.getElementById("Input9").value;
	var ans10 = document.getElementById("Input10").value;
	var ans11= document.getElementById("Input11").value;
	var ans12= document.getElementById("Input12").value;
	var ans13= document.getElementById("Input13").value;
	var ans14=document.getElementById("Input14").value;
	var ans15= document.getElementById("Input15").value;
	var ans16= document.getElementById("Input16").value;
	var ans17= document.getElementById("Input17").value;
	var ans18= document.getElementById("Input18").value;
	var ans19= document.getElementById("Input19").value;
	var ans20= document.getElementById("Input20").value;

	if (ans1 == "kogane" && ans2 == "blue" && ans3 == "tonic" && ans4 == "budapest" && ans5 == "shunde" && ans6 == "keywest" && ans7=="coldspring" && ans8 == "35" && ans9 == "pinecone" && ans10 == "clark" && ans11 == "cold" && ans12 == "28" && ans13 == "cesuo" &&ans14 == "hudsonriver" && ans15 == "teacher" && ans16 == "jianimadamowang" && ans17 == "twodicks" && ans18 == "vodka" && ans19 == "masanbo" && ans20 == "milktea"){
		location.replace("success.html")
	}
	else{
		location.replace("fail.html")

	}




}
