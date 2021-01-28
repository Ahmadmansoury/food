var fromWhere = prompt('where are you from ?') 
console.log(fromWhere);

if(fromWhere=='napoli'){
    message ='Forza milan';
}else if (fromWhere!='napoli'){
    message = 'merda juventos';
}else if (fromWhere == 'lambardia'){
    message = 'Forza Rossoniri';}
    
    var order = prompt('what kind do you want marghrita or vegatables?');
    

    while(order !=='margherita'&& !=='vegatables'){
         
        order =prompt('please write only margherita or vegatables ')
    }


    var pizza = '';

    if(order === 'marghrita'){
        pizza = '<img src=" images/ pizza-margherita.jpg" />';
    }else if (order === 'vegatabels'){
        pizza = '<img src="images/ vegatables pizza.jpg" />'; 
    }

    var result ='';

    result = pizza;

    var numPizza=prompt('how many pizza do you want');

    for(var i = 0 ; i<numPizza ; i ++){
        result = result + pizza;
    }





document.write('<h3>' + fromWhere +'</h3>')
