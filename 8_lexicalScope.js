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

    childFunction();
    // console.log("inside parent function : ", childVariable); // this is not accessable
    console.log("inside parent function : ", parentVariable);
    console.log("inside parent function : ", grandParentVariable);
    console.log("inside parent function : ", globalVariable);
  }

  parentFunction();
}

grandParentFunction();
