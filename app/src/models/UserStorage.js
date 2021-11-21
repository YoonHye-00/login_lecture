"use strict";

class UserStorage {
    static #users = {   //# -> private 변수로 선언. 외부에서 접근 할 수 X. 데이터 은닉화
        id: ["aaaa", "bbbb", "cccc"],
        password: ["1111", "2222", "3333"],
        name : ["가", "나", "다"]
    }

    static getUsers(...fields) { //외부에서 접근할 수 있도록 메소드 생성. static을 붙여줘야 외부에서 접근할 수 있음.
                                 //파라미터로 넘긴 데이터들이 fields에 배열 형태로 저장됨
        const users = this.#users;  
        
        //fields에 대한 원소가 하나씩 순회됨. newUsers -> fields 배열의 초기값(내가 지정 가능)
        //field -> 다음 변수들이 들어옴. field 변수에 fields 배열의 값들이 하나씩 들어감.
        const newUsers = fields.reduce((newUsers, field) => {    
           if(users.hasOwnProperty(field)) {    //users에 해당하는 field에 해당하는 key값이 있는지 물어봄    
            newUsers[field] = users[field];
           }  
           return newUsers; //return되는 newUsers가 다음 파라미터인 newUsers로 들어감
        }, {});  //{} -> newUsers 초기값                                                      
        return newUsers;
    }
}

module.exports = UserStorage;