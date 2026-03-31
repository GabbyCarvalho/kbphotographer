import Accordion from "../../components/Accordion"
import Polaroid from "../../components/Polaroid";
import { Link } from "react-router-dom";
import HoneyBookEmbed from "../../components/HoneyBookEmbed";
import "../../styles/faq.css"

import family2 from "../../assets/faq/family2.jpg"
import family3 from "../../assets/faq/family3.jpg"

import couple4 from "../../assets/faq/couple4.jpg"
import couple5 from "../../assets/faq/couple5.jpg"

import snowboarding1 from "../../assets/faq/snowboarding1.jpg"
import snowboarding4 from "../../assets/faq/snowboarding4.jpg"

export default function FaqPT() {
    return(
        <>
        <section className="hero-Faq">
            <div className="hero-inner">
                <div className="polaroid-group">
                    <Polaroid img={family2} rotate="5deg" />
                </div>

                <div className="polaroid-group">
                    <Polaroid img={couple4} rotate="-4deg" />
                </div>

                <div className="polaroid-group">
                    <Polaroid img={snowboarding1} rotate="-5deg" />
                </div>
            </div>
        </section>

        <div className="faqTitle">
            <h1 className="tittle">Perguntas Frequentes – Fotografia de Aventura e Noivado no Colorado</h1>
        </div>

        <section className="accordion-section">
            <div className="accordion">

                <Accordion title="Que tipos de ensaios você oferece?">
                    <p>
                        Eu adoro capturar momentos que contam uma história! Desde noivados nas montanhas, aventuras de snowboard, sessões de ski e mini casamentos íntimo e até retratos de família, lifestyle e arte de paisagem — tudo é personalizado para você.
                    </p>
                </Accordion>

                <Accordion title="Você fotografa pedidos de casamento ou noivados?">
                    <p>
                        Com certeza! As montanhas do Colorado são um dos meus cenários favoritos. Seja em um resort de ski, trilha ao pôr do sol ou sessão de snowboard, vou registrar sua história de forma autêntica e incrível.
                    </p>
                </Accordion>

                <Accordion title="Posso agendar uma sessão de ski ou snowboard?">
                    <p>
                        Sim! Eu uno minha paixão por esportes na neve com fotografia para capturar sua aventura em movimento.
                    </p>
                </Accordion>

                <Accordion title="Você faz casamentos pequenos?">
                    <p>
                        Sim! Sou especializada em casamentos intimistas nas montanhas, registrando tudo de forma natural.
                    </p>
                </Accordion>

                <Accordion title="Como faço para agendar uma sessão?">
                    <p>
                        Entre em contato pela <Link to="/pt/contact">página de contato</Link> ou envie um email para hello@kbphotographer.com
                    </p>
                </Accordion>

                <Accordion title="Com quanto tempo de antecedência devo agendar?">
                    <p>
                        O ideal é de 2 a 6 meses antes para sessões nas montanhas, mas sempre vale a pena entrar em contato!
                    </p>
                </Accordion>

                <Accordion title="Onde acontecem os ensaios?">
                    <p>
                        Principalmente nas montanhas do Colorado, perto de Denver e regiões de ski.
                    </p>
                </Accordion>

                <Accordion title="O que devo vestir?">
                    <p>
                        Use algo que represente você! Roupas confortáveis e cores que combinem com a natureza funcionam muito bem.
                    </p>
                </Accordion>

                <Accordion title="Posso comprar álbuns ou impressões?">
                    <p>
                        Sim! Ofereço álbuns, impressões e produtos personalizados.
                    </p>
                </Accordion>

                <Accordion title="Quanto tempo demora para receber as fotos?">
                    <p>
                        Envio uma prévia em até 1 semana e a galeria completa entre 3 a 8 semanas.
                    </p>
                </Accordion>

                <Accordion title="Posso postar nas redes sociais?">
                    <p>
                        Claro! Só não esqueça de me marcar <a href="https://www.instagram.com/kbphotographer.sports/" target="_blank">@kbphotographer.sports</a>  ou <a href="https://www.instagram.com/kbphotographer.engagement/" target="_blank">@kbphotographer.engagement</a>
                    </p>
                </Accordion>

                <Accordion title="E se o tempo estiver ruim?">
                    <p>
                        O clima pode deixar as fotos ainda mais incríveis! Se for perigoso, reagendamos.
                    </p>
                </Accordion>

                <Accordion title="Qual o melhor horário para fotos?">
                    <p>
                        Manhã cedo ou pôr do sol são ideais.
                    </p>
                </Accordion>

            </div>
        </section>

        <section className="formSection">
            <h2 className="titlePlanning">Tem algo em mente? Vamos conversar!</h2>
              
            <div className="contactForm">
                <HoneyBookEmbed 
                    pid="6621a6daa1587f00085ab204"
                    placementId="6621a6daa1587f00085ab204-1"
                />
            </div>    
        </section> 
        </>
    )
}