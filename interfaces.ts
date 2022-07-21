type Nickname = string
type Health = number
type Friends = Array<string>

type Userr= {
    nickname: Nickname,
    healthBar: Health
}

const user1: Userr = {
    nickname:'user1',
    healthBar:10
}

/*
type을 지정된 옵션으로만 제한할 수도 있음

*/
type Team = 'red'| 'blue' | 'yellow'
type HealthBar = 1|5|10

interface Playerr {
    nickname: string,
    team: Team,
    helth: HealthBar
}

const sony :Playerr = {
    nickname:"sony",
    team: 'red',
    /*'pink' 안돼*/
    helth: 5
}

//ts에게 object의 모양을 알려주는 방법

//1. 
// interface Playerr {
//     nickname: string,
//     team: Team,
//     helth: HealthBar
// }
// - react에서 주로 사용
// - 오로지 obj의 모양을 ts에게 설명해주기위해서만 사용됨
// - 축적 가능 
//      ex) interface user{name:string}
//          interface user{health:number}


//2. (interface에 비해 활용도가 많음)
// type Playerr = {
//     nickname: string,
//     team: Team,
//     helth: HealthBar
// }



//practice 

/*

abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string
    ){}
    abstract sayHi(name:string): string
    abstract fullName(): string
    
}

//new User()는 X
// 추상클래스는 인스턴스를 만들수 없음.
class plaayer extends User {
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `hello ${name}, I'm ${this.fullName()}`        
    }
} 


*/


//추상 클래스(abstract)를 implements로 바꿈
// - JS에 없음. 
// - private나 protected 사용 불가 only public
// - 클래스가 특정 인터페이스를 충족하는지 확인할 수 있습니다.
// - 클래스를 올바르게 구현하지 못하면 오류가 발생합니다.
// - implements 절은 클래스가 인터페이스 유형으로 처리될 수 있는지 확인하는 것입니다. 
// - 클래스의 유형이나 메서드는 전혀 변경하지 않습니다 클래스는 여러 인터페이스를 구현할 수도 있습니다.


//interface : 클래스의 모양을 특정할 수 있게 해주는 방법.
interface User{
    firstName:string
    lastName:string
    sayHi(name:string):string
    fullName():string
}
interface Human {
    health:number
}
class plaayer implements User, Human {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `hello ${name}, I'm ${this.fullName()}`        
    }
}
function makeUser(user:User){
    return "hi"
}
//ㄴ argument에 interface를 씀으로써 obj의 모양을 지정해 줄수도 있음

makeUser({
    firstName:"name",
    lastName:"las",
    fullName:  () => "xx",
    sayHi: (name) => "string"
})


/*Type Aliases과 Interfaces의 차이점

Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다. */

type PlayerA = {
    name:string
}
type PlayerAA = PlayerA & {
    lastName:string
}

const playerA: PlayerAA = {
    name:'AAA',
    lastName:'xxx'
}

////

interface PlayerB {
    name:string
}
interface PlayerB {
    lastName:string
}
interface playerB {
    health:number
}

const playerB: PlayerB ={
    name:'BBB',
    lastName:'XXX'
}

/* interface와 type 모두 abstracted 클래스를 대체할 수 있음

type PlayerA ={
    firstName:string
}

interface PlayerB {
    firstName:string
}

class User implements PlayerA {
    constructor (
        public firstName:string
    ){}
}


*/



/*vlpt*/
interface Shape {
    getArea(): number;
}

class Circle implements Shape{
    //implements==Shape의 조건들에 부합한다아
    constructor(private radius:number){
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {

    constructor(private width:number, private height:number){

    }
    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);

const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
    console.log(shape.getArea())
})

//-------------------------------------
//vlpt - 상속 extends

interface Person {
//type Person = {    
    name: string;
    age?: number;
}

interface Developer extends Person {
//type Developer = Person & {    
    skills: string[];
}

const person: Person = {
    name:'XXX',
    age: 10
}
const expert: Developer = {
    name:'EEE',
    skills:['dfsdfs']
}

/* 
대부분의 경우 type alias 사용해도 무방
라이브러리를 위한 타입을 설정하는 경우에는 interface사용을 권장
아무튼 일관성있게 써라..type이면 type, interface는 interface만..
*/
