import { useEffect } from "react";

export default function HoneyBookEmbed({ pid, placementId }) {
  useEffect(() => {
    if (window._HB_) return;

    window._HB_ = window._HB_ || {};
    window._HB_.pid = pid;

    const script = document.createElement("script");
    script.src =
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [pid]);

  return (
    <>
      <div className={`hb-p-${placementId}`}></div>

      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.honeybook.com/p.png?pid=${pid}`}
        alt=""
      />
    </>
  );
}
