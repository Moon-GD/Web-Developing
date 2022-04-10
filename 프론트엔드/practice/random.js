// default export는 함수명 없이 외부로 내보낼 수 있음
// 외부에서 import 할 경우 as 의 도움 없이 자유롭게 명명 가능
// 단, 모듈 당 오직 하나에게만 사용 가능
export default function(num) {
  // 1 ~ num 사이의 숫자 하나 랜덤 반환
  return Math.floor(Math.random() * num) + 1;
}


// named export는 함수명을 지정해주고 외부로 내보냄
// 외부에서 import 할 경우 as 문법이 아닌 이상 이름 그대로 사용해야 함
// 하나의 모듈에서 여러 개를 내보낼 수 있음
// 단, 외부에서 여러 개를 import 할 경우 {} 안에 넣어서 import 해야 함 
export function my_ceil(number) {
  return Math.ceil(number);
}

export function my_round(number) {
  return Math.round(number);
}

export function my_floor(number) {
  return Math.floor(number);
}