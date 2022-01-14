import faker from 'faker';

export function generateData() {
  const dataArr = [];

  for (let i = 0; i <= 200; i++) {
    dataArr.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      id: `i-${faker.datatype.uuid().slice(0, 8)}`,
      type: `${faker.helpers.randomize([
        'C4',
        'D2',
        'G5',
        'M6a',
        'T2',
        'X2gd',
      ])}.${faker.helpers.randomize(['small', 'medium', 'large'])}`,
      state: faker.helpers.randomize([
        'pending',
        'running',
        'stopping',
        'stopped',
        'shutting-down',
        'terminated',
      ]),
      az: `us-east-1-${faker.helpers.randomize([
        'atl',
        'bos',
        'chi',
        'dfw',
        'iah',
        'mci',
        'mia',
        'msp',
        'nyc',
        'phl',
      ])}-1a`,
      publicIP: faker.internet.ip(),
      privateIP: faker.internet.ip(),
    });
  }
  return dataArr;
}
