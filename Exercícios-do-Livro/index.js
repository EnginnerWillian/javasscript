/**Calcula o preço total do pedido após aplicar os custos de frete, os descontos e os impostos  


* @param {Object} customer /* uma coleção de informações sobre a pessoa que fez o pedido

* @param {Array.<Object>} lineItems /**Uma coleção  de produtos e quantidades compradas, assim como custo de frete de uma unidade 

* @param {Array.<string>} discountCode /** um código de desconto opcional que pode acionar um desconto a ser deduzido antes de o frete e o impostl serem adicionados. 

*/

var getOrderTotal = function (customer, lineItems, discountCode) {
    var discontTotal = 0;
    var lineItemTotal = 0;
    var shippingTotal = 0;
    var taxtTotal = 0;

    for (var i = 0; < lineItems.length; i++){
        var lineItems = lineItems[i];
        lineItemsTotal += lineItems.price * lineItem
        var lineItemsTotal += lineItems.shippingPrice * lineItem.quantity;
    }
    if (discountCode === '20PERCENT'){
        discountCode = lineItemTotal * 0.2;
    }
    if(customer.shiptoState === 'CA'){
    taxtTotal = (lineItemTotal - discountTotal) * 0.08;
    }
    var total = (
        lineItemTotal -
        discountTotal +
        shippingTotal +
        taxtTotal
    );
    return total;

};

var lineItem1 =  {
    price: 50,
    quantity:1,
    shippingPrice: 10
};

var lineItem2 ={
    price:100, 
    quantity:2, 
    shippingPrice: 20,
};
var lineItems = [lineItem, lineItem2];
var customer ={
    shiptoState: 'CA'
};
var discountCode = '20PERCENT';
var total = getOrderTotal(customer, lineItems, discountCode);

document.writeln('Total: $' + total);

disocuntTotal = 0
lineItemTotal = 0
shippingTotal = 0 
taxtTotal = 0

/** #Primeira iteração do laço FOR: */

lineItemTotal = 0 + (50 * 1) = 50
shippingTotal = 0 + (10 * 1) = 10

/** #Segunda iteração do laço FOR: */
lineItemTotal = 50 + (100 * 2) = 250
shippingTotal = 10 + (20 * 2) = 50
/**# discountTotal é calculado porque discountCode é igual a "20PORCENT" :*/
discountTotal = 250 * 0.2 = 50

/** #taxTotal é definido porque customer.shptoState é igual "CA"*/

taxtTotal= (250 - 50) * 0.08 = 16

total = 250 - 50 + 16 = 266

var sucessfulTestCount  = 0;
var unsucessfulTestCount = 0;
var unsucessfulTestSummaries = [];
\
/**
 * Confirma se os cálculos em 'getOrdertotal() estão corretos.
 */

var testGetOrderTotal = function () {
    // define as expectativas
    var expectedTotal = 266;
    // configura os dados para o teste
    var lineItem1 = {
        price: 50, 
        quantity: 1,
        shippingPrice: 10,
    };
    var lineItems2 = {
        price: 100,
        quantity: 2,
        shippingPrice: 20
    };

    var customer = {
        shiptoState: 'CA'
    };
    var discountCode = '20PORCENT';
    var total = getOrderTotal(customer, lineItems, discountCode);
    // testa os resultados em relação ás expectativas

    if (total === expectedTotal){
        sucessfulTestCount++;

    }else{
        unsucessfulTestCount ++;
        unsucessfulTestSummaries.push(
            'testGetOrderTotal: expected ' + expectedTotal + '; actual ' + total
        );
    }
    // executa os teste

testGetOrderTotal();
document.writeln(unsucessfulTestCount + 'secessful test(s)<br/>');
document.writeln(unsucessfulTestCount + 'unsucessful test(s) <br/>');

if(unsucessfulTestCount){
    document.writeln('<ul>');
    document.writeln('<li>' + unsucessfulTestSummaries[i] + '</li>');
}
document.writeln('</ul>');
};


