returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selectedDrivers) {
    return selectedDrivers(drivers);
};