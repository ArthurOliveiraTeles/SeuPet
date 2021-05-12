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
    }


    if (testa == false) {
        inicio.style.backgroundColor="#561D25"
        cachorro.style.backgroundColor="#561D25"
        gato.style.backgroundColor="#561D25"
        medicamento.style.backgroundColor="#561D25"
        sobre.style.backgroundColor="#561D25"
    }
}