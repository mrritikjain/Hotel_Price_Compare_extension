import React from "react";

const App = () => {
  return (
    <div className="w-[400px] min-h-[450px] bg-blue-50 text-slate-800">
      <header className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8 rounded-full border border-white/20 bg-white object-cover" />
            Hotel Price Compare
          </h1>
        </div>
      </header>
    </div>
  );
};

export default App;
