const a: number = 5;
//type: string, number, boolean, Element, undefined, null, symbol, bigint, true, never, any

/*함수 typing하는 방법 3가지 */
//1
function add (x:number, y:number):number;
function add(x, y) {
    return x + y
}

//2
const conAdd: (x:number, y:number) => number = (x,y) => x+y;
//ㄴ (x:number, y:number) => number  타입선언

//3
interface Add {
    (x: number, y: number): number;
}
const conAdd02: Add = (x, y) => x+y

//-----------------------------------------

//객체에 type
const obj: {Lat:number, Lon: number} = { Lat:37.5, Lon:127.5}
//배열에 type ( 타입이 추론 된다면 지우길 추천)
const arr: string[] = ['123'];
const arr2: Array<number> = [123, 645]   //generic
const arr3: [number,number,string] = [ 123, 435, 'wow']  //tuple :  길이가 고정된 배열

//-----------------------------------------

//as : 강제로 타입 변경
let aa = 123;
aa = 'hello' as unknown as number;

//-----------------------------------------

//타입 없이 빈 배열을 선언하면 never : 어떤 타입도 올 수 없다.
// 배열 타입 지정해줘야함
try {
    const tryArray :string[]= [];
    tryArray.push('hello');
} catch(error) {
    error;
}

//-----------------------------------------
// ! :null or undefined 이 아님을 보증함 - 비추하는 기능
const head = document.querySelector('#head')!;
//-----------------------------------------


//가독성을 높이기 위한 일환으로 서로 연관된 상수들을 하나의 namespace에 묶어 관리할 때
//  1.enum : 지정 할 수 도 있음, 문자도 가능 
    //주로 여러개의 변수들을 하나의 그룹으로 묶고싶을때 사용
    //연관된 상수들을 하나의 namespace로 묶어 추상화시키기 위해 도입
const enum EDirection {
    Up,      //0
    Down,   //1
    Left,   //2
    Right   //3
}

//  2. as const -타입의 추론 범위를 줄이고 값의 재할당을 막기 위한 목적("나는 이 값을 상수로 쓰겠다!")
//   - js로 변환시 남아있다
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
}as const;

/*
const ODirection: {
    readonly Up: 0;
    readonly Down: 1;
    readonly Left: 2;
    readonly Right: 3;
}
*/
 //enum 사용 대신..
const a1 = EDirection.Up;
const c = EDirection.Left;

function walk(dir: EDirection) {};

const obj1 = {a:'123', b:'hello', c:'world'} as const;
type Key = typeof obj1[keyof typeof obj1];

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir:Direction){}

walk(EDirection.Left);
run(ODirection.Right);



//객제 타이핑: type과 interface 구분하기
type A = { a2: string };
const a2: A = { a2: 'hello' };

interface B { a2: string }
const b: B = { a2: 'hello' };