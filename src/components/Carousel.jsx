import { useEffect, useState } from "react";

export default function Carousel({ objects }) {
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((c) => (c + 1) % objects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [objects.length]);

  return (
    <div className="h-full w-full overflow-hidden flex relative">
      {objects.map((s, index) => (
        <div
          key={`a-${index}`}
          className={
            "h-full w-full shrink-0 absolute items-center flex " +
            (index !== curr
              ? index === (curr + 1) % objects.length
                ? "translate-x-full"
                : "-translate-x-full transition-all duration-1000"
              : "transition-all duration-1000")
          }
        >
          <img src={s.img} alt={index} className="h-full w-full object-cover" />
        </div>
      ))}

      {/* copy B */}
    </div>
  );
}
