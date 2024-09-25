import React from "react";
import QBotAsset from "../../public/folks-mobile-phone.png";
import Typed from 'typed.js';
import Waves from '../../public/backgrounds/bg_wave.png'; // Asumo que tienes este logo

function HomeView() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Android y Flutter.', 'UI y UX.'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section 
                id="inicio" 
                className="relative min-h-screen flex flex-col sm:flex-row items-center justify-evenly gradient-background bg-gradient-second-purple dark:text-white overflow-hidden z-10"
                style={{
                    backgroundImage: `url(${Waves})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#818cf8'
                }}
            >
                <div className="relative flex w-screen h-1/2 sm:h-full flex-col justify-self-end items-center gap-8 mt-5">
                    <article className="absolute flex text-center flex-col z-20 gap-8 text-black w-[250px] tablet:w-fit h-[500px] justify-center items-center">
                        <h1 className="font-title text-2xl tablet:text-4xl">{"<Hola!, Soy Paul/>"}</h1>
                        <p className="text-base tablet:text-lg font-label text-blak sm:text-wrap">
                            Un desarrollador amante de <span className="font-bold" ref={el}></span>
                        </p>
                    </article>

                    <img src={QBotAsset} className="absolute z-10 drop-shadow-xl tablet:scale-125 scale-90 sm:overflow-y-hidden"/>
                </div>

            </section>
        </>
    );
}

export default HomeView;