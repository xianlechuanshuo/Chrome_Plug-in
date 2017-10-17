var date=new Date();
function getTime(){
	"use strict";
	let clock=document.getElementById("clock_div");
	let y=date.getFullYear(),
	m=date.getMonth(),
	d=date.getDate(),
	h=date.getHours(),
	mi=date.getMinutes(),
	s=date.getSeconds(),
	w=date.getDay();

	m=m<10?"0"+m:m;
	d=d<10?"0"+d:d;
	h=h<10?"0"+h:h;
	h=h<10?"0"+h:h;
	mi=mi<10?"0"+mi:mi;
	s=s<10?"0"+s:s;
	w=getWeek(w);
	//2017/09/15 19:16:34 周日
	date=`${y}/${m}/${d} ${h}:${mi}:${s} ${w}`;
	clock.innerHTML=date;
	setTimeout(getTime,1000);
}
function getWeek(num){
	switch(num){
		case 0:
			return "周日";
		case 1:
			return "周一";
		case 2:
			return "周二";
		case 3:
			return "周三";
		case 4:
			return "周四";
		case 5:
			return "周五";
		case 6:
			return "周六";
	}
}
getTime();