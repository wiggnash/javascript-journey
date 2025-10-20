function bikeRepair(functionParameter) {
  console.log("Changing Gears");
  console.log("Changing Engine Oil");
  console.log("Changing Brakes");
  console.log("Washing the Bike");
  console.log("Bike Work is completed");

  functionParameter();
}

function callOwner() {
  console.log("Please take back your bike");
}

bikeRepair(callOwner);
