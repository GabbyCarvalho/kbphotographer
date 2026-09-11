import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function GalleriesRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    // Preserve query parameters in case Pic-Time sent tokens or IDs in the URL
    const searchParams = location.search;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      // Redirect internally to the clean route without .html
      navigate(`/galleries${searchParams}`, { replace: true });
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [navigate, location]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Loading your gallery...</h2>
      <p style={{ color: "#666", margin: "15px 0" }}>
        You will be automatically redirected in {countdown} second(s)...
      </p>
      <a
        href={`/galleries${location.search}`}
        style={{
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
          marginTop: "10px",
        }}
      >
        Click here if you are not redirected
      </a>
    </div>
  );
}