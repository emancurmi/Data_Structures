function maxProfit(arr) {
    let currMaxProf = arr[0] - arr[1];
    let dayToBuy = 0;

    for (let i = 2; i < arr.length; i++) {
        let profit = arr[i - 1] - arr[i]
        if (profit > currMaxProf) {
            currMaxProf = profit;
            dayToBuy = i - 1;
        }
    }
    return 'Buy on day ' + dayToBuy.toString() + ' for profit of ' + currMaxProf.toString();
}

function main() {
    let weekOne = [128, 97, 121, 123, 98, 97, 105];
    console.log(maxProfit(weekOne));
    let weekTwo = [128, 97, 121, 123, 198, 97, 105];
    console.log(maxProfit(weekTwo));
    let weekThree = [100, 100, 100, 100, 100, 100, 100];
    console.log(maxProfit(weekThree));
}

main();