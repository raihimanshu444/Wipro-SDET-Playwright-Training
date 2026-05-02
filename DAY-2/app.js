const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "himanshu_09" && password === "himanshu123") {
        alert("Login successful!");
        window.location.href = "app.html";
    } else {
        alert("Invalid username or password.");
    }
}