const MissionUtils = require("@woowacourse/mission-utils");
const OUTPUT_MESSAGE = require("./constans/OutputMessage");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  gameStart() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    MissionUtils.Console.print(map[1]);
    MissionUtils.Console.print(map[0]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, count, map) {
    MissionUtils.Console.print(OUTPUT_MESSAGE.GAME_RESULT);
    MissionUtils.Console.print(map[1]);
    MissionUtils.Console.print(map[0]);
    MissionUtils.Console.print(OUTPUT_MESSAGE.SUCCESS_OR_FAILURE + result);
    MissionUtils.Console.print(OUTPUT_MESSAGE.TOTAL_ATTEMPT + count);
  },
};

module.exports = OutputView;
