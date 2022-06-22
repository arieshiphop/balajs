//declare file as module
import { Engine } from "../core/Engine.js";

const template = `
    <template>
        <div>
            <h1>{{title}}</h1>
            <p>{{content}}</p>
        </div>
    </template>
    
    <style>
        *{
            color:red;
        }
    </style>
`;
const data = {
  title: "Hello adios",
  content: "This is a iker test",
};

let engine = new Engine(template, data);
engine.render();
