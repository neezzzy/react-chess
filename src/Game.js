

export function move(from, to, chess, onTurn) {
  const moves = chess.moves({ verbose: true });
  const move = moves.find((m) => m.from === from && m.to === to);
  if (move) {
    chess.move({ from, to });
    onTurn();
  }
}
