// 12. Integer to Roman

function intToRoman(num: number): string {
    const RomanMap = {
        "1": "I",
        "5": "V",
        "10": "X",
        "50": "L",
        "100": "C",
        "500": "D",
        "1000": "M",
    };
    let result = "";
    let numStr = num.toString().split("");
    let nums: number[] = [];

    for (let k = 0; k < numStr.length; k++) {
        nums[k] = Number(numStr[k]);
    }

    let i = nums.length - 1;
    let j = 0;
    let curMult = 10 ** i;
    let curUnit = nums[j];
    let curVal = curUnit * curMult;

    if (nums.length === 4) {
        for (let k = 0; k < curUnit; k++) {
            result += RomanMap[curMult.toString()];
        }
        i--;
        j++;
        curMult = 10 ** i;
        curUnit = nums[j];
        curVal = curUnit * curMult;
    }

    // Hundreds

    if (nums.length > 2) {
        if (curVal in RomanMap) {
            result += RomanMap[curVal];
        } else {
            // 900
            if (curVal < 400) {
                for (let k = 0; k < curUnit; k++) {
                    result += RomanMap[curMult.toString()];
                }
            } else if (curVal === 400) {
                result += "CD";
            } else if (curVal === 500) {
                result += RomanMap[curMult.toString()];
            } else if (curVal > 500 && curVal < 900) {
                result += "D";
                curUnit -= 5;
                for (let k = 0; k < curUnit; k++) {
                    result += RomanMap[curMult.toString()];
                }
            } else if (curVal === 900) {
                result += "CM";
            }
        }

        i--;
        j++;
        curMult = 10 ** i;
        curUnit = nums[j];
        curVal = curUnit * curMult;
    }

    // Tens
    if (nums.length > 1) {
        if (curVal in RomanMap) {
            result += RomanMap[curVal];
        } else {
            //90
            if (curVal < 40) {
                for (let k = 0; k < curUnit; k++) {
                    result += RomanMap[curMult.toString()];
                }
            } else if (curVal === 40) {
                result += "XL";
            } else if (curVal === 50) {
                result += RomanMap[curMult.toString()];
            } else if (curVal > 50 && curVal < 90) {
                result += "L";
                curUnit -= 5;
                for (let k = 0; k < curUnit; k++) {
                    result += RomanMap[curMult.toString()];
                }
            } else if (curVal === 90) {
                result += "XC";
            }
        }

        i--;
        j++;
        curMult = 10 ** i;
        curUnit = nums[j];
        curVal = curUnit * curMult;
    }

    // Units
    if (curVal in RomanMap) {
        result += RomanMap[curVal];
    } else {
        //9
        if (curVal < 4) {
            for (let k = 0; k < curUnit; k++) {
                result += RomanMap[curMult.toString()];
            }
        } else if (curVal === 4) {
            result += "IV";
        } else if (curVal === 5) {
            result += RomanMap[curMult.toString()];
        } else if (curVal > 5 && curVal < 9) {
            result += "V";
            curUnit -= 5;
            for (let k = 0; k < curUnit; k++) {
                result += RomanMap[curMult.toString()];
            }
        } else if (curVal === 9) {
            result += "IX";
        }
    }

    return result;
}

console.log(intToRoman(58)); // "MCMXCIV"
