import React,{useState} from 'react'
import axios from 'axios'

const Form = () => {
  
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        email:'', 
        pais: '',
        description: '',
        files:''
    })
        
    const imgUl = async (e) =>{
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'w8z6qhfr');

        const res = await axios.post(
            `https://api.cloudinary.com/v1_1/dwsremshi/image/upload`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );        
        user.files = res.data.secure_url
        document.getElementById('usuario').src = user.files
    }

    const handleChange = (e) =>{

            setUser({
            ...user,
            [e.target.name]: e.target.value,
        })        
     }

   const sendData = (e)=>{
    
    
    e.preventDefault() 
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

               
                
           
                 
                    <input type="file" name="files" onChange={imgUl} /> 
                    
                
               

                <textarea name="description" id="" cols="30" rows="10" value={user.description} onChange={handleChange}></textarea>

                <input type="submit" name="submit" value="Enviar"/>
               
               <div id="card">
                   <p>{user.nombre}</p>
                   <p>{user.apellido}</p>
                   <p>{user.email}</p>
                   <p>{user.pais}</p>
                   <img id="usuario"></img>
               </div>
          </form>
        </>
        
    ) 
}

export default Form
