import _ from 'lodash';

// const KIA = {
//   color:'white',
//   wheel:'4',
//   saled_year:[2020, 2021, 2022]
// };

// // 얕은 복사
// const HYUNDAI = Object.assign({}, KIA);
// // console.log(HYUNDAI == KIA);

// KIA.saled_year.push(1998)
// // console.log(HYUNDAI.saled_year, KIA.saled_year);

// // 깊은 복사
// const new_Car = _.cloneDeep(KIA);
// // console.log(new_Car == KIA);

// KIA.saled_year.push(1000);
// // console.log(new_Car.saled_year, KIA.saled_year);

// import rand from './random';
// import {
//   my_ceil as c, 
//   my_floor as f, 
//   my_round as r
// } from './random';
// // console.log(rand(10))

// let pi = 3.14
// console.log(c(pi))
// console.log(f(pi))
// console.log(r(pi))

import myData from './myData.json';

// console.log(myData);

const user = {
  name: "Moon", 
  device: "Note-20",
  age: 25,
  major: "Math" 
}

const str = JSON.stringify(user);
// json 파일 내부의 모든 내용은 ! 문자열임 !
// 이유는? 통신 간에 데이터를 주고 받을 때 json 이 매개가 됨
// 근데, json 내부에 다양한 참조형 객체가 들어갈 수 있기 때문에 경량화를 위해서 문자열로 취급함 !!
// console.log("str: \n", str);

// // JS에서 사용될 수 있도록 다시 객체화 해주기
// const obj = JSON.parse(str);
// console.log('obj : \n', obj);

// 04/11
// localStorage.setItem('user', JSON.stringify(user))
// let obj = JSON.parse(localStorage.getItem('user'))
// obj.age = 25;
// localStorage.setItem('user', JSON.stringify(obj));

// localStorage 실습
let id, pw;
let register_btn = document.querySelector('button');
let user_array = [];
register_btn.addEventListener('click', ()=> {
  id = document.querySelector('input.id').value;
  pw = document.querySelector('input.pw').value;

  let newUser = {
    id,
    pw,
  }
  localStorage.setItem(`user${user_array.length + 1}`, JSON.stringify(newUser));
  user_array.push(newUser);
})

let list = document.querySelector('button.list');
list.addEventListener('click', ()=> {
  console.log(user_array.length)
  for(let i = 0;i<user_array.length;i++) {
    console.log(JSON.parse(localStorage.getItem(`user${i+1}`)));
  }
})