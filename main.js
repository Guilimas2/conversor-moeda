document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();
    
    // obter valores de entrada informados pelo usuario
    const valor = parseFloat(document.getElementById('valor').value);
    const deMoeda = document.getElementById('deMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // definir taxas de cambio fixas
    const exchangeRates = {
        USD: {BRL: 5.70, EUR: 0.93},
        BRL: {USD: 0.18, EUR: 0.16},
        EUR: {USD: 1.08, BRL: 6.16}
        
    };
    // conversão simples de moedas
    let valorConvertido;
    if(deMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor * exchangeRates[deMoeda][paraMoeda];
    }
        const conversao = document.getElementById('conversao');
        conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}`;
});