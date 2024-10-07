async function quantidadeUsuarios ()  {
   const url= 'https://githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
   const res= await fetch (URL)
   const dados = await res.json()
   const nomeDasRedes= Object.keys(dados)
   const quantidadeUsuarios=Object.values(dados)
  
   const data = [
      {
        X: nomeDasRedes,
        y:quantidadeUsuarios,  
        type: 'bar'
        marker: { x   
         color: getComputedStyle(document.body).getPropertyValue('--primary-color')
        }
      }

   ]
   const grafico= document.createElementI('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico,data)
}
quantidadeUsuarios ()
