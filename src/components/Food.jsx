function Food (){
    let food = {comida1:'paper', comida2:'sal',comida3:'Nails'};
    
    return (
    
    
        <div>
        <ul>
          <h3><p>Comida</p></h3> 
            <li>{food.comida1}</li>
            <li>{food.comida2}</li>
            <li>{food.comida3}</li>
          </ul>
        </div>
           )
    
}

export  default  Food