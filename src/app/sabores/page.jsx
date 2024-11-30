import estilos from "./sabores.module.css";
import Image from "next/image";

import image1 from "../../../public/sabor-oreo.png";
import image2 from "../../../public/sabor-pistache.png";
import image3 from "../../../public/sabor-cookies-avela.png";
import image4 from "../../../public/sorbet-kiwi.png";
import image5 from "../../../public/sorbet-morango.png";
import image6 from "../../../public/sorbet-limao.png";

export default function Sabores() {
  return (
    <>
      <main className={estilos.container_principal}>
        <section className={estilos.secao_banner_sabores}>
          <div className={estilos.titulo_banner_sabores}>
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>

        <section className={estilos.secao_sabores}>
          <h2>SABORES DE SORVETE</h2>
          <div className={estilos.container_sorvetes}>
            <div>
              <Image className={estilos.img_sorvete} src={image1} alt="sorbet de oreo" />
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
            <div>
              <Image className={estilos.img_sorvete} src={image2} alt="sorbet de pistache" />
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div>
              <Image className={estilos.img_sorvete} src={image3} alt="sorbet de cookie com avelã" />
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
            <div>
              <Image className={estilos.img_sorvete} src={image4} alt="sorbet de kiwi" />
              <h3>Sorvete de Kiwi</h3>
              <p>
                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
              </p>
            </div>
            <div>
              <Image className={estilos.img_sorvete} src={image5} alt="sorbet de morango" />
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div>
              <Image className={estilos.img_sorvete} src={image6} alt="sorbet de limão siciliano" />
              <h3>Sorvete de Limão Siciliano</h3>
              <p>
                O incrivel sorvete gourmet de limão siciliano vai te encantar.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}