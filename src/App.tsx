import CirclePhoto from "./components/CirclePhoto";
import Typewriter from "./components/Typewriter";
import "./styles/App.sass";

export default function App() {
  return (
    <div className="main-content">
      <CirclePhoto
        href="https://www.linkedin.com/in/filipe-bacof/"
        src="/profilepic.jpg"
        alt="minha foto de perfil"
      />
      <Typewriter />
    </div>
  );
}
