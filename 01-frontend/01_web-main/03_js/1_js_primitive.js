// https://runjs.app/play

// Ctrl + / 를 동시에 누르면 주석을 지정 / 해제  
/*
여러줄
주석
*/
// 반복문: 똑같은 일을 계속 하지 않으려고 
// 조건문: 상황에 따라 다른 결과를 만들기 위해서 -> 미디어쿼리로 현재 화면 사이즈에 따라 다른 배경화면을 출력 

// 한 줄 주석
// html -> CSS -> JS 입히는 방식으로 화면을 렌더링하기 때문에 하나의 파일에 이 코드들을 작성할 때는 BODY의 맨 마지막에 <script> </script> 사이에 작성합니다.

/* 
1. 변수: 데이터를 담는 메모리주소 대신 짧게 부르는 방이름. 숫자 / 문자 / boolean(참/거짓) / null /   
선언과 할당으로 변수를 만들 수 있습니다. 
- var: 매번 만들고 지울 수 있는 방 
- let: 한번 만들면 값을 바꾸는 건 가능하지만, 새로 지우고 만들 수는 없는 방 
- const: 한번 만들면 값을 바꾸는 게 불가능한 방  
*/
const a = "apple"; // 세미콜론으로 마침표를 찍습니다. 
a
// a = "alter";/
// a 

// 코드가 길어지면, 여러사람이 작업을 하게 되면 var는 권장되지 않습니다. 
// const로 다 만들고 나서 변경이 필요해지는 변수들은 let으로 바꾸기를 권장합니다. 

/*
2. 변수 명명규칙
# camelCase : 소문자로 시작하고 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙 
# PascalCase : 대문자로 시작하고, 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙(class 이름 같은 변수들 보다 더 큰 개념을 담는 변수명에는 파스칼케이스) 
# snake_case: 소문자로 시작하고, 띄어쓰기 자리마다 _ (언더바)로 처리하는 이름 규칙 
# kebab-case: 소문자로 시작하고, 띄어쓰기 자리마다 - (dash)로 처리하는 이름 규칙 

- camelCase 또는 snake_case를 권장합니다.
- class를 만들때는 PascalCase를 씁니다.
- 숫자, _, $을 변수명에 사용 가능합니다. 근데 숫자는 맨 앞에는 들어올 수 없습니다.
- 공백, 마침표, 자바스크립트가 이미 쓰는 keyword(예약어)는 불가합니다.
*/
var num_edit1 = 1;
num_edit1


/*
3. 자료형 
- 7개의 기본자료형(primitive, 원시자료형), 1개의 참조자료형(reference, JS에서는 모두 object로 찍힘)  
  - number(숫자) : 정수, 실수를 모두 number 
  - string(문자열)
  - boolean: true, false로 반환
  - null: 값이 없음. 자료형은 object로 찍힘. 웬만하면 우리가 작성하는 빈방에는 null로 채웁니다.
  - undefined: 정의되지 않음
      - 값을 대입하지 않은 변수 / 리턴이 없는 함수의 실행 결과 / 존재하지 않는 속성을 가리킬 때 자바스크립트가 돌려주는 결과
  - symbol: 고유하고 변경할 수 없는 값. 
  - bigInt: 아주 큰 숫자. 숫자 뒤에 소문자 n을 붙여서 관리.

  - object: 객체
    - 배열, 날짜, 함수, Map, Set, 정규식
*/
var num1 = 1.345; // 정수 1, 실수  1.345 -> number 
num1
typeof(num1); // 자료형을 확인하는 함수 
console.log(typeof(num1));


// BigInt
// number가 100% 정확하게 표현할 수 있는 가장 큰 정수는 9,007,199,254,740,991(약 9007조)입니다. 이 숫자를 넘어가는 순간 자바스크립트는 계산 실수를 하기 시작합니다.
console.log(9007199254740992 === 9007199254740993); // true
console.log(9007199254740992n === 9007199254740993n); 

// 1. 숫자 끝에 n 붙이기 (가장 많이 씀)
const bigNum1 = 123456789012345678901234567890n;
console.log(typeof(bigNum1))

// 2. BigInt() 함수 사용하기 (주로 문자열을 변환할 때 씀)
const bigNum2 = BigInt("123456789012345678901234567890");

console.log(typeof bigNum2); // "bigint"

// 3. String (문자들을 순서대로 늘어놓은 덩어리)
var str = "안녕하세요"; // 큰따옴표 혹은 작은 따옴표로 글자 덩어리를 묶어줍니다.
console.log(str);  // str1이라는 변수에 넣고, 확인해보고, 자료형도 확인해보세요. "안녕하세요."라고 김연지가 말했다. 

var str1 = "'안녕하세요.'라고 김연지가 말했다."; // escaping 문자 
console.log(str1) 

// 4. boolean - 소문자로 작성합니다: true / false
var bool = true;    // 따옴표 없이 글자 그대로 소문자로 true / false 라고 씁니다.
bool;
console.log(typeof(bool));    


// 5. null: 개발자가 대입해놓은 값 없음 
var null1 = null;
//-------
// 선언 
//        ------- 
//          대입 
console.log(typeof(null1)); // object 
// 'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지되고 있습니다.
// js에서 null을 확인할 때는 Boolean으로 형변환을 해서 false 여부로 null 타입을 체크합니다.
console.log(Boolean(null1)); // false 

// 6. undefined -> 인터프리터가 코드를 돌렸는데 줄 게 없음 (return 없음)
var undef1;
//-------
//  선언만 

console.log(typeof(undef1)); // undefined 
console.log(Boolean(undef1)); // false 


//https://codeshare.io/new
/* 실습:
- alert() - 출력만 가능한 팝업을 띄우는 함수
- confirm() - true, false 값만 입력받을 수 있습니다.
- prompt() - 값을 직접 입력받을 수 있습니다. input()

 라는 변수에 수학점수, engScore라는 변수에 영어점수를 입력받고 
그 결과를 avgScore라는 변수에 (mathScore+engScore)/2 
평균값을 저장합니다. 
 */ 


var avgScore = 90;
console.log(`평균 점수는 ${avgScore}점입니다.`)
// 대문자로 자료형을 쓰면 형변환 함수가 됩니다. 

console.log(Number("90"))
console.log(Number("90년생")) // NaN - Not a Number : 숫자로 형변환이 불가능한 경우

// Boolean() : false, 0, null, undefined, '', NaN는 false / 빈 참조자료형은 true가 나옵니다. [], {} 
console.log(Boolean({}))



/* 4. 연산자 우선순위 - 다른언어와 같습니다
  1) ( )- 감싸준 연산자가 제일 상위에 동작
  2) ** 제곱
  3) -, 음수부호 
  4) * / %(나머지) 
  5) +, - 연산이 동작합니다.
  6) ++, --   a -=  1   a--(후위식) / --a(전위식)
*/
var num = 0;
var resultA = num--; 
//num;
//num = num+1; // 후위증가연산자 쓰고 메모리에 돌려놓을 때 1을 더해서 돌려놓음 
num;
resultA; // 0

var num1 = 0;
var resultB =  --num1; // 쓸 때 1을 더하고 사용한다: 전위증가연산자 
resultB // -1
num1;

console.log(3 ** 3) // 제곱

/* 5. 비교연산자
= (대입연산자) var a = 1;
== (항등연산자, 동등성 비교): 값이 같은지
=== (완전항등연산자, 동일성 비교): 자료형, 값까지 비교
*/
console.log(1 == "1") // 항등연산자 true 
console.log(1 === "1") // ===을 손에 익히는 것을 권장: 자료형/값을 함께 비교 false

/* 
6. 논리연산자 &&(and), ||(or), !(not) 
*/

console.log(false && true) // and = 둘 다 참이어야만 true
console.log(false || true) // or = 하나라도 참이면 true
console.log(!true) // not = 원래 조건의 반대


// 7. 조건문 : if ~ else if ~ else / switch ~ case 문이 존재합니다. 


/* 실습1: 아래 자바스크립트가 제공하는 Date 객체를 활용하여
현재 시간이 12시보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어 주세요. */
// let date = new Date() // 현재 날짜와 시간 기준으로 생성
// date = new Date("2025/12/25"); // 입력받은 문자열을 파싱하여 생성 - 한국시간대라서 -9해서 출력됨
// date
// date.getFullYear();
// date.getMonth()+1; // 월이 0부터 시작함 
// date.getDate();
// date.getDay(); // 0(일) ~ 6(토)
// date.getHours(); // 0 ~ 23
// date.getMinutes(); // 0 ~ 59

/* 실습1: 아래 자바스크립트가 제공하는 Date 객체를 활용하여
현재 시간이 12시보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어 주세요. */

let date = new Date(); // 현재 날짜와 시간 기준으로 생성

/// 1. 필요한 위치에서 date.getHours()를 직접 호출 
// if 현재 시간이 12시보다 적은 시간이면 AM
if (date.getHours() < 12) {
  console.log(`AM ${date.getHours()} 시`)
  // else 이면 PM 
} else {
  console.log(`PM ${date.getHours()-12} 시`)
}


// 2. 한 번 변수에 담아놓고 조건문 안에서 계속 재사용: 추후 유지보수 고려해서 
let hour = date.getHours();

if (hour < 12) {
  console.log(`AM ${date.getHours()} 시`)
  // else 이면 PM 
} else {
  console.log(`PM ${date.getHours()-12} 시`)
}


/* swtich (명제) {
    case (1) : 조건 만족시 실행문,
               break;
    case (2) : 조건 만족시 실행문
               break;
    default: 위의 모든 조건을 만족하지 못할 경우 실행문 
              break; // 마지막이면 안 걸어도 됩니다.
}
*/




/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */
var menu = "마라탕";
switch (menu) {
  case ("짜장면"):
    console.log(menu + "를 드시는군요 ")
    break;
  case ("짬뽕"):
    console.log(menu + "를 드시는군요 ")
    break; // 코드블럭({}) 바깥으로 강제로 나가게 만드는 명령문 
  case ("샐러드"):
    console.log(menu + "를 드시는군요 ")   
    // break; // 어차피 마지막 줄이라면 생략 가능  
  default: // 셋 다 참이 아닐 경우 (else)
    console.log("그럼 뭐 드실래요?")
} 



// 다중조건문: 1개 이상의 조건으로 참/거짓을 판단하는 조건문
// if문으로 변경 ==(값만) / ===(값과 자료형을 함께 비교)
if (menu === "짜장면") { // 조건1 
  console.log(menu + "를 드시는군요.")
} else if (menu === "짬뽕" ) { // 조건2
  console.log(menu + "를 드시는군요.")
} else if (menu === "샐러드" ) { // 조건3 
  console.log(menu + "를 드시는군요.")
} else {
    console.log("그럼 뭐 드실래요?")
}

// 복합조건문: 연산자 && (and) / || (or) / ! (not) 으로 여러개 조건을 한번에 비교할 수 있습니다.
if (menu === "짜장면" || menu === "짬뽕" || menu === "샐러드") { // 조건1 
  console.log(menu + "를 드시는군요.") // 참일 경우의 동작은 같으므로 
} else {
    console.log("그럼 뭐 드실래요?")
}

console.log("------------맨 앞의 값만을 가지고 사용한다. --------------")
switch (menu) {
  case ("짜장면" || "짬뽕" || "샐러드"): // 맨 앞의 것만 비교하고 아니면 넘어갑니다.(단락평가)
    console.log(menu + "를 드시는군요 ")   
    break;   
  default: // 셋 다 참이 아닐 경우 (else)
    console.log("그럼 뭐 드실래요?")
} 


// 삼항연산자 - 불표현식 ? 참 : 거짓