document.addEventListener("DOMContentLoaded", function() {
    var albuns = [
        {
            nome: "Days Before Rodeo",
            imagem: "./img/dybfrodeo.jpg",  
            descricao: "Days Before Rodeo é a segunda mixtape do rapper americano Travis Scott. A mixtape foi lançada gratuitamente em 18 de agosto de 2014.",
            urlSpotify: "https://open.spotify.com/intl-pt/album/54Y471E7GNBSOXjZtqONId" 
        },
        {
            nome: "Rodeo",
            imagem: "./img/rodeo.jpeg",  
            descricao: "Rodeo é o primeiro álbum de estúdio do rapper e produtor musical americano Travis Scott. O álbum foi lançado em 4 de setembro de 2015.",
            urlSpotify: "https://open.spotify.com/intl-pt/album/4PWBTB6NYSKQwfo79I3prg" 
        },
        {
            nome: "Birds in the Trap Sing McKnight",
            imagem: "./img/birds.jpg", 
            descricao: "Birds in the Trap Sing McKnight é o segundo álbum de estúdio do rapper americano Travis Scott. Foi lançado em 2 de setembro de 2016.",
            urlSpotify: "https://open.spotify.com/intl-pt/album/42WVQWuf1teDysXiOupIZt" 
        },
        {
            nome: "Astroworld",
            imagem: "./img/astroworld.jpeg",  
            descricao: "Astroworld é o terceiro álbum de estúdio do rapper norte-americano Travis Scott. Seu lançamento ocorreu em 3 de agosto de 2018.",
            urlSpotify: "https://open.spotify.com/intl-pt/album/41GuZcammIkupMPKH2OJ6I" 
        },
        {
            nome: "Utopia",
            imagem: "./img/utopia.jpeg",  
            descricao: "Utopia é o quarto álbum de estúdio do rapper norte-americano Travis Scott. Seu lançamento ocorreu em 28 de julho de 2023.",
            urlSpotify: "https://open.spotify.com/intl-pt/album/18NOKLkZETa4sWwLMIm0UZ" 
        },
        
    ];
    
    var lista = document.getElementById("lista-discografia");

    albuns.forEach(function(album) {
        var item = document.createElement("li");
        item.classList.add("album");

        var linkAlbum = document.createElement("a");
        linkAlbum.href = album.urlSpotify;
        linkAlbum.target = "_blank"; 
       
        var imagemAlbum = document.createElement("img");
        imagemAlbum.src = album.imagem;
        imagemAlbum.alt = album.nome;
        imagemAlbum.classList.add("foto-album");

        
        linkAlbum.appendChild(imagemAlbum);

       
        var descricaoAlbum = document.createElement("p");
        descricaoAlbum.textContent = album.descricao;

        
        var nomeAlbum = document.createElement("h3");
        nomeAlbum.textContent = album.nome;

        
        item.appendChild(linkAlbum);
        item.appendChild(nomeAlbum);
        item.appendChild(descricaoAlbum);
        
        lista.appendChild(item);
    });
});
