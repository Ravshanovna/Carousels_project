import React, {useEffect, useState} from 'react'
import Axios from 'axios';

const Aksesuar = () => {

    const [mass, setMass] = useState([])


    useEffect(() => {
        getVal()
      }, [])


      function getVal() {
        Axios.get('https://api.npoint.io/b48b242cad2dd8799684')
        .then(ress => {
          setMass(ress.data)
        })
      }

      return( 
    <div className='container'>
           <h4 className='text-success my-3 fw-bold'>Aksesuarlar</h4>
            <div className='row'>
                {
                    (mass) && mass.map((item, index) => {
                        return(
                    <div className="col" key={index}>
                    <div className='card'>
                        <img width={232} src={item.img} alt="rasm" />
                        <h6 className='ps-2'>{item.narx}$</h6>
                        <h6 className=' ps-2 fw-bold'>{item.name}</h6>
                    </div>
                    <button className=' my-2 mb-5 btn btn-success form-control fw-bold fs-5'>Sotib Olish</button>
                    </div>
                    )
                    })
                }
            </div>
        </div>
      )
}

export default Aksesuar;
