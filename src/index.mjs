import express from 'express';

const app = express();

const PORT = process.env.PORT ||3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/user', (req, res)=>{
    res.send([{name: 'John', age: 30}, {name: 'Jane', age: 25}]);
})

app.get('/api/user', (req, res)=>{
    res.send([{name: 'John', age: 30} , {name: 'Jane', age: 25} ,{name: 'Doe', age: 35}],
       
    );
})
