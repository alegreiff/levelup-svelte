import type { PageLoad } from "./$types"

//loading function

export const load:PageLoad  = async ({fetch, parent}) => {
    const parent_data = await parent();
    console.log("PARENT DATA", parent_data)
    const res = await fetch('https://fuga.alegreiff.com/wp-json/pcentro/v1/emprende')
    
    const data = await res.json()
    console.log(data )
    return {
        hello: 'MUNDO',
        emprende: data.emprendimientos,
    
    }
}

/* export async function  load: PageLoad ({fetch}) {
  const res = await fetch('https://fuga.alegreiff.com/wp-json/wp/v2/emprendimientos') 
  const data = await res.json()
  console.log(data )

    return {
        hello: 'MUNDO',
        data
    }
} */

//https://fuga.alegreiff.com/wp-json/wp/v2/emprendimientos