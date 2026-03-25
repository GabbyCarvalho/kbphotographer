import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function HoneyBookEmbed({ pid, placementId }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;

    // limpa completamente
    containerRef.current.innerHTML = "";

    // recria container
    const div = document.createElement("div");
    div.className = `hb-p-${placementId}`;

    containerRef.current.appendChild(div);

    // recria script TODA VEZ (🔥 isso resolve)
    const script = document.createElement("script");
    script.src =
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    script.async = true;

    // config global
    window._HB_ = {
      pid: pid,
    };

    containerRef.current.appendChild(script);

  }, [pid, placementId, location.pathname]);

  return (
    <div ref={containerRef}>
      {/* pixel */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.honeybook.com/p.png?pid=${pid}`}
        alt=""
      />
    </div>
  );
}