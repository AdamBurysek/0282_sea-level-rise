import "./howToPage.css";
import { useEffect, useRef } from "react";

const HowToPage = (props: any) => {
  const howToElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (howToElement.current) {
      howToElement.current.scrollTo({ top: 0 });
    }
  }, [props.activePage === "how-to"]);

  return (
    <div
      className={
        props.activePage === "how-to"
          ? "how-to_window"
          : "how-to_window how-to_hide"
      }
    >
      <div
        ref={howToElement}
        className="how-to_content"
      >
        {props.language === "cz" && (
          <div>
            <p>
              Tlačítky uprostřed akvárií můžete ovládat hladinu moře a sledovat,
              jak se zvyšuje nebo snižuje. Ve všech akváriích se mořská hladina
              zvedá/klesá stejně rychle. Vlivem rozdílných tvarů pobřeží
              (Bangladéš, Nizozemsko, Norsko, Florida) však můžete pozorovat
              odlišnosti v rozsahu zaplaveného území.
            </p>
            <p>
              Použijte počítačovou aplikaci, abyste se mohli podívat i na jiná
              místa na Zemi. Vyberte si z nabídky míst, označených na mapě
              špendlíkem. Pak můžete zjistit, jak velká část území by byla
              zaplavena, kdyby hladina moře stoupla až o 9 m oproti současnému
              stavu.
            </p>
          </div>
        )}
        {props.language === "en" && (
          <div>
            <p>
              You can control the sea level by pressing the buttons in the
              middle of the aquariums and watch how it rises or falls. The sea
              level rises/falls at the same rate in all aquaria. However, due to
              the different shapes of the coastlines (Bangladesh, the
              Netherlands, Norway and Florida) you can observe differences in
              the extent of the flooded area.
            </p>
            <p>
              Use the computer application to visit other places on Earth. Pick
              one of the places that is marked with pins on the map. Then you
              can find out what area would be flooded if the sea level increased
              by up to 9 m compared to the current situation.
            </p>
          </div>
        )}
        {props.language === "de" && (
          <div>
            <p>
              Wollen Sie die Meereshöhe steuern, dann drücken Sie die Knöpfe in
              der Mitte der Aquarien und beobachten Sie, wie sie steigt oder
              fällt. In allen Aquarien steigt/sinkt der Meeresspiegel gleich
              schnell. Durch den Einfluss der unterschiedlichen Küstenformen
              (Bangladesch, Niederlande, Norwegen, Florida) könnt ihr jedoch
              einen Unterschied im Umfang des überschwemmten Gebiets beobachten.
            </p>
            <p>
              Verwendet die Computeranwendung, um auch andere Orte auf der Erde
              ansehen zu können. Wählt aus dem Angebot der Orte aus, die auf der
              Karte mit einer Stecknadel markiert sind. Dann könnt ihr
              untersuchen, ein wie großer Teil des Gebiets überschwemmt werden
              würde, wenn der Meeresspiegel um 9 m gegenüber dem derzeitigen
              Stand steigen würde.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowToPage;
