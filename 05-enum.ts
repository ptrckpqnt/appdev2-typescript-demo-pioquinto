(() => {
    enum Role {
        SuperAdmin = 'SuperAdmin',
        Teacher = 'Teacher',
        Student = 'Student',
    }

    let userRole: Role = Role.SuperAdmin;
    console.log(userRole);

    userRole = Role.Teacher;
    console.log(userRole);
})();