var initialPrice=document.querySelector("#initial-price");
var stockQuantity=document.querySelector("#stock-quantity");
var currentlPrice=document.querySelector("#current-price");
var button=document.querySelector("#btn");
var outputBox=document.querySelector("#output-box");


function profitOrLoss(ip,sq,cp){
    if(ip>0&&cp>0){
        if(ip>cp){
            var loss=(ip-cp)*sq;
            var lossPercent=(loss/ip)*100;
            var convertedLossPercentage=parseFloat(lossPercent).toFixed(2);
    
            outputBox.innerText=(`Hey the loss is ${loss} and the loss percent is ${convertedLossPercentage}%`);
        }
        else if(cp>ip){
            var profit=(cp-ip)*sq;
            var profitPercent=(profit/ip)*100;
            var convertedProfitPercentage=parseFloat(profitPercent).toFixed(2);
    
            outputBox.innerText=(`Hey the profit is ${profit} and the profit percent is ${convertedProfitPercentage}%`);
        }
    
        else{
            outputBox.innerText=(`No gain. no pain`);
        }
    }
    else{
        outputBox.innerText=(`Enter the positive value and make sure all the fields are filled`);
    }

}

function buttonHandler(){
    var ip=Number(initialPrice.value);
    var sq=Number(stockQuantity.value);
    var cp=Number(currentlPrice.value);

    profitOrLoss(ip,sq,cp);
}

button.addEventListener("click",buttonHandler);