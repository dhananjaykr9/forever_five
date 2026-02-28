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
    months--;
    // The user's anniversary is the 2nd. 
    // They think of "Mar 2" minus "Feb 28" = 2 days remaining.
    // Which means they've completed 28 days (if a 30 day month).
    // Or if February has 28 days, then Feb 2 to Feb 28 is 26 days.
    // Let's use the days in the *previous* month.
    let prevYear = now.getFullYear();
    let prevMonth = now.getMonth() - 1; // Month of February is 1, so prevMonth is 0 (Jan)
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
    days += daysInPrevMonth;
}

if (months < 0) {
    years--;
    months += 12;
}

console.log(`${years} years, ${months} months, ${days} days`);
