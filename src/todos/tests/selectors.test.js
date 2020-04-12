import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
  it("Returns only completed todos", () => {
    const fakeTodos = [
      {
        text: "say hello",
        isCompleted: true,
      },
      {
        text: "say goodBye",
        isCompleted: false,
      },
      {
        text: "Climb Mout everest",
        isCompleted: false,
      },
    ];
    const expected = [
      {
        text: "say hello",
        isCompleted: true,
      },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
