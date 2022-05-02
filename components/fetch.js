let searchC=async (value)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`);
        let data=await res.json();
        return (data.articles)
    }catch(err){
        console.log(err);
    }
}

let search=async (value)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
        let data=await res.json();
        if(data.articles){
            Cdata(data.articles,container);
            window.location.href="./search.html"
        }
    }catch(err){
        console.log(err);
    }
}

let Cdata=(data,container)=>{
    data.forEach(({description,title,urlToImage})=>{
        let div=document.createElement("div");
        div.setAttribute("class","news")
        let img=document.createElement("img");
        img.src=urlToImage;
        let datadiv=document.createElement("div");
        let h3=document.createElement("h3");
        h3.innerText=title;
        let p=document.createElement("p");
        p.innerText=description;

        let obj={
            url:urlToImage,
            title:title,
            dis:description,
        }

        div.addEventListener("click",()=>{
            localStorage.setItem("news",JSON.stringify(obj));
            window.location.href="./news.html";
        })
        datadiv.append(h3,p);
        div.append(img,datadiv);
        container.append(div);
    })
}

let newsdata=(data,container)=>{
    container.innerHTML=null;
    let img=document.createElement("img");
    img.src=data.url;
    let h3=document.createElement("h3");
    h3.innerText=data.title;
    let p=document.createElement("p");
    p.innerText=data.dis;
    container.append(img,h3,p)

}

export {searchC,Cdata,newsdata,search};