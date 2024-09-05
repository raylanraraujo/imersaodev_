let dados = [
    {
        imagem : "imagens/somebody.jpg",
        titulo : "Somebody that I used to know",
        artista : "Gotye feat. Kimbra",
        album : "Making Mirrors",
        lancamento: 2011,
        genero : "Indie pop, electropop",
        letra : "Now and then I think of when we were together <br>Like when you said you felt so happy you could die<br>Told myself that you were right for me<br>But felt so lonely in your company<br>But that was love, and it's an ache I still remember...",
        link : "https://www.google.com/search?kgmid=/g/11bx5tt60n&hl=en-BR&q=Somebody+That+I+Used+to+Know&shndl=17&shem=vslcea&source=sh/x/kp/osrp/m5/1&kgs=57d318184fc73190#wptab=si:ACC90nxRWvuwqTR4TiacZ7sCfkHhcGgWdDOv2v2HxpHAAuIhwd0hqVQcoOD2_2OWmYVP1pj2-yE6xQhGXXIMLjLbL8c-HyykFhyTeCvIEKVa7WX0eUJP6C65pzvgdXRRL8tknof-cnCgdvn8qyRgD_xBXHls1loVR90mfFvy-HaCfc-jOeEqgKRWe545xTFWAWPRLINMiyrx"
     },
    
    {
        imagem : "imagens/stolen.jpg",
        titulo : "Stolen Dance",
        artista : "Milky Chance",
        album : "Sadnecessary",
        lançamento: "4 de abril de 2013",
        genero : "Indie folk, acoustic pop",
        letra : "I want you by my side <br>So that I never feel alone again <br>They've always been so kind <br>But now they've brought you away from me <br>I hope they didn't get your mind...",
        link : "https://www.google.com/search?q=stolen+dance&sca_esv=8488350824ac1eef&sca_upv=1&hl=en-BR&sxsrf=ADLYWIJopOE4icq8TpHQDJtmiYAnysx5Hw%3A1725457158879&ei=BmPYZrukNb_01sQPrcXfmQI&ved=0ahUKEwi7v57otKmIAxU_upUCHa3iNyMQ4dUDCBA&uact=5&oq=stolen+dance&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHN0b2xlbiBkYW5jZTIEECMYJzIKECMYgAQYJxiKBTIEECMYJzILEAAYgAQYkQIYigUyCBAuGIAEGMsBMggQABiABBjLATIKEAAYgAQYQxiKBTIIEAAYgAQYywEyCBAuGIAEGMsBMggQABiABBjLAUjMD1AAWIEKcAB4AZABAJgB0wGgAdsRqgEFMC45LjO4AQPIAQD4AQGYAgygAvwRwgIKEC4YgAQYQxiKBcICBRAAGIAEwgIFEC4YgATCAgsQLhiABBjRAxjHAcICCxAuGIAEGJECGIoFmAMAkgcFMC44LjSgB-qoAQ&sclient=gws-wiz-serp"
    },
    
    {
        imagem : "imagens/september.jpg",
        titulo : "September",
        artista : "Earth, Wind & Fire",
        album : "The Best of Earth, Wind & Fire, Vol. 1",
        lancamento: 1978,
        genero : "Disco, funk, soul",
        letra : "Do you remember <br>The 21st night of September? <br>Love was changin' the minds of pretenders <br>While chasin' the clouds away...",
        link : "https://www.google.com/search?sca_esv=8488350824ac1eef&sca_upv=1&sxsrf=ADLYWIJUyrzWGm9uGjJMFKVIuRPISpgjEg:1725457090345&q=september+earth&source=lnms&fbs=AEQNm0B8dVdIWR07uWWlg1TdKnNtA1cwMugrQsIKmAo5AEZHWRFlUeGLxYlhagMfUatSvHu3MSamP9Qd2SfjyZyVIdPFrZFmdorP0BQX-5QUvERZ7CgntLysKxPYR85LNkkQ-OB7Zg8AsUdmZJWpFT88m1Lo784Zm00NSTQILQYjgNKJR7lvdNZLTyExV5NTLFzQKs6IJNIBKQitFW8NHGxM968Xwy7Lzg&sa=X&ved=2ahUKEwiHwsfHtKmIAxU7rZUCHQ4rAaEQ0pQJegQIEhAB&biw=1110&bih=910&dpr=1"
    },

    {
        imagem : "imagens/feel.jpg",
        titulo : "Feel Good Inc.",
        artista : "Gorillaz (feat. De La Soul)",
        album : "Demon Days",
        lancamento: 2005,
        genero : "Alternativo, hip hop, eletrônica",
        letra : "Feel good <br>Sha, sha-ba-da, sha-ba-da-ca, feel good (x8) <br> <br>City's breaking down on a camel's back <br>They just have to go, 'cause they don't know wack <br>So while you fill the streets, it's appealing to see <br>You won't get out the county, 'cause you're bad and free...",
        link : "https://www.google.com/search?q=gorillaz+feel+good+inc+&sca_esv=8488350824ac1eef&sca_upv=1&biw=1459&bih=910&sxsrf=ADLYWIL-hBtrLyNse52uULN13HmKh24bLQ%3A1725479525834&ei=ZbrYZtrYMojJ5OUPvfPk2A0&ved=0ahUKEwian9GRiKqIAxWIJLkGHb05GdsQ4dUDCBA&uact=5&oq=gorillaz+feel+good+inc+&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2dvcmlsbGF6IGZlZWwgZ29vZCBpbmMgMgoQIxiABBgnGIoFMggQABiABBjLATIIEC4YgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBSMYlUOUjWOUjcAF4AZABAJgBtAGgAeQCqgEDMC4yuAEDyAEA-AEBmAIDoALxAsICBRAAGIAEwgIGEAAYFhgemAMAkgcDMS4yoAfjEg&sclient=gws-wiz-serp"
    },

      {
        imagem : "imagens/another.png",
          titulo: "Another Brick in the Wall",
        artistas: "Pink Floyd",
        album: "The Wall",
        lancamento: 1979,
        genero : "Rock Progressivo",
        letra : "We don't need no education <br>We don't need no thought control <br>No dark sarcasm in the classroom <br>Teacher, leave them kids alone <br>Hey! Teacher! Leave them kids alone! ...",
        link : "https://www.google.com/search?q=Another+Brick+in+the+Wall&sca_esv=470031d26dfc1cdc&sca_upv=1&sxsrf=ADLYWIIkvYIzC04sJ4hPeq_BB7V_ZE0CmQ%3A1725532431457&ei=D4nZZrjIG4qp1sQP58XCsAs&ved=0ahUKEwj4i4CdzauIAxWKlJUCHeeiELYQ4dUDCBA&uact=5&oq=Another+Brick+in+the+Wall&gs_lp=Egxnd3Mtd2l6LXNlcnAiGUFub3RoZXIgQnJpY2sgaW4gdGhlIFdhbGwyCBAuGIAEGMsBMggQABiABBjLATIKEAAYgAQYQxiKBTIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIKEAAYgAQYQxiKBTIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIpEC4YgAQYywEYlwUY3AQY3gQY4AQY9AMY8QMY9QMY9gMY9wMY-APYAQNImRFQrAhYrAhwA3gBkAEAmAHbAaAB2wGqAQMyLTG4AQPIAQD4AQL4AQGYAgSgAv4BwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQLCAhYQLhiABBiwAxhDGNQCGMgDGIoF2AECwgIpEC4YgAQYywEYlwUY3AQY3gQY4AQY9AMY8QMY9QMY9gMY9wMY-APYAQOYAwCIBgGQBhO6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBSSBwUzLjAuMaAHjRQ&sclient=gws-wiz-serp"
      },

      {
        imagem : "imagens/bohemian.png",
          titulo: "Bohemian Rhapsody",
        artistas: "Queen",
        album: "A Night at the Opera",
        lancamento: 1975,
        genero : "Rock",
        letra : "Is this the real life? Is this just fantasy? <br>Caught in a landslide, no escape from reality <br>Open your eyes, look up to the skies and see <br>I'm just a poor boy, I need no sympathy <br>Because I'm easy come, easy go <br>Little high, little low <br>Any way the wind blows doesn't really matter to me, to me...",
        link : "https://www.google.com/search?q=bohemian+rhapsody&oq=Bohemian+Rhapsody&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyCggBEC4Y1AIYgAQyCggCEC4Y1AIYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgxMDE4ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8"
      },

      {
        imagem : "imagens/taj.jpg",
          titulo: "Taj Mahal",
        artista: "Jorge Ben Jor",
        album: "Ben",
        lancamento: 1972,
        genero: "MPB (Música Popular Brasileira)",
        letra : "Taj Mahal, Taj Mahal x2<br>Tê Tê Tê, Têtêretê x3<br> <br>Foi uma linda história <br> De amor...",                           
        link: "https://www.google.com/search?q=jorge+ben+jor+taj+mahal&sca_esv=470031d26dfc1cdc&sca_upv=1&sxsrf=ADLYWILv6QotxTSDXZyTpYngWpfl6dsCUA%3A1725533884182&ei=vI7ZZpHiCs3J1sQP6ZzEwAQ&ved=0ahUKEwiRsNvR0quIAxXNpJUCHWkOEUgQ4dUDCBA&uact=5&oq=jorge+ben+jor+taj+mahal&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2pvcmdlIGJlbiBqb3IgdGFqIG1haGFsMgsQLhiABBjUAhjLATIKEAAYgAQYFBiHAjIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATILEC4YgAQY1AIYywEyCxAuGIAEGNQCGMsBMgUQABiABDIGEAAYFhgeMgYQABgWGB4yJhAuGIAEGNQCGMsBGJcFGNwEGN4EGOAEGPQDGPEDGPUDGPYD2AEBSLQjUABYgB5wAHgBkAEAmAHfAaABxiGqAQYwLjE5LjS4AQPIAQD4AQGYAhegArsiwgIKECMYgAQYJxiKBcICBBAjGCfCAgsQLhiABBiRAhiKBcICBRAuGIAEwgIIEC4YgAQY1ALCAgsQABiABBiRAhiKBcICERAuGIAEGJECGMcBGIoFGK8BwgImEC4YgAQYlwUY3AQY3gQY4AQY9AMY8QMY9QMY9gMY9wMY-APYAQHCAggQLhiABBjLAcICKRAuGIAEGMsBGJcFGNwEGN4EGOAEGPQDGPEDGPUDGPYDGPcDGPgD2AEBwgIREC4YgAQYxwEYywEYjgUYrwHCAiYQLhiABBjUAhjLARiXBRjcBBjeBBjgBBj0AxjxAxj1Axj2A9gBAcICChAAGIAEGAoYywGYAwC6BgYIARABGBSSBwYwLjE4LjWgB4WHBA&sclient=gws-wiz-serp"
      },    

      {
        imagem : "imagens/voce.jpg",
          titulo: "Você Não Entende Nada",
        artista: "Celso Fonseca",
        album: "Feriado",
        lancamento: 2007,
        genero: "MPB, Pop, Jazz",
        letra : "Quando eu chego em casa nada me consola <br>Você está sempre aflita <br>Com lágrimas nos olhos de cortar cebola <br>Você é tão bonita...",
        link : "https://www.google.com/search?q=voce+nao+entende+nada+celso+fonseca+data+de+lancamento&sca_esv=470031d26dfc1cdc&sca_upv=1&biw=1459&bih=910&sxsrf=ADLYWILtmsQKKREQfXEWCbc60P4EaIT2jA%3A1725534916158&ei=xJLZZvKnCZOq1sQPssGukAU&ved=2ahUKEwiI4_bc1quIAxWTrpUCHbpnFh0Q9YYDegQIJxAC&uact=5&si=ACC90nxka2Fvqm8pF4Tj4sQ1t1xOSu06t8HGiXAaQj290yXfNndPfWsjAgxMZCQK0SPl84yDY0NtpKbuawyWbma_LavOWiwqk9472elRPYnCObNDCsKaWn8Cyjd8IIn5NzN4jSvngkToT8yeMtHs33B_U2Krfm0S5A%3D%3D&ictx=1"
      },

      {
        imagem : "imagens/california.jpg",
          titulo: "California Dreamin'",
        artista: "Bobby Womack",
        album: "Fly Me To The Moon", 
        lancamento: 1969, 
        genero: "Soul, Pop",
        letra : "All the leaves are brown <br>And the sky is grey <br>I went for a walk <br>On a Winter's day <br>I'd be safe and warm...",
        link: "https://www.google.com/search?sca_esv=470031d26dfc1cdc&sca_upv=1&sxsrf=ADLYWIJt0XsI8Pm1UtE__Hxmub6kqQUgng:1725535429880&q=california+dreamin+bobby&sa=X&ved=2ahUKEwjqquGy2KuIAxXUHrkGHQHJKtAQ7xYoAHoECA8QAQ&biw=1459&bih=910&dpr=1"
    },

    {
        imagem : "imagens/vision.png",
        titulo: "Vision",
        artista: "Mo'Kalamity",
        album: "Warriors of light", 
        lancamento: 2006, 
        genero: "Reggae",
        letra : "People free <br>The glances of the others <br>Each one is in his own stress <br>Everyone trace his own path <br>Without raising the eyes towards people... <br>",
        link : "https://www.google.com/search?q=vision+mo%27kalamity&sca_esv=470031d26dfc1cdc&sca_upv=1&biw=1284&bih=910&sxsrf=ADLYWIKaLFGKon71-RbQFVHBS3CYCz7PLw%3A1725535485114&ei=_ZTZZvHVBvL25OUP5PaGmAs&ved=0ahUKEwixyIzN2KuIAxVyO7kGHWS7AbMQ4dUDCBA&uact=5&oq=vision+mo%27kalamity&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnZpc2lvbiBtbydrYWxhbWl0eTIIEC4YgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMiMQLhiABBjLARiXBRjcBBjeBBjgBBj0AxjxAxj1Axj2A9gBAUiyLVC1CFiSK3ADeACQAQGYAbYCoAHAG6oBCDAuMTUuMi4xuAEDyAEA-AEBmAIRoAK8GsICBBAjGCfCAgsQABiABBiRAhiKBcICCxAuGIAEGJECGIoFwgIFEC4YgATCAgsQLhiABBjRAxjHAcICDBAjGIAEGBMYJxiKBcICChAjGIAEGCcYigXCAgoQABiABBhDGIoFwgIHEAAYgAQYCsICGhAuGIAEGJECGIoFGJcFGNwEGN4EGOAE2AEBwgIREC4YgAQYxwEYywEYjgUYrwHCAhAQLhiABBjRAxhDGMcBGIoFwgIOEC4YgAQYxwEYywEYrwHCAgoQABiABBgKGMsBwgIOEC4YgAQY0QMYxwEYywHCAhYQLhiABBjHARiYBRgKGMsBGJ0FGK8BwgIdEC4YgAQYxwEYywEYrwEYlwUY3AQY3gQY4ATYAQHCAiMQLhiABBjLARiXBRjcBBjeBBjgBBj0AxjxAxj1Axj2A9gBAZgDAIgGAboGBggBEAEYFJIHCDAuMTQuMi4xoAeSjQI&sclient=gws-wiz-serp"
    },

]; /*criando uma variável DADOS no estilo de lista. Assim consegue guardar mais de uma variável ao mesmoo tempo */ 

