import "./knowMorePage.css";
import { useEffect, useRef } from "react";

const KnowMorePage = (props: any) => {
  const knowMoreElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (knowMoreElement.current) {
      knowMoreElement.current.scrollTo({ top: 0 });
    }
  }, [props.activePage === "know-more"]);
  return (
    <div
      className={
        props.activePage === "know-more"
          ? "know-more_window"
          : "know-more_window know-more_hide"
      }
    >
      <div
        ref={knowMoreElement}
        className="know-more_content"
      >
        {/* {props.language === "cz" && (
          <div dangerouslySetInnerHTML={{ __html: czText }} />
        )}
        {props.language === "en" && (
          <div dangerouslySetInnerHTML={{ __html: enText }} />
        )}
        {props.language === "de" && (
          <div dangerouslySetInnerHTML={{ __html: deText }} />
        )} */}
      </div>
    </div>
  );
};

export default KnowMorePage;
