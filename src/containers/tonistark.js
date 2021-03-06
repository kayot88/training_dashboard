import React, { createRef, useEffect, forwardRef } from "react";
import { ToniStark } from "../components/toniStark/toniStark";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const refToniStark = forwardRef((props, ref) => {
  return <ToniStark ref={ref} />;
});

function TonistarkContainer() {
  const innerRef = createRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = innerRef.current;
    console.log("element", element.querySelector("#bg"));
    gsap.to(element.querySelector("#bg"), {
      scrollTrigger: {
        scrub: true,
      },
      y: 200,
      scale: 1.5,
    });
    gsap.to(element.querySelector("#moon"), {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
      scale: 2,
    });
    gsap.to(element.querySelector("#cloud1"), {
      scrollTrigger: {
        scrub: true,
      },
      x: -400,
    });
    gsap.to(element.querySelector("#cloud2"), {
      scrollTrigger: {
        scrub: true,
      },
      x: 800,
    });
    gsap.to(element.querySelector("#jet"), {
      scrollTrigger: {
        scrub: true,
      },
      x: 1000,
      y: 200,
      scale: 4,
    });
    gsap.to(element.querySelector("#ironman"), {
      scrollTrigger: {
        scrub: true,
      },
      x: 0,
      y: -1800,
      scale: 1,
      rotate: -50,
    });
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <refToniStark ref={innerRef}>
        <ToniStark.Hero>
          <ToniStark.BackGr src={`/images/ToniStark/bg.jpg`} id={"bg"} />
          <ToniStark.Moon src={`/images/ToniStark/moon.png`} id={"moon"} />
          <ToniStark.Cloud1
            src={`/images/ToniStark/cloud1.png`}
            id={"cloud1"}
          />
          <ToniStark.Cloud2
            src={`/images/ToniStark/cloud2.png`}
            id={"cloud2"}
          />
          <ToniStark.IronMan
            src={`/images/ToniStark/ironman.png`}
            id={"ironman"}
          />
          <ToniStark.Jet src={`/images/ToniStark/jet.png`} id={"jet"} />
        </ToniStark.Hero>
      </refToniStark>
      <ToniStark.Content>
        <ToniStark.TextWrapper>
          <ToniStark.Title>
            I`m Toni Stark and i`m ot afraid you!
          </ToniStark.Title>
          <ToniStark.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            blanditiis aut veniam aliquid eos velit harum saepe vitae magnam
            sequi atque est temporibus dolore officiis, beatae ipsum quibusdam,
            reiciendis libero. Fuga quos debitis cum unde ab sit consequatur
            magnam animi facilis, dolor consequuntur quasi neque nam labore ipsa
            est aliquid aspernatur minus modi esse sed. Incidunt inventore nisi
            delectus iusto? Excepturi aut necessitatibus quos nulla, temporibus
            vel amet explicabo quidem autem aperiam labore exercitationem maxime
            perspiciatis laboriosam reiciendis esse sapiente, earum voluptas
            pariatur repudiandae eius ipsum suscipit architecto? Nulla, labore!
            Possimus ducimus sed, a ut illo natus sint dolore labore voluptas
            iure! Officiis labore perferendis iure illo eum nemo similique natus
            voluptas, itaque cum suscipit, distinctio, praesentium unde nam
            cupiditate. Ad incidunt alias excepturi error temporibus ducimus quo
            blanditiis id aspernatur, hic sint magnam iure asperiores aliquam
            quidem amet eum harum est inventore veniam tenetur, mollitia ipsam.
            Omnis, minima pariatur. Natus repellat quod ipsa, dicta laudantium,
            exercitationem est soluta eaque et possimus, velit quam quis unde
            nobis alias sapiente ea dolorem fugit. Alias deserunt dolores quas
            sequi nulla? Sunt, ipsum! Repellat autem, dicta placeat quae
            delectus doloremque nostrum amet perspiciatis laboriosam facere sed
            minima excepturi assumenda labore aspernatur itaque earum ipsam
            soluta dolores cum quam dolorem praesentium magni. Minus,
            consectetur? Officia suscipit similique laudantium quasi architecto
            quaerat repellat neque sunt illum magnam veniam illo pariatur
            tenetur facilis eos a quos quis quia reiciendis, explicabo impedit
            necessitatibus aspernatur repudiandae. Excepturi, inventore? Dolore
            nesciunt sint deleniti explicabo, delectus aliquam quidem
            voluptates, inventore exercitationem suscipit distinctio dignissimos
            deserunt corporis porro earum beatae error! Explicabo perferendis
            alias nisi, iure deserunt est voluptatem eaque cum. Alias vel beatae
            explicabo impedit cumque neque ullam consequatur obcaecati veniam
            tempore omnis voluptatum fugiat architecto illum voluptate qui
            officia reprehenderit, magnam suscipit? Quasi, excepturi aspernatur
            nulla et dolor asperiores? Nostrum et at ab accusamus perferendis
            porro deserunt cumque ex laudantium iure, neque ducimus voluptatum
            suscipit, mollitia minus distinctio alias quasi, tempora delectus
            vitae consectetur dolores dolore quas. Cumque, libero? Quisquam,
            voluptates dicta aliquid est eos tenetur cupiditate non maiores
            pariatur ab adipisci magnam qui illum corrupti consequuntur illo
            incidunt repudiandae exercitationem saepe ducimus hic. Suscipit
            aliquid laborum laudantium illum. Cumque alias, voluptates nulla
            necessitatibus maxime ad odio cum, praesentium explicabo provident
            cupiditate iusto autem dolores pariatur? Facere, adipisci ipsum
            praesentium omnis molestias optio magni saepe, vel, autem quam iure.
            Excepturi omnis quis dignissimos molestiae minima sed repellendus
            adipisci dolores facilis iusto? Quod modi quidem quisquam laboriosam
            distinctio repudiandae fugit sapiente iste soluta recusandae,
            asperiores ab, iusto architecto neque quas! Hic ut doloribus
            exercitationem maxime deserunt! Libero minima sunt quo id, officiis
            totam. Fuga, molestias hic accusamus optio nobis nisi assumenda
            suscipit eius impedit, ducimus reprehenderit voluptas distinctio
            veritatis harum! Beatae amet voluptatum magni quam rem illo eius
            nesciunt iure recusandae dolor, culpa quo necessitatibus minus
            pariatur quia aliquid corporis similique adipisci, exercitationem
            dignissimos accusantium numquam, sint odio. Sint, molestiae! Magnam
            perferendis ipsum maiores hic est assumenda, tenetur laboriosam
            praesentium quo, id cupiditate voluptatem fugiat, porro pariatur
            sunt. Obcaecati, cum provident. Laborum sapiente magnam voluptatibus
            quam dolore dolorum, necessitatibus consequatur. Eius, optio
            aspernatur? Dolores cupiditate, eos dolorum corrupti quibusdam
            adipisci, quae assumenda, reprehenderit repudiandae optio ipsa
            reiciendis quasi veniam nobis eum cumque ad! Libero est nemo laborum
            quibusdam, labore quisquam. Culpa vero nemo officia voluptatibus
            totam, est quis velit explicabo a aspernatur natus ullam doloribus
            reprehenderit error at expedita numquam doloremque dicta, esse eos?
            Nobis similique pariatur provident fuga atque? Eos velit fugiat et
            ex, eius accusamus quos, nostrum ducimus magnam vitae atque
            doloribus! Delectus expedita laudantium, libero doloremque magni
            nesciunt sunt ratione vitae exercitationem molestias saepe quos illo
            tempore. Blanditiis eius consequuntur fugiat soluta quaerat? Culpa
            ipsam quisquam excepturi natus distinctio velit tenetur quo expedita
            ipsum odit perferendis doloribus aspernatur provident porro soluta,
            laudantium nobis inventore aut consequuntur possimus. Earum amet
            laborum eaque dicta consectetur nostrum libero error necessitatibus.
            Provident distinctio eum omnis quis ducimus, optio recusandae modi
            laudantium voluptatem aliquam dolorem nam possimus porro nemo
            dolores, officiis dicta? Magnam omnis reprehenderit ut temporibus
            quos repellat architecto numquam totam. Repellat perferendis
            perspiciatis labore nam laboriosam quibusdam ipsam blanditiis
            officia placeat eligendi, tenetur vel repellendus nihil quia.
            Facere, asperiores quisquam! Corporis dolore sit fugiat? Ad, maxime.
            Doloribus sit, alias eum minima aliquid harum quaerat, in iure
            perferendis praesentium illum officia, culpa fuga ab aperiam.
            Aperiam vel necessitatibus dolorem molestiae ut? Quaerat adipisci,
            accusantium accusamus laborum neque alias laudantium. At, sed
            quibusdam numquam possimus ipsa provident aut fuga eum itaque
            eligendi? Velit dolore corporis nesciunt, fuga nisi minima saepe
            tempore soluta? Possimus aspernatur, sequi optio corporis
            repudiandae aliquid! Exercitationem voluptatum consequatur iure
            dolore aspernatur saepe sapiente sequi eum magni est voluptate
            labore itaque ab dolorem quaerat voluptates obcaecati quos, dolorum
            provident. Aperiam quisquam impedit commodi, ab aliquid est
            asperiores dolores praesentium nobis repellat, quaerat rerum
            obcaecati, distinctio ipsam mollitia? Dolor corporis ipsa ducimus
            dolorem doloremque ut modi quasi fugit autem voluptatum? Dicta illo
            ut officiis placeat natus, nostrum, exercitationem, possimus
            suscipit voluptate voluptatum quas. Atque possimus enim odit dolorem
            similique eveniet alias officiis omnis! Maxime quibusdam unde
            voluptatum magnam vitae amet! Recusandae expedita, perferendis nulla
            ullam quisquam ex illo non, nam, ipsa beatae nemo repudiandae nobis.
            Nihil voluptatum doloribus facilis debitis! Accusantium consequatur
            quos distinctio molestias natus expedita deserunt fugiat at. Omnis
            id illo nemo optio cum molestiae provident nisi, quaerat voluptas,
            aperiam iure odio. Provident voluptatem, rem dolorum reprehenderit
            ratione sint illo itaque sed architecto eum ea accusamus fugiat
            ducimus?
          </ToniStark.Text>
        </ToniStark.TextWrapper>
      </ToniStark.Content>
    </div>
  );
}

export default TonistarkContainer;
