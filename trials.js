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