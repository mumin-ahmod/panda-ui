// Define the function to fetch data from the API
// function fetchData() {
//   fetch('http://localhost:8080', {
//     mode: 'no-cors'
//   })
//   // fetch('localhost:8081')
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);

//       })
//       .catch(error => {
//           console.error('There was an error!', error);
//       });
// }

window.addEventListener("load", () => {
  // setInterval(fetchData, 1000);

  const scene = new Scene(
    {
      ".arm.right": {
        0: "transform: rotate(90deg)",
        1.5: "transform: rotate(-75deg)",
        8: "transform: rotate(-75deg)",
        9: "transform: rotate(90deg)",
      },
      ".arm.right .forearm": {
        0: "transform: rotate(0deg)",
        1.5: "transform: rotate(-15deg)",
        2: "transform: rotate(-25deg)",
        2.5: "transform: rotate(-15deg)",
        3: "transform: rotate(-25deg)",
        3.5: "transform: rotate(-15deg)",
        4: "transform: rotate(-25deg)",
        4.5: "transform: rotate(-15deg)",
        5: "transform: rotate(-25deg)",
        5.5: "transform: rotate(-15deg)",
        6: "transform: rotate(-25deg)",
        6.5: "transform: rotate(-15deg)",
        7: "transform: rotate(-25deg)",
        7.5: "transform: rotate(-15deg)",
        8: "transform: rotate(-25deg)",
        9: "transform: rotate(0deg)",
      },
      ".arm.right .hand": {
        0.5: "transform: rotate(0deg)",
        1.5: "transform: rotate(-60deg)",
        8: "transform: rotate(-60deg)",
        9: "transform: rotate(  0deg)",
      },
      ".arm.left": {
        0: "transform: rotate(0deg)",
        1.5: "transform: rotate(-60deg)",
        8: "transform: rotate(-60deg)",
        9: "transform: rotate(0deg)",
      },
      ".arm.left .forearm": {
        0: "transform: rotate(-40deg)",
        1.5: "transform: rotate(-20deg)",
        2: "transform: rotate(-30deg)",
        2.5: "transform: rotate(-20deg)",
        3: "transform: rotate(-30deg)",
        3.5: "transform: rotate(-20deg)",
        4: "transform: rotate(-30deg)",
        4.5: "transform: rotate(-20deg)",
        5: "transform: rotate(-30deg)",
        5.5: "transform: rotate(-20deg)",
        6: "transform: rotate(-30deg)",
        6.5: "transform: rotate(-20deg)",
        7: "transform: rotate(-30deg)",
        7.5: "transform: rotate(-20deg)",
        8: "transform: rotate(-30deg)",
        9: "transform: rotate(-40deg)",
      },
      ".arm.left .hand": {
        0: "transform: rotate(0deg)",
        1.5: "transform: rotate(-40deg)",
        8: "transform: rotate(-40deg)",
        9: "transform: rotate(0deg)",
      },
      ".mouth": {
        0: "transform: translateY(0px)",
        0.5: "transform: translateY(9px)",
        options: {
          delay: 1,
          iterationCount: 14,
          direction: "alternate",
        },
      },
      ".hand .bamboo": {
        1.5: {
          height: "166px",
        },
        2: "height: 140px",
        2.5: "height: 140px",
        3: "height: 120px",
        3.5: "height: 120px",
        4: "height: 100px",
        4.5: "height: 100px",
        5: "height: 80px",
        5.5: "height: 80px",
        6: "height: 60px",
        6.5: "height: 60px",
        7: "height: 40px",
        7.5: "height: 40px",
        8: "height: 0px",
      },
    },
    {
      easing: "ease-in-out",
      selector: true,
      iterationCount: "infinite",
    }
  ).playCSS();

  const scene2 = new Scene(
    {
      ".mouth": {
        0: "transform: translateY(0px)",
        0.5: "transform: translateY(9px)",
        options: {
          delay: 0.3,
          iterationCount: 2,
          direction: "alternate",
        },
      },
      ".joint2": {
        display: "none",
      },
      ".arm.right": {
        0: "transform: rotate(90deg)",
        1.5: "transform: rotate(-75deg)",
        8: "transform: rotate(-75deg)",
        9: "transform: rotate(90deg)",
      },
      ".arm.right .forearm": {
        0: "transform: rotate(0deg)",
        1.5: "transform: rotate(-15deg)",
        2: "transform: rotate(-25deg)",
        2.5: "transform: rotate(-15deg)",
        3: "transform: rotate(-25deg)",
        3.5: "transform: rotate(-15deg)",
        4: "transform: rotate(-25deg)",
        4.5: "transform: rotate(-15deg)",
        5: "transform: rotate(-25deg)",
        5.5: "transform: rotate(-15deg)",
        6: "transform: rotate(-25deg)",
        6.5: "transform: rotate(-15deg)",
        7: "transform: rotate(-25deg)",
        7.5: "transform: rotate(-15deg)",
        8: "transform: rotate(-25deg)",
        9: "transform: rotate(0deg)",
      },
      ".arm.right .hand": {
        0.5: "transform: rotate(0deg)",
        1.5: "transform: rotate(-60deg)",
        8: "transform: rotate(-60deg)",
        9: "transform: rotate(  0deg)",
      },
      ".arm.left": {
        0: "transform: rotate(0deg)",
        1.5: "transform: rotate(-60deg)",
        8: "transform: rotate(-60deg)",
        9: "transform: rotate(0deg)",
      },
      ".arm.left .forearm": {
        0: "transform: rotate(-40deg)",
        1.5: "transform: rotate(-20deg)",
        2: "transform: rotate(-30deg)",
        2.5: "transform: rotate(-20deg)",
        3: "transform: rotate(-30deg)",
        3.5: "transform: rotate(-20deg)",
        4: "transform: rotate(-30deg)",
        4.5: "transform: rotate(-20deg)",
        5: "transform: rotate(-30deg)",
        5.5: "transform: rotate(-20deg)",
        6: "transform: rotate(-30deg)",
        6.5: "transform: rotate(-20deg)",
        7: "transform: rotate(-30deg)",
        7.5: "transform: rotate(-20deg)",
        8: "transform: rotate(-30deg)",
        9: "transform: rotate(-40deg)",
      },
      ".arm.left .hand": {
        0: "transform: rotate(0deg)",
        1.5: "transform: rotate(-40deg)",
        8: "transform: rotate(-40deg)",
        9: "transform: rotate(0deg)",
      },
    },
    {
      easing: "ease-in-out",
      selector: true,
      iterationCount: 2,
    }
  );

  // Get the speech bubble
  const speechBubble = document.querySelector(".speech-bubble");

  // Get the circular speech bubble
  const circularSpeechBubble = document.querySelector(".circular-sb");

  function playAnimation() {
    scene.playCSS();

    // Hide the speech bubble
    speechBubble.style.opacity = 0;
    circularSpeechBubble.style.opacity = 0;
  }

  function pauseAnimation() {
    scene.finish();
    // Show the speech bubble
    speechBubble.style.opacity = "100%";
  }

  function finishAnimation() {
    scene.finish();
    scene2.playCSS();

    // Show the speech bubble
    speechBubble.style.opacity = 0;
    circularSpeechBubble.style.opacity = "100%";
  }

  function parseValue(value) {
    // /?value=66
    if (value.includes("value")) {
      console.log(value, "value");
      return +value.replace("/?value=", "");
    }
  }

  // Establish ws connection and manipulate the UI
  const ws = new WebSocket("ws://localhost:8080");
  const dataDisplay = document.getElementById("dataDisplay");

  const isPlaying = setTimeout(()=>)

  ws.onopen = () => {
    console.log("Connected to the WebSocket server");
  };

  ws.onmessage = (event) => {
    // Display received data dynamically
    dataDisplay.innerText = event.data;

    // Extract the last two digits and treat them as a number
    let finalValue = parseValue(event.data);
    dataDisplay.innerText = finalValue;

    if (finalValue < 30) {
      scene.finish();
      scene2.playCSS();
      speechBubble.style.opacity = 0;
      circularSpeechBubble.style.opacity = 100;
    } else if (finalValue > 30) {
      scene.finish();
      speechBubble.style.opacity = 100;
      circularSpeechBubble.style.opacity = 0;
    } else if (finalValue > 60) {
      scene.playCSS();
      speechBubble.style.opacity = 0;
      circularSpeechBubble.style.opacity = 0;
    }
  };

  ws.onerror = (error) => {
    console.error("WebSocket Error:", error);
  };

  ws.onclose = () => {
    console.log("WebSocket connection closed");
  };
});
