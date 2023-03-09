const website = document.getElementById('list')
const knopka = document.getElementById('btn')
const proferka = document.getElementById('input')


knopka.addEventListener('click', () =>{
    const getData = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const object = await data.json()
        const filter = object.filter((el) => el.userId == proferka.value)
    const objects = filter.map((el) =>{
        return `<div class = "web"><p>User id: ${el.userId}</p><p>Id: ${el.id}</p><p>${el.title}</p> <p>${el.body}</p></div>`
       
    })
   
    website.innerHTML = objects.join(" ")
    }
   
     getData()

    
     
})

