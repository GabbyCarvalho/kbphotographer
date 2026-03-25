import "../../styles/policy.css"

import hero from "../../assets/policy/hero.jpg"
import photo1 from "../../assets/policy/photoCollage1.jpg"
import photo2 from "../../assets/policy/photoCollage2.jpg"
import photo3 from "../../assets/policy/photoCollage3.png"
import photo4 from "../../assets/policy/photoCollage4.jpg"
import photo5 from "../../assets/policy/photoCollage5.jpg"


export default function Policypt () {
    return (
    <>
     <section className="hero">
                <div className="img-wrapper">
                    <img src={hero} alt="" />
                </div>
    </section>

    <section className="policy">
        <div className="policy-wrapper">
            <h2 className="tittle">Política de Privacidade</h2>
            <p className="textCenter">Data de entrada em vigor: 29/12/2024</p>
            <p className="textP">Na Karina Bittencourt Photographer, sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você interage com nossos serviços, site e plataformas de mídia social.</p>
            <div className="listPolicy">
            <h2>1. Informações que coletamos</h2>
            <p>• Informações de contato: Nome completo, endereço de e-mail, número de telefone e endereço postal.</p>
            <p>• Informações da sessão: Detalhes sobre sua sessão fotográfica, como local e preferências.</p>
            <p>• Atividade digital: Dados das suas interações com o nosso site, plataforma de galeria (Pic-Time) ou redes sociais, como cookies e endereços IP.</p>

            <h2>2. Como utilizamos suas informações</h2>
            <p>• Prestação de serviços fotográficos e cumprimento de contratos.</p>
            <p>• Agendamento de sessões fotográficas e comunicação de atualizações.</p>
            <p>• Fornecimento de produtos fotográficos digitais e físicos.</p>
            <p>• Responder a perguntas ou solicitações.</p>
            <p>• Envio de comunicações de marketing (somente se você tiver dado seu consentimento).</p>
            <p>• Aprimorando nossos serviços e a experiência do cliente.</p>

            <h2>3. Compartilhando suas informações</h2>
            <p className="textP">Não vendemos nem alugamos suas informações pessoais a terceiros. No entanto, podemos compartilhar seus dados com parceiros confiáveis ​​quando necessário, tais como:</p>
            <p>• Prestadores de serviços: Laboratórios de impressão, plataformas de galerias ou ferramentas de agendamento.</p>
            <p>• Obrigações legais: Se exigido por lei ou para proteger nossos negócios.</p>

            <h2>4. Como protegemos suas informações</h2>
            <p className="textP">Levamos a sua privacidade a sério e implementamos medidas de segurança padrão do setor para proteger os seus dados pessoais. Estas incluem criptografia, gateways de pagamento seguros e acesso restrito a informações sensíveis.</p>

            <h2>5. Seus direitos</h2>
            <p>Você tem o direito a:</p>
            <p>• Solicite acesso ou exclusão dos seus dados pessoais.</p>
            <p>• Você pode cancelar o marketing a qualquer momento.</p>
            <p>• Atualizar ou corrigir suas informações pessoais.</p>
            <p className="textP">Para quaisquer questões relacionadas à privacidade ou para exercer seus direitos, entre em contato conosco pelo endereço hello@kbphotographer.com.</p>

            <h2>6. Utilização de cookies e rastreamento</h2>
            <p className="textP" >Podemos usar cookies para melhorar sua experiência em nosso site e coletar dados analíticos. Ao continuar a usar nosso site, você concorda com esse uso.</p>

            <h2>7. Links de terceiros</h2>
            <p className="textP">Nosso site e nossas comunicações podem conter links para sites de terceiros, como plataformas de mídia social ou serviços de galeria. Não nos responsabilizamos pelas práticas de privacidade desses sites e recomendamos que você revise suas políticas.</p>

            <h2>8. Atualizações a esta política</h2>
            <p>Esta Política de Privacidade poderá ser atualizada periodicamente. As alterações serão publicadas em nosso site.</p>
            <p>Para obter mais informações ou assistência, entre em contato conosco pelo endereço hello@kbphotographer.com.</p>
            <p>Obrigada por confiar suas memórias à fotógrafa Karina Bittencourt!</p>


    
            </div>
        </div>

    </section>

    <section className="photoCollage">
            <div className="footerCollage">
    
                <div className="frame img-1">
                    <img src={photo1} />
                </div>
    
                <div className="frame img-2">
                    <img src={photo2} />
                </div>
    
                <div className="frame img-3">
                    <img src={photo3}  />
                </div>
    
                <div className="frame img-4">
                    <img src={photo4} />
                </div>
    
                <div className="frame img-5">
                    <img src={photo5} />
                </div>
                         
            </div>
        </section>
    
    </>
    )
}