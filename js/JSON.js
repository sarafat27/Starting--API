const user = { name: 'arafat', id: 1626058, profession: 'web developer' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
const shop = {
    name: 'startech',
    place: 'agrabad',
    products: ['laptop', 'RAM', 'SSD', 'HDD', 'battery'],
    owner: {
        name: 'Ikbal khan',
        profession: 'businessman'
    },
    profit: 10000,
    isEXpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
const converted = JSON.parse(shopStringified);
console.log(shopStringified);
console.log(converted.owner);
