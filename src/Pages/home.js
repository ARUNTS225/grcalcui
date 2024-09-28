import {Fragment,useEffect,useState} from 'react'


export default function Home() {
  const [rate, setRate] = useState([]);
  const [value, setValue] = useState('');
   useEffect(()=> {
   fetch('https://goldratecalculator.onrender.com/api/v1/rateapi')
    .then(res => res.json())
    .then( res => setRate(res.change))
    },[])
  
  return <Fragment>
<div class="container-fluid" >
<h5 style={{fontFamily:"cursive",color:"gold",}}><b>GOLD RATE CALCULATOR</b></h5>
{/* <input class="form-control form-control-lg form-control-sm m-1 p-1  border-danger-subtle" value={value} type="text"/> */}
<form>
  <input type='text' value={value} style={{padding:"10px",boxShadow:"1px 1px 1px grey ", border:"2px solid grey",borderRadius:"4px"}} />
</form>
<div class="container-fluid text-center">
<div class="row align-items-start">
<div class="col"><input type="button" value="AC" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue('')}/>
<input type="button" value="0" class="btn btn-dark btn-lg m-1 border-danger-subtle"onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="." class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="/" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
</div></div></div>
<div class="container text-center">
<div class="row align-items-start">
<div class="col"><input type="button" value="7" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="8" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="9" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="*" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
</div></div></div>
<div class="container text-center">
<div class="row align-items-start"><div class="col">
<input type="button" value="4" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="5" class="btn btn-dark btn-lg btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="6" class="btn btn-dark btn-lg btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="-" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/></div></div></div>
<div class="container text-center">
<div class="row align-items-start"><div class="col">
<input type="button" value="1" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="2" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="3" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
<input type="button" value="+" class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={e => setValue(value + e.target.value)}/>
</div></div></div>
<div class="container text-center">
<div class="row align-items-start">
<div class="col">
 <input type="button" value="=" class="btn btn-dark btn-lgm-1 border-danger-subtle" style={{width:"20%"}} onClick={e => setValue(eval(value))}/>
</div></div></div></div><br/>
<div class="container text-center">
          <div class="row align-items-start">
           <div class="col12"> <div class="mb-3" >
            <span class="border border-danger-subtle rounded-2 fw-normal bg-dark-subtle text-dark h5"
            style={{fontFamily:"cursive",color:"gold",}}>
              Rate of 18Carat :{rate.map(data =>data.price18*value)} </span>
            </div></div>
            <div class="col12"> <div class="mb-3" >
            <span class="border border-danger-subtle rounded-2 fw-normal bg-dark-subtle text-dark h5"
            style={{fontFamily:"cursive",color:"gold",}}>
              Rate of 22Carat :{rate.map(data =>data.price22*value)} </span>
            </div></div>
            <div class="col12"> <div class="mb-3" >
            <span class="border border-danger-subtle rounded-2 fw-normal bg-dark-subtle text-dark h5"
            style={{fontFamily:"cursive",color:"gold",}}>
              Rate of 24Carat :{rate.map(data =>data.price24*value)} </span>
            </div></div></div></div>
           
</Fragment>
}