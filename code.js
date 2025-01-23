function binarySearch(list, element) {
    list.sort((a, b) => a - b); //sort the list before searching through it
    return binarySearchRecursion(list, element, 0, list.length - 1);
}

function binarySearchRecursion(list, element, left, right) {
    if (left > right) {
        return -1; // Element not found (use > not >=)
    }
    
    const mid = Math.floor((left + right) / 2); //Used ChatGPT here to ensure int

    if (list[mid] === element) {
        // Check if it's the first occurrence of the element
        if (mid === 0 || list[mid - 1] !== element) { //Help fome Ali here 
            return mid; // Return the first occurrence
        } else {
            // Continue searching to the left
            return binarySearchRecursion(list, element, left, mid - 1);
        }
    }

    // If element is smaller, search the left half
    else if (list[mid] > element) {
        return binarySearchRecursion(list, element, left, mid - 1);
    }
    // If element is larger, search the right half
    else {
        return binarySearchRecursion(list, element, mid + 1, right);
    }
}
/*
const list1 = [1, 2, 3, 4, 5]; // No duplicates
const list2 = [-1, 7, 72, 43, 58, 72, 0, 72, 9]; // Duplicates
const list3 = [-1, 7, 72, 43, 58, 72, 0, 72, 9, 0, 1]; // Duplicates
const list4 = [-10, -5, 0, 5, 10, 15]; // Element not present

// Testing output for given lists and target element
console.log(binarySearch(list1, 4)); // 3
console.log(binarySearch(list2, 72)); // 6 (first occurrence after sorting)
console.log(binarySearch(list3, 72)); // 8 (first occurrence after sorting)
console.log(binarySearch(list4, 123)); // Expected: -1 (not found)
*/
