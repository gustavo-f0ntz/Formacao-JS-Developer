
/* faça um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e escolha uma opção de pagamento.

Utilize a tabela a seguir para ler a condição e estabelecer o preço adequado.

Código condição do pagamento: 

- Á vista / Debito - recebe 10% de desconto
- Á vista no Dinheiro - recebe 15% de desconto
- Em duas vezes - Preço normal da etiqueta sem juros;
- Acima de duas vezes - preço normal da etiqueta mais juros de 10%.

*/

let precoProduto = parseFloat(prompt("Informe o valor presente na etiqueta do produto: "));
let condicaoDeCompra = prompt("Qual a forma de pagamento que você irá selecionar: (Debito) (Dinheiro) (Credito)");
let formaPagamento = prompt("Forma de pagamento:  (Á Vista)  (Parcelado Credito)");



if ((condicaoDeCompra == "Dinheiro") && formaPagamento == "Á Vista") {
    valDesconto =  precoProduto - (precoProduto * 15 / 100 );
    console.log(`O valor do produto será de R$${valDesconto}`);
}else if ((condicaoDeCompra == "Debito") && formaPagamento == "Á Vista") {
    valDesconto = precoProduto - (precoProduto * 10 / 100);
    console.log(`O valor do produto será de R$${valDesconto}`);
}else if ((condicaoDeCompra == "Credito") && formaPagamento == "Parcelado Credito") {
    let quantParcelas = prompt("Informe o número de parcelas que deseja: (acima de 2x 10% de juros)");
    if (quantParcelas > 2) {
        jurosAplicados = precoProduto + (precoProduto * 10 / 100);
        console.log(`O valor do produto fica no total de R$${jurosAplicados} com os 10% de juros aplicados.`);
        valorParcelas = jurosAplicados / quantParcelas;
        console.log(`Dividido em ${quantParcelas} de R$${valorParcelas.toFixed(2)} cada.`);
    }

}

    
