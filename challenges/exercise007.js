/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== 'number') throw new Error("a number is required");
  // turn number into an array by converting to a string and converting each digit
  const numArray = n.toString().split('').map((i) => { return Number(i); });
  return numArray.reduce((total, e) => total + e, 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (typeof start !== 'number') throw new Error("a start number is required");
  if (end === undefined) throw new Error("end is required");
  if (typeof end !== 'number') throw new Error("an end number is required");

  if (step === undefined) {
    step = 1;
  }
  const arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  // should we check for invalid date type here? 
  const maxScreentime = 100;

  let result = [];
  users.forEach((user) => {
    const matched = user.screenTime.filter((screentime) => {
      return new Date(date).getTime() === new Date(screentime.date).getTime();

    });
    // matched contains the matching screentime rows for a user
    // e.g. { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
    let time = 0;
    matched.forEach((screentime) => {
      const usage = screentime.usage;
      for (let key in usage) {
        time += usage[key];
      }
      return time;
    });
    // add the username to the results if over the maximum allowed screentime
    if (time > maxScreentime) {
      result.push(user.username);
    }
  });
  return result;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} hexStr
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== 'string') throw new Error("a hex color code is required");
  // validate hex string (starts with #, case insensitive)
  const regexp = new RegExp('^#[0-9A-Fa-f]{6}$');
  if (regexp.test(hexStr) === false) {
    throw new Error("a valid hex color code is required");
  }
  // split hexStr into 3 hex values and convert to decimal 
  const red = parseInt(hexStr.substr(1, 2), 16);
  const green = parseInt(hexStr.substr(3, 2), 16);
  const blue = parseInt(hexStr.substr(5, 2), 16);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (!Array.isArray(board)) throw new Error("an array is required");
  if (board.length !== 3 || board[0].length !== 3) throw new Error("a 3 x 3 array is required");

  // check horizontal
  for (let i = 0; i < 3; i++) {
    let crosses = 0;
    let noughts = 0;
    for (let j = 0; j < 3; j++) {
      const cell = board[i][j];
      if (cell === 'X') {
        crosses++;
      } else if (cell === '0') {
        noughts++;
      }
    }
    if (crosses === 3) {
      return 'X';
    } else if (noughts === 3) {
      return '0';
    }
  }

  // check vertical 
  for (let i = 0; i < 3; i++) {
    let crosses = 0;
    let noughts = 0;
    for (let j = 0; j < 3; j++) {
      // reversed the i and j co-ordinates to cycle through the columns
      const cell = board[j][i];
      if (cell === 'X') {
        crosses++;
      } else if (cell === '0') {
        noughts++;
      }
    }
    if (crosses === 3) {
      return 'X';
    } else if (noughts === 3) {
      return '0';
    }
  }

  // check the diagonals
  const backDiagonal = board[0][0] + board[1][1] + board[2][2];
  const fwdDiagonal = board[0][2] + board[1][1] + board[2][0];
  if (backDiagonal === 'XXX' || fwdDiagonal === 'XXX') return 'X';
  if (backDiagonal === '000' || fwdDiagonal === '000') return '0';

  // if we get here, there is no winner
  return null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
