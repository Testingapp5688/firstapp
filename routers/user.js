const express=require('express');
const connection=require('../connection');
const router=express.Router();

router.post('/signup',(req,res)=>{
    let user =req.body;
    let query=`select * from student where stu_name="${user.name}"`;
    connection.query(query,(err,result)=>{
        if(err){
            res.json(err);
        }
        if(result.length<=0)
        {
            let query1=`insert into student (stu_name,stu_d,stu_g) values ("${user.name}","${user.DOB}","${user.gender}")`;
            connection.query(query1,(err,result)=>{
                if(err){res.json(err)};
                res.status(200).json({message:"Data Added sucess"})
            });
        }
        else{
            res.status(406).json({message:"Name already exits"});
        }
    });
});

router.get('/display',(req,res)=>{
    let query=`select * from student`;
    connection.query(query,(err,result)=>{
        if(err){res.json(err)};
        res.json(result);
    })
});

router.put('/update/:id',(req,res)=>{
    let idl=req.params;
    let sqlcomment=`update student set stu_name="${req.body.new_name}" where stu_id="${idl.id}"`;
    connection.query(sqlcomment,(err,result)=>{
        if(err){res.json(err)};
        res.status(202).json({message:"Updated Successfully"});
    });
});



module.exports=router;