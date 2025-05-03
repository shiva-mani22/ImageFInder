
let api_key="Q9cYvF0VzoQykvUvvj49CwmK7Ow2BeZgEALYG6FYE_M"
let search_icon=document.getElementById("search_icon")
search_icon.addEventListener("click",()=>{
    let search_term=document.getElementById("search_term").value
    let fetchData=async()=>{
        let info =await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search_term}&client_id=${api_key}`) 
        let res=await info.json()
        let image_container=document.getElementById("image_container")
         image_container.innerHTML=''
         for(let i=0;i<res.results.length;i++){
            image_container.innerHTML+=`<img src=${res.results[i].urls.regular} class="images">`
         }
    }
    fetchData()
})