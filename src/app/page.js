import Image from "next/image";
import estilos from "./page.module.css";

import image1 from "../../public/banner-sabores.jpg";
import image2 from "../../public/eventos-image.jpg";
import image3 from "../../public/sobre-image.jpg";

export default function Home() {
  return (
    <>
      <main>
        <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>SORVETE ARTESANAL</h1>
          </div>
        </section>

        <section className={estilos.secao_nossos_sabores}>
          <Image className={estilos.img_card} src={image1} alt="sorvetes diversos" />
          <div className={estilos.container_texto}>
            <h2>NOSSOS SABORES</h2>
            <span>Novos e deliciosos!</span>
            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
              gelateria todos os nossos produtos são naturais, à base de frutas
              e sem nenhum conservante! Também temos opções sem lactose e sem
              açúcar. Venha conhecer e perceber que tem como o sorvete ser
              delicioso e saudável ao mesmo tempo!
            </p>
          </div>
        </section>

        <section className={estilos.secao_nossos_eventos}>
          <div className={estilos.container_texto}>
            <h2>NOSSOS EVENTOS</h2>
            <span>Delicias com sorvete!</span>
            <p>
              Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
              aqui com a gente.
            </p>
          </div>
          <Image className={estilos.img_card} src={image2} alt="mesa de festa" />
        </section>

        <section className={estilos.secao_sobre_nos}>
          <Image className={estilos.img_card} src={image3} alt="pessoas comendo sorvete" />
          <div className={estilos.container_texto}>
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casquinha!</span>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}