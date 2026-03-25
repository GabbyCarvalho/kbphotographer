import { Link } from "react-router-dom";
import ScrollItem from "../../components/ScrollIItem";
import "../../styles/about.css"
import ka1 from "../../assets/about/ka1.jpg";
import kaGif from "../../assets/about/ka.gif";
import wa from "../../assets/about/wa.jpg";
import kaProposal from "../../assets/about/proposal.jpg";
import snowboard from "../../assets/about/snowboard.jpg";
import walker from "../../assets/about/walker.jpg"


export default function AboutPT() {
  return (
    <main className="aboutPage">

        <div className="grid-container">

      
        <h1 className="tittle">Inspirada pela aventura, emoção e luz natural</h1>
        
        <p className="subtittle">RETRATOS | CASAMENTO | BRANDING | HOBBIES</p>
     
        <ScrollItem className="img1">
          <img src={ka1} alt="hiking" />
        </ScrollItem>
        <ScrollItem className="text1">
          <h2>Olá!</h2>
            <p> Sou Karina, a fotógrafa. Quando não estou por aí capturando belos momentos para meus clientes, você pode me encontrar curtindo a natureza, refletindo sobre minha jornada e explorando novas maneiras de preservar memórias — como sempre fiz.</p>
        </ScrollItem>

        <ScrollItem className="img2Aboutme">
            <img src={wa} alt="wa" />
        </ScrollItem>
        <ScrollItem className="text2">
            <h2>Por que faço o que faço: Preservando momentos</h2>
          <p>
            A fotografia sempre foi minha forma de capturar momentos no tempo. Quando criança, meus pais tinham um baú cheio de fotos antigas, e eu adorava sentar e folheá-las — aqueles pequenos pedaços do passado, congelados no tempo, pareciam tesouros. Mas não eram apenas as fotos; eram as memórias e emoções que elas carregavam. Esse sentimento é o que me motiva hoje. Não volto mais à galeria do meu celular para reviver memórias — eu as imprimo, emolduro e as guardo para continuar sentindo essa conexão.
          </p>
        </ScrollItem>
      

     
     
        <ScrollItem className="full1">
          <div className="cardBackground">
            <div className="card">
              <h2>O Poder da Impressão: Por Que Guardo Momentos por Perto</h2>
              <p>
                  Há algo especial em segurar uma foto impressa nas mãos, vê-la na parede ou folheá-la em um álbum. É tangível. É real. E é duradouro. Não quero que as memórias de hoje desapareçam no abismo do armazenamento digital. Quero mantê-las vivas em minha casa, em minha vida e em meu coração. É por isso que sou apaixonada por criar memórias duradouras para outras pessoas também. Seja uma foto no seu celular ou uma emoldurada na parede, esses momentos são o que tornam a vida bela, e estou aqui para ajudá-lo(a) a capturá-los.
              </p>
            </div>
          </div>
        </ScrollItem>
    

      
        <ScrollItem className="img3">
          <img src={kaProposal} alt="Engagement" />
        </ScrollItem>

        <ScrollItem className="text3">
          <h2>Como fiquei noiva e por que isso é importante para mim.</h2>
          <p>
           Falando em memórias, um dos momentos mais especiais da minha vida aconteceu durante uma trilha no estado de Washington com meu melhor amigo. Foi um pedido de casamento surpresa e, embora eu adorasse ter fotos, estávamos sozinhos naquele momento. Essa experiência só reforçou meu apreço por preservar memórias através da fotografia. O fato de eu não poder voltar e reviver aquele momento através de uma foto não diminui sua importância, mas certamente faz com que eu valorize ainda mais cada outro momento que consigo capturar para os outros.
          </p>
        </ScrollItem>
     

      
        <ScrollItem className="img4">
          <img src={kaGif} alt="gif" />
        </ScrollItem>

        <ScrollItem className="text4">
          <h2>Minha abordagem e energia: Modo Hype Girl</h2>
          <p>
           Meu objetivo é trazer energia positiva para cada sessão. Adoro conhecer meus clientes, garantir que se sintam à vontade e incentivá-los a cada passo do processo. Quando estou atrás da câmera, não se trata apenas de tirar uma foto — trata-se de criar uma atmosfera, fazer você se sentir bem e capturar seus momentos mais genuínos. Você nunca precisará se preocupar com poses estranhas, porque eu te guiarei com um pouco de energia e muito incentivo. Gosto de me considerar sua incentivadora pessoal, sempre presente para garantir que você se sinta confiante, relaxado e pronto para brilhar.
           </p>
        </ScrollItem>
     

       
        <ScrollItem className="img5">
            <img src={walker} alt="hiking" />
        </ScrollItem>

        <ScrollItem className="text5">
            <h2>O que eu faço quando não estou trabalhando?</h2>
            <p>Quando não estou atrás da câmera, provavelmente você me encontrará fazendo trilhas, snowboard ou criando algo novo. Cresci andando de skate e surfando em Balneário Camboriú, no Brasil, e isso criou as bases para meu amor por movimento, natureza e aventura.</p>
            <br />
            <p>Depois de morar em São Paulo, Tennessee, no estado de Washington, em Panama City Beach, na Flórida, e agora no Colorado, vivenciei uma variedade de paisagens, cada uma adicionando uma nova camada de inspiração ao meu trabalho.</p>
            <br />
            <p>Também quero dedicar um momento para homenagear meu amado Golden Retriever brasileiro, Walker. Ele foi meu fiel companheiro de aventuras por tantos anos, me acompanhando em trilhas e viagens de snowboard, e me ensinando sobre alegria, presença e companheirismo. Embora ele não esteja mais comigo, seu espírito e as memórias que construímos juntos continuam a inspirar tudo o que faço.</p>
        </ScrollItem>

     
        <ScrollItem className="img6">
          <img src={snowboard} alt="snowboarding" />
        </ScrollItem>

        <ScrollItem className="text6">
          <h2>Paixão pelo snowboard: começando aos 30</h2>
          <p>
           Praticar snowboard foi uma das melhores coisas que já decidi experimentar. Meu marido me incentivou, e depois que comecei, fiquei viciada. Minha primeira temporada completa foi cheia de desafios, mas logo meu objetivo se tornou me tornar boa nisso — não apenas pela emoção do snowboard em si, mas para poder levar minha câmera para as pistas e criar imagens.
          </p>
        </ScrollItem>
     

     <ScrollItem className="full2">
        <p>Lembro-me vividamente daqueles primeiros dias na montanha — caindo muito, mas também sentindo aquela sensação revigorante de liberdade cada vez que me levantava. Não foi fácil, mas fiz disso a minha missão: dominar a técnica. Queria capturar a energia, a beleza e o movimento do snowboard da mesma forma que sempre capturei outros momentos. Ao me aprimorar no esporte, eu poderia fotografar outras pessoas na neve, dar vida à minha visão criativa e contar histórias através das lentes de alguém que realmente entendia a experiência.</p>
        <p>Para mim, o snowboard é mais do que apenas um esporte — é uma forma de expressão criativa e uma enorme fonte de inspiração. Seja nas pistas ou fotografando outras pessoas deslizando na neve fresca, o snowboard me proporciona a combinação perfeita de aventura e criatividade que alimenta minha fotografia.</p>

     </ScrollItem>

     </div>


      <section className="contact">
       <h2>
         “A fotografia é um investimento em suas memórias, sua história e seu legado.”
       </h2>
       <p>Se você estiver pronto para trabalharmos juntos, adoraria ouvir mais de você.</p>

       <Link to="/contact" className="seeReviewsBtn">
         CONTATO
       </Link>
     </section>


    </main>
  );
}