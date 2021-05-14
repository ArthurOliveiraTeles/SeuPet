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
    }


    if (testa == false) {
        inicio.style.backgroundColor="#561D25"
        cachorro.style.backgroundColor="#561D25"
        gato.style.backgroundColor="#561D25"
        medicamento.style.backgroundColor="#561D25"
        sobre.style.backgroundColor="#561D25"
        subItemCachorro.style.backgroundColor="#66ddb9bb"
        subItem2Cachorro.style.backgroundColor="#66ddb9bb"
    }
}

function MostraSub(testa, entraNoSub=false) { // Preciso indicar depois nessa função qual área esta sendo acessada, por enquanto só do cachorro.
    // Como padrão o entraNoSub é false
    var subItem = document.getElementById("sub-cachorro")
    if (testa == true) {
        // Entrei na seção de subitem
        subItem.style.opacity=1
        subItem.style.display="block"
    }

    else if (testa == false) {
        if(entraNoSub == true) {
            // Entrei no meu subitem
            subItem.style.opacity=1
            subItem.style.display="block"
        }
        else if(entraNoSub == false) {
            // Aqui eu estou saindo do meu sub item
            subItem.style.opacity=0
            subItem.style.display="none"
        }
    }
    
}