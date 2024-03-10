export const formattedRuntime = (seconds: number) =>
  `${Math.floor(seconds / 3600)}h ${(seconds % 3600) / 60}min`;
