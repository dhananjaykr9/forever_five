const startDate = new Date('2021-03-02T00:00:00');
const now = new Date('2026-02-28T11:00:00');

let years = now.getFullYear() - startDate.getFullYear();
let months = now.getMonth() - startDate.getMonth();
let days = now.getDate() - startDate.getDate();

if (days < 0) {
    months--;
    // Days in previous month
    const currentDate = new Date(now.getFullYear(), now.getMonth(), 0);
    days += currentDate.getDate();
}

if (months < 0) {
    years--;
    months += 12;
}

console.log(years);
console.log(months);
console.log(days);
