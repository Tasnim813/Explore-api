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
    const postContainer=document.getElementById("post-container")
    postContainer.innerHTML=' ';
    posts.forEach((post)=>{
        const postCard=document.createElement('div')
        postCard.innerHTML=`
         <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>

    </div>`;
    postContainer.append(postCard)
    })

}
loadPost()
