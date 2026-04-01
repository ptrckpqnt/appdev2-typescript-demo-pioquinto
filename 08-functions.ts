(() => {
    function add(a: number, b: number): number {
        return a + b
    }

    console.log("Add result:", add(5, 10));

    function log(message: string): void {
        console.log("Log:", message)
    }

    log("Hello, World!");

    function logAndThrow(errorMessage: string) {
        console.log("About to throw error...");
        // comment this if you don’t want crash
        // throw new Error(errorMessage)
    }

    function performJob(cb: (m: string) => void) {
        cb('Job Done!')
    }

    let logMsg = (msg: string): void => {
        console.log("Callback:", msg)
    }

    performJob(logMsg)

    let user = {
        name: "Patrick",
        age: 22,
        greet() {
            console.log(`Hello, ${this.name}`)
            return this.name
        }
    }

    user.greet()
})();