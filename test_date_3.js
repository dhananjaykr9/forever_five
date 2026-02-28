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
    // Get the previous month
    let prevMonth = now.getMonth() - 1;
    let yearOfPrevMonth = now.getFullYear();
    if (prevMonth < 0) {
        prevMonth = 11;
        yearOfPrevMonth--;
    }
    // Days in previous month
    const daysInPrevMonth = new Date(yearOfPrevMonth, prevMonth + 1, 0).getDate();
    days += daysInPrevMonth;
}

if (months < 0) {
    years--;
    months += 12;
}

console.log(`${years} years, ${months} months, ${days} days`);
