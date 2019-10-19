<template lang='pug'>
#app
  .eg-slideshow
    slide
      h1 Hi there !
      h4 This is your first slideshow !
    slide.form
      div
        | Something useful
      Form(style="width: 35%")
        | a
</template>

<script>
import { Slideshow } from 'eagle.js';
// import Form from './components/Form';
// import { Slideshow } from 'eagle.js';
export default {
  mixins: [Slideshow],
};
</script>

<style>
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
}


#app {
  margin: auto;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
