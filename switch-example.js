//Card Program


//Variables

var deck=[
    {
        symbol: "A",
        value: 4
    },{
        symbol: "K",
        value: 3
    },{
        symbol: "Q",
        value: 2
    },{
        symbol: "J",
        value: 1
    }
    ];
    
    var debugOn=true;
    var msgOn=true;
    
    //Debug Function
    function debug(...arr){
        if(debugOn){
            console.log("Debug",arr);
        }
    }
    
    //Debug Function
    function msg(...arr){
        if(msgOn){
            console.log("MSG:",arr);
        }
    }
    
    function compareCards(cardA,cardB){
    
        if(cardA.value>cardB.value){
            return true;
        }else{
            return false;
        }
    
    }
    
    
    function pickCard(){
        let max=deck.length;
        let index=Math.floor(Math.random() * Math.floor(max));
        let randomCard=deck[index];
    
        deck.splice(index,1);
    
        return randomCard;
    }
    
    
    
    var myCard=pickCard();
    var computerCard=pickCard();
    var comparedResult_1=compareCards(myCard,computerCard);
    var comparedResult_2=compareCards(computerCard,myCard);
    
    
    debug("Switch:",comparedResult_1);
    
    switch(comparedResult_1){
        case false:{
            debug("comparedResult_1: Lose",comparedResult_1);
            break;
        }
        case true:{
            debug("comparedResult_1: Win",comparedResult_1);
            break;
        }
    
        default:{
            debug("comparedResult_1: Win",comparedResult_1);   
        }
    }
    
    
    
    
    var whoWins=(comparedResult_1)?"Player":"Computer";
    
    msg("You Picked:",myCard.symbol);
    msg("Computer Picked:",computerCard.symbol);
    msg("Who Won?",whoWins);
    
    
    debug("Testing Function",myCard);