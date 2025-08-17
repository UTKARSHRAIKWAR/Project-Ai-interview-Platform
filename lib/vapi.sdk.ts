import Vapi from "@vapi-ai/web";

export const vapi = new Vapi(process.env.VAPI_WEB_TOKEN!);

vapi.start({
  workflow: "4076883c-9c21-4e80-8d22-2fe5ef2b83ab", 
});