import express from 'express';

const app = express();
app.use(express.json());

const users = [];

for(let i = 0; i < 100; i++){
    users.push({ userID: i, name: 'user' + i });
}

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/json', (req, res) => {
    res.send(JSON.stringify({ data: users }));
});

app.get('/users', (req, res) => {
    if(req.query.id && req.query.id > 0 && req.query.id < 100){
        res.send(JSON.stringify({ data: users[req.query.id] }));
        return;
    }
    else{
        res.send(JSON.stringify({ error: 'Request ID was absent or incorrect' }));
    }
});

app.listen(8080, () => {
    console.log('Running!');
});