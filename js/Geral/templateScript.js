function carregarTemplate(){
    let header = '\
    \
    <header id="header">\
               <div class="content">\
                    <nav id="nav-bar">\
                    <a class="background-img" id="logo" href="index.html"></a>\
                        <ul>\
                            <li>\
                                <a href="lista-verbetes.html">\
                                    <div id="op1">Lista de verbetes</div>\
                                </a>\
                            </li>\
                        </ul>\
                    </nav>\
                </div>\
    </header>\
    \
    ';
    let footer = '\
    \
    <footer>\
    <p class="tx-center">Trabalho do Grau A - Gerência da Configuração de Software</p>\
    </footer>\
    \
    ';
    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
}
