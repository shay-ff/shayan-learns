"use client";
import Image from "next/image";

export default function Intro() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAFAF9] to-[#E6EBE0] dark:from-gray-900 dark:to-gray-800 px-6 py-24 transition-colors duration-500">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Profile Image */}
                <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#3A6351] dark:border-green-400">
                    <Image
                        src="/profile.jpeg"
                        alt="Mohammad Ali"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
                {/* Intro Text */}
                <div className="text-center md:text-left max-w-xl space-y-4">
                    <h1 className="text-4xl md:text-5xl font-semibold text-[#3A6351] dark:text-green-300 leading-tight tracking-tight">
                        Hello, I'm Mohammad Ali
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        I am someone who loves building and understanding systems from the ground up. I explore low-level concepts, take on challenging problems, enjoy competitive programming, and share what I learn along the way.
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                        This blog is my digital notebook—a space to document thoughts, experiments, and insights. Thanks for stopping by!
                    </p>
                </div>
            </div>
        </section>
    );
}
