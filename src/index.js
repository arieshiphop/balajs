import { Engine } from "../core/Engine.js";

const template = `
    <template>
        <h1 color="red">{{camelia_name}}</h1>
        <p>{{camelia_description}}</p>
        <h2>{{jose_name}}</h2> 
    </template>
    <style>
        h1{
            color: yellow;
        }
        p{
            color:red;
        }
        h2{
            color:blue;
        }

    </style>
`;
const data = {
  camelia_name: "Iker",
  camelia_description: "Camelia is a web application framework for the browser",
  jose_name: "Jose",
};

let engine = new Engine(template, data);
engine.render();
