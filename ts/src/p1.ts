export function isPalindrome(s: string): boolean {


    // const reverse = s.split('').reverse().join('');
    let reverse = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reverse += s[i];
    }

    if (reverse.toLocaleLowerCase() === s.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }

}

export function reverseWordsInString(s: string): string {

    let reverse = "";
    let words = s.split(' ');
    for (let i = words.length - 1; i >= 0; i--) {
        reverse += words[i] + " ";
    }

    return reverse.trim()

}

export function doCalculation(s: string): number {
   
    let numbers = s.split(/[^0-9\.]+/);
    let operators = s.split(/[0-9\.]+/);
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (i === 0) {
            result = Number(numbers[i]);
        }
        else {
            if (operators[i] === "+") {

                result += Number(numbers[i]);
            }
            else if (operators[i] === "-") {
                result -= Number(numbers[i]);
            }
        }
    }
    return result;

}
