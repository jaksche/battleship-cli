const chalk = require('chalk');

function orange(str) {
    return chalk.keyword('orange')(str);
}

const INSTRUCTIONS = `
Type ${chalk.red('help')} and hit return at any time to show these instructions.

${chalk.bold('Other helpful commands:')}
- Type ${orange('show board')} at any time to see your own board including ship configuration, ships hit, and misses.
- Type ${orange('show score')} at any time to check the status of the game.
- Type ${orange('quit')} or ${orange('q')} at any time to quit the game.

${chalk.bold('Settings:')}
- ${chalk.red('NOTE:')} If your terminal does not support Emojis, please disable Emojis in the settings menu.
- For a more challenging game, you can choose a larger board size.

${chalk.bold('How to win:')}
- Each player has a battlefield represented by a 10x10 grid (default) on which they place 5 ships, hidden to their opponent.
- The goal of the game is sink all of your opponents ships! A ship is sunk when it is hit once for each space it occupies.
- In other words, a submarine, which occupies 3 spaces, is sunk after being hit 3 times.
- The 5 ships occupy 17 total spaces, so the first player to register 17 hits wins!

${chalk.bold('Gameplay:')}
- To play, follow the prompts to configure your five ships in any pattern you'd like (diagonal placements are not allowed).
- Valid configuration instructions include a ship name, a starting coordinate (A1-J10 for default 10x10 board), and a direction (right, left, up or down).
- For example: ${orange('submarine e3 up')} or ${orange('carrier j7 left')}. Ships cannot overlap, and you must stay within the bounds of the board.
- Once both players have configured their ships, the race is on to sink your opponent's ships before they sink yours!
- Fire torpedoes at your opponent's ships by guessing coordinates on the board.
- Rows are represented by the letters A-J, and columns with the numbers 1-10 (10x10 board).
- Valid guesses include a row followed by a column, e.g. ${orange('A1')}, ${orange('B7')}, ${orange('J10')}, etc.
- You will be informed if you've hit, missed, or sunk a ship.
- Sink all 5 of the computer's ships to win!

${chalk.bold('Hint:')}
- When placing ships, you can also use abbreviations to make your life easier!
- Use the ship's abbreviations (see legend), and single letters for directions.
- e.g. ${orange('btl a9 r')} or ${orange('cru i6 u')}

${chalk.bold('Legend:')}
- Battleship (BTL), 4 spaces
- Carrier (CAR), 5 spaces
- Cruiser (CRU), 3 spaces
- Destroyer (DST), 2 spaces
- Submarine (SUB), 3 spaces
- A hit looks like 💥  or ${chalk.bgKeyword('orange').red.bold(' X ')} (depending on Emoji support)
- A miss looks like ❌  or ${chalk.bgKeyword('blue').cyan.bold(' 0 ')} (depending on Emoji support)
`;

module.exports = {
    INSTRUCTIONS,
    HELPER: `\n\nType the command ${orange('show board')} and press ${chalk.green('return')} at any time to see your baord!\n`
}
