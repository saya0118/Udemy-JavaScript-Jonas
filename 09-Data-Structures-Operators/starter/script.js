'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function(starterIndex, mainIndex){
//     return(this.starterMenu[starterIndex], this.mainMenu[mainIndex])
//   }
 
// };

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories:tags} = restaurant;
// console.log(restaurantName, hours, tags);

// const {menu=[], starterMenu:starters = []} = restaurant;
// console.log(menu,starters);

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);;

// //Receive 2 return values from a function
// const [starter,mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// //Nested distructuring
// const nested = [2,4,[5,6]];
// // const [i, ,j] = nested;
// // console.log(i,j);
// const[i, ,[j,k]]= nested;
// console.log(i,j,k);

// //Default values
// const [p,q,r] = [8,9];
// console.log(p,q,r);

//--------------------------------------

// Challenge#1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:8',
  scored:['Lewandowski', 'Gnarby', 'Lewandowski', 'hummels'],
  date: 'Nov 9th',
  odds:{
    team1: 1.33,
    x:3.25,
    team2: 6.5,
  },
};

// //1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// // const [players1, players2] = game.players;

// //2.
// const gkTeam1 = players1[0];
// console.log(gkTeam1);
// // const [gk, ...fieldPlayers1] = players1

// //3.
// const fieldPlayers = players1.shift[0];
// console.log(fieldPlayers);
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);
// const allPlayers = [players1[1,2,3,4,5,6,7,8,9,10], players2[1,2,3,4,5,6,7,8,9,10]];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);

// //5.
// // const {odds: {team1, x:draw, team2}} = game;

// //6.
// // const printGoals = function(...players){
// //   console.log(`${players.length} goals were scored`);
// // }
// // printGoals(...game.scored);

// //7.
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');

//--------------------------------------

//Challenge#2

//1.
// for (const game of score)
for(const [i, player] of game.scored.entries())
console.log(`Goal ${i+1}: ${player}`);

//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of Object.values(game.odds))
average += odd;
average/=odds.length;
console.log(average);

//3.
for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ... ${odd}`);
}