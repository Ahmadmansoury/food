var fromWhere = prompt('where are you from ?') 
console.log(fromWhere);

if(fromWhere=='napoli'){
    message ='Forza milan';
}else if (fromWhere!='napoli'){
    message = 'merda juventos';
}else if (fromWhere == 'lambardia'){
    message = 'Forza Rossoniri';}
    
    
document.write('<h3>' + fromWhere +'</h3>')
