import _ from 'lodash';

const KIA = {
  color:'white',
  wheel:'4',
  saled_year:[2020, 2021, 2022]
};

// 얕은 복사
const HYUNDAI = Object.assign({}, KIA);
console.log(HYUNDAI == KIA);

KIA.saled_year.push(1998)
console.log(HYUNDAI.saled_year, KIA.saled_year);

// 깊은 복사
const new_Car = _.cloneDeep(KIA);
console.log(new_Car == KIA);

KIA.saled_year.push(1000);
console.log(new_Car.saled_year, KIA.saled_year);