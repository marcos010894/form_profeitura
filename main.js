var candidato = ''
var inscrição = ''
var numero = ''
var sala = 0

const verify_dados = async () => {
    let number = document.getElementById('number').value; 
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
                <h3>Cartão de confirmação de incrição</h3>
                <h3>processo seletivo 2022</h3>
            </div>
            <div class="dados_pessoa">           
                <div><h4> Nome: pessoa nome </h4></div>
                <div><h4> Numero da inscrição: pessoa nome </h4></div>
            </div>
    
            <div class="title_dados"><h3> Dados sobre a prova. </h3></div>
    
            <div class="dados_local">      
                <div><h4> Data da prova: 08/06/2022 </h4></div>
                <div><h4> Horario da prova: 08:00 </h4></div>
                <div><h4> Sala número: 2 </h4></div>
            </div>
            <center>
                Prefeitura Municipal de Águia Branca/ES - localizada na Rua Vicente Pissinati, n° 71, Centro, Águia Branca/ES
            </center>
        </div>
    </body>
    </html>
    
    `);
    tela_impressao.window.print();
}


