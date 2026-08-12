function album2() {

    let albuns_res2musicas = document.getElementById('albuns_res2musicas')

    if (albuns_res2musicas.innerHTML === '') {

        albuns_res2musicas.innerHTML = `
        
        <section class="section_album1">

            <div class="section_album1Part2">

                <div class="divAlbun1_prin">

                   <img class="imgLogo"
                   src="/PAGINAS DOS ARTISTAS (GRUPOS E BANDAS)/KATSEYE/IMAGENS/capa beautiful chaos.png"
                   alt="capa album beau">

                   <p>BEAUTIFUL CHAOS</p>

                    <a href="https://youtube.com/playlist?list=PLfFT7BLn-PWY&si=yyFspRThr_XSmntj"><img
                    src="/IMAGENS PRINCIPAIS/logo youtube.png" alt="logo youtube"></a>

                    <a href="https://open.spotify.com/album/4llrXTk6u4QYI1j7KHIsCx?si=Ln2EcSrUTcaWvdgZY_YNYg"><img
                    src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt="logo spotify"></a>

                </div>

                    <div class="div_musica1">

                        <div class="div_primeira">

                            <h3 class="h3_musica1Albun2">Gnarly</h3>

                            <div class="divPrimeira_aImg">

                                <div>
    
                                   <a href="https://youtu.be/R2-yomhYAj4?si=Ujs63ZyDlDnRdTMW"><img class="youtube"
                                   src="/IMAGENS PRINCIPAIS/logo youtube.png" alt="logo youtube"></a>

                                </div>

                                <div>
    
                                   <a href="https://open.spotify.com/intl-pt/track/1j15Ar0qGDzIR0v3CQv3JL?si=19e95fa92712439e"><img
                                   src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt="Logo spotify"></a>
                               </div>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album2mus1_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album2mus1_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica2">

                        <div class="div_primeira">

                            <h3 class="h3_musica2Albun2">Gabriela</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/CjnB56tSCQI?si=JP4ICpZxY_qfvyR4"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/1xOqGUkyxGQRdCvGpvWKmL?si=6e756bc4a11a414f"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album2mus2_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album2mus2_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica3">

                        <div class="div_primeira">

                            <h3 class="h3_musica3Albun2">Gameboy</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/-bC4iak3kxg?si=omVkNCOyfDk0QIPq"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/0LqbLHWFiy0qTfpk1Q1Ggc?si=cee3a6c903754c97"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album2mus3_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album2mus3_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica4">

                        <div class="div_primeira">

                            <h3 class="h3_musica4Albun2">Mean Girls</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/MGcPpYhuq-8?si=OyTkshgpw7biarY0"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/5AspWMn9KWy9VxeIhZnRcu?si=e0c636f9b4a44505"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album2mus4_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album2mus4_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica5">

                        <div class="div_primeira">

                            <h3 class="h3_musica5Albun2">M.I.A</h3>

                            <div class="divPrimeira_aImg">

                                <a
                                    href="https://youtu.be/4H7ZJQPPThY?si=AnVH12UeZMRMbtrO"><img
                                        class="youtube" src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a href="https://open.spotify.com/intl-pt/track/4vyQ2NdodXhtMGsaaMBqSt?si=b2b3f97b67d14776"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>


                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album2mus5_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album2mus5_sig()" value="Significado">

                        </div>

                    </div>
        
            </div>
        
        </section>

        `

    } else {

        albuns_res2musicas.innerHTML = ''

    }

}