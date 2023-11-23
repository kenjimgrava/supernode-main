import React from "react";
import styles from "./white-paper.module.scss";
// import { Document, pdfjs, Page } from "react-pdf";
import divider from "../../assets/png/divider.png";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js`;

function WhitePaper() {
  return (
    <div className={`${styles.whitePaperBackground}`}>
      <div className={`container d-flex justify-content-center `}>
        <div className={styles.background}>
          <h2 className="text-center mt-5">WHITEPAPER</h2>
          <div className="d-flex justify-content-center">
            <img alt="" src={divider} className={`titleUnderline`} />
          </div>
          <div className={`pt-5 ${styles.Padding}`} >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis leo, varius eu tincidunt
              in, eleifend eget metus. Vivamus semper tortor sed massa aliquet tincidunt. Maecenas
              erat enim, tincidunt moliis congue quis, suscipit vel est. Duis accumsan neque sit amet
              aliquam egestas. Integer sollicitudin ligula non eros pulvinar, vitae luctus eros pharetra. In
              dignissim lobortis urna, lobortis rutrum ex blandit in. Quisque sit amet porta orci. Etiam
              tempus facilisis turpis, non pharetra sapien pellentesque eget. Maecenas pharetra est ex,
              quis aliquam dui tempor quis. Maecenas at porttitor nunc, quis tempor augue. Ut auctor
              tempor orci ac facilisis.
            </p>
            <p>
              Maecenas vitae mauris eleifend, varius ipsum vitae, efficitur orci. Pellentesque tincidunt
              eros nisl, at ultrices augue egestas imperdiet. Cras purus eros, aliquam ac varius eu,
              pulvinar ac sapien. Ouisque aliquam dapibus cursus. In tristique velit vel lorem
              consectetur suscipit ac et sapien. Fuse id massa et purus sollicitudin dapibus.
              Vestibulum id odio solicitudin, maximus nulla non, facilisis dolor. Integer ac arcu et nisi
              consequat vulputate in non tellus. Fuse ornare arcu ut augue tincidunt, a pulvinar nibh
              fermentum.
            </p>
            <p>
              Suspendisse gravida semper viverra. ed vel libero arcu. Quisque commodo lectus
              sapien. Done neque enim, varius in metus non, faucibus sollicitudin turpis. Donec
              fermentum liqula nisl, nec sollicitudin tortor facilisis at. Nulla euismod neque id ex feugiat,
              ac blandit lorem tincidunt. In id volutpat arcu. Nunc ultricies fringilla est eu rhoncus.
              Maecenas sollicitudin turpis lectus, in finibus lacus iaculis id. Fusce in ex ultricies, mattis
              odio et, viverra enim. Praesent a bibendum elit. Integer feugiat at turpis auctor aliquet.
              Nam ac magna in quam iaculis posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhitePaper;
