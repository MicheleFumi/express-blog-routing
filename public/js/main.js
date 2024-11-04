//PUBLIC JS
let listEl= document.querySelector('ul')

axios.get("http://127.0.0.1:3000/post")
.then(res=>{
    const posts = res.data.data
    //console.log(posts);
    listElement= ''
    posts.forEach(post => {
        let {title, content, img, tags} = post
        const markup=`
            <li class="pb-2 text-center"><h2>${title}</h2></li>
            <li class="pb-2 text-center">${content}</li>
            <li class="pb-2 text-center"><img src="${img}" alt=""></li>
            <li class="pb-2 text-center">${tags}</li>
            
            `
        listElement+=markup
    });
    listEl.innerHTML= listElement
})