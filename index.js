//declare file as module
import { Engine } from "./core/Engine.js";

const template = `
    <template>
        <div>
            <h1>{{title}}</h1>
            <p>{{content}}</p>
        </div>
    </template>

`;
const data = {
  title: "Hello claudio",
  content: "This is a claudio test",
};

let engine = new Engine(template, data);
engine.render();
