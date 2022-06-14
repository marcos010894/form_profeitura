<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="fonts/icomoon/style.css">


    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    
    <!-- Style -->
    <link rel="stylesheet" href="css/style.css">

    <title>EDITAL PROCESSO SELETIVO ACS-2022</title>
  </head>
  <body>
  

  <div class="content">
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          

          <div class="row justify-content-center">
            <div class="col-md-6">
              <h3 class="heading mb-4">Processo Seletivo ACS 2022</h3>
              <p id="texto_candidato">Prezado Candidato (a),

                Por favor, inserir o número de inscrição no campo ao lado, em seguida clicar em BUSCAR.

                Após você irá clicar para IMPRIMIR.
              </p>
              

              <p><img src="images/undraw-contact.svg" alt="Image" class="img-fluid"></p>


            </div>
            <div class="col-md-6">
              
              <form class="mb-5" method="post" id="contactForm" name="contactForm">
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="number" class="form-control" name="number" id="number" placeholder="Número inscrição ex: 215">
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <input type="submit" value="Buscar"  data-toggle="modal" data-target="#exampleModalCenter" onclick="verify_dados()" class="btn btn-primary rounded-0 py-2 px-4">
                  <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Estamos gerando o seu pdf.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <footer style="text-align: center; padding: 5px;">
    Desenvolvido por <a style="color: blue;" href="https://www.instagram.com/marcos.ma_/">Marcos paulo Machado Azevedo.</a>
  </footer>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Buscando candidato ...</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="get"><img src="images/loading.gif" alt=""></div>
          </div>
          <div class="modal-footer" id="footerModal">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Buscar novamente</button>
            <button type="button" class="btn btn-primary" onclick="impress()">Imprimir</button>
          </div>
        </div>
      </div>
    </div>    
    <script src="main.js"></script>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/main.js"></script>

  </body>
</html>