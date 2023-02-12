import React from "react";
import supabase from "./supabaseClient";
import { useEffect, useState } from "react";
// import SmoothieCard from './SmoothieCard'
import Create from "./Create";
import Image from "./Image";
import Home from './Home'

function Navbar() {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select();
      if (error) {
        setFetchError("Could not");
        setSmoothies(null);
        console.log(error);
      }
      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };
    fetchSmoothies();
  }, []);

  return (
    <div>
      <Home/>
      <Image/>
      <Create/>
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div>
          
          {smoothies.map((smoothie) => (
            <div>
          {/* <SmoothieCard key={smoothie.id} smoothie={smoothie}/> */}
          <p>{smoothie.title}</p>
</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
