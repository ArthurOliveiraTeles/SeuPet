function Preencher(texto, testa) {
    if(testa == true) {
        if (texto == "inicio") {
            inicio.style.backgroundColor="rgba(0, 0, 0, 0.459)"
        }

        else if(texto == "cachorro") {
            cachorro.style.backgroundColor="rgba(0, 0, 0, 0.459)"
        }

        else if(texto == "gato") {
            gato.style.backgroundColor="rgba(0, 0, 0, 0.459)"
        }

        else if(texto == "medicamento") {
            medicamento.style.backgroundColor="rgba(0, 0, 0, 0.459)"
        }

        else if(texto == "sobre") {
           sobre.style.backgroundColor="rgba(0, 0, 0, 0.459)"
        }

        else if(texto == "subItemCachorro") {
            subItemCachorro.style.backgroundColor="#2f9b7aca"
        }

        else if(texto == "subItem2Cachorro") {
            subItem2Cachorro.style.backgroundColor="#2f9b7aca"
        }

        else if(texto == "subItemGato") {
            subItemGato.style.backgroundColor="#2f9b7aca"
        }

        else if(texto == "subItem2Gato") {
            subItem2Gato.style.backgroundColor="#2f9b7aca"
        }
    }


    if (testa == false) {
        inicio.style.backgroundColor="#561D25"
        cachorro.style.backgroundColor="#561D25"
        gato.style.backgroundColor="#561D25"
        medicamento.style.backgroundColor="#561D25"
        sobre.style.backgroundColor="#561D25"
        subItemCachorro.style.backgroundColor="#66ddb9bb"
        subItem2Cachorro.style.backgroundColor="#66ddb9bb"
        subItemGato.style.backgroundColor="#66ddb9bb"
        subItem2Gato.style.backgroundColor="#66ddb9bb"
    }
}

function MostraSub(texto=false, testa) { // Preciso indicar depois nessa função qual área esta sendo acessada, por enquanto só do cachorro.
    // Como padrão o entraNoSub é false
    
    if(texto == "subCachorro") {
        // Removendo o outro sub-menu para o usuário não interagir

        subCachorro.classList.remove('NoClick')
        var subItem = document.getElementById('subCachorro')
        subGato.classList.add('NoClick')
        subGato.style.opacity=0

        } else if(texto == 'subGato') {

        subGato.classList.remove('NoClick')
        var subItem = document.getElementById('subGato')
        subCachorro.style.opacity=0
        subCachorro.classList.add('NoClick')

    }
    

    if(menu2.style.display == "block") {
        // Se tiver ativo, ele apaga a área dos sub-menus
        menu2.style.display="none"
    }
    if (testa == true) {
        menu2.style.display="block"
        // Entrei na seção de subitem
        subItem.style.opacity=1
        subItem.style.transition= 'opacity 0.5s'
        subItem.style.display="block"
    }

    /*
    else if (testa == false) {
        if(entraNoSub == true) {
            // Entrei no meu subitem
            subItem.style.opacity=1
            subItem.style.display="block"
        }
        else if(entraNoSub == false) {
            // Aqui eu estou saindo do meu sub item
            subItem.style.opacity=0
            menu2.style.display="none"
        }
    }*/
    
    
}