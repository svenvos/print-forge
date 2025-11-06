import type { JSX } from "react";

export default function AboutHighlight({ children, className }: {children: JSX.Element[], className?: string | string[]}) {
    return (
        <div className={`max-w-[350px] mt-5 flex flex-col gap-5 ${className ? className : ""}`}>
            {children}
        </div>
    );
}
