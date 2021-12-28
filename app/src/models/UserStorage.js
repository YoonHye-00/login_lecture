"use strict";

class UserStorage {     //class 자체에서 users에 접근하기 위해 static을 붙여줌 (UserStorage.users 가능 (public인 경우)). 아니면 const userStorage = new UserStorage(); 한 뒤에 가능.
    static #users = {   //# -> private 변수로 선언. 외부에서 접근 할 수 X. 데이터 은닉화
        id: ["Aries", "bbbb", "cccc"],
        password: ["dkfltm", "2222", "3333"],
        name : ["박윤혜", "나", "다"]
    }

    static getUsers(...fields) { //외부에서 접근할 수 있도록 메소드 생성. users에서 원하는 키-값만 가져올 수 있도록 파라미터를 ...fileds로 함
                                 //파라미터로 넘긴 데이터들이 fields에 배열 형태로 저장됨. 만약 id, password를 넘겼으면 ['id', 'password'] 이렇게 되는거임
        const users = this.#users;  
        
        //fields에 대한 원소가 하나씩 순회됨(reduce 반복문). newUsers -> fields 배열의 초기값(내가 지정 가능)
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