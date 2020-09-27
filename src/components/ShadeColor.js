import React,{useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function ShadeColor(props) {
    
        const {shade, onColorCopy} = props

        const [ copy, setCopy ] = useState(false)

        useEffect(() => {
            let interval;
            interval = setInterval(() => {
                setCopy(false);           
              }, 1500);
              return () => {
                  clearInterval(interval)
              }
        }, [copy])

        const onCopy = () => {
            setCopy(true);
            onColorCopy();
        }

    return (
        <>
         <CopyToClipboard text={shade.hexString()} onCopy={() => onCopy()} >
            <div className="text-light d-flex justify-content-center align-items-center " style={{backgroundColor: shade.hexString()}}>
                {
                    copy ? (
                        <span className="copied shadeColor">copied!</span>
                    ) :  (
                        <span className="shadeColor">{shade.hexString()}</span>
                    )
                }
            </div>
          </CopyToClipboard>
        </>
    )
}
