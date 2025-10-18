import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/Mikuportatil.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Un lema muy util es: si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000,
                                'puedes diseñarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como diseñadora grafica estoy de la mano con la  edicion de video, animaciones 2d y 3d,  me dedico a combinar diseño para crear experiencias  impactantes asi esperando entrar al mundo del frontend.
                    </p>
<div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
  <a
    href="/portfolio"
    className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
  >
    Tareas de S.C.
  </a>
  <a
    href="/about-me"
    className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
  >
    Mi informacion 
  </a>
</div>
                    
                </div>
            </div>
        </div>
    );
}

export default Introduction;