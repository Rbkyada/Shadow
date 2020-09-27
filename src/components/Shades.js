import React,{useEffect, useState, useRef} from 'react'
import Values from 'values.js'
import isColor from 'is-color'
import ShadeColor from './ShadeColor'

export default function Shades(props) {
  

  const soundRef = useRef();

  const [ shades, setshades ] = useState([])

  const {color} = props

  useEffect(() => {
    if(isColor(color)){
      createShades()
    }
  }, [color])

  const createShades = () => {
    const shades = new Values(color).shades(1)
   // const shades = shadesColor.shades(1)
    setshades(shades)
  }

  const onColorCopy = () => {
    soundRef.current.play();
  };

  return (
        <>
          <div className="Shades">
            <audio ref={soundRef} src={require("../assets/sound.mp3")} />
            {
              shades.map((shade) => <ShadeColor shade={shade} onColorCopy={onColorCopy} /> )
            }
          </div>
        </>
    )
}
