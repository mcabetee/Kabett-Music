function album3() {

        let albuns_res3musicas = document.getElementById('albuns_res3musicas')

    if (albuns_res3musicas.innerHTML === '') {

        albuns_res3musicas.innerHTML = `
        
        <section class="section_album1">

            <div class="section_album1Part2">

                <div class="divAlbun1_prin">

                   <img class="imgLogo"
                   src="/PAGINAS DOS ARTISTAS (GRUPOS E BANDAS)/KATSEYE/IMAGENS/capa wild.png"
                   alt="capa album SIS">

                   <p>WILD</p>

                    <a href="https://youtube.com/playlist?list=PLV6SbCG4YFKo&si=pY7snYxIqbxUcvmY"><img
                    src="/IMAGENS PRINCIPAIS/logo youtube.png" alt="logo youtube"></a>

                    <a href="https://open.spotify.com/intl-pt/album/2d0AkZUJV30oIOJAeEyzC6?si=02ab92ec29ee48ca"><img
                    src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt="logo spotify"></a>

                </div>

                    <div class="div_musica1">

                        <div class="div_primeira">

                            <h3 class="h3_musica1Albun3">Pinky up</h3>

                            <div class="divPrimeira_aImg">

                                <div>
    
                                   <a href="https://youtu.be/7F1ET2XHQfk?si=s9vOrUaDyNKRlHK-"><img class="youtube"
                                   src="/IMAGENS PRINCIPAIS/logo youtube.png" alt="logo youtube"></a>

                                </div>

                                <div>
    
                                   <a href="https://open.spotify.com/intl-pt/track/4KmkJjHTNlr1jFY56Lyz4E?si=e563a2a8a6d14fd4"><img
                                   src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt="Logo spotify"></a>
                               </div>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album3mus1_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album3mus1_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica2">

                        <div class="div_primeira">

                            <h3 class="h3_musica2Albun3">Animal</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/m7k9UMcHbr0?si=E4u7HgIB54lxA6do"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/3ouNEk0tv5TTi8VWMe1xbX?si=a8e7f690b6804356"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album3mus2_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album3mus2_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica3">

                        <div class="div_primeira">

                            <h3 class="h3_musica3Albun3">Não divulgada</h3>

                            <div class="divPrimeira_aImg">

                                <a href="#"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="#"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album3mus3_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album3mus3_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica4">

                        <div class="div_primeira">

                            <h3 class="h3_musica4Albun3">Não divulgada</h3>

                            <div class="divPrimeira_aImg">

                                <a href="#"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="#"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album3mus4_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album3mus4_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica5">

                        <div class="div_primeira">

                            <h3 class="h3_musica5Albun3">Não divulgada</h3>

                            <div class="divPrimeira_aImg">

                                <a
                                    href="#"><img
                                        class="youtube" src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a href="#"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>


                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album3mus5_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album3mus5_sig()" value="Significado">

                        </div>

                    </div>
        
            </div>
        
        </section>

        `

    } else {

        albuns_res3musicas.innerHTML = ''

    }

}