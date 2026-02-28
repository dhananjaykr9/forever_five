const startDate = new Date('2021-03-02T00:00:00');
const now = new Date('2026-02-28T11:00:00');

// Calculate difference in totally accurate years, months, days
// We want the difference between Mar 2 and Feb 28 to be "26 days" 

// Actually, Feb 2026 has 28 days.
// So from Feb 2, 2026 to Feb 28, 2026 is exactly 26 days.
// The user is saying "Today is 28 feb and anniversary is on 2nd march"
// This means the user expects it to be 4 years, 11 months, and maybe 28 days? 

let start = new Date(startDate);
let end = new Date(now);

let years = end.getFullYear() - start.getFullYear();
let months = end.getMonth() - start.getMonth();
let days = end.getDate() - start.getDate();

if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
}

if (days < 0) {
    months--;
    if (months < 0) {
        years--;
        months = 11;
    }
    // Days in the previous month of the *end* date
    let prevMonth = end.getMonth() - 1;
    let prevYear = end.getFullYear();
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    let daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
    days += daysInPrevMonth;
}

console.log(`${years} years, ${months} months, ${days} days`);
