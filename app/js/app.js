document.addEventListener("DOMContentLoaded", function() {

	toggleButton.addEventListener('click', () => {
		navbarLinks.classList.toggle('active');
		toggleButton.classList.toggle('active');
	});

	h_info.addEventListener('click', () => {
		block_info.classList.toggle('active');
	});

	h_services.addEventListener('click', () => {
		block_services.classList.toggle('active');
		console.log('1');
	});



	$("*.lazy").lazyload();

	site_visit.addEventListener( "click" , () => Site_Visit());
	landing_page.addEventListener( "click" , () => Landing_Page());
	internet_shop.addEventListener( "click" , () => Internet_Shop());
	blog.addEventListener( "click" , () => Blog());

	i_design.addEventListener( "click" , () => I_Design());
	wow_design.addEventListener( "click" , () => Wow_Design());
	ready_design.addEventListener( "click" , () => Ready_Design());

	adaptive.addEventListener( "click" , () => Adaptive());

	octowber.addEventListener( "click" , () => Octowber());
	wordpress.addEventListener( "click" , () => Wordpress());
	opencard.addEventListener( "click" , () => Opencard());
	no_engine.addEventListener( "click" , () => No_Engine());

	reset.addEventListener( "click" , () => Reset());

});

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const h_info = document.getElementById("h-info");
const block_info = document.getElementsByClassName('block-info')[0];

const h_services = document.getElementById("h-service");
const block_services = document.getElementsByClassName('block-service')[0];



type_syte = 'none';
type_design = 'none';
type_proofs = 'none';
type_engine = 'none';

prise = '0';
timing = '0';

const obj_type = document.getElementById("result_type");
const obj_design = document.getElementById("result_design");
const obj_proofs = document.getElementById("result_proofs");
const obj_engine = document.getElementById("result_engine");

const obj_prise_type = document.getElementById("prise_type");
const obj_prise_design = document.getElementById("prise_design");
const obj_prise_proofs = document.getElementById("prise_proofs");
const obj_prise_engine = document.getElementById("prise_engine");

const obj_result_prise = document.getElementById("result_prise");
const obj_result_timing = document.getElementById("result_timing");




function brushColor(obj) {
	obj.style.backgroundColor = "#0689c8";
}

function resetColor(obj) {
	obj.style.backgroundColor = "#040814";
}

function sumPrise(prises, days){
	prise = Number(prise) + prises;
	timing = Number(timing) + days;
}

function Reset() {

	type_syte = 'none'
	type_design = 'none';
	type_proofs = 'none';
	type_engine = 'none';

	prise = '0';
	timing = '0';

	obj_result_timing.innerText = String(timing);
	obj_result_prise.innerText = String(prise);

	obj_prise_type.innerText = String("0$");
	obj_prise_design.innerText = String("0$");
	obj_prise_proofs.innerText = String("0$");
	obj_prise_engine.innerText = String("0$");

	obj_type.innerText = "Тип сайта: Не выбрано";
	obj_design.innerText = "Дизайн: Не выбрано";
	obj_proofs.innerText = "Верстка: Не выбрано";
	obj_engine.innerText = "Движок: Не выбрано";

	

	obj_site_visit = document.getElementById("site_visit");
	obj_landing_page = document.getElementById("landing_page");
	obj_internet_shop = document.getElementById("internet_shop");
	obj_blog = document.getElementById("blog");

	obj_i_design = document.getElementById("i_design");
	obj_wow_design = document.getElementById("wow_design");
	obj_ready_design = document.getElementById("ready_design");

	obj_adaptive = document.getElementById("adaptive");

	obj_octowber = document.getElementById("octowber");
	obj_wordpress = document.getElementById("wordpress");
	obj_opencard = document.getElementById("opencard");
	obj_no_engine = document.getElementById("no_engine");



	obj_landing_page.style.backgroundColor = "#040814";
	obj_site_visit.style.backgroundColor = "#040814";
	obj_internet_shop.style.backgroundColor = "#040814";
	obj_blog.style.backgroundColor = "#040814";
		
	obj_i_design.style.backgroundColor = "#040814";
	obj_wow_design.style.backgroundColor = "#040814";
	obj_ready_design.style.backgroundColor = "#040814";

	obj_adaptive.style.backgroundColor = "#040814";

	obj_octowber.style.backgroundColor = "#040814";
	obj_wordpress.style.backgroundColor = "#040814";
	obj_opencard.style.backgroundColor = "#040814";
	obj_no_engine.style.backgroundColor = "#040814";



}


// type syte
function Site_Visit() {
	if(type_syte == 'none') {
		const obj = document.getElementById("site_visit");
		brushColor(obj);
		sumPrise(120, 1);
		obj_prise_type.innerText = String("120$");
		obj_result_prise.innerText = String(prise);
		type_syte = 'site_visit';
		obj_type.innerText = "Тип сайта: сайт визитка";
		obj_result_timing.innerText = String(timing);
	}

}

function Landing_Page() {
	if(type_syte == 'none') {
		const obj = document.getElementById("landing_page");
		brushColor(obj);
		sumPrise(60, 1);
		obj_prise_type.innerText = String("60$");
		obj_result_prise.innerText = String(prise);
		type_syte = 'landing_page';
		obj_type.innerText = "Тип сайта: Landing Page";
		obj_result_timing.innerText = String(timing);

	}

}

function Internet_Shop() {
	if(type_syte == 'none') {
		const obj = document.getElementById("internet_shop");
		brushColor(obj);
		sumPrise(120, 1);
		obj_prise_type.innerText = String("120$");
		obj_result_prise.innerText = String(prise);
		obj_result_timing.innerText = String(timing);
		type_syte = 'internet_shop';
		obj_type.innerText = "Тип сайта: Интернет магазин";
	}

}

function Blog() {
	if(type_syte == 'none') {
		const obj = document.getElementById("blog");
		brushColor(obj);
		sumPrise(120, 1);
		obj_prise_type.innerText = String("120$");
		obj_result_prise.innerText = String(prise);
		obj_result_timing.innerText = String(timing);
		type_syte = 'blog';
		obj_type.innerText = "Тип сайта: Блог";
	}
}

// end

// design

function I_Design() {
	if(type_design == 'none') {
		const obj = document.getElementById("i_design");
		type_design = 'i_design';
		if (type_syte == 'site_visit'){
			brushColor(obj);
			obj_design.innerText = "Дизайн: Индивидуальный дизайн";
			sumPrise(240, 2);
			obj_prise_design.innerText = String("240$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'landing_page'){
			brushColor(obj);
			obj_design.innerText = "Дизайн: Индивидуальный дизайн";
			sumPrise(120, 1);
			obj_prise_design.innerText = String("120$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'internet_shop'){
			brushColor(obj);
			obj_design.innerText = "Дизайн: Индивидуальный дизайн";
			sumPrise(480, 4);
			obj_prise_design.innerText = String("480$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
	  else if (type_syte == 'blog'){
			brushColor(obj);
			obj_design.innerText = "Дизайн: Индивидуальный дизайн";
			sumPrise(240, 2);
			obj_prise_design.innerText = String("240$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
	 	else {
			sumPrise(0, 0);
			type_design = 'none';
		}
	}
}	

function Wow_Design() {
	if(type_design == 'none') {
		type_design = 'wow_design';
		const obj = document.getElementById("wow_design");
		if (type_syte == 'site_visit'){
			brushColor(obj);
			obj_design.innerText = "Дизайн: Wow дизайн";
			sumPrise(270, 3);
			obj_prise_design.innerText = String("270$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'landing_page'){
			brushColor(obj);
			obj_design.innerText = "Дизайн: Wow дизайн";
			sumPrise(135, 2);
			obj_prise_design.innerText = String("135$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'internet_shop'){
			brushColor(obj);
			obj_design.innerText = "Дизайн: Wow дизайн";
			sumPrise(590, 5);
			obj_prise_design.innerText = String("590$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'blog'){
			brushColor(obj);
			obj_design.innerText = "Дизайн: Wow дизайн";
			sumPrise(240, 3);
			obj_prise_design.innerText = String("240$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else {
			sumPrise(0, 0);
			type_design = 'none';
		}
	}
}

	function Ready_Design() {
	if(type_design == 'none') {
		type_design = 'ready_design';
		const obj = document.getElementById("ready_design");
		if (type_syte == 'site_visit'){
			obj_design.innerText = "Дизайн: свой дизайн";
			brushColor(obj);
			sumPrise(0, 0);
		}
		else if (type_syte == 'landing_page'){
			obj_design.innerText = "Дизайн: свой дизайн";
			brushColor(obj);
			sumPrise(0, 0);
		}
		else if (type_syte == 'internet_shop'){
			obj_design.innerText = "Дизайн: свой дизайн";
			brushColor(obj);
			sumPrise(0, 0);
		}
		else if (type_syte == 'blog'){
			obj_design.innerText = "Дизайн: свой дизайн";
			brushColor(obj);
			sumPrise(0, 0);
		}
		else {
			sumPrise(0, 0);
			type_design = 'none';
		}
	}
}

	



// end

// adaptive

function Adaptive() {
	if(type_proofs == 'none') {
		type_proofs = 'adaptive';
		const obj = document.getElementById("adaptive");
		if (type_syte == 'site_visit'){
			obj_proofs.innerText = "Верстка: адаптивная";
			brushColor(obj);
			sumPrise(120 , 1);
			obj_prise_proofs.innerText = String("120$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'landing_page'){
			obj_proofs.innerText = "Верстка: адаптивная";
			brushColor(obj);
			sumPrise(60, 1);
			obj_prise_proofs.innerText = String("60$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'internet_shop'){
			obj_proofs.innerText = "Верстка: адаптивная";
			brushColor(obj);
			sumPrise(120, 1);
			obj_prise_proofs.innerText = String("120$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'blog'){
			obj_proofs.innerText = "Верстка: адаптивная";
			brushColor(obj);
			sumPrise(120, 1);
			obj_prise_proofs.innerText = String("120$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else {
			sumPrise(0, 0);
			type_proofs = 'none';
		}
	}
}

// end

// engine
function Octowber() {
	if(type_engine == 'none') {
		type_engine = 'octowber';
		const obj = document.getElementById("octowber");
		if (type_syte == 'site_visit'){
			obj_engine.innerText = "Движок: Octowber";
			brushColor(obj);
			sumPrise(120, 1);
			obj_prise_engine.innerText = String("120$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'landing_page'){
			obj_engine.innerText = "Движок: Octowber";
			brushColor(obj);
			sumPrise(60, 1);
			obj_prise_engine.innerText = String("60$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'internet_shop'){
			obj_engine.innerText = "Движок: Octowber";
			brushColor(obj);
			sumPrise(2400, 20);
			obj_prise_engine.innerText = String("2400$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'blog'){
			obj_engine.innerText = "Движок: Octowber";
			brushColor(obj);
			sumPrise(360, 3);
			obj_prise_engine.innerText = String("360$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else {
			sumPrise(0, 0);
			type_engine = 'none';
		}
	}
}

function Wordpress() {
	if(type_engine == 'none') {
		type_engine = 'wordpress';
		const obj = document.getElementById("wordpress");
		if (type_syte == 'site_visit'){
			obj_engine.innerText = "Движок: Wordpress";
			brushColor(obj);
			sumPrise(150, 2);
			obj_prise_engine.innerText = String("150$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'landing_page'){
			obj_engine.innerText = "Движок: Wordpress";
			brushColor(obj);
			sumPrise(105, 1);
			obj_prise_engine.innerText = String("105$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'internet_shop'){
			obj_engine.innerText = "Движок: Wordpress";
			brushColor(obj);
			sumPrise(1800, 15);
			obj_prise_engine.innerText = String("1800$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'blog'){
			obj_engine.innerText = "Движок: Wordpress";
			brushColor(obj);
			sumPrise(480, 4);
			obj_prise_engine.innerText = String("480$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else {
			sumPrise(0, 0);
			type_engine = 'none';
		}
	}
}

function Opencard() {
	if(type_engine == 'none') {
		type_engine = 'Opencard';
		const obj = document.getElementById("opencard");
		if (type_syte == 'site_visit'){
			obj_engine.innerText = "Движок: Opencard";
			brushColor(obj);
			sumPrise(180, 2);
			obj_prise_engine.innerText = String("180$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'landing_page'){
			obj_engine.innerText = "Движок: Opencard";
			brushColor(obj);
			sumPrise(120, 1);
			obj_prise_engine.innerText = String("120$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'internet_shop'){
			obj_engine.innerText = "Движок: Opencard";
			brushColor(obj);
			sumPrise(1800, 8);
			obj_prise_engine.innerText = String("1800$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'blog'){
			obj_engine.innerText = "Движок: Opencard";
			brushColor(obj);
			sumPrise(600, 5);
			obj_prise_engine.innerText = String("600$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else {
			sumPrise(0, 0);
			type_engine = 'none';
		}
	}
}

function No_Engine() {
	if(type_engine == 'none') {
		type_engine = 'no_engine';
		const obj = document.getElementById("no_engine");
		if (type_syte == 'site_visit'){
			obj_engine.innerText = "Движок: Отсутствует";
			brushColor(obj);
			sumPrise(90, 1);
			obj_prise_engine.innerText = String("90$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'landing_page'){
			obj_engine.innerText = "Движок: Отсутствует";
			brushColor(obj);
			sumPrise(60, 1);
			obj_prise_engine.innerText = String("60$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'internet_shop'){
			obj_engine.innerText = "Движок: Отсутствует";
			brushColor(obj);
			sumPrise(4000, 30);
			obj_prise_engine.innerText = String("4000$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else if (type_syte == 'blog'){
			obj_engine.innerText = "Движок: Отсутствует";
			brushColor(obj);
			sumPrise(1500, 13);
			obj_prise_engine.innerText = String("1500$");
			obj_result_prise.innerText = String(prise);
			obj_result_timing.innerText = String(timing);
		}
		else {
			sumPrise(0, 0);
			type_engine = 'none';
		}
	}
}


// end
