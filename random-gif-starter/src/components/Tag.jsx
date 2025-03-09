import { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
export default function Tag() {

  const [tag , settag] = useState("hello");
  const [loading, gif, fetchData] = useGif(tag)

  return <div className="w-1/2 bg-red-950 flex flex-col gap-y-5 items-center border-[black] border rounded-[1.5rem] mt-[10px] border-solid px-[10px]">

    <h2 className="mt-[10px]  font-bold uppercase text-2xl underline" >Random gif</h2>
    <div className="rounded-lg" >{
      loading ? (<Spinner />) : (<img src={gif} width="450" />)
    }</div>
     <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  settag(event.target.value)}
        value={tag}
      />
    <button className="mb-3  bg-yellow-400 rounded-lg uppercase font-bold w-[90%]"  onClick={fetchData} >Genrate</button>

  </div>;
}
