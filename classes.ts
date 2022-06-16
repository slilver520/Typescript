
abstract class User {
    constructor(
        private firstName:string,
        private lastName:string,
        public nickname:string
    ) {}
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

/*
abstract class (추상 클래스) 
    - 추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.
    - 직접 새로운 인스턴스를 만들 수는 없다.

ex) 'new User("first", "las", "name")' 은 작동하지 않는다.
because of cannot create an instance of an abstract class.

*/

class Player extends User{
}

const user = new Player("first", "las", "name");
user.getFullName();


/* ===
JS ver

class player{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
}

*/

/*property 정리*/
// public: 모든 클래스에서 접근 가능 (생략가능)
// private: 해당 클래스 내에서만 접근 가능 (자식 클래스에서도 접근 불가)
// protected: 해당 클래스와 자식 클래스에서 접근 가능
 

// TIP)
// private를 사용하면 상속받은 클래스 안에서 마저도 this 사용해 접근 불가능
// 그래서 protected를 사용하면 상속받은 클래스 안에서 this 사용해 접근 가능
// 물론 protected로 지정된 것들은 외부에서 사용이 불가능
// 추상클래스 안에 메소드는 적어서는 안되고 call signature만 적어야 함
// 추상클래스 안의 메소드는 결국 구현이 되지 않는다고 나옴

/*연습 - 단어 사전 만들기*/

type Words = {
    [key:string]: string
}

class Dict {
    private words: Words
    construnctor(){
    /*constructor에서 수동으로 초기화*/
        this.words = {}
    }

    add(word:Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term]  = word.def;
        }
    }
    def(term:string){
        return this.words[term]
    }
    update(word: Word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    del(term: string) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ){}
}

const kimchi = new Word("kimchi", '한국 음식');
const pasta = new Word("pasta", '이탈리아 음식');

const dict = new Dict();
dict.add(kimchi)
dict.def('kimchi')

dict.add(pasta);

console.log("kimchi:", dict.def("kimchi"));
console.log("pasta:", dict.def("pasta"));

dict.update(new Word("kimchi", "very incredible super food"));

console.log("UPDATE KIMCHI:", dict.def("kimchi"));
console.log("NOT UPDATE pasta:", dict.def("pasta"));

dict.del("pasta");
console.log("DELETE pasta", dict.def("pasta"));
console.log("NOT DELETE pasta:", dict.def("pasta"));