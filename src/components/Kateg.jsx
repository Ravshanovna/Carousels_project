import React, {useEffect, useState} from 'react'
import Axios from 'axios';

const Kateg = () => {

    const [mass, setMass] = useState([])


    useEffect(() => {
        getVal()
      }, [])


      function getVal() {
        Axios.get('https://api.npoint.io/c1830eec748179f22d81')
        .then(ress => {
          setMass(ress.data)
        })
      }

    return (
        <div className='container'>
          <div className='text-center py-3'>
          <h1 className='text-success fw-bold'>Kategoriya</h1>
          </div>
          <div className='row'>
             {
          (mass) && mass.map((item, index) => {
            return(
                <div className='col-4'>
              <div className='card my-2'>
              <div  className=' d-flex align-items-center' key={index}>
                <img width={60} height={40} className='img p-2' src={item.img}/>
                <h4 className=' ms-3'>{item.name}</h4>
              </div>
              </div>
                </div>
            )
          })
        }
        </div>
        </div>
    );
}

export default Kateg;
