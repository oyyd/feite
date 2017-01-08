import React from 'react';
import bgImg from '../imgs/intro_bg.jpg';

import './index.css';

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="mash" />
      <img className="bg" alt="bg" src={bgImg} />
      <div className="content">
        <h1 className="title">狒特科技</h1>
        <h2 className="subtitle">狒特科技是一个高新技术企业，专注于光学/惯性运动追踪系统的开发，应用于AR/VR和智能机器人领域，致力于为企业提供行业解决方案及咨询服务。</h2>
      </div>
    </div>
  );
};
