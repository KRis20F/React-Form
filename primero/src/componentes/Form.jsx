import React, {useState} from 'react'


export const Form = () => {

    let [user, setUser] = useState(
        {
            name: '',
            direction : '',
            age: 0,
            email: '',
            phone: 0

        }
    );

    // const isUserDataEntered = Object.values(user).some(value => value !== '' && value !== 0);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setUser((prevUser) => ({
        ...prevUser,
        [name]: value
    }));
    };

    return (
        <div className=''>
        <div className='form-container flex-row flex justify-center'>
            <form className='form-wrapper flex flex-col text-center'>
                <input className='border-black border-solid border-2' value={user.name} onChange={handleChange} id='name' placeholder='name' name='name' ></input>
                <input className='border-black border-solid border-2' value={user.direction} onChange={handleChange} id='direction' placeholder='direction' name='direction'></input>
                <input className='border-black border-solid border-2' type='number' value={user.age} onChange={handleChange} id='age' placeholder='age' name='age'></input>
                <input className='border-black border-solid border-2' type='email' value={user.email} onChange={handleChange} id='email' placeholder='email' name='email'></input>
                <input className='border-black border-solid border-2' type='number' value={user.phone} onChange={handleChange} id='phone' placeholder='phone' name='phone'></input>
                <button className='border-black border-solid border-2' type="submit">Guardar</button>
            </form>
        </div>

            {/* <div className='result'>
                <h2>Datos ingresados</h2>
                <p>Nombre: {user.name}</p>
                <p>Direccion: {user.direction}</p>
                <p>Edad: {user.age}</p>
                <p>Email: {user.email}</p>
                <p>Telefono: {user.phone}</p>
            </div> */}
            
        </div>
    );
    
}

export default Form
