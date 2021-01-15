function nthTriangularNumber(n) {
  return (n * (n + 1)) / 2;
}

exports.nthTriangularNumber = nthTriangularNumber;

function nthSquarePyramidalNumber(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

exports.nthSquarePyramidalNumber = nthSquarePyramidalNumber;
