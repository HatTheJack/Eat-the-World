<template>
  <div class="pong">
    <div class="paddle" :style="{ top: player1.y + 'px', left: player1.x + 'px' }"></div>
    <div class="paddle" :style="{ top: player2.y + 'px', left: player2.x + 'px' }"></div>
    <div class="ball" :style="{ top: ball.y + 'px', left: ball.x + 'px' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player1: {
        x: 20,
        y: 150,
        score: 0
      },
      player2: {
        x: 560,
        y: 150,
        score: 0
      },
      ball: {
        x: 290,
        y: 190,
        vx: 2,
        vy: 2
      },
      // Flags to track key presses
      isWPressed: false,
      isSPressed: false,
      isUpPressed: false,
      isDownPressed: false
    };
  },
  mounted() {
    this.animate();
    this.setupKeyboardControls();
  },
  methods: {
    animate() {
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(this.animate);

      // Move the ball
      this.moveBall();

      // Move the paddles continuously
      if (this.isWPressed  && this.player1.y > 0) {
        this.player1.y -= 5; // Adjust the value to control the paddle speed
      }
      if (this.isSPressed && this.player1.y < 300) {
        this.player1.y += 5; // Adjust the value to control the paddle speed
      }
      if (this.isUpPressed && this.player2.y > 0) {
        this.player2.y -= 5; // Adjust the value to control the paddle speed
      }
      if (this.isDownPressed && this.player2.y < 300) {
        this.player2.y += 5; // Adjust the value to control the paddle speed
      }
    },
    moveBall() {
      // Move the ball
      this.ball.x += this.ball.vx;
      this.ball.y += this.ball.vy;

      // Check for collisions with walls
      if (this.ball.y < 0 || this.ball.y > 380) {
        this.ball.vy = -this.ball.vy;
      }

      // Check for collisions with paddles
      if (this.ball.x < 40 && this.ball.y > this.player1.y && this.ball.y < this.player1.y + 80) {
        this.ball.vx = -this.ball.vx;
      }
      if (this.ball.x > 530 && this.ball.y > this.player2.y && this.ball.y < this.player2.y + 80) {
        this.ball.vx = -this.ball.vx;
      }

      // Check for scoring
      if (this.ball.x < 0) {
        this.player2.score++;
        this.resetBall();
      }
      if (this.ball.x > 600) {
        this.player1.score++;
        this.resetBall();
      }
    },
    setupKeyboardControls() {
      // Set up keyboard controls
      window.addEventListener('keydown', (event) => {
        if (event.keyCode === 87 && this.player1.y > 0) {
          this.isWPressed = true;
        }
        if (event.keyCode === 83 && this.player1.y < 300) {
          this.isSPressed = true;
        }
        if (event.keyCode === 38 && this.player2.y > 0) {
          this.isUpPressed = true;
        }
        if (event.keyCode === 40 && this.player2.y < 300) {
          this.isDownPressed = true;
        }
      });

      window.addEventListener('keyup', (event) => {
        if (event.keyCode === 87) {
          this.isWPressed = false;
        }
        if (event.keyCode === 83) {
          this.isSPressed = false;
        }
        if (event.keyCode === 38) {
          this.isUpPressed = false;
        }
        if (event.keyCode === 40) {
          this.isDownPressed = false;
        }
      });
    },
    resetBall() {
      // Reset the ball to the center of the screen
      this.ball.x = 290;
      this.ball.y = 190;
      this.ball.vx = -this.ball.vx;
      this.ball.vy = -this.ball.vy;
    }
  }
};
</script>

<style>
.pong {
  position: relative;
  width: 600px;
  height: 400px;
  background-color: black;
}

.paddle {
  position: absolute;
  width: 20px;
  height: 80px;
  background-color: white;
}

.ball {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
}
</style>
