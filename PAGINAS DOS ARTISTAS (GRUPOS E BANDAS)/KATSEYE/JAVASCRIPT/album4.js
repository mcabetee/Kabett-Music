function album4() {

    let albuns_res4musicas = document.getElementById('albuns_res4musicas')

    if (albuns_res4musicas.innerHTML === '') {

        albuns_res4musicas.innerHTML = `
        
        <section class="section_album1">

            <div class="section_album1Part2">

                <div class="divAlbun1_prin">

                   <img class="imgLogo"
                   src="/IMAGENS PRINCIPAIS/Capa album singles.png"
                   alt="capa album SIS">

                   <p>Singles</p>

                    <a href="https://youtube.com/playlist?list=PLNv5OZHlbZKA&si=ScwVV6ud7CFtb9Y_"><img
                    src="/IMAGENS PRINCIPAIS/logo youtube.png" alt="logo youtube"></a>

                </div>

                    <div class="div_musica1">

                        <div class="div_primeira">

                            <h3 class="h3_musica1Albun4">Internet Girl</h3>

                            <div class="divPrimeira_aImg">

                                <div>
    
                                   <a href="https://youtu.be/5q9EjSUovc4?si=mXe6tbv6KckPSCWi"><img class="youtube"
                                   src="/IMAGENS PRINCIPAIS/logo youtube.png" alt="logo youtube"></a>

                                </div>

                                <div>
    
                                   <a href="https://open.spotify.com/intl-pt/track/3THVfoVD5kdCxPviVaCPi7?si=1e2d5cc2b8c343be"><img
                                   src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt="Logo spotify"></a>
                               </div>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album4mus1_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album4mus1_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica2">

                        <div class="div_primeira">

                            <h3 class="h3_musica2Albun4">Iconic by mistake</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/27C4pfRsf9g?si=cvwlH0gNFi7qSc89"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/6fl4Gu0lJm5hc8FM5JzCZD?si=6bffba7d289549a4"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album4mus2_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album4mus2_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica3">

                        <div class="div_primeira">

                            <h3 class="h3_musica3Albun4">Monster High Fright Song</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/BxY5l4ZK61I?si=7LpFMSg3ur6wzieK"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/7hEKlcqyoj3oOH0jtJveIS?si=eb0579ba73264a68"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album4mus3_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album4mus3_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica4">

                        <div class="div_primeira">

                            <h3 class="h3_musica4Albun4">Flame</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/SJds7QC4wLM?si=dHUMVQ3vxvatWaSH"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/5tw1Ob0E4iRY8pjvgFk7oU?si=75075b162e314425"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album4mus4_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album4mus4_sig()" value="Significado">

                        </div>

                    </div>
        
        </section>

        `

    } else {

        albuns_res4musicas.innerHTML = ''

    }

}