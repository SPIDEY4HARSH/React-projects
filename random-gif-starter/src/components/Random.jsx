import { useEffect } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
export default function Random() {
  const [loading, gif, fetchData] = useGif("")

  return <div className="w-1/2 bg-green-300 flex flex-col gap-y-5 items-center border-[black] border rounded-[1.5rem] mt-[10px] border-solid px-[10px]">

    <h2 className="mt-[10px]  font-bold uppercase text-2xl underline" >Random gif</h2>
    <div className="rounded-lg" >{
      loading ? (<Spinner />) : (<img src={gif} width="450" />)
    }</div>
    <button className="mb-3  bg-yellow-400 rounded-lg uppercase font-bold w-[90%]"  onClick={fetchData} >Genrate</button>

  </div>;
}
