import React, { useRef } from "react";

export function ScrollDemo() {
  const homeRef = useRef(null);
  const productRef = useRef(null);

  const scrollSmoothly = (id) => {
    if (id === "home") {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (id === "products") {
      productRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <section>
        <h1>Head section</h1>
        <ul>
          <li>
            <a onClick={() => scrollSmoothly("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollSmoothly("products")}> products</a>
          </li>
          <li>
            <a href="#about"> about</a>
          </li>
          <li>
            <a href="#career"> career</a>
          </li>
        </ul>
      </section>
      <section ref={homeRef} id="home">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem
          tempore, rerum nobis eius beatae placeat accusamus temporibus fuga
          numquam quidem sit quia magni sunt quis delectus natus odit corrupti,
          dolores incidunt molestias accusantium reprehenderit! Praesentium
          dolore laudantium repellat soluta vero cum laborum ea aliquid quasi
          nam, pariatur ad id delectus qui repellendus illo dolores facere
          mollitia unde consequuntur aut recusandae? Fuga eos ducimus libero
          itaque natus architecto similique possimus tenetur repellat,
          blanditiis ipsam in autem adipisci laboriosam quas incidunt. Saepe hic
          pariatur sint quam dicta eveniet, consequuntur odit harum id corrupti
          cumque accusantium unde ut sunt veritatis ipsum maiores.
        </p>
      </section>
      <section ref={productRef} id="products">
        <h1>Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem
          tempore, rerum nobis eius beatae placeat accusamus temporibus fuga
          numquam quidem sit quia magni sunt quis delectus natus odit corrupti,
          dolores incidunt molestias accusantium reprehenderit! Praesentium
          dolore laudantium repellat soluta vero cum laborum ea aliquid quasi
          nam, pariatur ad id delectus qui repellendus illo dolores facere
          mollitia unde consequuntur aut recusandae? Fuga eos ducimus libero
          itaque natus architecto similique possimus tenetur repellat,
          blanditiis ipsam in autem adipisci laboriosam quas incidunt. Saepe hic
          pariatur sint quam dicta eveniet, consequuntur odit harum id corrupti
          cumque accusantium unde ut sunt veritatis ipsum maiores.
        </p>
      </section>
      <section id="about">
        <h1>about</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem
          tempore, rerum nobis eius beatae placeat accusamus temporibus fuga
          numquam quidem sit quia magni sunt quis delectus natus odit corrupti,
          dolores incidunt molestias accusantium reprehenderit! Praesentium
          dolore laudantium repellat soluta vero cum laborum ea aliquid quasi
          nam, pariatur ad id delectus qui repellendus illo dolores facere
          mollitia unde consequuntur aut recusandae? Fuga eos ducimus libero
          itaque natus architecto similique possimus tenetur repellat,
          blanditiis ipsam in autem adipisci laboriosam quas incidunt. Saepe hic
          pariatur sint quam dicta eveniet, consequuntur odit harum id corrupti
          cumque accusantium unde ut sunt veritatis ipsum maiores.
        </p>
      </section>
      <section id="career">
        <h1>career</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem
          tempore, rerum nobis eius beatae placeat accusamus temporibus fuga
          numquam quidem sit quia magni sunt quis delectus natus odit corrupti,
          dolores incidunt molestias accusantium reprehenderit! Praesentium
          dolore laudantium repellat soluta vero cum laborum ea aliquid quasi
          nam, pariatur ad id delectus qui repellendus illo dolores facere
          mollitia unde consequuntur aut recusandae? Fuga eos ducimus libero
          itaque natus architecto similique possimus tenetur repellat,
          blanditiis ipsam in autem adipisci laboriosam quas incidunt. Saepe hic
          pariatur sint quam dicta eveniet, consequuntur odit harum id corrupti
          cumque accusantium unde ut sunt veritatis ipsum maiores.
        </p>
      </section>
    </div>
  );
}
