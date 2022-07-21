/*vlpt */

/* generic
구체적인 타입을 지정하지 않고 다양한 인수와 리턴 값에 대한 타입을 처리할 수 있다.
타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재사용성을 높일 수 있습니다.
any사용하기 싫을때.. type 지키고싶을때 사용
*/
function merge<T1, T2>(a: T1, b: T2) {
    return{
        ...a,
        ...b
    }
}

const merged = merge({ foo:1 }, { bar:2 });

function wrap<T>(param: T){
    return {
        param
    }
}

const wrapped = wrap(10);
//wrapped.

//-------------- interface에서 generic
interface Items<T> {
//type Item<T> = {
    list: T[]
}

const items: Items<number> = {
    list:[1,2,3]
}
const items2: Items<string> = {
    list:['1','2','3']
}



//-------------- class에서 generic : 대기줄 만들기
class Queue<T> {
    list: T[] = [];

    get length() {
        return this.list.length;
    }

    enqueue(item: T){
        this.list.push(item)
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

while(queue.length >0){
    console.log(queue.dequeue());
}