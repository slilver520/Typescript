//@ts-check
//ts파일에 js파일 확인하라 알림..

/** JSDoc: js에 타입 힌트 제공, 코드 코멘트 달기 (단축키 :/**+enter)
 * initializes the project
 * @param {object} config 
 * 입력값의 데이터 타입은 object, 입력값의 이름은 config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config){
    return true;
}

/**
 * exit the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code){
    return code + 1;
}

// myPackage.d.ts
// //node_modules에 설치된 js모듈 사용하는 방법
// interface Config {
//     url: string;
// }
// declare module "myPackage"{
//     function init(config:Config): boolean;
//     function exit(code:number): number;
// }
