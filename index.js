// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter((driver) => {return driver.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => {return driver.startsWith(name)});
}

function matchName(drivers, name) {
    return drivers.filter(driver => {return driver.name.toLowerCase() === name.toLowerCase();});
}