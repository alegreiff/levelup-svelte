
import type { PageLoad } from "./$types"

//loading function

export const load:PageLoad  = async ({fetch, params, parent, setHeaders}) => {
   

   const parent_data = await parent();
    console.log("HIJO PARENT DATA", parent_data)
   const res = await fetch(`https://syntax.fm/api/shows/${params.num}`)   
   const data = await res.json();

   setHeaders({
      'Cache-Control': 'max-age=3600'
   })
   return {
      episode: data
   }
}

