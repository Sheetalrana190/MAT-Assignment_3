export default function calculateCanvasSize(
  length: number,
  width: number
) {
  return 2 * (parseInt(length) + parseInt(width));
}
