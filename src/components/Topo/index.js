import Image from "next/image";
import Link from "next/link";

import estilos from './Topo.module.css';
import Logo from "../../../public/logo.png";

export default function Topo() {
  return(
    <header className={estilos.topo_container}>
      <div>
      <Link className={estilos.link_topo} href="/"><Image className={estilos.img} src={Logo} alt="logomarca"/></Link>
        <nav>
          <Link className={estilos.link_topo} href="/">Home</Link>
          <Link className={estilos.link_topo} href="/sabores">Sabores</Link>
          <Link className={estilos.link_topo} href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}