
//enum stores fixed values
enum Role {
    Admin = "Admin",
    User = "User",
    SuperUser = "SuperUser"
}
enum Priviledge {
    Read = "Read",
    Write = "Write",
    Delete = "Delete"
}

type Emp = { 
    id: number | string, 
    name: string, 
    role: Role //must come from enum  keyof -> "id" | "name" | "role"
};

type Admin = { 
    priviledges: Priviledge[] 
};

type SuperUser = Emp & Admin; //combines two types in  one

let list: (Emp | Admin | SuperUser)[] = []; // any -> emp | admin | superuser as we can push anything

function addEmp(emp: Emp | Admin | SuperUser): void {
    list.push(emp);
}

function getEmp(index: number) {
    console.log(list[index]); // gives emp | admin | superuser 
}

addEmp({ id: 10, name: "Himanshu", role: Role.User });
addEmp({ id: "xyz", name: "Aryan", role: Role.User });
addEmp({ id: 20, name: "Aman", role: Role.Admin, priviledges: [Priviledge.Read, Priviledge.Write] });
getEmp(0);
getEmp(1);
getEmp(2);

const points = {x: 10, y: 20};
type PointKeys = keyof typeof points; // Result "x" | "y"

function getProperty<T, K extends keyof T>(obj: T, key: K) { // keyof "id" | "username" | "email"
    return obj[key];
}

const user = { id: 1, username: "hellion", email: "xyz@example.com" }
// console.log(getProperty(user, "email"));
// console.log(getProperty(user, "username"));
// console.log(getProperty(user, "id"));


