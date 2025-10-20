let globalVariable = "GlobalVariable";
function grandParentFunction() {
  const grandParentVariable = "grandParent";
  function parentFunction() {
    const parentVariable = "parentVariable";
    function childFunction() {
      const childVariable = "childVariable";
      console.log("inside child function : ", childVariable);
      console.log("inside child function : ", parentVariable);
      console.log("inside child function : ", grandParentVariable);
      console.log("inside child function : ", globalVariable);
    }

    return childFunction;
  }

  return parentFunction;
}

const parentResult = grandParentFunction();
const childResult = parentResult();
childResult();
