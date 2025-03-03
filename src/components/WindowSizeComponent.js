import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import "./WindowSizeComponent.css"; // Подключаем стили

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="window-size-container">
      <h2 className="window-size-title">Текущие размеры окна</h2>
      <p className="window-size-text">📏 Ширина: {width}px</p>
      <p className="window-size-text">📐 Высота: {height}px</p>
    </div>
  );
};

export default WindowSizeComponent;
