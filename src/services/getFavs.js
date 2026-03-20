const ENDPOINT = "http://localhost:5053";

export default function getFavs({ jwt}) {
    return fetch(`${ENDPOINT}/favs?token=${jwt}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
        
    }).then(res =>{
        if (!res.ok) throw new Error('Response is not ok');
        return res.json()
    }).then(res =>{
        const {favs} = res;
        return favs;
    })
}