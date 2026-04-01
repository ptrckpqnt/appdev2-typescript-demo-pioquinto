function generateError(msg?: string) {
    console.log("Message:", msg);
}

generateError("An error occured");
generateError();

(() => {
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guess'
    }

    let user: User = {
        name: 'Patrick',
        age: 22
    }

    console.log("User:", user);
})();

let input = ''
const didProvideInput = input ?? false;
console.log("Using ?? :", didProvideInput);

const usingOr = input || false;
console.log("Using || :", usingOr);