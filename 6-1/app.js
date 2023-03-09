const element  = document.getElementById('list')

   const getData = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await data.json()
    const dataFilter = json.filter((el)=> el.userId === 1)
    const jsons = dataFilter.map((el) =>{
        return `<div class = "web"><p>User id: ${el.userId}</p><p>Id: ${el.id}</p><p>${el.title}</p> <p>${el.body}</p></div>`
       
    })
    console.log(jsons);
    element.innerHTML = jsons.join(" ")
   }
   getData()
