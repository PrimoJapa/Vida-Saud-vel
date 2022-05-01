 function Cadastrar(){

    $(document).ready(function(){
            
        $('#blocoFormulario').on('submit', function(event){
            event.preventDefault();
            if($('#nome').val() == ""){
                //Alerta de campo nome vazio
                $("#msg-error").html('<div class="alert alert-danger" role="alert">Necessário prencher o campo nome!</div>');
            }else if($('#email').val() == ""){
                //Alerta de campo email vazio
                $("#msg-error").html('<div class="alert alert-danger" role="alert">Necessário prencher o campo e-mail!</div>');						
            }else{
                //Receber os dados do formulário

                        //Limpar mensagem de erro
                        $("#msg-error").html(''); 
                    
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
                                        }
                    
                                    else{
                                        $("#Formula").after("<h5>"+data.mensagem+"</h5>");
                                    }
                                }
                                )
                                .fail(
                                    function(){
                                        alert("Erro de Conexão!!!")
                                    }
                                );  

                        //Limpar os campo
                        $('#blocoFormulario')[0].reset();
                                
                        //Cadastro realizado com Sucesso!
                        $('#msgCadSucesso').modal('show');
                       
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
        
         
         