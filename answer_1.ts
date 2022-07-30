// Modify this block
export default function pairer(input: string) {
    const outputArray = [];
    const inputArray = input.split("");
    for (let i = 0; i < inputArray.length ; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            if (i !== j) {
                const letter = inputArray[i] + inputArray[j];
                if (outputArray.indexOf(letter) === -1) {
                    outputArray.push(letter);
                }
            }
        }
    }

    return outputArray;
}
// Modify this block
