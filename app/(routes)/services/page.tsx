import MikuImage from "@/components/Mikuimage";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <MikuImage />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Herramientas que domino <span className="font-bold text-secondary"></span>
          </h1>

          <ul className="mb-6 space-y-2 text-gray-300 text-lg list-disc list-inside">
            <li><span className="font-semibold text-white">Blender:</span> Modelado y animación 3D</li>
            <li><span className="font-semibold text-white">Photoshop:</span> Edición fotográfica y composición</li>
            <li><span className="font-semibold text-white">Illustrator:</span> Diseño vectorial y branding</li>
            <li><span className="font-semibold text-white">Filmora:</span> Edición de video accesible y creativa</li>
            <li><span className="font-semibold text-white">Audacity:</span> Edición de audio y limpieza de pistas</li>
            <li><span className="font-semibold text-white">DaVinci Resolve:</span> Corrección de color y edición profesional</li>
            <li><span className="font-semibold text-white">Frontend (en aprendizaje):</span> React y CSS para interfaces web</li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;