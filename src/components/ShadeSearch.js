import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function ShadeSearch(props) {

  const { color, onInputChange } = props

  // useEffect(() => {
  //   value=""
  // }, [])

    return (
        <>
           <div className="ShadeSearch justify-contect-center align-items-center d-flex justify-content-center">
             <input className="form-control shadow border-0" style={{width:"200px"}} 
                    type="search" 
                    placeholder="Search [ K A A L ]" 
                    aria-label="Search" 
                    value={color} 
                    onChange={(e) => onInputChange(e.target.value)} 
              />
             
                <input className="picker shadow" type="color" id="favcolor" name="favcolor" value="#ff0000" onChange={(e) => onInputChange(e.target.value)} />
            <Link className="btn btn-outline-warning ml-4" to="/shadow" role="button">Shadow</Link>
          </div>
        </>
    )
}
