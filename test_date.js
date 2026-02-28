const startDate = new Date('2021-03-02T00:00:00');
const now = new Date('2026-02-28T11:00:00');

let target = new Date(startDate);
let years = 0, months = 0, days = 0;

// Calculate Years
while (true) {
    let temp = new Date(target);
    temp.setFullYear(temp.getFullYear() + 1);
    if (temp <= now) {
        years++;
        target = temp;
    } else {
        break;
    }
}

// Calculate Months
while (true) {
    let temp = new Date(target);
    temp.setMonth(temp.getMonth() + 1);
    if (temp <= now) {
        months++;
        target = temp;
    } else {
        break;
    }
}

// Calculate Days
while (true) {
    let temp = new Date(target);
    temp.setDate(temp.getDate() + 1);
    if (temp <= now) {
        days++;
        target = temp;
    } else {
        break;
    }
}

console.log(years);
console.log(months);
console.log(days);
