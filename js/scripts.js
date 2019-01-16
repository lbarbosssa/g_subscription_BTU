//Animação do botão de help
var btn_help = $('#btn-help1');
btn_help.on("mouseenter", function(){
   btn_help.animate({
            fontSize: "30px",
        }, 100)
});
btn_help.on("mouseleave", function(){
   btn_help.animate({
            fontSize: "25px",
        }, 100)
});

//Dropdown Argentina
var filialArg;
dropdownArg = $('.dropdown-arg');

$(".filial-arg").on("mouseenter", function(){
    $(this).css("cursor", "pointer")
})

function setarFilialArg(sigla){
    $("button").removeClass('ativado');
    dropdownArg.addClass('ativado');
    preview.fadeOut(100);
    
    if (sigla == "bue"){
        layoutAss = "Braspress Argentina";
        filialArg = sigla;
        $("#form-ass").removeClass("was-validated");
        layoutAssinatura(layoutAss);
        $("form").hide();
        $("form").fadeIn(410);
    } else if (sigla == "cor" || sigla == "ros"){
        layoutAss = "Braspress Argentina";
        filialArg = sigla;
        $("#form-ass").removeClass("was-validated");
        layoutAssinatura(layoutAss);
        $("form").hide();
        $("form").fadeIn(410);
    }
}

//botão de mudar layout da assinatura
layoutAss = "Braspress";

$(".btn-layout").on("click", function(){
    $("button").removeClass('ativado');
    $(this).addClass('ativado');
    layoutAss = $(this)[0].innerText;
    preview.fadeOut(100);
    //$("#form-ass")[0].reset();
    $("#form-ass").removeClass("was-validated");
    layoutAssinatura(layoutAss);
    $("form").hide();
    $("form").fadeIn(410);
})
//Serve para setar a assinatura assim que entra na pagina
layoutAssinatura(layoutAss); 
//Layout da Assinatura
function layoutAssinatura(layout){
    $("#img-topo-preview").attr({src: "https://www.braspress.com.br/img/uploads/imgs/img_topo.jpg", style: "width: 134px; height: 28px;", alt: "Braspress"});
    $("#att-ass-preview, #td-ass-att").attr("style", "font-size: 15px; color: #003399; font-family: Helvetica;");
    $("#att-ass-preview-text").html("Att.")
    $("#funcao-ass-preview").attr("style", "font-size: 12px; color: #999999; font-family: Helvetica; margin: 1px 0 0px 0");
    $("#site-ass-preview").attr("style", "font-size: 12px; font-family: Helvetica; margin: 1px 0 0px 0");
    $("#fone-ass-preview-name").html("Telefone: ");
    $("#email-ass-preview-text").html("E-mail:");
    $('#cel-ass-preview').hide();
    $("#siteAss").html("Acesse nosso site: ");
    $("#siteAss").attr("style", "color: #999999")
    $("#site-ass-preview-ancora").attr("href", "http://www.braspress.com");
    $("#site-ass-preview-ancora").html("braspress.com");
    $("#nome-ass-preview").attr("style", "font-size: 13px; color: #000000; font-family: Helvetica; margin: -17px 0 -1px 0");
    $("#fone-ass-preview, #cel-ass-preview").attr("style", "font-size: 12px; color: #999999; font-family: Helvetica; margin: 1px 0 0px 0");
    $("#email-ass-preview").attr("style", "font-size: 12px; color: #999999; font-family: Helvetica; margin: 1px 0 0px 0");
    $("#email-ass-preview-text").attr("style", "color: #999999;");

    //Modificações para o mail.braspress
    $("#font-att-ass").attr({size: "3", face:"Helvetica", color: "#003399"});
    $("#font-nome-ass").attr({size: "2", face: "Helvetica", color: "#000000"});
    $("#font-funcao-ass").attr({size: "2", face: "Helvetica", color: "#999999"});
    $("#font-fone-ass, #font-cel-ass").attr({size: "2", face: "Helvetica", color: "#999999"});
    $("#font-label-email-ass, #font-label-site-ass").attr({size: "2", face: "Helvetica", color: "#999999"});
    $("#font-end-email-ass, #font-end-site-ass").attr({size: "2", face: "Helvetica", color: "#0000FF"});

    if (layout == "Braspress"){
        modeloFormulario(layoutAss);
        $("#img-topo-preview-tr").show();
        $("#funcao-ass-preview").show();
        $("#site-ass-preview").show();
        $("#img-rodape-preview").attr({src: "https://www.braspress.com.br/img/uploads/imgs/rodape_padrao.gif", style: "width: 380px; height: 123px;", alt: "Nosso Grupo"});
    } else if(layout == "Banco Urbano"){
        modeloFormulario(layoutAss);
        $("#att-ass-preview").hide();
        $("#img-topo-preview-tr").hide();
        $("#funcao-ass-preview").hide();
        $("#cargo").attr("disabled", "disabled");
        $("#emailLabel").html("@bancourbano.com.br");
        $("#nome-ass-preview").attr("style", "font-size: 13px; color: #365F9E; font-family: Helvetica; margin: -17px 0 -1px 0");
        $("#fone-ass-preview, #cel-ass-preview").attr("style", "font-size: 12px; color: #365F9E; font-family: Helvetica; margin: 1px 0 0px 0");
        $("#email-ass-preview").attr("style", "font-size: 12px; color: #365F9E; font-family: Helvetica; margin: 1px 0 0px 0");
        $("#email-ass-preview-text").attr("style", "color: #365F9E;");
        $("#site-ass-preview").hide();
        $("#img-rodape-preview").attr({src: "https://www.braspress.com.br/img/uploads/imgs/rodape_urbano.png", style: "", alt: "Banco Urbano"});

        //Modificações para o mail.braspress
        $("#font-nome-ass").attr({size: "2", face: "Helvetica", color: "#365F9E"});
        $("#font-fone-ass, #font-cel-ass").attr({size: "2", face: "Helvetica", color: "#365F9E"});
        $("#font-label-email-ass, #font-label-site-ass").attr({size: "2", face: "Helvetica", color: "#365F9E"});
        $("#font-end-email-ass, #font-end-site-ass").attr({size: "2", face: "Helvetica", color: "#365F9E"});

    } else if (layout == "Braspress Argentina"){
        modeloFormulario(layoutAss);
        $("#fone-ass-preview-name").html("Teléfono: ");
        $("#funcao-ass-preview").show();
        $("#email-ass-preview-text").html("Correo electrónico");
        $("#siteAss").html("Accede a nuestro sitio: ");
        $("#site-ass-preview-ancora").attr("href", "http://www.braspress.com.ar");
        $("#site-ass-preview-ancora").html("braspress.com.ar");
        $("#img-rodape-preview").attr({src: "https://www.braspress.com.br/img/uploads/imgs/rodape_argentina.png", style: "width: 279px; height: 89px;", alt: "Nosso Grupo"});
    }
}
        
//Guarda os dados do formulario
var dados = [];

//Preview da assinatura
var preview = $('#prev');
preview.hide();

//Validação dos formularios e pre-visualização
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    
                    for (var i = 0; i < this.elements.length; i++) {
                        dados[i] = this.elements[i].value
                    }
                    if (dados[3] !== "" && layoutAss == "Braspress Argentina")
                        dados[3] = " - Interno: " + dados[3];
                    else if (dados[3] !== "" && layoutAss == "Braspress")
                        dados[3] = " - Ramal: " + dados[3];
                    else if (dados[3] !== "" && layoutAss == "Banco Urbano")
                        dados[3] = " - Ramal: " + dados[3];
                    
                    if (dados[4] !== "")
                         $('#cel-ass-preview').show();
                    else   
                        $('#cel-ass-preview').hide();
                    

                    console.log(dados);
                    $('#nomeAss').html(dados[0]);
                    $('#funcaoAss').html(dados[1]);
                    $('#foneAss').html($("#ddiLabelFone").html() + " " + dados[2]);
                    $('#ramalAss').html(dados[3]);
                    $('#celAss').html(dados[4]);
                    $("#cel-ass-preview-name").html($("#label-celular").html() + ": " + " " + $("#ddiLabelCel").html() + " ");
                    $('#emailAss-ancora').attr("href", "mailto:" + dados[5] + $("#emailLabel").html());
                    $('#emailAss').html(dados[5] + $("#emailLabel").html());
                    preview.fadeIn();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Alterar modelo de formulario
modeloFormulario(layoutAss);
function modeloFormulario(layout){
    $("#cargo").removeAttr("disabled");
    if (layout == "Braspress Argentina"){
        //Labels e placeholders
        $("#label-nome").html("Nombre");
        $("#nomeSobrenome").attr("placeholder", "Su nombre y apellido");
        $("#label-cargo").html("Función");
        $("#cargo").attr("placeholder", "Su función");
        $("#label-telefone").html("Teléfono");
        $("#ddiLabelFone, #ddiLabelCel").html("+54");
        $("#label-ramal").html("Interno");
        $("#ramal").attr("placeholder", "Su interno o de lo sector");
        $("#label-celular").html("Telemóvil");
        $("#label-email").html("Correo Electrónico");
        $("#emailLabel").html("@braspress.com");
        $("#email").attr("placeholder", "Su correo electrónico");
        $("#btn-gerar").html("Generar Firmas");
        //Textos do preview
        $("#text-card-header").html("Su firma está lista");
        $("#texto-preview").html("Seleccione su firma y copie en la configuración de firmas de su gestor de correo electrónico.");
        //Mensagem de Erro
        $("#invalid-nome").html("Introduzca su nombre.");
        $("#invalid-cargo").html("Informe su cargo.");
        $("#invalid-telefone").html("Introduzca el teléfono.");
        $("#invalid-email").html("Introduzca su correo electrónico.");
    }else{
        //Labels e placeholders
        $("#label-nome").html("Nome"); 
        $("#nomeSobrenome").attr("placeholder", "Seu nome e sobrenome");
        $("#label-cargo").html("Cargo");
        $("#cargo").attr("placeholder", "Seu Cargo");
        $("#label-telefone").html("Telefone");
        $("#ddiLabelFone, #ddiLabelCel").html("+55");
        $("#label-ramal").html("Ramal");
        $('#telefone').attr('placeholder', '(11) 1234-5678');
        $("#ramal").attr("placeholder", "Seu ramal ou do setor");
        $("#label-celular").html("Celular");
        $('#celular').attr('placeholder', '(11) 91234-5678');
        $("#label-email").html("E-mail");
        $("#emailLabel").html("@braspress.com");
        $("#email").attr("placeholder", "Seu e-mail");
        $("#btn-gerar").html("Gerar assinatura");
        //Textos do preview
        $("#text-card-header").html("Sua assinatura está pronta");
        $("#texto-preview").html("Selecione sua assinatua copie e cole nas configurações de assinaturas do seu gerenciador de e-mail.");
        //Mensagem de erro
        $("#invalid-nome").html("Informe o seu nome.");
        $("#invalid-cargo").html("Informe o seu cargo.");
        $("#invalid-telefone").html("Informe o telefone.");
        $("#invalid-email").html("Informe seu email.");
    }

    //Mascara do campo de tel e ramal
    $('#telefone').mask('(00) 0000-0000');
    $('#ramal').mask('0000');

    //Mascara do campo de celular
    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };    
    $('#celular').mask(behavior, options);

    //Mascaras para os telefones da argentina
    if (filialArg == "bue"){
        $('#celular').mask('0 (00) 0000-0000');
        $('#telefone').attr('placeholder', '(00) 1234-5678');
        $('#celular').attr('placeholder', '9 (00) 1234-5678');
        filialArg = "";
    } else if (filialArg == "cor" || filialArg == "ros"){
        $('#celular').mask('0 (000) 000-0000');
        $('#telefone').mask('(000) 000-0000');
        $('#celular').attr('placeholder', '9 (000) 123-4567');
        $('#telefone').attr('placeholder', '(000) 123-4567');
        filialArg = "";
    }

}

//Dados do modal
$("#btn-help1, #btn-help2").on("click", function(){
    if (layoutAss == "Braspress Argentina"){
        idiomaModal("ES");
        $("#modal-btn-idioma").html("Portugues");
        $("#modal-btn-idioma").attr("onclick", "idiomaModal('PT')");
} else {
        idiomaModal("PT");
        $("#modal-btn-idioma").html("Español");
        $("#modal-btn-idioma").attr("onclick", "idiomaModal('ES')");      
}
})
$("#modal-btn-idioma").on("mouseenter", function(){
    $(this).css("cursor", "pointer");
})
$("#modal-btn-idioma").on("click", function(){
    $(".modal-content").fadeOut(10);
    $(".modal-content").fadeIn(700);
});

$("#btn-obter-manual").on("click",function(){
    $("#modal-ancora-manual")[0].click();
})

function obterManual(idioma){
    if (idioma == "ES"){
        $("#modal-ancora-manual").attr("href", "manuais/Manual_Assinatura_ES.pdf");
    }else if (idioma == "PT"){
        $("#modal-ancora-manual").attr("href", "manuais/Manual_Assinatura_PT.pdf");
    }
}

function idiomaModal(idioma){
    if (idioma == "ES"){
        $("#modal-btn-idioma").html("Portugues", 1000);
        $("#modal-btn-idioma").attr("onclick", "idiomaModal('PT')");
        $("#modal-titulo").html("Funcionamiento del generador");
        $("#modal-btn-idioma").html("Portugues");
        $("#modal-texto-1").html("El generador de firmas se ha desarrollado para facilitar la creación de firmas de correo electrónico.<br><br>El funcionamiento es simple, sólo es necesario rellenar los campos del formulario y hacer clic en el botón <b>Generar firma.</b>")
        $("#modal-texto-2").html("A continuación se muestra el relleno de los campos:<br>")
        $("#modal-exemplo-1").html("Nombre del colaborador;<br> Cargo o Función;<br> Teléfono con DDD;<br> Si prefiere no insertar el interno, puede dejar en blanco;<br> El telemóvil es recomendado para los que tienen un número corporativo;<br> El inicio de su correo electrónico ejemplo: ti.suporte.<br>")
        $("#modal-texto-3").html("Después de hacer clic en generar, una vista previa de su firma aparecerá a la izquierda del formulario.<br> Seleccione su firma entera y la copie.<br> Ahora es sólo pegar el contenido copiado, en la configuración de firmas de su gestor de correo electrónico. Si no sabe dónde colocar la firma, utilice el botón <b>Obtener el manual</b>. <hr> Si lo desea, debe agregar otro campo en la firma, o ha encontrado alguna inconformidad, póngase en contacto con el soporte del teléfono: +55 (11) 3429-3225.")
        $("#modal-texto-btn-1").html("Cerca");
        obterManual("ES");
        $("#modal-texto-btn-2").html("Obtener el Manual");
    }else {
        $("#modal-btn-idioma").html("Español");
        $("#modal-btn-idioma").attr("onclick", "idiomaModal('ES')");
        $("#modal-titulo").html("Funcionamento do Gerador");
        $("#modal-btn-idioma").html("Español");
        $("#modal-texto-1").html("O gerador de assinaturas foi desenvolvido para facilitar a criação de assinaturas de email.<br><br>O funcionamento é simples, é necessário apenas preencher os campos do formulário, e clicar no botão <b>Gerar Assinatura</b>.")
        $("#modal-texto-2").html("Abaixo exemplo de preenchimento dos campos:<br>")
        $("#modal-exemplo-1").html("Nome do colaborador;<br> Cargo ou Função;<br> Telefone com DDD;<br> Caso preferir não inserir o ramal, pode deixar em branco;<br> O celular é recomendado para os que possuem número corporativo;<br> O inicio do seu e-mail ex: ti.suporte.<br>")
        $("#modal-texto-3").html("Após clicar em gerar, uma pré-visualização da sua assinatura aparecerá logo a baixo do formulário.<br> Selecione a sua assinatura inteira e a copie.<br> Agora é só colar o conteúdo copiado, nas configurações de assinaturas do seu gerenciador de e-mail. Caso não souber onde colar a assinatura, utilize o botão <b>Obter o Manual</b>. <hr> Se desejar, for necessário adicionar outro campo em sua assinatura, ou encontrou alguma inconformidade, entre em contato com o suporte no telefone: +55 (11) 3429-3225.")
        $("#modal-texto-btn-1").html("Fechar");
        obterManual("PT");
        $("#modal-texto-btn-2").html("Obter o Manual");
    }
}

