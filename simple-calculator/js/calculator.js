//存储运算数1
var num1 = "";
//存储运算数2
var num2 = "";
//存储操作符
var oper = "";
//获取各元素节点
var screen = document.getElementById("screen");
var numbers = document.getElementById("number");
var number = numbers.children;
var transes = document.getElementById("trans-cal");
var trans = transes.children;
var bases = document.getElementById("base-cal");
var base = bases.children;
var clear = document.getElementById("clear");
var back = document.getElementById("back");
var tris = document.getElementById("tri-fnc");
var tri = tris.children;
var res = document.getElementById("res");
//isRse 为运算状态:true为刚进行过运算，false为默认状态未运算
var isRes = false;
//为数字面板绑定事件
for (var i = 0; i < number.length; i++) {
	addEvent(number[i],"click",getNumber);
}
//为加减乘除按键绑定事件
for (var i = 0; i < base.length; i++) {
	addEvent(base[i],"click",getBase);
}
//为三角函数按键绑定事件
for (var i = 0; i < tri.length; i++) {
	addEvent(tri[i],"click",singleCal);
}
//为简单转换按键绑定事件
for (var i = 0; i < trans.length; i++) {
	addEvent(trans[i],"click",singleCal);
}
//为清零、退回、结果按键绑定事件
addEvent(clear,"click",singleCal);
addEvent(back,"click",singleCal);
addEvent(res,"click",resCal);
/**
*function addEvent [给按键绑定事件]
*element [要绑定的节点]
*type  [绑定类型]
*fnc  [绑定函数]
*/
function addEvent (element,type,fnc){
	if (element.addEventListener) {
		element.addEventListener(type,fnc,false);
	}else if (element.attachEvent) {
		element.attachEvent("on"+type,fnc);
	}else {
		element["on"+type]=fnc;
	}
}
//获得运算数的函数
function getNumber() {
	//刚进行过运算，屏幕清零
    if (isRes == true) {
        screen.innerHTML = "";
        isRes = false;
    }
    //控制屏幕显示长度为20
    if (screen.innerHTML.length) {
    	if (screen.innerHTML.length==20) {
    		return false;
    	}
    }
    if (screen.innerHTML == null && this.innerHTML != ".") {
        screen.innerHTML = this.innerHTML;
    } else {
    	//控制“.”与“0”的输入
        if (this.innerHTML == ".") {
            if (screen.innerHTML != "" && screen.innerHTML.indexOf(".") == -1) {
                screen.innerHTML += this.innerHTML;
            } else if (screen.innerHTML == "") {
                screen.innerHTML = screen.innerHTML;
            }
        } else if (screen.innerHTML == "0") {
            screen.innerHTML = "";
            screen.innerHTML += this.innerHTML;
        } else {
            screen.innerHTML += this.innerHTML;
        }
    }
    //存储器与屏幕同步
    if (oper == "") {
        num1 = screen.innerHTML;
        console.log("1:" + num1);
    } else {
        num2 = screen.innerHTML;
        console.log("2:" + num2);
    }
}
//获得加减乘除运算符函数
function getBase() {
    if (num1 != "" && num2 == "") {
        oper = this.innerHTML;
        screen.innerHTML = "";
    }
    //连续加减乘除计算
    if (num2 != "") {
        screen.innerHTML = "";
        var opert=oper;
        oper=this.innerHTML;
        num1 = count(num1, num2, opert);
        num2="";
    }
}
/**
*function count [进行简单的加减乘除运算]
*x [加减乘除运算的第一个数]
*y [加减乘除运算的第二个数]
*z [运算符]
*/
function count(x, y, z) {
    x = x.toString();
    x = x.trim();
    y = y.toString();
    y = y.trim();
    x = parseFloat(x);
    y = parseFloat(y);
    switch (z) {
        case "+":
            z = x + y;
            z = parseFloat(z.toFixed(20));
            z.toString(); 
            screen.innerHTML = z;
            isRes = true;
            console.log("结果为" + parseFloat(z.toFixed(20)));
            console.log(oper);
            return z;
            break;
        case "-":
            z = x - y;
            z = parseFloat(z.toFixed(20));
            z.toString();
            screen.innerHTML = z;
            isRes = true;
            console.log("结果为" + parseFloat(z.toFixed(20)));
            console.log(oper);
            return z;
            break;
        case "*":
            z = x * y;
            z = parseFloat(z.toFixed(20));
            z.toString();
            screen.innerHTML = z;
            isRes = true;
            console.log("结果为" + parseFloat(z.toFixed(20)));
            console.log(oper);
            return z;
            break;
        default:
            if (y == 0) {
                z = "NaN";
                oper="";
            } else {
                z = x / y;
                z = parseFloat(z.toFixed(20));
                z.toString();
                console.log("结果为" + parseFloat(z.toFixed(20)));
            }
                screen.innerHTML = z;
                isRes = true;
                console.log(oper);
                return z;
    }
}
//下面函数里的操作仅用到运算符1
function singleCal(){
	//三角函数的运算
	if (this.innerHTML=="cos"||this.innerHTML=="sin"||this.innerHTML=="tan") {
		switch(true){
			case this.innerHTML=="cos":
				if (num1!=""&&num2=="") {
					num1=Math.cos(num1);
					screen.innerHTML=num1;
					isRes=true;
				}
				break;
			case this.innerHTML=="sin":
				if (num1!=""&&num2=="") {
					num1=Math.sin(num1);
					screen.innerHTML=num1;
					isRes=true;
				}
				break;
			default:
				if (num1!=""&&num2=="") {
					num1=Math.tan(num1);
					screen.innerHTML=num1;
					isRes=true;
				}
				break;
		}
	}
	//简单的求倒，平方，正负运算
	if (this.innerHTML=="1/x"||this.innerHTML=="x^2"||this.innerHTML=="+/-") {
		switch(true){
			case this.innerHTML=="1/x":
				if (num1!=""&&num2=="") {
					num1=num1.toString();
					num1 = num1.trim();
    				num1 = parseFloat(num1);
					num1=parseFloat((1/num1).toFixed(20));
					screen.innerHTML=num1;
					isRes=true;
				}
				break;
			case this.innerHTML=="x^2":
				if (num1!=""&&num2=="") {
					num1=num1.toString();
					num1 = num1.trim();
    				num1 = parseFloat(num1);
					num1=parseFloat((num1*num1).toFixed(20));
					screen.innerHTML=num1;
					isRes=true;
				}
				break;
			case this.innerHTML=="+/-":
				if (num1!=""&&num2=="") {
					num1=num1.toString();
					num1 = num1.trim();
    				num1 = parseFloat(num1);
					num1=parseFloat((0-num1).toFixed(20));
					screen.innerHTML=num1;
					isRes=true;
				}
				break;
		}
	}
	//清零操作
	if (this.innerHTML=="C") {
		num1="";
		num2="";
		oper="";
		screen.innerHTML="";
	}
	//删除退回操作
	if (this.id=="back") {
		if (num1!=""&&num2==""&&oper=="") {
			num1=num1.slice(0,num1.length-1);
			screen.innerHTML=num1;
		} else if (num1!=""&&num2!=""&&oper!="") {
			num2=num2.slice(0,num2.length-1);
			screen.innerHTML=num2;
		} 
	}
}
//求结果并等待继续运算
function resCal(){
	if (num1!=""&&num2!=""&&oper!="") {
		num1=count(num1,num2,oper);
		oper="";
		num2="";
	}
}