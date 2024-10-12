 function rolldice() {
    let sides = document.getElementById('numSides').value;
    let result = getDiceResults(sides)
    document.getElementById('dice-result').innerText = 'You rolled a '+result
 }

 function getDiceResults(max) {
    let result = Math.ceil(Math.random() * max)
    return result
 }

 for (let i = 1; i< 100; i++) {
    let testResult = getDiceResults(i)
    if (testResult > i || testResult < 1) throw Error("Invalid dice result "+testResult+" for max " +i)
 }