function sacar() {
    var saque = document.getElementById('saque')
    saque = Number(saque.value)
    var msg = document.getElementById('resumo')

    if (saque.length == 0 || saque <= 0) {
        alert('[ERRO] Digite um valor para prosseguir!')
    } else {
        var f = saque.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        msg.innerHTML = `Você escolheu sacar <strong>${f}</strong>.`

        /* Cédula começa com 100 */

        var ced = 100
        var totcéd = 0
        while (saque >= ced) {
            saque -= ced
            totcéd ++
        }
        if (totcéd > 0) {
            var f100 = ced.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            msg.innerHTML += `<p>${totcéd} cédula(s) de ${f100}.</p>`
        }
    
        /* Cédula muda para 50 */

        ced = 50
        totcéd = 0
        while (saque >= ced) {
            saque -= ced
            totcéd ++
        }
        if (totcéd > 0) {
            var f50 = ced.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            msg.innerHTML += `<p>${totcéd} cédula(s) de ${f50}.</p>`
        }
    
        /* Cédula muda para 20 */

        ced = 20
        totcéd = 0
        while (saque >= ced) {
            saque -= ced
            totcéd ++
        }
        if (totcéd > 0) {
            var f20 = ced.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            msg.innerHTML += `<p>${totcéd} cédula(s) de ${f20}.</p>`
        }

        /* Cédula muda para 10 */

        ced = 10
        totcéd = 0
        while (saque >= ced) {
            saque -= ced
            totcéd ++
        }
        if (totcéd > 0) {
            var f10 = ced.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            msg.innerHTML += `<p>${totcéd} cédula(s) de ${f10}.</p>`
        }

        /* Cédula muda para 5 */

        ced = 5
        totcéd = 0
        while (saque >= ced) {
            saque -= ced
            totcéd ++
        }
        if (totcéd > 0) {
            var f5 = ced.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            msg.innerHTML += `<p>${totcéd} cédula(s) de ${f5}.</p>`
        }

        /* Cédula muda para 1 */

        ced = 1
        totcéd = 0
        while (saque >= ced) {
            saque -= ced
            totcéd ++
        }
        if (totcéd > 0) {
            var f1 = ced.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            msg.innerHTML += `<p>${totcéd} cédula(s) de ${f1}.</p>`
        }
    }   
}