import { useEffect, useRef } from "react";

export default function PicTimePost({ embedCode }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = embedCode;

    // execução dos scripts
    const scripts = containerRef.current.querySelectorAll("script");

    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");

      // copia atributos
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });

      newScript.text = oldScript.text;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

  }, [embedCode]);

  return <div ref={containerRef}></div>;
}