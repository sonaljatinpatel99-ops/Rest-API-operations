const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

// ROUTES
app.get("/users", (req, res)  => {
    const html =`
    <ul>
     ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    
    res.send(html);
});

// REST API
app.get("/users", (req, res) => {
    return res.json(users);
});

app.get("/users/:id", (req, res) => {
    const Id = Number(req.params.id);
    const user = users.find(user => user.id === userId);
    return res.json(user);
    });

app.post("/users", (req, res) => {
    // TOOD: Create new user
    return res.json({ status:"pending"});
});

app.patch("/users/:id", (req, res) => {
    // TOOD: Edit the user with id
    return res.json({ status:"pending"});
});

app.delete("/users/:id", (req, res) => {
    // TOOD: Delete the user with id
    return res.json({ status:"pending"});
});


app.listen(PORT, () => console.log("Server running on localhost:" + PORT));
