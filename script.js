const a=4;
const b=2;
const myName="HyoJoon";
//const는 고정값 바뀌지 않는다.선언 후에는 그 값을 유지한다.
//값을 업데이트하는 것을 하려면 let을 사용
//예전 책 같은 경우에는 var을 쓰는 경우가 있는데 사용하지 않는다.

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello "+myName);

const dayOfWeek=["mon", "tue", "wed","thu", "fri", "sat"];
console.log(dayOfWeek);
//배열(array) 할때에는 대괄호를 사용하여 나열한다. 원하는 값을 선언할때는 0부터 시작하여 카운팅

dayOfWeek.push=["sun"];
//push는 마지막 결과 값 이후에 추가로 넣을 떄 사용한다.

console.log(dayOfWeek);

const player = {
  name: "HyoJoon",
  points: 175,
  fat: false
};
//배열과 다르게 값의 설명 및 property를 부여할때는 위와 같이 한다.
//property를 변경하는 경우에는 새로 추가하는 방식으로 추가하면된다. ex player.name="me";
//property를 새로 추가하는경우 player.sexy=true; 이런 식으로 하면된다.

console.log(player.name);
console.log(player.fat);

function introduce(playerName, playerAge){
  console.log("hello my name is "+playerName+" and I'm "+playerAge)
};

//function은 여러가지를 반복해서 할때 하나의 툴을 구조화하여 귀찮음을 덜어준다.
//function 괄호안에 수식어들은 function 안에서만 논다.
introduce("nico", 20);
introduce("hyojoon", 22);

function plus(a, b){
  console.log(a + " + " + b + "=" + (a + b) )
};

plus(3 , 4);

const calculator={
  add:function(a,b){
  console.log(a+b);
  },
  minus:function(a,b){
  console.log(a-b);
  },
  mul:function(a,b){
    console.log(a*b);
  },
  div:function(a,b){
    console.log(a/b);
  },
  power:function(a,b){
    console.log(a**b)
  },
};

calculator.add(3,2);
calculator.minus(4,2);
calculator.mul(6,2);
calculator.div(6,2);
calculator.power(2,5);

//* 간단하게 만든 계산기이다.
// alert는 브라우저에 경고문 형식으로 나타내준다.

const returncalculator={
  add:function(a,b){
  return a + b;
  },
  minus:function(a,b){
  return a - b;
  },
  mul:function(a,b){
    return a*b;
  },
  div:function(a,b){
    return a/b;
  },
  power:function(a,b){
    return a**b;
  },
};

const plusresult = returncalculator.add(3,2);
const minusresult = returncalculator.minus(plusresult,1);
const mulresult = returncalculator.mul(plusresult, minusresult);
const powerresult = returncalculator.power(plusresult, minusresult);
//return은 반환값을 주고 상호작용을 할 수 있게 도와준다.
//위를 보면 그냥 calculator은 새로운 const를 할 수 없고, 계산에 나온값을 넣어 재사용할 수 없다.
//하지만 return은 재사용이 가능하고 새로운 const를 할 수 있다.
//return을 사용하는 순간 function은 return 값을 마지막으로 끝난다. 그뒤에 어떠한 코드를 써도 작동하지 않는다.
const age = parseInt(prompt("how old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age<0){
  console.log("Please write a real positive number.")
} else if(0<=age && age<=18){
  console.log("You are too young")
} else if(age>18 && age<50){
  console.log("You can drink!")
} else if(age === 100){
  console.log("WoW~~")
}
 else if(age>50){
  console.log("You should exercise!")
};

/*prompt 는 사용자에게 경고문 형식으로 메세지를 전달한 후 답을 입력 받는다.
parseInt는 spring 으로 받은 값에 대하여 number형식으로 변환해준다.
이때 spring으로 받은 값이 숫자가 아닐경우 NaN(Not a Number)가 뜬다.
if의 형식은 if가 true일때 작동한다.
그러므로 else는 if가 false일때 작동한다.
else if는 다른 조건을 꺼낸다.
조건문을 작성할때 and를 사용하고 싶을때는 &&, or을 사용하고 싶을때는 ||을 사용한다.
and는 모두다 true 여야하고 or은 하나만 충족해도 실행된다.
true || true === true
false || true === true
false || false === false
true && true === true
false && true === false
false && false === false
= --> value를 할당
=== --> 같은지 확인
!== --> 같지 않음을 확인
*/

const title = document.getElementById("title");

title.innerText=("Tomboy")

console.log(title);
// 이제는 HTML에서 element값을 가져올수있게 되었다. 그리고 JS에서 마음대로 바꿀수있게 되었다.

const bingos = document.getElementsByClassName("bingo");

console.log(bingos);

const bingoss = document.querySelector(".bingo h2");

console.log(bingoss);
//querySelector는 css와 비슷한 형태로 여러가지로 많은 것들을 array하지않고 하나만 선택해서 보여준다.
//반대로 다른 getElement~~형태는 전부 array 형태로 보여준다.
//여러가지를 array형태로 보고싶을때는 querySelectorAll을 하면된다. 

bingoss.style.color="blue"