/* ARRAY DI OGGETTI */
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const likedPosts = [];

/* Milestone 1:
Prendendo come riferimento il layout di esempio presente nell'html, 
stampiamo i post del nostro feed. */

/* SELEZIONA IL CONTAINER DA HTML */
const container = document.getElementById('container');

/* CICLO PER MOSTRARE A SCHERMO L'ARRAY DI OGGETTI */
for (let i=0; i<posts.length; i++){

    /* CREA ELEMENTO POST */
    const post = document.createElement('div');

    /* AGGIUNGI A "POST" LA CLASSE */
    post.classList.add('post');

    /* AGGIUNGI L'HTML A "POST" */
    post.innerHTML= `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${posts[i].media}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${posts[i].author.name}</div>
                <div class="post-meta__time">${posts[i].created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${posts[i].content}</div>
    <div class="post__image">
        <img src="${posts[i].author.image}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${posts[i].id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
        </div>
    </div> 
    `;

    /* APPENDI "POST" AL CONTAINER */
    container.append(post);

};

miPiace();

console.log(likedPosts);
/* Milestone 2 -
 Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo
il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo 
messo il like. */


function miPiace(){
        
    /* SELEZIONA IL TASTO "MI PIACE" */
    const btnLike = document.querySelector('.js-like-button');

    posts.forEach(function(post) {

        /* AGGIUNGI EVENTO SUL BUTTON "MI PIACE" */
        btnLike.addEventListener('click', function() {
            
            /* METTI IL COLORE ROSSO AL TESTO DEL BOTTONE "MI PIACE" CLICCATO */
            this.style.color= 'red';

            /* AGGIUNGI UN LIKE AL CONTEGGIO DEL LIKE E AGGIORNA*/
            post.likes+=1;
            const numeroLike = document.getElementById(`like-counter-${post.id}`);
            numeroLike.innerHTML = post.likes;
            console.log(post.likes); 
            
            /* Salviamo in un secondo array gli id dei post ai quali abbiamo 
               messo il like. */
            if (!likedPosts.includes(post.id)) {
                likedPosts.push(post.id);
                console.log(likedPosts);
            }

        });

    });

};