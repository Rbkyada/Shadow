import React,{ useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Shadow() {

    
    const soundRef = useRef();

    const [ Hori, setHori ] = useState(10)
    const [ Veri, setVeri ] = useState(10)
    const [ Blur, setBlur ] = useState(10)
    const [ Color, setColor ] = useState("#dd4040")
    const [ check, setcheck ] = useState(false)
    const [ back, setback ] = useState("darkcyan")

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
        onColorCopy()
    }

    
  const onColorCopy = () => {
    soundRef.current.play();
  };


    return (
        <>
            <div className="ShadowBox pt-4">
             <audio ref={soundRef} src={require("../assets/sound.mp3")} />
                <div className="container">
                <Link className="btn btn-outline-danger" to="/">Go Back</Link> 
                
                  <div className="row mt-5">
                    <div className="col-lg-6 col-sm-12">
                        <div className="row w-75 shadow border py-4 p-2 mt-4" style={{lineHeight:2}}>
                            <label>Horizontal lenght</label>
                            <input type="range" class="custom-range" id="customRange1"  min="-200" max="200" value={Hori} onChange={ (e) => setHori(e.target.value)} />
                            <label>Vertical lenght</label>
                            <input type="range" min="-200" max="200" value={Veri} onChange={ (e) => setVeri(e.target.value)} />
                            <label>Blur</label>
                            <input type="range" min="-200" max="200" value={Blur} onChange={ (e) => setBlur(e.target.value)} />
                            <label>Shadow Color</label>
                            <input type="color" className="colorInput" value={Color} onChange={ (e) => setColor(e.target.value)}/> 
                            <div className="switch my-2">
                                <label>Outline &nbsp;
                                <input type="checkbox" checked={check} onChange={ (e) => setcheck(!check) } />
                                <span className="lever"></span>
                                  &nbsp; inset
                                </label>
                            </div>
                            <label>Box Color</label>
                            <input type="color" className="colorInput" value={back} onChange={ (e) => setback(e.target.value)}/>
                        </div>
                    </div>
                    
                
                <div className="col-lg-6 col-md-12 mt-5"> 
                <CopyToClipboard text={`box-shadow: ${Hori}px ${Veri}px ${Blur}px ${Color};`} onCopy={() => onCopy()}>
                    <div className="output">
                        <div className="box" 
                            style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px ${Color} ${check ? "inset":"" }`,
                            background:`${back}`
                        }} >
                            {
                                copy ? (
                                    <span className="copied shadeColor">copied!</span>
                                ) : (
                                    <p>box-shadow: {Hori}px {Veri}px {Blur}px {Color}</p>
                                )
                            }
                           
                        </div>
                    </div>
                </CopyToClipboard>
                </div>

                </div>

            </div> 
            </div>
        </>
    )
}
