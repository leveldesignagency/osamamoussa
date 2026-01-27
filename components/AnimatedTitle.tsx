"use client";

interface AnimatedTitleProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function AnimatedTitle({ children, className = "", delay = 0 }: AnimatedTitleProps) {
  return (
    <span className={`title-letter-fade ${className}`}>
      {children.split("").map((char, index) => (
        <span
          key={index}
          className="title-char"
          style={{
            animationDelay: `${(index * 0.1) + delay}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
