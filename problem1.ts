//Problem:1 Battery Level Status

function getBatteryStatus(percentage: number): string {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    } else if (percentage <= 50) {
        return "Medium";
    } else if (percentage <= 90) {
        return "High";
    } else if (percentage <= 100) {
        return "Full";
    }

    return "Invalid";
};
console.log(getBatteryStatus(10)); 
console.log(getBatteryStatus(35));   
console.log(getBatteryStatus(75));   
console.log(getBatteryStatus(100));  