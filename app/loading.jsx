"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-ivory">
      <div className="space-y-2 text-center">
        <p className="text-3xl font-bold text-yellow-600 lowercase">Keep</p>
        {["Loading", "Loading", "Loading", "Loading"].map((word, index) => (
          <p
            key={index}
            className="text-3xl font-bold text-yellow-600 lowercase transition-opacity duration-300"
            style={{
              // delay per word
              animationDelay: `${(index + 1) * 500}ms`,
              opacity: 0,
              animationName: "fadeIn",
              animationFillMode: "forwards",
              // how long each word stays on before next one appears
              animationDuration: "0.3s",
            }}
          >
            {word}
          </p>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
