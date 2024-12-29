export function Exec(target: string, params: string): string {
  switch (target) {
    case "echo":
      return echoHandler(params);
  }

  throw new Error("Unknown target: " + target);
}

function echoHandler(params: string): string {
  return params;
}
