//1
const arr = [10, 20, 30, 40, 50];
const copyRev = arr.toReversed();
console.log(copyRev);
console.log(arr);

//2
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length -1;
    while(left < right) {
        const tmp = s[left]!;
        s[left] = s[right]!;
        s[right] = tmp;
        left++;
        right--;
        
    }
    
}
