//declare file as module
import { Engine } from "../core/Engine.js";

const template = `
    <template>
        <div>
            <h1>{{title}}</h1>
            <p>{{content}}</p>
            <ul>
                <li for="let item of items"></li>
            </ul>
        </div>
    </template>
    
    <style>
        *{
            color:black;
        }
    </style>
`;
const data = {
  title: "Hola",
  content: "This is a iker test",
  items:["hola","que","tal"],
};

let engine = new Engine(template, data);
engine.setForHtmlValues("li", "for");
engine.render();
