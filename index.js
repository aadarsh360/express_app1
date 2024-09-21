const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!, this is my first express app');
});

app.get('/about', (req, res) => {
    res.send("this is about page");
});

app.post('/create', (req, res) =>{
    res.send("user create !!");
});

app.put('/update', (req, res)=>{
    res.send("user update !!");
});

app.delete('/delete', (req, res)=>{
    res.send("user delete succesfully !!");
})
// app.get or app.post or app.put or app.delete(path, handler)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

