"use client";

import LoginSection from "@/ui_components/Onboarding/LoginSection";
import SignupSection from "@/ui_components/Onboarding/SignupSection";
import { useState } from "react";

const ModelContents = () => {
  const[OnboardingView,setOnboardingView] = useState('login');

  
const currentSection=()=>{
 if(OnboardingView ==='login') return(
  <LoginSection setOnboardingView={setOnboardingView} />
 );
  else if(OnboardingView ==='signUp') return(
    <SignupSection setOnboardingView={setOnboardingView}/>
  );
}

  return (
  <div>{currentSection()}</div>
  );
};

export default ModelContents;
