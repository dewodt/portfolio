import { inject } from "@vercel/analytics";

inject({
  scriptSrc: "/_va/script.js",
  mode: "auto",
  route: "/_va",
});
