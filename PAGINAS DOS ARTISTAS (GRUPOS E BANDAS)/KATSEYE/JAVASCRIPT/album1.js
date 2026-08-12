function album1() {

    let albuns_res1musicas = document.getElementById('albuns_res1musicas')

    if (albuns_res1musicas.innerHTML === '') {

        albuns_res1musicas.innerHTML = `
        
        <section class="section_album1">

            <div class="section_album1Part2">

                <div class="divAlbun1_prin">

                   <img class="imgLogo"
                   src="/PAGINAS DOS ARTISTAS (GRUPOS E BANDAS)/KATSEYE/IMAGENS/capa album sis.png"
                   alt="capa album SIS">

                   <p>SIS (SOFT IS STRONG)</p>

                    <a href="https://youtube.com/playlist?list=PLE9mu2IFK3-k&si=rupkzKFfmO2b4FUM"><img
                    src="/IMAGENS PRINCIPAIS/logo youtube.png" alt="logo youtube"></a>

                    <a href="https://open.spotify.com/intl-pt/album/48t47MKCsynkPx3rRg7EWr?si=slkI7V3OSCysYqsMDyCz8Q"><img
                    src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt="logo spotify"></a>

                </div>

                    <div class="div_musica1">

                        <div class="div_primeira">

                            <h3 class="h3_musica1Albun1">Debut</h3>

                            <div class="divPrimeira_aImg">

                                <div>
    
                                   <a href="https://youtu.be/bYg6aMDQ_TA?si=l4pl6jN3wfd5LkyD"><img class="youtube"
                                   src="/IMAGENS PRINCIPAIS/logo youtube.png" alt="logo youtube"></a>

                                </div>

                                <div>
    
                                   <a href="https://open.spotify.com/intl-pt/track/1pxKqkKtHS9d1iDa74To03?si=80404a04508c41ed"><img
                                   src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt="Logo spotify"></a>
                               </div>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album1mus1_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album1mus1_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica2">

                        <div class="div_primeira">

                            <h3 class="h3_musica2Albun1">Touch</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/l9CZykYZkOQ?si=CiMsSXt-jB8IQ3aV"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/3NyZXtW72Gb42RaqLt7fh9?si=174e855cfbc54b31"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album1mus2_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album1mus2_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica3">

                        <div class="div_primeira">

                            <h3 class="h3_musica3Albun1">My Way</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/1P8BbTY8gWo?si=AIRkm4mLPcqCIETY"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/3zUxQpCyUrfEjz6Y07yg4b?si=b70c746896f94bcc"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album1mus3_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album1mus3_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica4">

                        <div class="div_primeira">

                            <h3 class="h3_musica4Albun1">I'm Pretty</h3>

                            <div class="divPrimeira_aImg">

                                <a href="https://youtu.be/xQl4jd77bGY?si=W_QyDiql7kZKkDt6"><img class="youtube"
                                        src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a
                                    href="https://open.spotify.com/intl-pt/track/5Kx8X5HLUm14hBwEFP6i6Y?si=ce1814c4be694bf7"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>

                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album1mus4_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album1mus4_sig()" value="Significado">

                        </div>

                    </div>

                    <div class="div_musica5">

                        <div class="div_primeira">

                            <h3 class="h3_musica5Albun1">Tonight I Might</h3>

                            <div class="divPrimeira_aImg">

                                <a
                                    href="https://open.spotify.com/intl-pt/track/2Ih0CPdyK7SwbTUUkpun16?si=a2d66b852daf4a77"><img
                                        class="youtube" src="/IMAGENS PRINCIPAIS/logo youtube.png" alt=""></a>

                                <a href="https://youtu.be/6oqywcXsQik?si=8-AdSR191D_lCI6e"><img
                                        src="/IMAGENS PRINCIPAIS/logo do spotify.png" alt=""></a>

                            </div>


                        </div>

                        <div class="div_segunda">

                            <input type="button" onclick="album1mus5_leTra()" value="Letra e tradução">

                            <input type="button" onclick="album1mus5_sig()" value="Significado">

                        </div>

                    </div>
        
            </div>
        
        </section>

        `

    } else {

        albuns_res1musicas.innerHTML = ''

    }

}

function album1mus1_leTra() {

    let album_res1LeTra = document.getElementById('album_res1LeTra')

    if (album_res1LeTra.innerHTML === '') {

        album_res1LeTra.innerHTML = `
            <section class="sectionRes1">
                <div class="leTr_musica1">
                <div class="div_titulosLeTr">
                    <h3>Letra e tradução:</h3>
                    <h3>Debut</h3>
                </div>
                <div class="div_Letra">
                    <h4>La, la-la, la-la-la, la-la</h4>
                    <h5>La, la-la, la-la-la, la-la</h5>
                    <br>
                    <h4>La, la-la, la-la-la, la-la (I-I)</h4>
                    <h5>La, la-la, la-la-la, la-la</h5>
                    <br>
                    <h4>I don't need no one, two, three, not bourgeoisie, I'll step in</h4>
                    <h5>Eu não preciso de um-dois-três, ou burguesia, vou entrar</h5>
                    <br>
                    <h4>Know just how to make a scene, Just me, myself, my best friends</h4>
                    <h5>Sei exatamente como fazer uma cena, apenas eu, eu mesma, e minhas melhores amigas</h5>
                    <br>
                    <h4>Uh-huh, I like it, it's simple as that</h4>
                    <h5>Uh-huh, eu gosto, é simples assim</h5>
                    <br>
                    <h4>That's right, uh-huh, I like it, i keep comin' back (huh)</h4>
                    <h5>Isso mesmo, uh-huh, eu gosto, eu continuo retornando</h5>
                    <br>
                    <h4>Ay, I don't need nobody, tryna tell me how to run it</h4>
                    <h5>Eu não preciso de ninguém, tentando me dizer como fazer isso</h5>
                    <br>
                    <h4>Found myself some baddies, 'bout to turn it to a hundred</h4>
                    <h5>Encontrei algumas garotas, que vão transformar isso em cem</h5>
                    <br>
                    <h4>Uh-huh, they like it, it's simple as that</h4>
                    <h5>Uh-huh, eles gostam, é simples assim</h5>
                    <br>
                    <h4>That's right, uh-huh, they like it, They keep comin' back</h4>
                    <h5>Isso mesmo, uh-huh, eles gostam, eles continuam retornando</h5>
                    <br>
                    <h4>Oh, we-ee-ee ain't flexin', babe, we do what we do</h4>
                    <h5>Ah, nós não estamos exibindo, querida, fazemos o que fazemos</h5>
                    <br>
                    <h4>Wanna pull up on us? Check in at the gate and come through</h4>
                    <h5>Quer se juntar a nós? Faça o check-in no portão e entre</h5>
                    <br>
                    <h4>We can run it, run it, run it, no, this ain't a debut</h4>
                    <h5>Nós podemos fazer isso, fazer isso, fazer isso, não, isso não é uma estreia</h5>
                    <br>
                    <h4>Love me once, I know you'll love me twice</h4>
                    <h5>Me ame uma vez, sei que você me amará duas vezes</h5>
                    <br>
                    <h4>Love me once, the naughty turns to nice</h4>
                    <h5>Me ame uma vez, o travesso se transformará em bom.</h5>
                    <br>
                    <h4>La, la-la, la-la-la, la-la</h4>
                    <h5>La, la-la, la-la-la, la-la</h5>
                    <br>
                    <h4>Ei, eu não preciso de nada padronizado, perfeito e comum (yo)</h4>
                    <h5>I don't need no cookie cutter, perfect ordinary (yo)</h5>
                    <br>
                    <h4>Can find me under "Ride or die" Inside that dictionary</h4>
                    <h5>Você Pode me encontrar "parceiro até a morte" dentro daquele dicionário</h5>
                    <br>
                    <h4>Babe, uh-huh, they like it, it's simple as that</h4>
                    <h5>querida, uh-huh, eles gostam, é simples assim</h5>
                    <br>
                    <h4>That's right, uh-huh, they like it, they keep comin' back</h4>
                    <h5>Isso mesmo, uh-huh, eles gostam eles, sempre voltam</h5>
                    <br>
                    <h4>Oh, we-ee-ee ain't flexin', babe, we do what we do</h4>
                    <h5>Ah, nós não estamos nos exibindo, querida, fazemos o que fazemos</h5>
                    <br>
                    <h4>Wanna pull up on us? Check in at the gate and come through</h4>
                    <h5>Quer se juntar a nós? Faça o check-in no portão e entre</h5>
                    <br>
                    <h4>We can run it, run it, run it, no, this ain't a debut</h4>
                    <h5>Nós podemos fazer isso, fazer isso, fazer isso, não, isso não é uma estreia</h5>
                    <br>
                    <h4>Love me once, I know you'll love me twice</h4>
                    <h5>Me ame uma vez, sei que você me amará duas vezes</h5>
                    <br>
                    <h4>Love me once, the naughty turns to nice</h4>
                    <h5>Me ame uma vez, o travesso se transformará em bom.</h5>
                    <br>
                    <h4>Oh, we-ee-ee ain't flexin', babe, we do what we do</h4>
                    <h5>Ah, nós não estamos exibindo, querida, fazemos o que fazemos</h5>
                    <br>
                    <h4>Wanna pull up on us? Check in at the gate and come through</h4>
                    <h5>Quer se juntar a nós? Faça o check-in no portão e entre</h5>
                    <br>
                    <h4>We can run it, run it, run it, no, this ain't a debut</h4>
                    <h5>Nós podemos fazer isso, fazer isso, fazer isso, não, isso não é uma estreia</h5>
                    <br>
                    <h4>Love me once, I know you'll love me twice</h4>
                    <h5>Me ame uma vez, sei que você me amará duas vezes</h5>
                    <br>
                    <h4>Love me once, the naughty turns to nice</h4>
                    <h5>Me ame uma vez, o travesso se transformará em bom</h5>
                    <br>
                    <h4>La, la-la, la-la-la, la, la</h4>
                    <h5>La, la-la, la-la-la, la, la</h5>
                    <br>
                    <h4>La, la-la, la</h4>
                    <h5>La, la-la, la</h5>
                    <br>
                    <h4>Love me once, I know you'll love me twice</h4>
                    <h5>Me ame uma vez, eu sei que você me amará duas vezes</h5>
                    <br>
                    <h4>La, la-la, la-la-la, la, la</h4>
                    <h5>La, la-la, la-la-la, la, la</h5>
                    <br>
                    <h4>Love me once, I know you'll love me twice</h4>
                    <h5>Me ame uma vez, eu sei que você me amará duas vezes</h5>
                    <br>
                    <h4>Love me once, it's time to roll the dice</h4>
                    <h5>Me ame uma vez que é a hora de rolar o dado</h5>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1LeTra.innerHTML = ''
    }
}

function album1mus1_sig() {

    let album_res1Sig = document.getElementById('album_res1Sig')

    if (album_res1Sig.innerHTML === '') {
        album_res1Sig.innerHTML = `
        <section class="sectionRes2">
            <div class="sign_musica1">
                <div class="div_h3Titulo">
                  <h3>Significado:</h3>
                  <h3>Debut</h3>
                </div>

                <div class="div_h4">
                    <h4>Afirmação e autenticidade em “Debut” do KATSEYE</h4>
                    <br>
                    <h4>Em “Debut”, o KATSEYE faz uma estreia marcada por autoconfiança e autenticidade. Logo no refrão,
                        a frase “No, this ain't a debut” (“Não, isso não é uma estreia”) cria uma ironia, já que a
                        música representa justamente o início do grupo. Essa escolha transmite a ideia de que as
                        integrantes já chegam preparadas e seguras, como se não precisassem provar seu valor para
                        conquistar seu espaço.</h4>
                    <br>
                    <h4>Essa confiança também aparece no verso “I don't need nobody, tryna tell me how to run it” (“Não
                        preciso de ninguém tentando me dizer como fazer as coisas”), que destaca a independência e o
                        desejo de construir uma identidade própria, sem seguir expectativas externas ou padrões impostos
                        pela indústria. Já o trecho “Can find me under ride or die / Inside that dictionary” (“Pode me
                        encontrar sob ‘ride or die’ / Dentro desse dicionário”) reforça a importância da lealdade e da
                        confiança, mostrando que elas valorizam relações verdadeiras em vez de conexões superficiais.
                    </h4>
                    <br>
                    <h4>Além de apresentar o grupo ao público, “Debut” transmite a intenção de causar uma primeira
                        impressão marcante. A música funciona como uma declaração de identidade, celebrando a
                        autoconfiança, a autenticidade e a diversidade do KATSEYE, apresentando um grupo determinado a
                        seguir seu próprio caminho desde o primeiro momento.</h4>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1Sig.innerHTML = ''
    }
}

function album1mus2_leTra() {

    let album_res1LeTra = document.getElementById('album_res1LeTra')

    if (album_res1LeTra.innerHTML === '') {

        album_res1LeTra.innerHTML = `
            <section class="sectionRes1">
                <div class="leTr_musica1">
                <div class="div_titulosLeTr">
                    <h3>Letra e tradução:</h3>
                    <h3>Touch</h3>
                </div>
                <div class="div_Letra">
                    <h4>Touch, touch, touch, touch, touch</h4>
                    <h5>Distante, distante, distante, distante, distante</h5>
                    <br>
                    <h4>Thought about you way too much, much, much, much, much</h4>
                    <h5>Pensei demais em você, demais, demais, demais, demais, demais</h5>
                    <br>
                    <h4>Over, overthinkin'us, us, us, us, us (ooh, ooh)</h4>
                    <h5>Pensando demais, pensando demais em nós, nós, nós, nós, nós (ooh-ooh)</h5>
                    <br>
                    <h4>'Cause you've been so outta touch</h4>
                    <h5>Porque você anda tão distante</h5>
                    <br>
                    <h4>You coulda had my love, but you've been so out of touch</h4>
                    <h5>Você poderia ter tido meu amor, mas você anda tão distante</h5>
                    <br>
                    <h4>Monday, I was dreamin'bout ya</h4>
                    <h5>Segunda-feira, eu estava sonhando com você</h5>
                    <br>
                    <h4>Tuesday, I was waitin'near the phone</h4>
                    <h5>Terça-feira, eu estava esperando perto do telefone</h5>
                    <br>
                    <h4>Two days, wasn't hearin'from you</h4>
                    <h5>Dois dias sem notícias suas</h5>
                    <br>
                    <h4>Yeah, what can i say? Oh baby, i was gettin'bored</h4>
                    <h5>É, o que eu posso dizer? Ah, querido eu estava ficando entediada</h5>
                    <br>
                    <h4>Thursday, i was losin'interest</h4>
                    <h5>Quinta-feira, eu estava perdendo o interesse</h5>
                    <br>
                    <h4>Friday, you were out there in the cold</h4>
                    <h5>Sexta-feira, você estava lá fora no frio</h5>
                    <br>
                    <h4>Weekend, you already missed it</h4>
                    <h5>No fim de semana, você já tinha perdido</h5>
                    <br>
                    <h4>I was moving on, 'cause you were movin' too slow</h4>
                    <h5>Eu estava seguindo em frente porque você estava indo devagar demais</h5>
                    <br>
                    <h4>'Cause sometimes I'm alone, stare out my window</h4>
                    <h5>Porque às vezes estou sozinho, olhando pela jenela</h5>
                    <br>
                    <h4>And the moon makes you seem close tonight</h4>
                    <h5>E a Lua faz parecer que você está perto esta noite</h5>
                    <br>
                    <h4>But you've been so out of touch touch, touch, touch, touch, touch</h4>
                    <h5>Mas você anda tão distante, distante, distante, distante, distante</h5>
                    <br>
                    <h4>Thought about you way too much, much, much, much, much</h4>
                    <h5>Pensei em você demais, demais, demais, demais, demais</h5>
                    <br>
                    <h4>Over, overthinkin'us, us, us, us, us</h4>
                    <h5>Pensando demais, pensando demais em nós, nós, nós, nós, nós</h5>
                    <br>
                    <h4>'Cause you've been so out of touch</h4>
                    <h5>Porque você anda tão distante</h5>
                    <br>
                    <h4>you coulda had my love, but you've been so outta</h4>
                    <h5>poderia ter tido o meu amor, mas você esteve tão fora de si</h5>
                    <br>
                    <h4>touch, touch, touch, touch, touch</h4>
                    <h5>distante, distante, distante, distante, distante</h5>
                    <br>
                    <h4>Thought about you way too much, much, much, much, much</h4>
                    <h5>Pensei demais em você, demais, demais, demais, demais, demais</h5>
                    <br>
                    <h4>Yeah, you went and messed it up, up, up, up, up</h4>
                    <h5>É, você foi lá e estragou tudo, tudo, tudo, tudo, tudo</h5>
                    <br>
                    <h4>'Cause you've been so outta touch</h4>
                    <h5>Porque você anda tão distante</h5>
                    <br>
                    <h4>You coulda had my love, but you've been so out of touch</h4>
                    <h5>Você poderia ter tido meu amor, mas você anda tão distante</h5>
                    <br>
                    <h4>First, you're gonna say you're sorry</h4>
                    <h5>Primeiro, você vai pedir desculpas</h5>
                    <br>
                    <h4>Promise you won't do it anymore</h4>
                    <h5>Prometa que não fará isso novamente</h5>
                    <br>
                    <h4>Come up with a different story</h4>
                    <h5>Invente uma história diferente</h5>
                    <br>
                    <h4>Yeah, what can I say? (Say something'I ain't heard before)</h4>
                    <h5>Sim, o que posso dizer? (Diga algo que eu nunca ouvi antes)</h5>
                    <br>
                    <h4>I'm too fun to waste my time</h4>
                    <h5>Sou divertida demais para desperdiçar meu tempo</h5>
                    <br>
                    <h4>Too young to waste one night</h4>
                    <h5>Jovem demais para desperdiçar uma noite</h5>
                    <br>
                    <h4>So here comes some good advice</h4>
                    <h5>Então, aqui vai um bom conselho</h5>
                    <br>
                    <h4>If I ever call again, don't press ignore</h4>
                    <h5>Se eu te ligar de novo, não ignore</h5>
                    <br>
                    <h4>'Cause sometimes I'm alone, stare out my window</h4>
                    <h5>Porque às vezes estou sozinho, olhando pela jenela</h5>
                    <br>
                    <h4>And the moon makes you seem close tonight (whoo)</h4>
                    <h5>E a Lua faz parecer que você está perto esta noite (whoo)</h5>
                    <br>
                    <h4>But you've been so out of touch touch, touch, touch, touch, touch</h4>
                    <h5>Mas você anda tão distante, distante, distante, distante, distante</h5>
                    <br>
                    <h4>Thought about you way too much, much, much, much, much</h4>
                    <h5>Pensei em você demais, demais, demais, demais, demais</h5>
                    <br>
                    <h4>Over, overthinkin'us, us, us, us, us</h4>
                    <h5>Pensando demais, pensando demais em nós, nós, nós, nós, nós</h5>
                    <br>
                    <h4>'Cause you've been so outta touch</h4>
                    <h5>Porque você anda tão distante</h5>
                    <br>
                    <h4>You coulda had my love, but you've been outta</h4>
                    <h5>Você poderia ter tido meu amor, mas você anda tão distante</h5>
                    <br>
                    <h4>Touch, touch, touch, touch, touch</h4>
                    <h5>Distante, distante, distante, distante, distante</h5>
                    <br>
                    <h4>Thought about you way too much, much, much, much, much</h4>
                    <h5>Pensei demais em você, demais, demais, demais, demais, demais</h5>
                    <br>
                    <h4>Yeah, you went and messed it up, up, up, up, up</h4>
                    <h5>É, você foi lá e estragou tudo, tudo, tudo, tudo, tudo</h5>
                    <br>
                    <h4>'Cause you've been so outta touch</h4>
                    <h5>Porque você anda tão distante</h5>
                    <br>
                    <h4>You coulda had my love, but you've been so out of touch</h4>
                    <h5>Você poderia ter tido meu amor, mas você anda tão distante</h5>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1LeTra.innerHTML = ''
    }
}

function album1mus2_sig() {

    let album_res1Sig = document.getElementById('album_res1Sig')

    if (album_res1Sig.innerHTML === '') {
        album_res1Sig.innerHTML = `
        <section class="sectionRes2">
            <div class="sign_musica1">
                <div class="div_h3Titulo">
                  <h3>Significado:</h3>
                  <h3>Debut</h3>
                </div>

                <div class="div_h4">
                    <h4>Afirmação e autenticidade em “Debut” do KATSEYE</h4>
                    <br>
                    <h4></h4>
                    <br>
                    <h4></h4>
                    <br>
                    <h4></h4>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1Sig.innerHTML = ''
    }
}

function album1mus3_leTra() {

    let album_res1LeTra = document.getElementById('album_res1LeTra')

    if (album_res1LeTra.innerHTML === '') {

        album_res1LeTra.innerHTML = `
            <section class="sectionRes1">
                <div class="leTr_musica1">
                <div class="div_titulosLeTr">
                    <h3>Letra e tradução:</h3>
                    <h3>Touch</h3>
                </div>
                <div class="div_Letra">
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1LeTra.innerHTML = ''
    }
}

function album1mus3_sig() {

    let album_res1Sig = document.getElementById('album_res1Sig')

    if (album_res1Sig.innerHTML === '') {
        album_res1Sig.innerHTML = `
        <section class="sectionRes2">
            <div class="sign_musica1">
                <div class="div_h3Titulo">
                  <h3>Significado:</h3>
                  <h3>Debut</h3>
                </div>

                <div class="div_h4">
                    <h4>Afirmação e autenticidade em “Debut” do KATSEYE</h4>
                    <br>
                    <h4></h4>
                    <br>
                    <h4></h4>
                    <br>
                    <h4></h4>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1Sig.innerHTML = ''
    }
}

function album1mus4_leTra() {

    let album_res1LeTra = document.getElementById('album_res1LeTra')

    if (album_res1LeTra.innerHTML === '') {

        album_res1LeTra.innerHTML = `
            <section class="sectionRes1">
                <div class="leTr_musica1">
                <div class="div_titulosLeTr">
                    <h3>Letra e tradução:</h3>
                    <h3>Touch</h3>
                </div>
                <div class="div_Letra">
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1LeTra.innerHTML = ''
    }
}

function album1mus4_sig() {

    let album_res1Sig = document.getElementById('album_res1Sig')

    if (album_res1Sig.innerHTML === '') {
        album_res1Sig.innerHTML = `
        <section class="sectionRes2">
            <div class="sign_musica1">
                <div class="div_h3Titulo">
                  <h3>Significado:</h3>
                  <h3>Debut</h3>
                </div>

                <div class="div_h4">
                    <h4>Afirmação e autenticidade em “Debut” do KATSEYE</h4>
                    <br>
                    <h4></h4>
                    <br>
                    <h4></h4>
                    <br>
                    <h4></h4>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1Sig.innerHTML = ''
    }
}

function album1mus5_leTra() {

    let album_res1LeTra = document.getElementById('album_res1LeTra')

    if (album_res1LeTra.innerHTML === '') {

        album_res1LeTra.innerHTML = `
            <section class="sectionRes1">
                <div class="leTr_musica1">
                <div class="div_titulosLeTr">
                    <h3>Letra e tradução:</h3>
                    <h3>Touch</h3>
                </div>
                <div class="div_Letra">
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                    <br>
                    <h4></h4>
                    <h5></h5>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1LeTra.innerHTML = ''
    }
}

function album1mus5_sig() {

    let album_res1Sig = document.getElementById('album_res1Sig')

    if (album_res1Sig.innerHTML === '') {
        album_res1Sig.innerHTML = `
        <section class="sectionRes2">
            <div class="sign_musica1">
                <div class="div_h3Titulo">
                  <h3>Significado:</h3>
                  <h3>Debut</h3>
                </div>

                <div class="div_h4">
                    <h4>Afirmação e autenticidade em “Debut” do KATSEYE</h4>
                    <br>
                    <h4></h4>
                    <br>
                    <h4></h4>
                    <br>
                    <h4></h4>
                </div>
            </div>
        </section>
        `
    } else {
        album_res1Sig.innerHTML = ''
    }
}