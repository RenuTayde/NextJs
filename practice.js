import Title from "../components/Title"
import Head from "next/head"
import { useState } from "react"

export default function practice() {
    <Head>
    <Title title="Practice" />
    </Head>
    const [inputList, setInputList] = useState("");
    const [item, setItem] = useState ([]);
    const itemEvent =(e)=>{
        //console.log(e);
        setInputList(e.target.value);
    }
    const handleClick = () =>{
        setItem((olditems)=>{
            return [...olditems, inputList]
        });
        setInputList("");

    }
    const handleDelete = (id) => {
        console.log("delete");

        setItem((olditems)=>{
            return olditems.filter((elements, i) =>{
                return i !== id;

            });
        });
     
    };
    return (
      <>    
        <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto shadow-lg p-3">
          <h2 className="text-center"> To Do List </h2>
            <div className="container-fluid">
            
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder="Write Here" value ={ inputList} onChange={itemEvent} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5 font-weight-bold" onClick={handleClick}>Add</button>
                </div>
              </div>
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                  <div>
                  {
                    item.map((itemvalue, i)=>{
                  
                        return (
                            <div className="row" key={i}>
                                <li 
                                key={i}
                                id={i} 
                                className="list-unstyled col-sm-4 my-2" >{itemvalue}</li>
                                <button className="btn btn-danger my-2 col-sm-2 offset-1"
                                onClick={handleDelete}>X</button>
                            </div>
                        )
                    })
                  }
                  
                  </div>
                </ul>
                
              </div>
            </div>

          </div>
        </div>
        </div>
      </>
    
    )
  }