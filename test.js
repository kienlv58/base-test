import { cloneDeep } from 'lodash';
const person1 = {
  name: {
    firstName: 'kien',
    lasName: 'lo',
    abc: {
      d: '5',
    },
  },
  age: 24,
};

const person2 = cloneDeep(person1);

person2.name.firstName = 'khanh';
