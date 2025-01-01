function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function trafficLight() {
  while (true) {
    console.log("Red");
    await delay(3000);
    console.log("Green");
    await delay(2000);
    console.log("Yellow");
    await delay(1000);
  }
}

trafficLight();
