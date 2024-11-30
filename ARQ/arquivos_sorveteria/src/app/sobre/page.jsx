import Image from "next/image";
import estilos from "./sobre.module.css";

import image1 from "../../../public/sobre-image.jpg";
import image2 from "../../../public/sorveteria.jpg";

export default function Sobre() {
  return (
    <>
      <main className={estilos.container_principal}>
        <section className={estilos.secao_banner_sobre}>
          <div>
            <h1>A GELATERIA</h1>
          </div>
        </section>

        <section className={estilos.secao_sobre_nos}>
          <div>
            <h2>Sobre Nós</h2>
            <span>Nós simplesmente amamos sorvete!</span>
            <p>
              Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              sorvete produzido. Fazemos o melhor sorvete para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              sorvete. Vendemos tanto para varejo como para atacado.
            </p>
            <p>
              Nossos clientes podem comprar os nossos sorvetes e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.
            </p>
          </div>
        </section>

        <section className={estilos.secao_imagens}>
          <div>
            <Image className={estilos.img} src={image1} alt="pessoas comendo sorvete" />
            <Image className={estilos.img} src={image2} alt="loja sorveteria" />
          </div>
        </section>
      </main>
    </>
  );
}