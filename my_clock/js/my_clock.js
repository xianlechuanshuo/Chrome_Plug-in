function getTime(){
	"use strict";
	let clock=document.getElementById("clock_div");
	let date=new Date(),
	y=date.getFullYear(),
	m=date.getMonth()+1,//注意getMonth()月份是
	d=date.getDate(),
	h=date.getHours(),
	mi=date.getMinutes(),
	s=date.getSeconds(),
	w=date.getDay(),
	mw=getMonthWeek(y,m,d);

	m=m<10?"0"+m:m;
	d=d<10?"0"+d:d;
	h=h<10?"0"+h:h;
	h=h<10?"0"+h:h;
	mi=mi<10?"0"+mi:mi;
	s=s<10?"0"+s:s;
	w=getWeek(w);


	//2017/09/15 19:16:34 周日
	date=`${y}/${m}/${d} ${h}:${mi}:${s} ${w} 本月第${mw}周`;
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

function getMonthWeek(a, b, c) { 
	'use strict';
	/* 
	a = d = 当前日期 
	b = 6 - w = 当前周的还有几天过完(不算今天) 
	a + b 的和在除以7 就是当天是当前月份的第几周 
	*/ 
	let date = new Date(a, parseInt(b) - 1, c), w = date.getDay(), d = date.getDate(); 
	return Math.ceil( (d + 6 - w) / 7 ); 
}
function getYearWeek(a, b, c) { 
	'use strict';
	/* 
	date1是当前日期 
	date2是当年第一天 
	d是当前日期是今年第多少天 
	用d + 当前年的第一天的周差距的和在除以7就是本年第几周 
	*/ 
	let date1 = new Date(a, parseInt(b) - 1, c), date2 = new Date(a, 0, 1), 
		d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000); 
	return Math.ceil( (d + ((date2.getDay() + 1) - 1)) / 7 ); 
}
getTime();