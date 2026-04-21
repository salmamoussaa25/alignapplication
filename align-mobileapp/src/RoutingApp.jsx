import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Struggles from './pages/Struggles';
import Rhythm from './pages/Rhythm';
import Mode from './pages/Mode';
import FirstTask from './pages/FirstTask';
import FirstTimeChoice from './pages/FirstTimeChoice';
import Ready from './pages/Ready';
import HomeScreen from './pages/HomeScreen';
import Planner from './pages/Planner';
import Habits from './pages/Habits';
import ProfileScreen from './pages/ProfileScreen';

const RoutingApp = () => {
  const [onboardingData, setOnboardingData] = useState({
    struggles: [],
    energy: '',
    workStyle: '',
    mode: '',
    firstTask: '',
    firstTimeChoice: ''
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/onboarding/struggles"
          element={
            <Struggles
              onboardingData={onboardingData}
              setOnboardingData={setOnboardingData}
            />
          }
        />
        <Route
          path="/onboarding/rhythm"
          element={
            <Rhythm
              onboardingData={onboardingData}
              setOnboardingData={setOnboardingData}
            />
          }
        />
        <Route
          path="/onboarding/mode"
          element={
            <Mode
              onboardingData={onboardingData}
              setOnboardingData={setOnboardingData}
            />
          }
        />
        <Route
          path="/onboarding/first-task"
          element={
            <FirstTask
              onboardingData={onboardingData}
              setOnboardingData={setOnboardingData}
            />
          }
        />
        <Route
          path="/onboarding/first-time"
          element={
            <FirstTimeChoice
              onboardingData={onboardingData}
              setOnboardingData={setOnboardingData}
            />
          }
        />
        <Route path="/onboarding/ready" element={<Ready />} />
        <Route path="/home" element={<HomeScreen currentScreen="home" />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/focus" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;
