var fromWhere = prompt('where are you from ?') 
console.log(fromWhere);

if(fromWhere=='napoli'){
    message ='Forza milan';
}else if (fromWhere!='napoli'){
    message = 'merda juventos';
}else if (fromWhere == 'lambardia'){
    message = 'Forza Rossoniri';}
    
    var order = prompt('what kind do you want marghrita or vegatables?');
    

    while(order !=='marghrita'&&  order != 'vegatables'){
         
        order =prompt('please write only marghrita or vegatables ')
    }


    var pizza = '';

    if(order === 'marghrita'){
        pizza = '<img src="pizza-margherita.jpg" />';
    }else if (order === 'vegatabels'){
        pizza = '<img src="vegatables pizza.jpg" />'; 
    }

    var result ='';

    result = pizza;

    var numPizza=prompt('how many pizza do you want');

    for(var i = 0 ; i<numPizza ; i ++){
        document.write(result);
    }
    



document.write('<h3>' + fromWhere +'</h3>')
