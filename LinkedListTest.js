const LinkedList = require("./LinkedList.js");

const MethodTestCases = () => {

  const linkListLists = [
    new LinkedList(),
    new LinkedList(1),
    new LinkedList(1).push(2).push(3).push(4),
  ];
  const defaultLinkList = [
    new LinkedList(),
    new LinkedList(1),
    new LinkedList(1).push(2).push(3).push(4),
  ];

  const resetTestCases = () => {
    for(let i = 0; i < linkListLists.length; i++) {
    linkListLists[i] = defaultLinkList[i];
    }
  };

  const getTestCases = () => {
    linkListLists.forEach((linkedListType) => {
      console.log("--------------------------------");
      console.log("Before Get: ", linkedListType);
      console.log("--------------------------------");
      console.log("Zero:", linkedListType.get(0));
      console.log("One:", linkedListType.get(1));
      console.log("Two:", linkedListType.get(2));
      console.log("After", linkedListType);
      console.log("--------------------------------");
      console.log("--------------------------------");
      console.log("                                ");
    });
  };
  const setTestCases = () => {
    linkListLists.forEach((linkedListType) => {
      console.log("--------------------------------");
      console.log("Before Set: ", linkedListType);
      console.log("--------------------------------");
      console.log("Zero:", linkedListType.set(0, 5));
      console.log("One:", linkedListType.set(1, 5));
      console.log("Two:", linkedListType.set(2, 5));
      console.log("After Set: ", linkedListType);
      console.log("--------------------------------");
      console.log("--------------------------------");
      console.log("                                ");
    });
  };
  const popTestCases = () => {
    linkListLists.forEach((linkedListType) => {
      console.log("--------------------------------");
      console.log("Before Pop: ", linkedListType);
      console.log("--------------------------------");
      console.log(linkedListType.pop());
      console.log("After Pop: ", linkedListType);
      console.log("--------------------------------");
      console.log("--------------------------------");
      console.log("                                ");
    });
  };
  const shiftTestCases = () => {
    linkListLists.forEach((linkedListType) => {
      console.log("--------------------------------");
      console.log("Before Shift: ", linkedListType);
      console.log("--------------------------------");
      console.log(linkedListType.shift());
      console.log("After Shift: ", linkedListType);
      console.log("--------------------------------");
      console.log("--------------------------------");
      console.log("                                ");
    });
  };
  const unshiftTestCases = () => {
    linkListLists.forEach((linkedListType) => {
      console.log("--------------------------------");
      console.log("Before Unshift: ", linkedListType);
      console.log("--------------------------------");
      console.log(linkedListType.unshift(5));
      console.log("After Unshift: ", linkedListType);
      console.log("--------------------------------");
      console.log("--------------------------------");
      console.log("                                ");
    });
  };

  getTestCases();
  resetTestCases();
  setTestCases();
  resetTestCases();
  popTestCases();
  resetTestCases();
  shiftTestCases();
  resetTestCases();
  unshiftTestCases();
};

MethodTestCases();
