 function Cadastrar(){

    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var filtroo = /[0-9]/;

    $(document).ready(function(){
            
        $('#blocoFormulario').on('submit', function(event){
            event.preventDefault();
            if( 
                $('#nome').val() == ""){
                //Alerta de campo nome vazio
                $("#msg-error").html('<div class="alert alert-danger" role="alert">Necessário prencher o campo nome!</div>');

            }else if(filtroo.test($('#nome').val())){
                //Alerta de campo nome vazio
                $("#msg-error").html('<div class="alert alert-danger" role="alert">Não deve conter números!</div>');

            }else if($('#nome').val().length < 2){
                //Alerta de campo nome vazio
                $("#msg-error").html('<div class="alert alert-danger" role="alert">O campo "Nome:" deve ser maior que 02 digitos!</div>');

            }else if($('#email').val() == ""){
                //Alerta de campo email vazio
                $("#msg-error").html('<div class="alert alert-danger" role="alert">Necessário prencher o campo E-mail!</div>');

            }else if(filtro.test($('#email').val())){
                     //Receber os dados do formulário

                        //Limpar mensagem de erro
                    
                        let paramentros =
                        {
                            Nome: $("#nome").val(),
                            Email: $("#email").val(),
                            Mensagem: $("#mensagem").val()
                        }
                    
                        $.post('/Home/Cadastrar', paramentros)
                        .done(
                        function(data){
                            if(data.status=="OK"){
                                $("#Formula").after("<h5>Cadastro realizado com sucesso</h5>");
                                $("#Formula").hide();
                                $("#msg-error").html('');    
                                }
            
                            else{
                                $("#Formula").after("<h5>"+data.mensagem+"</h5>");
                            }
                        }
                        )
                        .fail(
                            function(){
                                alert("Erro de Conexão!, Por favor tente novamente mais tarde.")
                            }
                        );  

                        //Limpar os campo
                        $('#blocoFormulario')[0].reset();
                                
                        //Cadastro realizado com Sucesso!
                        $('#msgCadSucesso').modal('show');
            }else{

                //Alerta de campo email vazio
                $("#msg-error").html('<div class="alert alert-danger" role="alert">Formato do E-mail inválido!</div>'); 

                    }
        });
    });         

            
}
$(document).ready(
    function()
    {
        $("#blocoFormulario").submit(
            function(e)
            { 
               e.preventDefault();
            }
        )
    }
);   
        
         
         