import { useEffect, useRef } from "react";

export default function ExternalEmbed({
  src,
  children,
  type = "script",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // só limpa tudo se for embed apenas por script
    if (type === "script") {
      containerRef.current.innerHTML = "";
    }

    // evita duplicar script
    const existingScript = containerRef.current.querySelector(
      `script[src="${src}"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && type === "script") {
        containerRef.current.innerHTML = "";
      }
    };
  }, [src, type]);

  return <div ref={containerRef}>{children}</div>;
}
 
