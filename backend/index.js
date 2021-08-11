const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

let mysql = require('mysql');
let connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fleury_lab',
  },
  { multipleStatements: true }
);
let sql;

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
});

sql = `CREATE TABLE if not exists cp_cdtb_unidade_unid(
  ID_UNID_CD_UNIDADE INT,
  UNID_NO_UNIDADE    VARCHAR(30)
      )`;

sql = `CREATE TABLE if not exists pe_cdtb_pessoa_fisica_pefi(
  ID_PEFI_CD_PESSOA_FISICA INT,
  PEFI_NR_CPF	             VARCHAR(11),
  PEFI_NR_RG               VARCHAR(20),
  PEFI_NO_NOME             VARCHAR(50),
  PEFI_NO_SOBRENOME        VARCHAR(50),
  PEFI_DH_NASCIMENTO       VARCHAR(50)
        )`;

sql = `CREATE TABLE  if not exists fi_cdtb_item_sub_item_ficha_item(
  ID_UNID_CD_UNIDADE_FICHA INT,
  ID_FICH_NR_FICHA         INT,
  ID_ITEM_NR_ITEM          INT,
  ID_ITEM_NR_SUBITEM       INT,
  PROD_SL_EXAME            VARCHAR(20)
)`;

sql = `CREATE TABLE if not exists  pe_cdtb_cliente_clie(
  ID_CLIE_NR_CLIENTE  INT,
  ID_PEFI_CD_PESSOA_FISICA INT

          )`;

sql = `CREATE TABLE if not exists fi_cdtb_ficha_fich(
      ID_UNID_CD_UNIDADE_FICHA INT,
      ID_FICH_NR_FICHA         INT,
      ID_CLIE_NR_CLIENTE       INT,
      FICH_DH_ABERTURA         VARCHAR(50)
  )`;

sql = `INSERT INTO pe_cdtb_pessoa_fisica_pefi VALUES( 1, '13213213250', '1245787478', 'CLIENTE', 'FLEURY 01', '1977-03-18' ),
    ( 2, '90225478525', '2547854787', 'CLIENTE', 'FLEURY 02', '1980-09-18' ),
    ( 3, '91247836214', '0120147805', 'CLIENTE', 'FLEURY 03', '1930-02-03' ),
    ( 4, '13201458741', '5214302510', 'CLIENTE', 'FLEURY 04', '1955-11-12' ),
    ( 5, '52365210214', '9512478541', 'CLIENTE', 'FLEURY 05', '2001-07-25' )`;

sql = `INSERT INTO pe_cdtb_cliente_clie VALUES(157, 5),
   (232, 4),
   (854, 2),
   (171, 1),
   (632, 3)`;

sql = `INSERT INTO cp_cdtb_unidade_unid VALUES( 500, 'Paraíso' ),
      ( 100, 'Alphaville' ),
      ( 284, 'Moinhos de Vento' ),
      ( 285, 'Nilo Peçanha' )`;

sql = `INSERT INTO fi_cdtb_ficha_fich VALUES( 500, 1234562, 157, now() ),
    ( 100, 2547855, 171, now() ),
    ( 284, 5214578, 632, now() ),
    ( 285, 2365874, 854, now() ),
    ( 100, 1547896, 232, now() )`;

sql = `INSERT INTO fi_cdtb_item_sub_item_ficha_item VALUES( 500, 1234562, 1, 0, 'HT' ),
    ( 500, 1234562, 2, 0, 'K' ),
    ( 500, 1234562, 3, 0, 'P' ),
    ( 100, 2547855, 1, 0, 'AHAM' ),
    ( 100, 2547855, 2, 0, 'PROGEST' ),
    ( 100, 2547855, 3, 0, 'GOT' ),
    ( 284, 5214578, 1, 0, 'AHAM' ),
    ( 284, 5214578, 2, 0, 'GLIC' ),
    ( 284, 5214578, 3, 0, 'TOMO' ),
    ( 285, 2365874, 1, 0, 'CL' ),
    ( 285, 2365874, 2, 0, 'CLAMDNA' ),
    ( 285, 2365874, 3, 0, 'GLICPL' ),
    ( 100, 1547896, 1, 0, 'GPT' ),
    ( 100, 1547896, 1, 0, 'CLAMDNA' ),
    ( 100, 1547896, 1, 0, 'K' )`;

sql = `
    CREATE PROCEDURE filterClients(IN done BOOLEAN)
    BEGIN
    SELECT cp_cdtb_unidade_unid.UNID_NO_UNIDADE, cp_cdtb_unidade_unid.ID_UNID_CD_UNIDADE, fi_cdtb_ficha_fich.ID_FICH_NR_FICHA,
    fi_cdtb_ficha_fich.FICH_DH_ABERTURA, pe_cdtb_pessoa_fisica_pefi.PEFI_NO_SOBRENOME,
    pe_cdtb_pessoa_fisica_pefi.PEFI_DH_NASCIMENTO,
    ID_ITEM_NR_ITEM, ID_ITEM_NR_SUBITEM, PROD_SL_EXAME
    FROM cp_cdtb_unidade_unid JOIN fi_cdtb_ficha_fich
    JOIN fi_cdtb_item_sub_item_ficha_item ON fi_cdtb_item_sub_item_ficha_item.ID_UNID_CD_UNIDADE_FICHA = cp_cdtb_unidade_unid.ID_UNID_CD_UNIDADE JOIN pe_cdtb_pessoa_fisica_pefi
    ORDER BY ID_FICH_NR_FICHA ASC, ID_ITEM_NR_ITEM ASC, fi_cdtb_ficha_fich.ID_UNID_CD_UNIDADE_FICHA ASC
    LIMIT 50;
    END`;

connection.query(sql, function (err, results, fields) {
  if (err) {
    console.log(err.message);
  }
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
  connection.query('CALL filterClients(true)', function (err, results, fields) {
    res.json(results);

    if (err) {
      console.log(err.message);
    }
  });
});

app.listen(3001, () => {
  console.log('running on port 3001');
});

//HEROKU CONFIG
// app.listen(process.env.PORT || PORT, () => {
//   console.log('running on port ${PORT}');
// });
