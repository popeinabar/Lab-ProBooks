
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Api() {

    const [data,setdata] = useState([]);


    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
        .then(res=>setdata(res.data.books))
    },[])

   
    console.log(data)


  return (
    <div>
        <h1>Api</h1>
        {
            data.map((alt)=>{
                return(
                    <div>

                        <div>
                            <p>{alt.title}</p>
                        </div>
                        <div>
                            <img src={alt.imageLinks.smallThumbnail} alt='ghfgh'  />
                        </div>
                        <div>
                            <p>
                            {
                                alt.authors
                            }
                            </p>
                        </div>

                        <div>
                            <p>{alt.description}</p>
                        </div>
                        
                    </div>
                )
            })
        }
    </div>
  )
}

export default Api