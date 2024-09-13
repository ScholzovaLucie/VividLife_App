// src/pages/Dashboard.js
import React, { useState } from 'react';
import { addProgress } from '../firebase';
import { useAuth } from '../hooks/useAuth';

function Dashboard() {
  const user = useAuth();
  const [sober, setSober] = useState(false);

  const handleSubmit = async () => {
    if (user) {
      await addProgress(user.uid, sober);
      alert('Your progress has been recorded!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Your Progress</h1>
      <p>Track your progress and see your life become more colorful!</p>
      <label>
        Were you sober today?
        <input
          type="checkbox"
          checked={sober}
          onChange={(e) => setSober(e.target.checked)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit Progress</button>
    </div>
  );
}

export default Dashboard;
