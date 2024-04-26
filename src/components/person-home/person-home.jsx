import React, { useEffect } from "react";
import "./person-home.css";
import { gsap } from "gsap";

const PersonHome = () => {

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });
        const text = document.querySelector(".text-inner");
        const shape = document.querySelector(".shape .rotate");

        tl.to(shape, {
            duration: 1,
            scale: 30,
            rotate: 240,
            ease: "Expo.easeIn",
        }).to(
            text,
            {
                duration: 1,
                translateX: 0,
                ease: "Power2.easeIn",
            },
            0
        );

        const handleScroll = () => {
            const progress =
                window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
            tl.progress(progress);
            document.body.style.setProperty("--scroll", progress);
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="person-home">
            <div class="track">
                <div class="overlay">
                    <div class="text">
                        <div class="text-inner">
                            Please navigate through Navbar to create or view user list
                        </div>
                    </div>
                    <div class="shape">
                        <div class="scale">
                            <div class="rotate">
                                <div class="img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162">
                                        <path
                                            class="hsc-img-path"
                                            d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z"
                                            fill="#000"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gradient"></div>
                </div>
            </div>
        </div>
    );
};

export default PersonHome;
