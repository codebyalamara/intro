const currentDate = document.getElementById('currentDate');
const nextWeek = document.getElementById('nextWeek');
const daysLeft = document.getElementById('daysLeft');
const userAge = document.getElementById('userAge');
const membership = document.getElementById('membership');
const liveTime = document.getElementById('liveTime');

let today = moment();

// Current Date
currentDate.textContent =
`Current Date : ${today.format('DD-MM-YYYY')}`;

// Next Week Date
nextWeek.textContent =
`Next Week Date : ${moment().add(7, 'days').format('DD-MM-YYYY')}`;

// Days Left For New Year
let newYear = moment('2027-01-01');

daysLeft.textContent =
`Days Left For New Year : ${newYear.diff(today, 'days')} days`;

// Age Calculator
let dob = moment('2004-05-20');

userAge.textContent =
`Age : ${today.diff(dob, 'years')} Years`;

// Membership Status
let joinDate = moment('2026-01-01');

membership.textContent =
`Membership Active From : ${today.diff(joinDate, 'months')} Months`;

// Live Date & Time
setInterval(() => {
    liveTime.textContent =
    `Live Time : ${moment().format('DD-MM-YYYY hh:mm:ss A')}`;
}, 1000);