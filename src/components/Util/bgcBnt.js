export default function bgcFilter(i) {
  let color;
  switch (i) {
    case 'good':
      color = '#008000';
      break;

    case 'neutral':
      color = '#d3d3d3';
      break;

    case 'bad':
      color = '#ff6347';
      break;

    default:
      color = '#fff';
      break;
  }

  return color;
}
