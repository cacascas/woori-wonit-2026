// 8. Object(객체) 
// -1. 배열(Array)
//   - 순서대로 값을 저장
//   - 집합 자료형
//   - 순서대로 값을 꺼낼 수 있다. (index로)
//   - 자바스크립트의 배열 index는 0부터 시작
//   - 배열의 길이는 .length 라는 속성으로 확인
var array1 = [1, '가', true, null, , [1, 2, 3]] // 자료형을 강제하지 않기 때문에 각 방마다 다른 자료형을 넣을 수 있습니다. 
array1
console.log(array1[4]) // 배열의 크기를 넘어서는 방번호(index)를 부르면 undefined 
console.log(typeof array1)
console.log(array1.length)

// 실습: array1이라는 배열을 만들고 apple, banana, carrot 세개의 문자열을 각 index에 넣어보세요.
var array1 = ['apple', 'banana', 'carrot']

// 순서대로 값을 저장하는 자료구조 (선형 자료구조)
// 맨뒤에 값을 삽입 push(), 삭제 pop() 
array1.push("daisy") // 특정 자료형에만 사용가능한 동작을 담고 있는 함수들을 (메서드)
console.log(array1)
array1.pop()
console.log(array1)

// 맨 앞(unshift, shift)
array1.unshift("daisy") // 맨 앞에 삽입 
console.log(array1)
array1.shift() // 맨 앞의 값을 제거
console.log(array1)

// 중간 어딘가에 값을 넣어야 하는 경우도 있을 겁니다. (splice) 
// splice(시작index, 삭제할개수, 삽입할 값)
array1.splice(1, 1, "ban");
console.log(array1)

// 맨 뒤에 donut을 추가 
// array1.push("donut")
array1.splice(3, 0, "donut");

// ban~ 를 삭제하고 bee, betray라는 단어를 넣어보세요.
array1.splice(1, 1, 'bee', 'betray')
console.log(array1)
array1.splice(1, 1, 0,1)

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//             (start는 무조건 있어야 함 [, 생략가능 [, 생략가능, ...]]]  )
array1.splice(1, 2)
console.log(array1, 'bee', 'betray')

// JS의 sort는 기본적으로 유니코드로 정렬을 합니다. 숫자는 어떻게 정렬해야 할까요?
var array2 = [-565, -3, 556, 1.3, NaN, null, undefined, true, 0]
array2
console.log(Number(null))
console.log(typeof(NaN))

// JS의 기본 SORT는 문자열 순서대로 정렬 
console.log(array2.sort())

// 숫자로서 오름차순(작은 거~큰 거), 또는 내림차순(큰 거~작은 거) 정렬하는 방법?
console.log(array2.sort(function (a, b) {
  return a - b;
}));


// -2. Set(집합) - 중복을 걸러내는 유형. new Set([1,3,4,5,6,6])
var set1 = [1,3,4,4,5,6,6]
set1
set1 = new Set(set1) // 중복되는 값들을 걸러낸 집합자료형 
set1
console.log(typeof(set1))

// Create / Read / Update / Delete  
// set1.push(6,7,8)
set1.add(7);
console.log(set1)
set1.add(6); // 이미 있는 값은 삽입 불가 
console.log(set1)
set1.delete(6); // 값을 삭제
console.log(set1)

// -3. Object(일반 객체) - key(기본 자료형)로 value를 부르는 종류의 dictionary 타입
//   - key는 기본자료형만 사용 가능합니다. (object, array, function은 불가)
//   - key는 중복될 수 없습니다. (중복된 key로 삽입하면 나중에 삽입한 값으로 덮어씌워집니다.)
//   - key의 순서는 보장되지 않습니다. (입력한 순서대로 출력되지 않습니다.)
//   - key 중심으로 움직입니다. value로 key를 찾을 수 없습니다.
//   - key의 자료형은 string, number, boolean, null, undefined, symbol이 가능합니다.
//   - value는 모든 자료형이 가능합니다. (기본자료형, 참조자료형 모두 가능)
var dict1 = {"name": "김연지", "age" : 20, "hobby" : ["자전거 타기", "책읽기"] }
          // key(문패) : value(값), key : value, key:value 
console.log(dict1['name']) 

// dict2 를 만들어주시고, 가: 가위, 나:나비, 라;라디오, 다:다람쥐 
var dict2 = {"가" : "가위", "나": "나비", "라":"라디오", "다":"다람쥐", 1: 1010, true: {'참':true} }
dict2

// 특정 값을 꺼내는 방법  변수명[key] 로 value에 접근합니다. 
console.log(dict2[1])
dict2['가'] = '가랑이'; // key가 이미 있으면 value가 변경됨
dict2['마'] = '마술사'; // key가 없으면 새로 key-value 쌍이 추가 
dict2
delete dict2['가'] // dict2의 '가' 방을 삭제 
dict2
console.log(delete dict2['가']) // key가 있건 없건 true가 리턴 

console.log('라' in dict2) // in 키워드로 key가 있으면 true
console.log('나비' in dict2) // in 키워드로 key에 없으면 false 

console.log(Object.keys(dict2)) // key 만 array 형태로 리턴 
console.log(Object.values(dict2)) // value 만 array 형태로 리턴 
console.log(Object.entries(dict2)) // [key, value]  array 형태로 리턴 


// 자체적으로 dict의 key를 모두 문자열로 바꿔서 저장한다.
// JSON: JavaScript Object Notation: "{'name':'김연지', 'age':'20'}"

/* -4. Map: dictionary와 마찬가지로 키-값으로 쌍을 저장합니다. 키로 값을 꺼내 씁니다.
    - 키로 모든 데이터 타입을 받아줍니다. 
    - 삽입 순서대로 요소를 반복할 수 있습니다.
    - size 속성을 사용해서 요소의 개수를 확인할 수 있습니다.
    - set() get()으로 삽입, 조회를 할 수 있습니다.
    - 뎁스가 복잡하거나, 데이터의 입력 순서, 양이 많을 때 
*/
var map1 = new Map(); 
map1['가'] = '가위'; // map이지만 순서가 보장되지 않음.
console.log(map1['가']); // dict와 같습니다.

// 되기는 되지만 이렇게 직접 접근하지 않고 메서드를 경유하기 위해 map을 씁니다.

// 함수: 코드의 순서를 정해서 한번에 부를 수 있도록(호출할 수 있도록) 만들어 놓은 덩어리
         // 입력에 대해 일관된 출력을 보장하는 코드 덩어리
         // 프로그래밍에서의 함수를 따지고 보면 딱 2개 밖에 없습니다.
         // getter(보여주는 것)와 setter(해당 값을 변경하는 것) 
// 나, 나비 / 다, 다람쥐 
// 나, 나비를 빼보세요. 
map1.set('나', '나비');
map1.set('다', '다람쥐');
map1.set('다', '다리미'); // 이미 있는 key는 value가 바뀝니다.
map1.set(1, 1010); // 들어오는 순서가 보장됩니다. 
console.log(map1.get('나')) // set으로 삽입한 값만 get으로 부를 수 있습니다.
map1.delete('나')
// console.log(Object.entries(map1)); // dict로 우겨넣은 값만 출력됨 
console.log(map1.get('1')); // undefined: key에 원래 자료형 그대로를 보관하기 때문에 문자열로 변환되지 않습니다. 
map1;
console.log(map1.keys());
console.log([...map1.keys()]);
console.log([...map1.entries()]);

/*
9. 반복문: for-반복의 횟수가 정해져 있을 때
          /while-반복의 횟수가 정해져 있지 않을 때 
-1. for (초기값; 조건; 증감식) {
  반복되어야 할 실행문

  반복되는 숫자를 의미하는 변수를 i, iter, count 변수명을 주로 사용합니다.
  반복문 안에 반복문을 작성할 경우(중첩반복문) 내부 반복변수를 알파벳을 하나씩 더해가면서 사용
      j, k, l, m 
  
  2 x 1 = 2
  2 x 2 = 4
  2 x 9 = 18
  ....   
  3 x 1 = 3
  3 x 2 = 6 
}
*/

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log('-----------------------------------')
// 1~5까지 출력되도록 변경
    // 초기값 ; 조건 ; 증감식 
for (var i = 1; i < 6; i++) {
  console.log(i);
}

console.log('-----------------------------------')
// 5~1까지 출력되도록 변경
for (var i = 5; i > 0; i--) {
  console.log(i);
}
console.log('-----------------------------------')
// 실습: 5, 3, 1이 출력되도록 변경
for (var i = 5; i > 0; i = i-2) {
  console.log(i);
}

// 좋은 코드
// 1. 짧은 코드 (수정할 때도 코드 10줄에 에러가 1번씩 난대요)
// 2. 불필요한 동작이 없는 코드 
// 3. 변수명/함수명 등이 직관적이어서 보면 이해할 수 있는 코드 
// 4. 주석이 잘 달려있어서 이해할 수 있는 코드 
for(var i = 5 ; i > 0; i -= 2){
  console.log(i)
}

for (var i = 5; i > 0; i--) {
  if (i % 2 == 0) {
  } else {
    console.log(i);
  }
}

// 배열의 길이는 .length 라는 속성으로 확인
var arr = ["김연지", "신짱구", "신짱아"] 
console.log(arr.length)   // ~~야, 안녕? 이라는 글귀를 더해서 3명한테 인사를 해주세요.

// 배열의 방의 개수를 조건식으로 사용 
for (var i=0; i < arr.length; i++) {
  console.log(`${arr[i]}야, 안녕!`)
}

// 방번호를 경유하지 않고 직접 값을 끄집어내는 방문: for in: true/false로 더이상 끄집어낼 게 없을 때까지
for (var index in arr) {
  console.log(`${arr[index]}야, 안녕!`)
}

// for of 직접 방에 접근해서  
// for (하나씩 끄집어 낼 데이터를 부르는 공갈문자 in 집합자료명)  
console.log("=======================")
for (var value of arr) {
  console.log(`${value}야, 안녕!`)
}

dict2 // dict 
// dict2는 key의 셀수있는 목록(Iterator)을 만듭니다. 
// 자체 목록에서 key를 하나씩 끄집어내며 true를 리턴해서 반복문을 동작시킵니다.
// 더이상 끄집어낼 key가 없으면 false를 리턴해서 반복문을 중단시킵니다.
for (var key in dict2) {
  console.log(`key: ${key} - value: ${dict2[key]}`) // key만 출력
}

dict3 = {}
console.log(key in dict3) 

// map은 .size() 라는 메서드로 방의 개수를 구할 수 있습니다. 
// map1에 들어있는 key - value를 출력해보세요.
console.log([...map1.entries()])

    // 구조 분해:  [key, value] (['다', '다리미'])
for (var [key, value] of map1) {
  console.log(`key: ${key} - value: ${value}`)
}


// -2. while문 - 반복할 횟수가 정해지지 않았을 때
// 1. while문 바깥에 조건을 끝낼 실마리를 만들어주기
// if / switch / for / while 같은 코드블럭이 안으로 들어가는 동작의 앞뒤에는
// 엔터를 쳐서 다른 실행문들과 구분해서 보기 좋게 작성합니다. 
var i = 1; // 초기값

while (i < 6) { // 조건식
  console.log(i); // 실행문
  i++; // 증감식
}

/*
초기값

while (조건식) {
  실행문
  증감식
}
*/

// 5~1까지 출력
var i = 5; // 초기값

while (i >= 1) { // 조건식
  console.log(i); // 실행문
  i--; // 증감식
}



// 1, 3, 5만 출력
var i = 1; // 초기값

while (i < 6) { // 조건식
  console.log(i); // 실행문
  i+=2; // 증감식
}

// 2. 무한반복으로 작성하고 break, continue로 강제로 흐름을 제어

var i = 1;

while (true) {
  console.log(i)
  i++;
  if (i > 5) {
    break; // break는 특수한 키워드로 break를 만나는 순간 { } 바깥으로 인터프리터가 빠져나갑니다.
  }
}

// 5 ~ 1 
var i = 5;

while (true) {
  console.log(i);
  i--;
  if (i < 1) {
    break; // break는 특수한 키워드로 break를 만나는 순간 { } 바깥으로 인터프리터가 빠져나갑니다.
  }
}

// 1, 3, 5 
var i = 0;

while (true) {
  i++;
  
  if (i > 5) {
    break; // break는 특수한 키워드로 break를 만나는 순간 { } 바깥으로 인터프리터가 빠져나갑니다.
  }
  
  if (i % 2 === 0) {
    continue; // continue는 건너뛰기. 아래 코드를 읽지 않고 반복문의 처음으로 돌아갑니다.
  } else {
    console.log(i);
  }
}


// 동작하는 코드를 리팩토링해서 짧고, 직관적이고, 빨리 같은 결과를 출력하도록 

// 1부터 5까지의 홀수를 출력합니다.
for (let oddNumber = 1; oddNumber <= 5; oddNumber += 2) {
  console.log(oddNumber);
}


// arr 와 .length 속성을 이용해서 arr의 모든 원소를 출력하는 while문을 만들어보세요.
/*
초기값;

while (조건식) {
  실행문;
  증감식;
}
*/
var i=0;

while ( i < arr.length) {
  console.log(`${arr[i]}야, 안녕!`);
  i++;
}


// forEach (인덱스를 경유하지 않고 바로 값만 출력하는 메서드)


// for ... of : 인덱스를 경유하지 않고 각 원소에 직접 접근



/* 10. 함수 : 코드를 재사용하기 위해 씁니다.
- 1. 기본형
  function 함수명(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나    
}

- 2. 익명함수: lambda처럼 쓰고 버리는 걸 기본으로 합니다.
- var 함수명 = function(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나
}

-3. 화살표함수: () => { 동작 }
*/

var arr = ['짱구', '짱아', '훈이'] // 값 자체를 넣고
arr

// js에서의 함수 
function hello() {
  console.log('안녕하세요')
}

hello()

// parameter(매개변수) 로 변수를 전달하는 함수 
// 매개변수를 몇 개라도 구분해서 넣기 위해 ,로 값을 구분해서 넣습니다.
function hello1(이름, 나이) {
  console.log(`${이름} 님, 안녕하세요. ${나이}살 이시군요.`)
}

hello1() // 이름 자리에 들어와야할 매개변수를 생략했기 때문에 undefined 님, 안녕하세요. 
hello1('신짱구')
hello1('신짱아', 5)

function hello2(이름, 나이) {
  return `${이름} 님, 안녕하세요. ${나이}살 이시군요.`; 
  // 인터프리터가 함수 동작을 다 마치고 돌아갈 때 달고 돌아간다.
}

var hello = hello1()
var hi = hello2()

console.log(hello)
console.log(hi)

function hello3() {
  return `hello3가 종료될 때 달고 돌아온 값`
}

var hi2 = hello3()
console.log(hi2)

console.log("------- 함수 -------------")
// 1, 3, 5를 출력하는 반복문을  oddNums() 를 호출하면 매번 같은 동작이 실행되도록 함수 안에 넣어주세요.
// 1부터 5까지의 홀수를 출력합니다.
function oddNums() {
  for (let oddNumber = 1; oddNumber <= 5; oddNumber += 2) {
    console.log(oddNumber); // 보여주고 끝나는 함수
  }
}

oddNums()

// start 부터 end 까지의 홀수를 출력합니다.
// 아무것도 start나 end에 넣지 않으면 1, 10이 들어가도록 기본값(default parameter)을 주고 싶어요.
// 함수의 입력값으로 파라미터=기본값, 파라미터=기본값 
function getOddNums(start=1, end=10) {
  for (let oddNumber = start; oddNumber <= end; oddNumber++) {
    if (oddNumber % 2 === 1) {
      console.log(oddNumber); 
    }
  }
}

console.log("------ getOddNums() ----------")
getOddNums(2,16)


// 1부터 5까지의 홀수를 return합니다.
function setOddNums() {
  oddNums = [] // 배열을 만들고
  
  for (let oddNumber = 1; oddNumber <= 5; oddNumber += 2) {
    oddNums.push(oddNumber); // 값을 집어넣고
  }
  
  return oddNums; // 반복이 끝나면 달고 돌아갑니다.
    // return의 역할:
    // 1. 함수를 종료시킵니다.   2. return 뒤에 만들어진 값을 메모리에 돌려줍니다.
}

var result = setOddNums();
result


// start, end 까지 반복하면서 홀수만 가져와서 return하는 setOddNumsFinal(start, end)
// 아무것도 넣지 않으면 start=1부터 end=5까지의 홀수를 return합니다.
function setOddNumsFinal(start=1, end=5) {
  oddNums = [] // 배열을 만들고
  
  for (let oddNumber = start; oddNumber <= end; oddNumber++) {

    if (oddNumber % 2 === 1) {
      oddNums.push(oddNumber); // 값을 집어넣고
    }

  }
  
  return oddNums; // 반복이 끝나면 달고 돌아갑니다.
    // return의 역할:
    // 1. 함수를 종료시킵니다.   2. return 뒤에 만들어진 값을 메모리에 돌려줍니다.
}

result = setOddNumsFinal(3,15);
result


// 화살표 함수  (a) => { a + 실행문 }
 var test = (a) => {
  console.log(a+' 테스트')
}

test('김연지')

// 익명함수: function (a, b) { 실행문 } - 다른 함수의 보조 역할로 쓰고 버릴 거라서 이름을 생략 
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// 익명함수에 이름을 ordered라고 붙임 
var ordered = function (a, b) {
  return a - b;
}

console.log(ordered(2, 3))

// -4. 함수의 스코프
//     1. 스코프 : 변수나 함수가 어디까지 접근해서 사용할 수 있는지. 
//     2. 호이스팅(Hoisting): 변수나 함수의 선언이 스코프의 최상단에서 먼저 읽은 것처럼 동작하는 것. 
//         - 호이스팅은 선언만 끌어올려지고, 값은 끌어올려지지 않습니다.           
//     3. TDZ(Temporal Dead Zone): 변수가 선언되기 전까지 접근할 수 없는 구간
// | 키워드 | 스코프 범위   | 재선언 | 재할당 | 호이스팅     | 특징 요약                           |
// |--------|----------------|--------|--------|--------------|----------------------------------|
// | `var`  | 함수 스코프     | O      | O      | O            | 블록 무시, 중복 선언 가능        |
// | `let`  | 블록 스코프     | X      | O      | O (TDZ)      | 블록 안에서만 유효, 중복 선언 불가|
// | `const`| 블록 스코프     | X      | X      | O (TDZ)      | 상수 선언, 객체 내부 변경 가능    |

//         변수를 선언하는 방법 : 
//     1) var : 함수 단위(스코프)에서 사용이 됨.(블록스코프는 무시)
//                 변수를 새로 만들고 값을 새로 쓸 수 있음.
//     2) let: 블록 단위에서 사용이 됨. { } 
//                 같은 블록 안에서 변수를 중복해 만들 수는 없지만 값은 바꿀 수 있음.
//     3) const : 블록 단위에서 사용이 됨. { } 
//                 한번 값을 넣으면 바꿀 수 없음. 그러나 객체 내부의 속성 등은 수정 가능


// scope : 변수에 접근할 수 있는 위치를 제어 
// var x = '가'; // 함수 범위
// let y = '나'; // 블록 범위
// const z = '다'; // 블록 범위, 상수 (값 변경 불가)

// function variableExample() {
//     var x = 10; // 함수 범위
//     let y = 20; // 블록 범위
//     const z = 30; // 블록 범위, 상수 (값 변경 불가)

//     if (true) {
//         var x = 40; // 같은 함수 내에서 var 변수는 덮어씌워짐
//         let y = 50; // 블록 내에서만 유효
//         const z = 60; // 블록 내에서만 유효

//         console.log('if문 내부:', x, y, z); // 40, 50, 60
//     }

//     console.log('if문 외부:', x, y, z); // 40, 20, 30 (var는 재할당되었지만, let과 const는 블록 범위를 가짐)
// }


/* 11.  클래스: 같은 형식으로 사용하기 위한 자료형을 미리 만들어놓고 계속 객체를 찍어서 재사용 
 - 실제로는 function 으로 만들어집니다.
 - sugar coated 문법: 다른 언어와 호환되다 보니까 class 클래스명으로 만들면 내부적으로 코드를 변환해서 동작시켜줍니다. 
*/

// 집합자료형 중에 우리만의 자료형을 만들어서 조금 편하게 데이터를 일괄적으로 관리하기 위한 class 

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
    console.log('안녕하세요!' + this.name)
  }


  
class fighter extends Person {
  constructor(name, age) {
    super(name, age);
  }
  greet() {
    console.log('안녕하세요!' + this.name)
  }
  fighting() {
    console.log('덤벼라!' + this.name)
  }
}

var 고죠사토루 = new fighter('고죠사토루', 80);  
console.log(고죠사토루.name); // 고죠사토루
고죠사토루.greet(); 
고죠사토루.fighting(); 

// static: 클래스를 통해 접근하는 클래스 변수, 클래스 메서드
// 인스턴스를 통해 접근하는 인스턴스 변수(this로 전달), 인스턴스 메서드
// 은닉성 구현: #을 붙인 private 변수를 사용하여 외부에서 접근하지 못하도록 숨길 수 있습니다.


// BankAccount 라는 은행 계좌를 관리하기 위한 class를 만들어보겠습니다.
// bankName, name, accountNumber, balance 
// #을 앞에 붙인 변수는 클래스 외부에서 접근이 불가능하도록(private) 숨길 수 있습니다. 
class BankAccount {

  #balance; 

  // 클래스 변수: static 이라는 키워드를 앞에 적어둔 클래스 변수로 클래스에서 관리하기 위한 속성을 저장합니다. 
  static bankName = '우리';
  static accountNo = 0; // 이 은행에 계좌를 만든 총 계좌수 

  // 클래스 메서드: static 이라는 키워드를 앞에 적어서 클래스에서 필요한 동작을 만듭니다.
  static hello() {
    console.log(`어서오세요. ${this.bankName}은행입니다~ 개설 이래 현재까지 ${this.accountNo}개의 계좌가 있답니다.`)
  }

  // 인스턴스 변수: this 라는 키워드로 각 새로 만들어진 고객 인스턴스만의 고유한 값들을 전달  
  constructor(name, accountNumber, balance) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.#balance = balance;
    this.cusAccountNo = ++BankAccount.accountNo; // 그 때의 계좌수 
  }

  // 함수인 걸 숨겨서 변수처럼 이 값을 파악하게 하려고 
  // get -> 조회 , set -> 수정 
  // 인스턴스 메서드: deposit: 입금  - 기존 balance에 새로 들어온 금액을 추가
  set deposit(amount=0) { // setter : 값을 변경만 하는 함수 
    this.#balance += amount;
  } 

  // 인스턴스 메서드: withdraw: 출금 - 기존 balace에 새로 빠져나간 금액을 제외 
  set withdraw(amount=0) { // setter: 값을 변경만 하는 함수 
    this.#balance -= amount;
  } 

  // private 변수의 조회만 가능하도록 작성한 getter 함수 
  // 실제로는 함수지만 외부에서 메서드로 사용할 때 변수처럼 부르게 됩니다.
  get checkAmount() {
    console.log(this.#balance);
  }
}

var 아이유 = new BankAccount('IU', '123-45', 30000);
아이유
// 아이유.deposit(40000);
아이유.deposit = 40000;
// 아이유.checkAmount();
아이유.checkAmount = -9999999999999999; 
console.log('checkomout를 바꾼 후 ------------- ')
아이유.checkAmount;
아이유
아이유.withdraw = 4000;
아이유.checkAmount;
아이유

// 클래스 변수와 클래스 메서드는 클래스를 통해 접근
BankAccount.hello();
console.log(BankAccount.bankName);

// 객체지향프로그래밍의 결과를 최대한 살려서 장점처럼 써봅시다.
// 변수에 직접 접근이 가능하다는 것은 직접 수정도 할 수 있다는 뜻 
// 변수를 확인하거나 조작할 때 method를 경유하도록 만드는 게 권장됩니다.

// console.log(아이유.#balance); // 없는 게 아니라 숨어있음. 그래서 getter로만 확인하고 setter로만 변경 가능



// BankAccount를 상속받은 InsAccount를 만들어주세요. 
// 클래스 변수 를 bankName "동양" 으로 바꿔서 재정의(override)
// 생성자에 kind 라는 인스턴스 변수를 추가해서  default값은 변액 등 보험의 종류를 넣을 수 있도록 추가해보세요. 

class InsAccount extends BankAccount {
  @override
  static bankName = '동양';
  constructor(name, accountNumber, balance, kind='변액') {
    super(name, accountNumber, balance);
    this.kind = kind;
  }

  
}




