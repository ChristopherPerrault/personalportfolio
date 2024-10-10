"use client";

export default function Loading({ fadeOut }) {
  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-ivory ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <div className="space-y-2 text-center">
        <p className="text-3xl font-bold text-yellow-600 ">keep</p>
        {["loading,", "loading,", "loading,", "loading"].map((word, index) => (
          <p
            key={index}
            className="text-3xl font-bold text-yellow-600 transition-opacity duration-300"
            style={{
              animationDelay: `${(index + 1) * 500}ms`, // Adjust delay for each word
              opacity: 0,
              animationName: "fadeIn",
              animationFillMode: "forwards",
              animationDuration: "0.3s", // Duration of each word appearance
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
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .fade-out {
          animation: fadeOut 0.5s forwards;
        }
      `}</style>
    </div>
  );
}
