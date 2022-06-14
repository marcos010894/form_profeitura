var candidato = ''
var inscrição = ''
var numero = ''
var sala = 0

const verify_dados = async () => {
    let number = document.getElementById('number').value; 
    document.getElementById('footerModal').style.display = 'none';
    document.getElementById('exampleModalCenterTitle').innerHTML = 'Procurando ...!';


    document.getElementById('get').innerHTML = `<img src="images/loading.gif" alt="">`
    let encontrado = false
    var jsonDate = await(
        await (       
        fetch('json/dadosxlsx.json'))
        ).json();

    for(var i = 0; i < jsonDate.length; i++){
        if(number == jsonDate[i].INSCRIÇÃO){
            console.log(jsonDate[i].CANDIDATO);
            encontrado = true
            candidato = jsonDate[i].CANDIDATO
            inscrição = jsonDate[i].INSCRIÇÃO
            numero = jsonDate[i].numero
        }
    }

    if(encontrado == false){
        console.log('Número de incrição não encontrado.')
        setTimeout(() => {
            document.getElementById('exampleModalCenterTitle').innerHTML = 'Não encontramos!';
            document.getElementById('get').innerHTML = `<img style="width:10%" src="images/naoencontrado.jpg" alt="error" class="img-fluid">`;
            document.getElementById('get').innerHTML += `Ops! Não encontramos o número de inscrição ${number}.<br> Por favor verifique se o número está correto.`;
        }, 5000)
    }else{
        if(numero <= 18){
            sala = 1
        }else if (numero > 18 && numero <= 36) {
            sala = 2
        }else{
            sala = 3
        }
        setTimeout(() => {
            document.getElementById('exampleModalCenterTitle').innerHTML = 'Parece que encontramos!';
            document.getElementById('get').innerHTML = `
            ${candidato} <br>
            Numero da incrição : ${inscrição} <br>
            Numero: ${numero} <br>
            A sua sala é a número: ${sala}`;
            document.getElementById('footerModal').style.display = 'flex';
        }, 5000)
    }
}

const impress = () => {
    tela_impressao = window.open('about:blank');

    tela_impressao.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Prefeitura municipal de Águia branca!</title>
        <style>
            body{
                -webkit-print-color-adjust: exact;
            }
            #page{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 3%;
            }
            img{
                width: 30%;
            }
            .logo{
                text-align: center;
                margin-bottom: 20px;
            }
            .title{
                width: 100%;
                color: white;
                text-align: center;
                margin-bottom: 20px;
            }
            .dados_pessoa{
                width: 80%;
                display: flex;
                justify-content: space-between;
                padding: 0 40px;
                align-items: center;
                border: 1px solid black;
                margin-bottom: 10px;
            }
            .dados_local{
                width: 80%;
                display: flex;
                justify-content: space-between;
                padding: 0 40px;
                align-items: center;
                border: 1px solid black;
                margin-bottom: 10px;
            }
            .title_dados{
                margin: 0; width: 80%;
                justify-content: center;                        
                align-items: center;
                text-align: center;
                padding: 0;
                height: 50px;
                padding: 10px;
                background-color: green;
                display:flex;
                color: white;
                margin-bottom: 5px;
    
            }
        </style>
    </head>
    <body>
        <div id="page">
            <div class="logo">
                <img src="images/logo.png" alt="">
            </div>
    
            <div class="title" style="background-color: green;">
                <h4>CARTÃO DE CONFIRMAÇÃO DE INSCRIÇÃO <br>
                PROCESSO SELETIVO - AGENTE COMUNITÁRIO DE SAÚDE - ACS/2022 - ÁGUIA BRANCA/ES</h4>
            </div>
            <div class="dados_pessoa">           
                <div><h4> Nome:${candidato} </h4></div>
                <div><h4> Numero da inscrição: ${inscrição} </h4></div>
            </div>
    
            <div class="title_dados"><h4> ORIENTAÇÕES SOBRE A REALIZAÇÃO DA PROVA OBJETIVA </h4></div>
    
            <div class="dados_local">      
                <div><h4> Data da prova: 08/06/2022 </h4></div>
                <div><h4> Horario da prova: 09:00 </h4></div>
                <div><h4> Sala número: ${sala} </h4></div>
            </div>
            <center>
                Local da prova: <br>
                EMEF "Padre Sérgio Banzza" - R. Benjamin Galdino de Ávila, 172-246 - Águia Branca, ES, 29795-000 <hr>
                Orientações no dia da Prova <br>

                O candidato deve verificar o horário de acesso às salas de prova, portar caneta esferográfica de tinta azul, fabricada em material transparente, levar o comprovante de inscrição e documento de identidade original.
            </center>
        </div>
    </body>
    </html>
    
    `);
    tela_impressao.window.print();
}


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById('texto_candidato').innerHTML = `
    Prezado Candidato (a),

        Por favor, inserir o número de inscrição no campo abaixo, em seguida clicar em BUSCAR.

        Após você irá clicar para IMPRIMIR.
    `
  }

