const loadPost=()=>{
    const uri='https://jsonplaceholder.typicode.com/posts'
    fetch(uri)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        displayPost(data)
    })
}

const displayPost=(posts)=>{
    posts.forEach((post)=>{
        console.log(post)
    })
    
}