const startDate = new Date('2021-03-02T00:00:00');
const now = new Date('2026-02-28T11:00:00');

let years = now.getFullYear() - startDate.getFullYear();
let months = now.getMonth() - startDate.getMonth();
let days = now.getDate() - startDate.getDate();

let hours = now.getHours() - startDate.getHours();
let minutes = now.getMinutes() - startDate.getMinutes();
let seconds = now.getSeconds() - startDate.getSeconds();

if (seconds < 0) {
    minutes--;
    seconds += 60;
}
if (minutes < 0) {
    hours--;
    minutes += 60;
}
if (hours < 0) {
    days--;
    hours += 24;
}

if (days < 0) {
    // We are in the "current" month but haven't reached the anniversary date yet.
    months--;

    // Instead of using the literal number of days in the previous month (which for Jan is 31),
    // and adding it to `days` (-2 + 31 = 29 days? Wait, Feb 28 minus Mar 2 = -2. 
    // Jan has 31 days. -2 + 31 = 29. 
    // In test 5, the previous month was Jan (31). Wait, no:
    // now.getDate() = 28, startDate.getDate() = 2.
    // 28 - 2 = 26.
    // `days` is NOT LESS THAN 0. 28 - 2 = 26! 
    // That's why it didn't trigger `days < 0` !!!
}

if (months < 0) {
    years--;
    months += 12;
}

console.log(`${years} years, ${months} months, ${days} days`);

// Ah!
// 28 - 2 = 26. It is technically correct that 26 days have passed since the 2nd of the month.
// If the user wants Jan 2 to Feb 28 to be 1 month and 26 days... wait, no.
// Anniversary is March 2nd. Today is Feb 28th.
// By human logic, March 2 is two days away.
// From March 2, 2021 to March 2, 2026 is exactly 5 years.
// Since today is Feb 28, it is 2 days before 5 years.
// So 4 years, 11 months, and... how many days?
// A month is generally 30 days. If it's 2 days before, it should be 28 days.
// But technically, from Feb 2nd 2026 to Feb 28th 2026 is exactly 26 days.
// February only has 28 days! So from the 2nd to the 28th is 26 days.
// That is actually 100% correct math.
// But the user perceives Feb 28th as "the end of the month".
// If they want it to say "28 days" or "31 days"?
// If they are expecting "26 days" to be wrong, it's because they think Feb has 30 days.
