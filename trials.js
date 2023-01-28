"use strict";

// Albert's solution
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let appleCount = [];
    let orangeCount = [];
    let appleAtSamHouse = 0;
    let orangeAtSamHouse = 0;
    apples.map((x) => {
        appleCount.push(x + a);
    })
    oranges.map((x) => {
        orangeCount.push(x + b);
    })
    appleCount.map((x) => {
        if(x >=s && x <= t){
            appleAtSamHouse++;
        }
    })
    orangeCount.map((x) => {
        if(x >=s && x <= t){
            orangeAtSamHouse++;
        }
    })
    console.log(appleAtSamHouse);
    console.log(orangeAtSamHouse);


}


// Newton's solution

function breakingRecords(scores){
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let higherCount = 0;
    let lowerCount = 0;
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > highestScore){
            highestScore = scores[i];
            higherCount++
        }
        else if(scores[i] < lowestScore){
            lowestScore = scores[i];
            lowerCount++
        }
    }
    return [higherCount, lowerCount];
}