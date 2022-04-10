// lodash 함수 사용
import _ from 'lodash';

// 객체 데이터 A, B ,C
const userA = [
  { name:'Moon', age:25 }, 
  { name:'Lee', age:23 },
];
const userB = [
  { name:'Lee', age:23 }, 
  { name:'Kim', age:20 }, 
];

// 1. _.uniqby(집합처럼 만들어주고 싶은 참조형 데이터, 기준이 되는 키 값)
let userD = userA.concat(userB);
console.log('userD : ', userD);
userD = _.uniqBy(userD, 'name');
console.log('userD : (uniqby name)', userD);

// 2. _.unionby(대상 객체, 기준이 되는 키 값)
let userE = _.unionBy(userA, userB, 'name');
console.log('userE : ', userE);

// 3. _.find(대상 객체, 찾고자 하는 내용)
const searchResult = _.find(userD, {name:'Moon'});
console.log(searchResult);

// 4. _.findIndex(대상 객체, 찾고자 하는 내용)
const index = _.findIndex(userD, searchResult);
console.log(index);

// 5. _.remove(대상 객체, 지우고자 하는 내용 <일부 내용도 가능> )
_.remove(userD, {name:'Lee'});
console.log(userD);