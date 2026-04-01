(() => {
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    type User = {
        name: string;
        age: number;
        role: Role;
        permission: string[];
    }

    let userRole: Role = 'student'
    console.log("Role:", userRole);

    const user: User = {
        name: "Patrick",
        age: 22,
        role: "student",
        permission: ["read", "write"]
    }

    console.log("User info:", user);

    function access(role: Role) {
        console.log("Access granted for:", role);
    }

    access(user.role);
})();