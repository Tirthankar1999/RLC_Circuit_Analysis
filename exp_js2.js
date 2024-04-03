
/////////////////////////////// The code starts from here/////////////////////////////////////
var sw = 0, cc = 0, count = 0;
var swh;
var f, w, vs, R, wL, wC, imp_r, imp_theta, i, pf, lead, lag, theta;
var imp = [];
function execute_ckt1() {

	if (sw == 1) {
		// console.log(23)
		f = parseFloat(document.getElementById('f').value);
		w = 2 * 3.141 * f;
		vs = parseFloat(document.getElementById('vin2').value);
		//alert(vs);
		R = parseFloat(document.getElementById('R').value);
		Rf = R + (2 * parseFloat(document.getElementById('L').value) * 0.001 / 0.015);
		// Rf = R + (2 * parseFloat(document.getElementById('L').value)  / 15);
		
		wL = parseFloat(document.getElementById('L').value) * 0.001 * w;
		// wL = parseFloat(document.getElementById('L').value) *  w;
		// wL=parseFloat(document.getElementById('L').value) * w ;
		wC = 1 / (parseFloat(document.getElementById('C').value) * 0.000001 * w);
		// wC = 1 / (parseFloat(document.getElementById('C').value) *  w);
		if ((document.getElementById('C').value) == 0) {
			wC = 0;
		}
		// if((document.getElementById('C').value)==0 && (document.getElementById('L').value)==0){

		// document.getElementById('unity').style.display="block";	
		// document.getElementById('main_ckt').src="./images/unity.jpg";	
		// }
		// else{
		// document.getElementById('unity').style.display="none";	
		// }
		if ((document.getElementById('R').value) == 0) {
			window.alert('Resistance Value can not be zero,Switch off the circuit and increase it');
			return;


		}
		if ((document.getElementById('L').value) == 0) {
			document.getElementById('main_ckt').src = "./images/rc_wthout_vrc.png";

			// document.getElementById('L').value = document.getElementById('C').value;
			// document.getElementById('C').value = 0;
			// wC = 1 / (parseFloat(document.getElementById('L').value) * 0.000001 * w);
			// document.getElementById('C').value = 0;
		}
		if ((document.getElementById('C').value) == 0) {
			document.getElementById('main_ckt').src = "./images/rl_wthout_vrl.png";
		}
		// if((document.getElementById('C').value)==0 && (document.getElementById('L').value)==0){

		// //document.getElementById('unity').style.display="block";	
		// document.getElementById('main_ckt').src="./images/unity.jpg";	
		// }


		imp[0] = Rf;
		imp[1] = wL - wC;
		imp_r = Math.sqrt((imp[0] * imp[0]) + (imp[1] * imp[1]));
		//alert(imp_r);
		imp_theta = Math.atan(imp[1] / imp[0]); // * (180/(Math.PI));
		// theta = imp_theta * 57.3;
		//alert(imp_theta);
		// Re = document.getElementById('R').value;
		// console.log(Re);




		// i=parseFloat(w/(document.getElementById('vin').value));
		i = vs / imp_r
		Z = (vs / i)
		// console.log(Z)
		var s = (R/Z)
		
		

		theta = Math.acos(s) * (180/(Math.PI));
		// console.log(i)
		var fuse = document.getElementById('led');
		swh = parseFloat(document.getElementById('SW1').value);
		if (swh == 2) {
			// if (i > 5 || fuse.src.match("led_off"))
			// {
			// 	fuse.src = "./images/led_off.png";
			// 	document.getElementById("led").style["cursor"] = "pointer";
			// 	Alert.render('Click on the fuse.');
			// 	changeImage1();
			// }
			// else
			// {
			// 	document.f1.VS.value= vs;
			// 	document.f1.A.value= i;
			// 	document.f1.W.value= i*i*Rf;
			// pf=Math.cos(imp_theta);// * (180/(Math.PI));
			pf= (R/Z);// * (180/(Math.PI));
			// 	//alert(pf);
			// 	document.f1.VR.value= i * R;
			// 	document.f1.VL.value= i * wL;
			// 	document.f1.VC.value= i * wC;
			// 	document.f1.PF.value= theta;
			// 	if (imp_theta>0){
			// 		document.getElementById("lead").style["background-color"] = "#86A65D";
			// 		document.getElementById("lag").style["background-color"] = "#D85A66";
			// 	}
			// 	else if (imp_theta==0){
			// 		document.getElementById("lead").style["background-color"] = "#C3C7C8";
			// 		document.getElementById("lag").style["background-color"] = "#C3C7C8";
			// 	}
			// 	else{
			// 		document.getElementById("lead").style["background-color"] = "#D85A66";
			// 		document.getElementById("lag").style["background-color"] = "#86A65D";
			// 	}
			// 	cc=1;
			// 	perform_meter1(); perform_meter2(); perform_meter3(); perform_meter4(); perform_meter5(); perform_meter6(); perform_meter7();
			// }
			document.getElementById('I').value = i
			// document.getElementById('Vl').value = parseFloat(i * (document.getElementById('L').value))
			document.getElementById('Vl').value = parseFloat(i * wL)
			vl = document.getElementById('Vl').value
			zl = (vl/i)
			o = ((zl*zl) - (R * R))
			xl = Math.sqrt(o)
			
			
			// console.log(xc)
			// console.log(o)
			document.getElementById('Vr').value = parseFloat(i * R)
			document.getElementById('Vc').value = parseFloat(i * wC)
			// console.log(document.getElementById('Vr').value)
			// console.log(document.getElementById('Vl').value)
			perform_meter2(); perform_meter1(); perform_meter3(); perform_meter5();
			// document.getElementById('Vrl').value = ((document.getElementById('Vr').value)+(document.getElementById('Vl').value))*(1.5)
		}



	}
	else {
		document.f1.W.value = 0; document.f1.A.value = 0; document.f1.VS.value = 0;
		document.f1.VR.value = 0; document.f1.VL.value = 0; document.f1.VC.value = 0;
		perform_meter1(); perform_meter2(); perform_meter3(); perform_meter4(); perform_meter5(); perform_meter6();
		document.getElementById("lead").style["background-color"] = "#C3C7C8";
		document.getElementById("lag").style["background-color"] = "#C3C7C8";
	}
}

function changeImage1() {

	var image = document.getElementById('myImage');
	var im1 = document.getElementById('vin');
	var im2 = document.getElementById('f');
	var im3 = document.getElementById('L');
	var im4 = document.getElementById('C');
	var im5 = document.getElementById('R');
	/*var im3= document.getElementById('R');
	var im4= document.getElementById('l1');
	var im5= document.getElementById('c1');*/
	swh = parseFloat(document.getElementById('SW1').value);
	if (image.src.match("s1")) {
		sw = 1;
		document.getElementById('SW1').value = "2";
		swh = 2;

		image.src = "./images/s2.png";
		document.getElementById('main_ckt').src = "./images/RLC without Vrl.png";
		im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); //im3.setAttribute('readonly', 'readonly');
		//im4.setAttribute('readonly', 'readonly'); im5.setAttribute('readonly', 'readonly');
		// im3.setAttribute('readonly', 'readonly'); im4.setAttribute('readonly', 'readonly');
		// im5.setAttribute('readonly', 'readonly');



		if (swh == 2) {
			execute_ckt1();
		}


	} else {
		sw = 0;
		image.src = "./images/s1.png";
		document.getElementById('main_ckt').src = "./images/RLC without Vrl.png";
		document.getElementById('SW1').value = "1";
		// im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); /* im3.removeAttribute('readonly');
		// im4.removeAttribute('readonly'); im5.removeAttribute('readonly'); */
		// document.f1.W.value = 0; document.f1.A.value = 0; document.f1.VS.value = 0;
		// document.f1.VR.value = 0; document.f1.VL.value = 0; document.f1.VC.value = 0; document.f1.PF.value = 0
		// perform_meter1(); perform_meter2(); perform_meter3(); perform_meter4(); perform_meter5(); perform_meter6(); perform_meter7();
		// document.getElementById("lead").style["background-color"] = "#C3C7C8";
		// document.getElementById("lag").style["background-color"] = "#C3C7C8";
		document.getElementById('I').value = 0;
		document.getElementById('Vl').value = 0;
		document.getElementById('Vr').value = 0;
		document.getElementById('Vc').value = 0;
		document.getElementById('vin2').value = 0;

	}
}

// function change_led() {
// 	var fuse = document.getElementById('led');
// 	fuse.src = "./images/led_on.png"; 
// 	document.f1.R.value = 50;
// }

function simulate_rc1() {

	// if(cc==0){
	// 	Alert.render("Please execute the circuit once to get the voltmeter readings.");
	// 	return;
	// }
	// cc=0;
	count = count + 1;
	if (count == 1) {
		
		document.getElementById('t1a').value = document.getElementById('vin2').value;
		document.getElementById('t1b').value = document.getElementById('I').value;
		document.getElementById('t1c').value = document.getElementById('Vr').value;
		document.getElementById('t1d').value = document.getElementById('Vl').value;
		document.getElementById('t1e').value = document.getElementById('Vc').value;
		
		document.getElementById('t1f').value = document.getElementById('R').value;
		document.getElementById('t1g').value = zl;
		document.getElementById('t1h').value = xl;
		document.getElementById('t1i').value = Z;

		document.getElementById('t1j').value = pf;

	}
	else if (count == 2) {
		document.getElementById('t2a').value = document.getElementById('vin2').value;
		document.getElementById('t2b').value = document.getElementById('I').value;
		document.getElementById('t2c').value = document.getElementById('Vr').value;
		document.getElementById('t2d').value = document.getElementById('Vl').value;
		// document.getElementById('t2e').value = document.getElementById('Vc').value;
		
		document.getElementById('t2e').value = document.getElementById('R').value;
		document.getElementById('t2f').value = zl;
		document.getElementById('t2g').value = xl;
		document.getElementById('t2h').value = Z;

		document.getElementById('t2i').value = pf;
		
	}
	else if (count == 3) {
		document.getElementById('t3a').value = document.getElementById('vin2').value;
		document.getElementById('t3b').value = document.getElementById('I').value;
		document.getElementById('t3c').value = document.getElementById('Vr').value;
		document.getElementById('t3d').value = document.getElementById('Vc').value;
		vc = document.getElementById('Vc').value
		// document.getElementById('t2e').value = document.getElementById('Vc').value;
		i = document.getElementById('I').value;
		
		document.getElementById('t3e').value = document.getElementById('R').value;
		xc = (vc/i)
		document.getElementById('t3f').value = xc;
		// document.getElementById('t3g').value = xl;
		document.getElementById('t3g').value = Z;

		document.getElementById('t3h').value = pf;
		
	}
	// else if (count == 4) {
	// 	document.f1.t4a.value = vs; document.f1.t4b.value = i; document.f1.t4c.value = i * i * R;
	// 	document.f1.t4d.value = i * R; document.f1.t4e.value = i * wL; document.f1.t4f.value = i * wC;
	// 	document.f1.t4g.value = theta; document.f1.t4h.value = pf;
	// }
	// else {
	// 	document.f1.t5a.value = vs; document.f1.t5b.value = i; document.f1.t5c.value = i * i * R;
	// 	document.f1.t5d.value = i * R; document.f1.t5e.value = i * wL; document.f1.t5f.value = i * wC;
	// 	document.f1.t5g.value = theta; document.f1.t5h.value = pf;
	// }


}





