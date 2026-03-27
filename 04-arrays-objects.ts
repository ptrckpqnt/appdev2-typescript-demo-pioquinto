let hobbies: (string | number)[] = ["Volleyball", "Watching Kdrama or Anime pero di na kaya kasi busy na T^T"];
hobbies.push(16);

let userList: Array<string | number>;
userList = ["Patrick", "Pioquinto23", 23];
console.log(userList);

let user: {
    name: string;
    age: number;
    hobbies: Array<string>;
    role: {
        description: string;
        id: number;
    }
} = {
    name: "Patrick",
    age: 22,
    hobbies: ["Volleyball", "Tumulala sa kisame"],
    role: {
        description: 'spiker',
        id: 1
    }
};

let val: {} = "Patrick Pioquinto";

let data: Record<string, number | string>;
data = {
    1: 1,
    name: 'Patrick',
    isStudent: "yes"
};

console.log(user, hobbies, data);