import Image from "next/image";
import Link from "next/link";

import estilos from "./Rodape.module.css";
import Logo from "../../../public/logo.png";

export default function Rodape() {
  return (
    <footer className={estilos.container_rodape}>
      <div className={estilos.container_informacoes}>
        <Image className={estilos.img} src={Logo} alt="logomarca" />
        <div>
          <h3>ENDEREÇO</h3>
          <p>Av. Beira Mar, 1981</p>
          <p>Vitória, ES</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>info@sorveteria-react.com</p>
          <p>Tel: (27) 2001-1981</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className={estilos.container_direito_autoral}>
        <p>Desenvolvido por <Link className={estilos.link_rodape} href="https://www.linkedin.com/in/andretnmiranda/" target="_blank">André Tavares</Link></p>
      </div>
    </footer>
  );
}