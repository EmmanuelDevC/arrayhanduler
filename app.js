// script.js
function sortArray() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number).filter(num => !isNaN(num));
    
    if (array.length === 0) {
        alert('Please enter a valid array.');
        return;
    }

    insertionSort(array);
    document.getElementById('result').textContent = array.join(', ');
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
