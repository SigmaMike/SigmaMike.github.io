<title>Photo App</title> 
<h1>Photo App</h1>

<script>
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"

let images = [image,photo,picture];
</script>


<div class="photos">
    
    {#each images as img}
        <div class="image-wrapper">
            <img src={img} alt="flexbox
            rules">
        </div>
    {/each} 
        
</div>

<style>
    .photos{
    display:flex;
    /*Sätter att bredden på vår box enbart får vara 90% av webbfönstrets
    bredd*/
    max-width: 90vw;
    flex-wrap:wrap;

    align-items: center;
justify-content: space-around;


    }
    .photos img {
/*Den maximala bredden på en bild, som ligger inom vår flex
container,photos, är 100% av containers storlek (dess förälder)*/
max-width: 100%;
}
.image-wrapper img {
max-width: 300px;
padding: 10px;
flex:1
}
    </style>

