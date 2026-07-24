import { useNavigate } from "react-router-dom";
import vi from "../../public/trailer/narurto-trailer.mp4";

export default function Trailer() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black">
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 z-10 bg-orange-500 px-5 py-2 rounded-full text-white"
      >
        ← Back
      </button>
      {/* <video
        src="../../public/trailer/naruto-trailer.mp4"
        controls
        autoPlay
        className="w-full h-screen object-contain"
      /> */}
      <video controls autoPlay muted playsInline className="w-full h-screen">
        <source src={vi} type="video/mp4" />
      </video>
    </div>
  );
}
