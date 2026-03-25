import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PicTimePost({ embedCode }) {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!ref.current) return;

    // 🔥 força reset TOTAL do container
    ref.current.innerHTML = "";
    ref.current.replaceChildren();

    const wrapper = document.createElement("div");
    wrapper.innerHTML = embedCode;

    const scripts = wrapper.querySelectorAll("script");

    scripts.forEach((script) => {
      const src = script.getAttribute("src");

      // remove script inline (bugado)
      if (!src) {
        script.remove();
        return;
      }

      // 🔥 remove script antigo com MESMO src (ESSENCIAL)
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.remove();
      }

      // recria script (força reload)
      const newScript = document.createElement("script");
      newScript.src = src;
      newScript.async = true;

      document.body.appendChild(newScript);

      script.remove();
    });

    ref.current.appendChild(wrapper);

    // 🔥 força reprocessamento visual
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);

  }, [embedCode, location.pathname]);

  return <div ref={ref}></div>;
}