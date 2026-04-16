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
    const postContainer=document.getElementById('post-container')
    // console.log(postContainer)
    posts.forEach((post)=>{
        // console.log(post.title)
        const li=document.createElement('li')
        li.innerText=post.title;
        console.log(li)

        postContainer.appendChild(li)
    })
    
}