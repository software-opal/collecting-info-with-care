import Vue from 'vue';
import Eagle, {
  CodeBlock,
  CodeComment,
  ImageSlide,
  Modal,
  Options,
  Presenter,
  RadioButton,
  Slide,
  Slideshow,
  Timer,
  Toggle,
  Transition,
  TriggeredMessage,
  Zoom,
} from 'eagle.js';
import 'animate.css';

import hljs from './hljs';
import App from './App';

Vue.config.productionTip = false;
Options.hljs = hljs;

Vue.use(Eagle);
Eagle.install(Vue);
Eagle.use(CodeBlock);
Eagle.use(CodeComment);
Eagle.use(ImageSlide);
Eagle.use(Modal);
Eagle.use(Options);
Eagle.use(Presenter);
Eagle.use(RadioButton);
Eagle.use(Slide);
Eagle.use(Slideshow);
Eagle.use(Timer);
Eagle.use(Toggle);
Eagle.use(Transition);
Eagle.use(TriggeredMessage);
Eagle.use(Zoom);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
