import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";
const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Logo de tienda guitarLA"
          />
          <div>
            <p>
              Nunc aliquam viverra est, ac eleifend nunc sagittis id. Cras vel
              augue sit amet odio aliquet ultricies. Suspendisse id pellentesque
              ante. Pellentesque convallis, ipsum id rhoncus molestie, augue est
              gravida urna, et mollis magna nisl et elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis auctor mi erat, a
              malesuada lorem egestas at. Aliquam varius urna ipsum, non rhoncus
              lorem pellentesque in. Mauris placerat.
            </p>
            <p>
              Aenean ac enim ut urna vehicula gravida vel sed odio. Sed
              tristique nisi ac ante lacinia, vitae congue augue egestas. Proin
              sit amet bibendum dui, id maximus diam. Nunc aliquam viverra est,
              ac eleifend nunc sagittis id. Cras vel augue sit amet odio aliquet
              ultricies. Suspendisse id pellentesque ante. Pellentesque
              convallis, ipsum id rhoncus molestie, augue est gravida urna, et
              mollis magna nisl et elit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis auctor mi erat, a malesuada lorem egestas
              at. Aliquam varius urna ipsum, non rhoncus lorem pellentesque in.
              Mauris placerat.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
