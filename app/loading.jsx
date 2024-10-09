"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-ivory">
      <div className="text-center">
        <p className="text-3xl font-bold text-yellow-600 lowercase">Keep</p>
        <div className="space-y-2">
          {["Loading", "Loading", "Loading", "Loading"].map((word, index) => (
            <p
              key={index}
              className="text-3xl font-bold text-yellow-600 lowercase"
              style={{
                opacity: 0, // Start with opacity 0
                animation: `fadeIn 300ms forwards`,
                animationDelay: `${(index + 1) * 300}ms`, // Delay for each loading word
                animationFillMode: "forwards", // Ensure the final state persists
              }}
            >
              {word}
            </p>
          ))}
        </div>
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
