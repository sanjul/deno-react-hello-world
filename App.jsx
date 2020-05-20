import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

import ReactDOMServer from "https://dev.jspm.io/react-dom/server"
import React from "https://dev.jspm.io/react"
import Welcome from './Welcome.jsx';


const s = serve({ port: 8000 });


console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ body: ReactDOMServer.renderToString(<Welcome/>) });
}

