//generic을 사용해서 로컬 스토리지 api 따라하기
interface SStorage<T> {
    [key:string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value:T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }//string을 보내주고 T를 받는다.
    clear(){
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()
stringsStorage.get('xxx')
stringsStorage.set('hello', 'how are you')

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get('dfd')
booleansStorage.set('hello', true);