export default function bgcFilter(i) {
  switch (i) {
    case 'good':
      return '#008000';
      break;

    case 'neutral':
      return '#d3d3d3';
      break;

    case 'bad':
      return '#ff6347';
      break;

    default:
      return '#fff';
      break;
  }
}
