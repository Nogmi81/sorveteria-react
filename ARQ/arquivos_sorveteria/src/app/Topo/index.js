import Image from "next/image";

import estilos from './Topo.module.css';
import Logo from "../../../public/logo.png";

export default function Topo() {
  return(
    <header className={estilos.topo_container}>
      <div>
        <Image className={estilos.img} src={Logo} alt="logomarca"/>
        <nav>
          <Link className={estilos.link_topo} href="/">Home</Link>
          <Link className={estilos.link_topo} href="/sabores">Sabores</Link>
          <Link className={estilos.link_topo} href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}