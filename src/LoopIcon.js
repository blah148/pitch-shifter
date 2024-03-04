import React from 'react';

const LoopIcon = ({ strokeColor, fillColor }) => (
  <svg width="50px" height="50px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" fill="transparent"/>
    <path d="M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4     25C4 18.3502 9.39624 13 16 13L44 13" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 7L44 13L38 19" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default LoopIcon;


