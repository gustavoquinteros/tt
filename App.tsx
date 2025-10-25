
import React, { useState } from 'react';

const VIDEO_1_URL = 'https://raw.githubusercontent.com/gustavoquinteros/cave/codex/program-online-portfolio-page/social__gustavoquinteros_httpss.mj.runNN8IPS8203Q_reading_a_book_--a_52a57808-a263-46b0-a2a6-49e19515dc6b_0.mp4';
const VIDEO_2_URL = 'https://raw.githubusercontent.com/gustavoquinteros/cave/codex/program-online-portfolio-page/social__gustavoquinteros_httpss.mj.runSbnYtgq5O5o_exercise_on_an_exe_a0953ca8-96fb-4c33-9e35-c1e0654fa8e1_0.mp4';

const App: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string>(VIDEO_1_URL);

  const videoOptions = [
    { name: 'Relax & Read', url: VIDEO_1_URL },
    { name: 'Workout Time', url: VIDEO_2_URL },
  ];

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      <video
        key={activeVideo}
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={activeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white p-4">
        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
                Video Mood Switcher
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                Select a mood below to change the background video. Each video will loop continuously.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {videoOptions.map((option) => (
                <button
                key={option.name}
                onClick={() => setActiveVideo(option.url)}
                className={`
                    w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out
                    focus:outline-none focus:ring-4 focus:ring-opacity-50
                    ${
                    activeVideo === option.url
                        ? 'bg-indigo-600 text-white ring-indigo-500 transform scale-105'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    }
                `}
                >
                {option.name}
                </button>
            ))}
            </div>
        </div>
      </div>
    </main>
  );
};

export default App;
