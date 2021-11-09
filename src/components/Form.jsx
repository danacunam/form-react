import React,{useState} from 'react'



const Form = () => {
  
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        email:'', 
        pais: '',
        description: '',
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

                <label htmlFor="nombre">Nombre :</label>
                <input type="text" name="nombre" value={user.nombre} onChange={handleChange}/>

                <label htmlFor="apellido">Apellido : </label>
                <input type="text" name="apellido" value={user.apellido} onChange={handleChange}/>
            
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" value={user.email} onChange={handleChange} />

                <label htmlFor="pais">País de origen :</label>
                <input type="text" name="pais"  value={user.pais} onChange={handleChange} />


                <select name="rol" onChange={handleChange}>
                    <option value="ciudadano"> Ciudadano</option>
                    <option value="emprendedor">Emprendedor</option> 
                </select> 
                
                <div className={rolShow()}>
                    <p>Sube tu logo aquí</p>
                    <input type="file" name="files"/> 
                    <button >Subir Imagen</button>  
                </div>
               

                <textarea name="description" id="" cols="30" rows="10" value={user.description} onChange={handleChange}></textarea>

                <input type="submit" name="submit" value="Enviar"/>
               
          </form>
        </>
        
    ) 
}

export default Form
