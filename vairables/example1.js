for (let i = 0; i < 3; i++) {
    (function(j) {
      setTimeout(() => {
        console.log("i:", j);
      }, 1000);
    })(i);
  }