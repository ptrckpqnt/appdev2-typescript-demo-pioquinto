(() => {
    let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'student'
    console.log("Start role:", userRole);

    userRole = 'guess'
    console.log("Changed role:", userRole);

    userRole = 'teacher'
    console.log("Changed again:", userRole);

    function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
        console.log("Accessing as:", role);
    }

    access(userRole);
})();