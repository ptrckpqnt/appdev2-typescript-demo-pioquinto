const inputEl = document.getElementById('user-name')

console.log("Raw element:", inputEl);

if (!inputEl) {
    throw new Error('Element not found!');
}

console.log("Safe value:", (inputEl as HTMLInputElement).value);