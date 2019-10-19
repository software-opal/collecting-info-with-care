<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input type="color" />
    <div class="form">
      <div class="group">
        <div class="label">
          Username
        </div>
        <div class="textbox">
          jane.blogs
        </div>
      </div>
      <div class="group">
        <div class="label">
          Password
        </div>
        <div class="textbox">
          *********
        </div>
      </div>
      <div class="group">
        <div class="label">
          Gender
        </div>
        <div class="radio-group">
          <div class="radio">
            Male
          </div>
          <div class="radio enabled">
            Female
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
* {
  box-sizing: border-box;
}
.form {
  width: 40em;
  min-height: 15em;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  text-align: left;
  font-weight: 500;

  background: #1a0952;
  color: white;

  .group {
    display: flex;
    flex-direction: column;

    .label {
      padding: 10px;
      padding-bottom: 0;
    }
    .textbox {
      background: rgba(255,255,255,0.2);
      padding: 5px;
      margin: 5px;
      border-radius: 5px;
        font-weight: 800;
    }
    .radio-group {
      display: flex;
      flex-direction: row;

      .radio {
        margin: 5px;
        margin-right: 1em;

        &::before {
          content: ' ';
          box-sizing: border-box;
          width: 0.9em;
          height: 0.9em;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          display: inline-block;
          vertical-align: baseline;
        }
        &.enabled::before {
          background: rgba(255,255,255,0.1);
          border: 0.2em solid rgba(255,255,255,0.2);
        }
      }
    }
  }
}

</style>
