// Code your solution in this file!
function distanceFromHqInBlocks(originInBlocks, targetInBlocks) {
    //returns the number of blocks given a value
    const distanceinBlocks = targetInBlocks - originInBlocks;
    return distanceinBlocks;    
}
function distanceFromHqInFeet(originInBlocks, targetInBlocks) {
    
    distanceFromHqInBlocks(originInBlocks, targetInBlocks);
    const distanceInFeet = distanceInBlocks(originInBlocks, targetInBlocks) * 264;
    return distanceInFeet;
}
