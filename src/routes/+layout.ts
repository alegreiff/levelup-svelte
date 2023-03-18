import type { PageLoad } from "./$types"

//loading function

export const load:PageLoad  = async ({fetch}) => {
        const all_ep_res = await fetch('https://syntax.fm/api/shows') 
        const ep_res = all_ep_res.json();
        const res = await fetch('https://fuga.alegreiff.com/wp-json/pcentro/v1/emprende')
    
        const data = await res.json()
    
    
    return {
        ep_res,
        emprende: data.emprendimientos,
    }
}