
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/Mikuportatil.png" width="100" height="100" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    ) 
}
