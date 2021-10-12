const express  =require('express');

const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
// defining the Hosting Free port for the API
// if the 7091 is blocked by some other proccess
// the the hosting env. can allocate the port 
let port = process.env.PORT || 7091;


let data =[
    {EmpNo:1,EmpName:'A'},
    {EmpNo:2,EmpName:'B'}
];

 

instance.get('/api/employees',(req,resp)=>{
    resp.status(200).send(data);
});

 
instance.post('/api/employees',(req,resp)=>{
    console.log(`Received data ${JSON.stringify(req.body)}`);
      data.push(req.body);
      console.log(`Added Data ${JSON.stringify(data)}`);
    resp.status(201).send(data);
});

instance.listen(port,()=>{
    console.log('Server started');
});