import HoneyBookEmbed from "../../components/HoneyBookEmbed"
import ScrollItem from "../../components/ScrollIItem";
import proposal from "../../assets/contact/proposal-surprise.jpg"
import couple from "../../assets/contact/couple.jpg"
import proposal2 from "../../assets/contact/proposal-2.png"
import hero from "../../assets/contact/hero.jpg"
import collage1 from "../../assets/contact/collage1.png"
import collage2 from "../../assets/contact/collage2.jpg"
import collage3 from "../../assets/contact/collage3.png"
import collage4 from "../../assets/contact/collage4.jpg"
import collage5 from "../../assets/contact/collage5.jpg"

import "../../styles/contact.css"


export default function ContactPT () {
    return (
    <>
    <section className="hero">
        <div className="img-wrapper">
            <img src={hero} alt="ka" />
        </div>
    </section>
        <div className="sayYes">
            <h2>Pronto para dizer sim a uma vida inteira de memórias?</h2>
        </div>

    <section className="contactSection">


            <div className="imgBackground">
                <img src={proposal} alt="proposal" className="side-img" />
                
                 <div className="text">
                <ScrollItem>

                    <p> Estou muito feliz em saber que você se conectou comigo e com o meu trabalho! Obrigada por ter chegado até aqui!</p>
                       <br /> 
                    <p> • É aqui que nossa jornada juntos começa. Para entendermos melhor suas expectativas e sabermos mais sobre sua sessão de fotos ou casamento, preencha o formulário com todos os detalhes.</p>
                        <br />
                    <p> • Só para avisar, minha agenda para a primavera/verão de 2026 já está aberta. Sou especializada em fotografar cerimônias e retratos ao ar livre durante o dia, a partir das 17h, em locais que combinem com meu estilo artístico e atemporal.</p>
                        <br />
                    <p> • Mal posso esperar para receber sua mensagem! P.S.: Todas as mensagens são lidas com atenção e responderei em até 48 horas! Caso não receba uma resposta, verifique sua caixa de spam. Você também pode me contatar pelo Instagram!</p>
                </ScrollItem>
            </div>

        <img src={proposal2} alt="proposal2" className="side-img"/>
            

            </div>
           

       <div className="contactGrid">
        <div className="imageForm">
            <img src={couple} alt="couple" />
        </div> 

            <div className="contactForm">
                <HoneyBookEmbed 
                pid="6621a6daa1587f00085ab204"
                placementId="6621a6daa1587f00085ab204-1"
                />

            </div>        
        </div>
    </section>
    <section className="scheduleVideoForm">
        
        
    </section>

    <section className="photoCollage">
        <div className="footerCollage">

            <div className="frame img-1">
                <img src={collage1} />
            </div>

            <div className="frame img-2">
                <img src={collage2} />
            </div>

            <div className="frame img-3">
                <img src={collage3}  />
            </div>

            <div className="frame img-4">
                <img src={collage4} />
            </div>

            <div className="frame img-5">
                <img src={collage5} />
            </div>
                     
        </div>
    </section>


        
    </>
    )
}

