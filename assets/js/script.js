let dados=''

acordeon=()=>{
    divprincipal=document.getElementById('acordeon')    
    var textos='';
    for(i=0;i<dados.length;i++){
        // cria os elementos
        var details01= document.createElement('details');
        var sumary01= document.createElement('summary');
        var paragrafo01= document.createElement('p');
        // define os atributos
        details01.setAttribute("class","acrDetails");
        sumary01.setAttribute("class","acrSummary");
        paragrafo01.setAttribute("class","acrP");
                
        // render na tela
        textos=document.createTextNode(dados[i].title)    
        sumary01.appendChild(textos);
        details01.appendChild(sumary01);
        textos=document.createTextNode(dados[i].text)    
        paragrafo01.appendChild(textos);
        details01.appendChild(paragrafo01);
        textos='';
        divprincipal.appendChild(details01);    
       
        
    }
        
    }



buscadadps=()=>{

    // XMLHttpRequest
  const exec = new XMLHttpRequest()

  exec.open('GET', 'https://stark-cove-48986.herokuapp.com/seguros/motivos')

  exec.onload = function () {
    dados=(JSON.parse(this.responseText))
    acordeon();
      
  }

  exec.onerror = function () {
    console.log('erro ao executar a requisição')
  }

  exec.send()
}

document.onload = buscadadps();


