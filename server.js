const express = require('express');

const cors require('cors'); 
//para utilizar banco de dados const mysql require('mysql2/promise');
//para utilizar arquivos de impagens const multer require('multer'); const express = require('express');

//permite acessar as imagens salvas via url (ex: https://localhost:3000/upload/foto.jpg)

app.use(/uploads', express.static(path.join(__dirname, 'uploads")));

const db = mysql.createPool({

host: 'localhost', 
user: 'admin', 
password: '1234', 
database: 'login', 
port: 3306,
});

//configuração do multer (onde salva a imagen e con qual nome)

const storege = multer.diskStorage({

destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
//selva na pasta uploads
},

 filename: (req, file, cb) => {
    

//renomeia o arquivo para envitar nomes duplicados usando a data atual cb(null, Date.now( path.extname (file.originalname)));

}); const upload multer({storege));