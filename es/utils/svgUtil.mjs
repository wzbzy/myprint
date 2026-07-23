import * as d3Selection from 'd3-selection';

function computeLineAngle(lineA, lineB) {
  var dx1 = lineA.end.x - lineA.start.x;
  var dy1 = lineA.end.y - lineA.start.y;
  var dx2 = lineB.end.x - lineB.start.x;
  var dy2 = lineB.end.y - lineB.start.y;
  var angle1 = Math.atan2(dy1, dx1);
  var angle2 = Math.atan2(dy2, dx2);
  var angle = angle2 - angle1;
  if (angle < 0) {
    angle += 2 * Math.PI;
  }
  return angle;
}
function rad2Ang(angle) {
  return angle * (180 / Math.PI);
}
function rotatePoint(centerX, centerY, x, y, angle) {
  return {
    x: centerX + Math.cos(angle) * (x - centerX) - Math.sin(angle) * (y - centerY),
    y: centerY + Math.sin(angle) * (x - centerX) + Math.cos(angle) * (y - centerY)
  };
}
function dist(p, m) {
  if (!m) {
    return 0;
  }
  return Math.sqrt((p[0] - m.x) ** 2 + (p[1] - m.y) ** 2);
}
function updateSvg(chart, svgOptions, draw) {
  const element = svgOptions.element;
  const chartSvg = d3Selection.select(chart);
  const path = draw(chartSvg);
  if (path) {
    chartSvg.select(".u-path").style("stroke", element.option.color ? element.option.color : "black").style("fill", element.option.background ? element.option.background : "none").attr("opacity", element.option.opacity != void 0 ? element.option.opacity : 1).attr("d", path);
  }
  if (svgOptions.drawAuxiliary) {
    if (svgOptions.allPoint) {
      chartSvg.selectAll(".u-point").style("stroke", "var(--drag-h-color)").style("fill", "var(--drag-h-color)").style("display", null).data(svgOptions.allPoint).join(
        (enter) => enter.append("g").classed("u-point", true).style("fill", "white").call((g) => {
          g.append("circle").attr("r", 3);
        })
      ).attr("transform", (d) => `translate(${[d.x, d.y]})`);
    }
    if (svgOptions.virtualPoint) {
      chartSvg.selectAll(".uv-point").style("stroke", "var(--dnb-highlight-color)").style("fill", "var(--dnb-highlight-color)").style("display", null).data(svgOptions.virtualPoint).join(
        (enter) => enter.append("g").classed("uv-point", true).style("fill", "white").call((g) => {
          g.append("circle").attr("r", 3);
        })
      ).attr("transform", (d) => `translate(${[d.x, d.y]})`);
    }
    if (svgOptions.controlLine) {
      chartSvg.selectAll(".u-line").style("stroke", "#aaa").style("display", null).style("stroke-dasharray", "2 2").data(svgOptions.controlLine).join("line").attr("x1", (d) => d.start.x).attr("y1", (d) => d.start.y).attr("x2", (d) => d.end.x).attr("y2", (d) => d.end.y).classed("u-line", true);
    }
  } else {
    chartSvg.selectAll(".u-point").style("display", "none");
    chartSvg.selectAll(".uv-point").style("display", "none");
    chartSvg.selectAll(".u-line").style("display", "none");
  }
}

export { computeLineAngle, dist, rad2Ang, rotatePoint, updateSvg };
//# sourceMappingURL=svgUtil.mjs.map
