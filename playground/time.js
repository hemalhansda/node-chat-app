var moment = require('moment');

// // var date = new Date();
// // console.log(date.getMonth());
//
// new Date().getTime()
//
// var createdAt = 1234;
// var date = moment(createdAt);
// // date.add(100, 'year').subtract(9, 'months');
// // console.log(date.format('MMM Do, YYYY'));
// console.log(date.format('h:mm a'));
//
// //10:35 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log('h:mm a');
