import React,{useState} from 'react'

const Form = () => {
  
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        email:'', 
        pais: '',
        description: '',
        files:''
    })
    
    const handleChange = (e) =>{

            setUser({
            ...user,
            [e.target.name]: e.target.value,
        })        
     }

   const sendData = (e)=>{
    console.log(user)
    e.preventDefault() 
    }

     const rolShow = () =>{
        if (user.rol ==='emprendedor') return 'show'
        else return 'hide'
    }
    
   return (
        
        <>  
            <form onSubmit={sendData}>

              
                <input type="text" placeholder="Escribe tu nombre" name="nombre" value={user.nombre} onChange={handleChange}/>

                <input type="text" name="apellido" placeholder="Escribe tu apellido" value={user.apellido} onChange={handleChange}/>
            
                <input type="email" name="email" placeholder="Escribe tu email" value={user.email} onChange={handleChange} />

               
                
                <label htmlFor="pais">Selecciona el país:</label>
                <select name="pais" onChange={handleChange}>
                    <option value="mexico"> México</option>
                    <option value="colombia">Colombia</option>
                    <option value="peru">Perú</option> 
                </select> 

                <select name="rol" onChange={handleChange}>
                    <option value="ciudadano"> Ciudadano</option>
                    <option value="emprendedor">Emprendedor</option> 
                </select> 
                
                <div className={rolShow()}>
                    <p>Sube tu logo aquí</p>
                    <input type="file" name="files" onChange={handleChange} value={user.files}/> 
                    <button >Subir Imagen</button>  
                </div>
               

                <textarea name="description" id="" cols="30" rows="10" value={user.description} onChange={handleChange}></textarea>

                <input type="submit" name="submit" value="Enviar"/>
               
          </form>
        </>
        
    ) 
}

export default Form
