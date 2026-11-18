// src/components/HydrogenVectorCloseups.js
// 专为 Hydrogen 高倍特写镜头生成的无损 SVG 矢量轮廓绘制模块

export function drawHydrogenProfileVector(ctx, x, y, scale, progress = 1, palette) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // 1. 头部与猫耳、呆毛外轮廓（对应 图片风格转换（SVG格式） (3).png 侧颜几何特写）
  const silhouettePath = new Path2D(
    "M -15,-165 C -35,-195 -10,-225 15,-215 C -5,-205 -12,-185 5,-168 " +
    "C 35,-175 75,-195 105,-225 C 115,-185 110,-145 95,-115 " +
    "C 135,-115 165,-85 155,-45 C 145,-15 115,-10 95,-20 " +
    "C 115,35 125,105 115,175 L 35,175 C 45,115 40,65 25,25 " +
    "C 5,35 -25,45 -45,55 C -55,35 -60,20 -75,15 C -65,0 -55,-10 -65,-25 " +
    "C -95,-35 -115,-65 -105,-105 C -95,-145 -65,-165 -35,-168 " +
    "C -65,-185 -95,-195 -115,-180 C -105,-155 -85,-140 -65,-135 Z"
  );

  // 描边生长动画（用于 circle / tangent 数学几何歌词段落）
  ctx.lineWidth = 3.5;
  ctx.strokeStyle = palette.aiInk; // 冰蓝 #5EB5F7
  ctx.setLineDash([1600]);
  ctx.lineDashOffset = 1600 * (1 - progress);
  ctx.stroke(silhouettePath);

  if (progress > 0.85) {
    ctx.globalAlpha = (progress - 0.85) / 0.15;
    ctx.fillStyle = palette.aiInk;
    ctx.fill(silhouettePath);
  }

  // 2. 四角星发饰矢量细节（高倍放大保持锐利边缘）
  const starPin = new Path2D(
    "M 62,-158 L 72,-125 L 105,-115 L 72,-105 L 62,-72 L 52,-105 L 19,-115 L 52,-125 Z"
  );
  ctx.globalAlpha = 1;
  ctx.setLineDash([]);
  ctx.fillStyle = palette.darkInk; // 深炭黑 #0D0E12
  ctx.fill(starPin);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = palette.userInk; // 象牙白高光边缘
  ctx.stroke(starPin);

  ctx.restore();
}

export function drawHydrogenEyeCloseupVector(ctx, x, y, scale, pulse = 0, palette) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale * (1 + pulse * 0.08), scale * (1 + pulse * 0.08));

    // 对应 图片风格转换（SVG格式） (4).png 高潮回眸单眼大特写
    // 上眼睑锋利墨线
    const upperLid = new Path2D(
        "M -85,-10 C -45,-48 25,-52 85,-22 C 55,-12 35,-15 -5,-22 C -45,-25 -65,-15 -85,-10 Z"
    );
    ctx.fillStyle = palette.darkInk;
    ctx.fill(upperLid);

    // 冰蓝虹膜与深邃瞳孔
    ctx.beginPath();
    ctx.ellipse(-5, -8, 26, 22, -0.1, 0, Math.PI * 2);
    ctx.fillStyle = palette.aiInk;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = palette.darkInk;
    ctx.stroke();

    // 瞳孔核心与高光点
    ctx.beginPath();
    ctx.arc(-5, -8, 10, 0, Math.PI * 2);
    ctx.fillStyle = palette.darkInk;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(-14, -16, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = palette.userInk;
    ctx.fill();

    ctx.restore();
}