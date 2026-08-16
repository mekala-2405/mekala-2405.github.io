import './styles.css';
import { DATA } from './data';
import { DEV_ICON } from './devicons';
import type { ListItem } from './types';

function byId<T extends HTMLElement = HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element #${id} not found`);
  return el as T;
}
function qs<T extends HTMLElement = HTMLElement>(sel: string): T | null {
  return document.querySelector<T>(sel);
}

const html = String.raw;

const FLOWER =
  '<svg class="flower" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.4 6.9L21 4.5l-4.5 5.4L24 12l-7.5 2.1L21 19.5l-6.6-2.4L12 24l-2.4-6.9L3 19.5l4.5-5.4L0 12l7.5-2.1L3 4.5l6.6 2.4z"/></svg>';

const secTitle = (t: string) => `<div class="sec-title reveal">${FLOWER}<h2>${t}</h2><div class="rule"></div></div>`;

const ICON_SVG: Record<string, string> = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>',
  discord:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
};

// Brand SVGs (from simple-icons) for techs devicon doesn't cover.
// Fill: currentColor so they adapt to dark/light theme.
const SIMPLE_ICON: Record<string, string> = {
  LangChain:
    '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z"/></svg>',
  LangGraph:
    '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z"/></svg>',
  HuggingFace:
    '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"/></svg>',
  YOLO:
    '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.25 0c-3.05 0-5.52 2.477-5.52 5.523 0 3.842-3.125 6.967-6.972 6.967-1.506 0-2.894-.46-4.03-1.26 1.105 1.98 2.765 3.6 4.759 4.67v2.51c0 3.04 2.428 5.56 5.463 5.59 3.07 0 5.58-2.46 5.58-5.52V15.9c3.64-1.96 6.16-5.8 6.23-10.208v-.165C23.76 2.477 21.28 0 18.25 0ZM5.758.0002C2.715.0002.2399 2.477.2399 5.523c0 3.044 2.4751 5.517 5.5181 5.517 3.044 0 5.512-2.473 5.512-5.517 0-3.046-2.468-5.5228-5.512-5.5228Z"/></svg>',
  MediaPipe:
    '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.182 0C1 0 .037.94.002 2.114L0 2.182v6.545a2.182 2.182 0 0 0 4.364 0V2.182A2.182 2.182 0 0 0 2.182 0Zm6.545 0c-1.182 0-2.145.94-2.18 2.114l-.002.068v13.09a2.182 2.182 0 0 0 4.364 0V2.183A2.182 2.182 0 0 0 8.727 0Zm6.546 0a2.182 2.182 0 0 0-2.182 2.182 2.182 2.182 0 0 0 2.182 2.182 2.182 2.182 0 0 0 2.182-2.182A2.182 2.182 0 0 0 15.273 0Zm6.545 0c-1.182 0-2.145.94-2.18 2.114l-.002.068v19.636a2.182 2.182 0 0 0 4.364 0V2.182A2.182 2.182 0 0 0 21.818 0Zm-6.545 6.545c-1.183 0-2.145.94-2.181 2.114l-.001.068v13.091a2.182 2.182 0 0 0 4.364 0V8.728a2.182 2.182 0 0 0-2.182-2.183zM2.182 13.091c-1.182 0-2.145.94-2.18 2.114L0 15.273v6.545a2.182 2.182 0 0 0 4.364 0v-6.545a2.182 2.182 0 0 0-2.182-2.182zm6.545 6.545a2.182 2.182 0 0 0-2.182 2.182A2.182 2.182 0 0 0 8.727 24a2.182 2.182 0 0 0 2.182-2.182 2.182 2.182 0 0 0-2.182-2.182Z"/></svg>',
  'Isaac Lab':
    '<svg class="tech-icon tech-icon--nvidia" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"/></svg>',
  'Cosmos by NVIDIA':
    '<svg class="tech-icon tech-icon--nvidia" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"/></svg>',
  'Intel RealSense':
    '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053c0 .513.044.945.13 1.292.087.34.235.618.44.828.203.21.475.359.803.451.334.093.754.136 1.255.136h.216v-1.533c-.24 0-.445-.012-.59-.037a.672.672 0 0 1-.39-.173.693.693 0 0 1-.173-.377 4.002 4.002 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241-.327.161-.6.384-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214c.018-.588.16-1.02.433-1.299.29-.297.642-.445 1.044-.445.476 0 .841.149 1.082.433.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09-.458-.495-1.1-.742-1.917-.742zm10.065.006a3.252 3.252 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.145 3.145 0 0 0-.254 1.273c0 .452.08.878.241 1.274.161.395.39.742.674 1.032.284.29.637.526 1.045.693.408.173.86.26 1.342.26 1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699-.464 0-.847-.105-1.138-.321a1.588 1.588 0 0 1-.593-.872l-.019-.056h4.915v-.587c0-.451-.08-.872-.235-1.267a3.393 3.393 0 0 0-.661-1.033 3.013 3.013 0 0 0-1.02-.692 3.345 3.345 0 0 0-1.311-.248zm-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261zm7.073 3.814a.606.606 0 0 0-.606.606.606.606 0 0 0 .606.606.606.606 0 0 0 .606-.606.606.606 0 0 0-.606-.606zm-.008.105a.5.5 0 0 1 .002 0 .5.5 0 0 1 .5.501.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .498-.5zm-.233.155v.699h.13v-.285h.093l.173.285h.136l-.18-.297a.191.191 0 0 0 .118-.056c.03-.03.05-.074.05-.136 0-.068-.02-.117-.063-.154-.037-.038-.105-.056-.185-.056zm.13.099h.154c.019 0 .037.006.056.012a.064.064 0 0 1 .037.031c.013.013.012.031.012.056a.124.124 0 0 1-.012.055.164.164 0 0 1-.037.031c-.019.006-.037.013-.056.013h-.154Z"/></svg>',
  'Google Drive API':
    '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"/></svg>',
  'Discord API': ICON_SVG.discord,
};

const GENERIC_TECH_ICON =
  '<svg class="tech-icon--generic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="3"/><circle cx="12" cy="12" r="3"/></svg>';

function techIconHtml(tech: string): string {
  const dev = DEV_ICON[tech];
  if (dev) return dev;
  const simple = SIMPLE_ICON[tech];
  if (simple) return simple;
  return GENERIC_TECH_ICON;
}

function techTagHtml(tech: string): string {
  return `<span>${techIconHtml(tech)} ${tech}</span>`;
}

/* ============ routing ============ */

function navigate(url: string): void {
  const [pathPart, hashPart] = url.split('#');
  const targetPath = pathPart || '/';

  if (targetPath === window.location.pathname) {
    history.pushState({}, '', url);
    if (hashPart) {
      document.getElementById(hashPart)?.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  history.pushState({}, '', url);
  router();
  if (hashPart) {
    setTimeout(() => {
      document.getElementById(hashPart)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}

function router(): void {
  const path = window.location.pathname;
  const match = path.match(/^\/projects\/(.+)$/);
  if (match) {
    renderProjectDetail(match[1]);
  } else {
    renderApp();
    afterRender();
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }
}

// delegated nav handler — catches all [data-nav] clicks, static and dynamic
document.addEventListener('click', (e) => {
  const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('[data-nav]');
  if (link && link.getAttribute('href')) {
    e.preventDefault();
    navigate(link.getAttribute('href')!);
  }
});

window.addEventListener('popstate', () => router());

/* ============ project detail page ============ */

function renderProjectDetail(slug: string): void {
  const p = DATA.projects.find(proj => proj.slug === slug);
  if (!p) {
    navigate('/');
    return;
  }

  const links = [
    p.live ? `<a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener" data-cursor>Live demo ↗</a>` : '',
    p.github ? `<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener" data-cursor>GitHub ↗</a>` : '',
  ].filter(Boolean).join('');

  byId('app').innerHTML = html`
    <section class="proj-detail">
      <div class="container">
        <a class="proj-detail-back" href="/#projects" data-nav data-cursor>← Back to projects</a>
        <h1 class="proj-detail-title display">${p.name}</h1>
        <p class="proj-detail-desc">${p.desc}</p>
        <div class="project-tech">${p.tech.map(techTagHtml).join('')}</div>
        ${links ? `<div class="proj-detail-links">${links}</div>` : ''}
      </div>
    </section>`;

  window.scrollTo(0, 0);
}

/* ============ main portfolio page ============ */

function renderApp(): void {
  const d = DATA;

  const statHtml = d.stats
    .map(
      (s, i) => html`
        <div class="stat reveal reveal-${(i % 4) + 1}"><h5 data-count="${s.value}" data-suffix="${s.suffix}">0</h5><p>${s.label}</p></div>`
    )
    .join('');

  const skillsHtml = d.skills
    .map(
      (g) => html`
        <div class="skills-group">
          <p class="skills-group-label">${g.group}</p>
          <div class="skills-list">${g.items.map((x) => `<span class="skill-tag">${techIconHtml(x)} ${x}</span>`).join('')}</div>
        </div>`
    )
    .join('');

  const aboutHtml = `<img class="headshot" src="/headshot.jpeg" alt="Harsh Vardhan Reddy Mekala" loading="lazy" />` + d.about.map((p) => `<p>${p}</p>`).join('');

  const expHtml = d.experience
    .map(
      (e) => html`
        <div class="work-item reveal reveal-1">
          <div class="work-meta">
            <p class="work-company">${e.company}</p>
            <p class="work-period">${e.period}</p>
          </div>
          <div>
            <h3 class="work-role display">${e.role}</h3>
            <p class="work-desc">${e.desc}</p>
            <div class="work-tags">${e.tags.map((t) => `<span class="work-tag">${t}</span>`).join('')}</div>
            ${e.image ? `<img class="exp-img" src="${e.image}" alt="${e.company}" loading="lazy" />` : ''}
          </div>
        </div>`
    )
    .join('');

  const projHtml = d.projects
    .map((p, i) => {
      const num = '_' + String(i + 1).padStart(2, '0') + '.';
      const logoHtml = p.logo
        ? `<img class="project-logo" src="${p.logo}" alt="${p.name}" loading="lazy" />`
        : `<div class="project-logo project-logo--ph"><span>${p.name.charAt(0)}</span></div>`;
      const nameEl = html`
        <a class="project-name display" href="/projects/${p.slug}" data-nav data-cursor>${p.name} <span class="arw">↗</span></a>`;
      const media =
        p.preview && p.live
          ? html`<div class="project-media" data-live="${p.live}">
                   <iframe title="${p.name} preview" loading="lazy" data-src="${p.live}" scrolling="no"></iframe>
                   <a class="open-live" href="/projects/${p.slug}" data-nav data-cursor><span>View details ↗</span></a>
                 </div>`
          : html`<div class="project-media"><div class="ph"><span>${p.name.charAt(0)}</span></div>
                   <a class="open-live" href="/projects/${p.slug}" data-nav data-cursor><span>View details ↗</span></a>
                 </div>`;
      const projLinks = [
        p.live ? `<a class="project-link" href="${p.live}" target="_blank" rel="noopener" data-cursor>Live demo ↗</a>` : '',
        p.github ? `<a class="project-link" href="${p.github}" target="_blank" rel="noopener" data-cursor>GitHub ↗</a>` : '',
      ].filter(Boolean).join('');
      return html`
        <div class="project-card reveal reveal-${(i % 4) + 1}">
          <div class="project-body">
            <p class="project-num">${num}</p>
            ${logoHtml}
            ${nameEl}
            <p class="project-desc">${p.desc}</p>
            <div class="project-tech">${p.tech.map(techTagHtml).join('')}</div>
            ${projLinks ? `<div class="project-links">${projLinks}</div>` : ''}
          </div>
          ${media}
        </div>`;
    })
    .join('');

  const listRows = (arr: ListItem[]) =>
    arr
      .map(
        (x) => html`
        <div class="list-row">
          <div><p class="list-title">${x.title}</p><p class="list-meta">${x.meta}</p></div>
          <a class="list-link" href="${x.link}" target="_blank" rel="noopener" data-cursor>${x.cta} ↗</a>
        </div>`
      )
      .join('');

  const certHtml = d.certifications
    .map(
      (c) => html`
        <a class="deck-card" href="${c.link}" target="_blank" rel="noopener" data-cursor>
          ${c.image
            ? `<img class="cert-img" src="${c.image}" alt="${c.title}" loading="lazy" />`
            : `<div class="cert-ph"><span>${c.title.charAt(0)}</span></div>`}
          <div class="cert-meta">
            <p class="cert-title">${c.title}</p>
            <p class="cert-sub">${c.meta}</p>
          </div>
        </a>`
    )
    .join('');

  const certSection = d.certifications.length
    ? html`
        <section id="certifications" data-deck><div class="container">
          ${secTitle('Certifications')}
          <div class="cert-deck">
            <div class="cert-deck-stage">${certHtml}</div>
            <div class="cert-deck-count">
              <span data-deck-now>01</span> / <span data-deck-total>${String(d.certifications.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div></section>`
    : '';

  const blogRows = d.blogs.length
    ? html`<div class="reveal reveal-1">${listRows(d.blogs)}</div>`
    : html`<div class="reveal reveal-1 blog-empty"><span>✎</span><p>Writing soon — notes on ML/AI, robotics, and what I'm building.</p></div>`;

  byId('app').innerHTML = html`
    <section id="hero">
      <div class="hero-glow"></div>
      <div class="container">
        <p class="hero-eyebrow reveal">${d.role}</p>
        <div class="hero-firstname display reveal reveal-1">${d.name}</div>
        <h1 class="hero-name display">${d.lastName}</h1>
        <div class="hero-words reveal reveal-2">
          <div class="hw-line"><span class="hw-back display">ROBOTICS</span><span class="hw-front display">ROBOTICS</span></div>
          <div class="hw-line"><span class="hw-back display">AUTOMATION</span><span class="hw-front display">AUTOMATION</span></div>
        </div>
        <p class="hero-desc reveal reveal-3">${d.tagline}</p>
        <div class="hero-cta reveal reveal-3">
          <a href="/#contact" class="btn btn-primary" data-nav data-cursor>Let's talk</a>
          <a href="/#projects" class="btn btn-ghost" data-nav data-cursor>View work</a>
        </div>
        <div class="hero-avail reveal reveal-4"><span class="dot"></span> Available for opportunities</div>
        <div class="hero-stats">${statHtml}</div>
      </div>
    </section>

    <section id="about"><div class="container">
      ${secTitle('About Me')}
      <div class="about-grid">
        <div class="about-bio reveal reveal-1">${aboutHtml}</div>
        <div class="reveal reveal-2">${skillsHtml}</div>
      </div>
    </div></section>

    <section id="experience"><div class="container">
      ${secTitle('Experience')}
      ${expHtml}
    </div></section>

    <section id="projects"><div class="container">
      ${secTitle('Projects')}
      <div class="projects">${projHtml}</div>
    </div></section>

    <section id="publications"><div class="container">
      ${secTitle('Publications')}
      <div class="reveal reveal-1">${listRows(d.publications)}</div>
    </div></section>

    ${certSection}

    <section id="blogs"><div class="container">
      ${secTitle('Blog')}
      ${blogRows}
    </div></section>

    <section id="contact"><div class="container">
      <p class="contact-eyebrow reveal">What's next</p>
      <h2 class="contact-heading display reveal reveal-1">LET'S BUILD<br>SOMETHING</h2>
      <p class="contact-sub reveal reveal-2">Open to internships, collaborations, and interesting problems in robotics and AI.</p>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${d.email}" target="_blank" rel="noopener" class="btn btn-primary reveal reveal-3" data-cursor>Say hello</a>
    </div></section>`;

  byId('sideLeft').innerHTML =
    `<a href="${d.socials.github}" target="_blank" rel="noopener" data-cursor aria-label="GitHub">${ICON_SVG.github}</a>` +
    `<a href="${d.socials.linkedin}" target="_blank" rel="noopener" data-cursor aria-label="LinkedIn">${ICON_SVG.linkedin}</a>` +
    `<a href="${d.socials.discord}" target="_blank" rel="noopener" data-cursor aria-label="Discord">${ICON_SVG.discord}</a>` +
    `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${d.email}" target="_blank" rel="noopener" data-cursor aria-label="Email">${ICON_SVG.mail}</a>`;
  byId('sideRight').innerHTML = `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${d.email}" target="_blank" rel="noopener" class="email-vert" data-cursor>${d.email}</a>`;

  byId('footerCopy').textContent = `© 2026 ${d.name} Mekala`;
  byId('footerSocial').innerHTML =
    `<a href="${d.socials.github}" target="_blank" rel="noopener" data-cursor>GitHub</a>` +
    `<a href="${d.socials.linkedin}" target="_blank" rel="noopener" data-cursor>LinkedIn</a>` +
    `<a href="${d.socials.discord}" target="_blank" rel="noopener" data-cursor>Discord</a>` +
    `<a href="${d.website}" target="_blank" rel="noopener" data-cursor>mharsh.me</a>` +
    `<a href="/privacy.html" data-cursor>Privacy</a>`;

  const sidebarSocial = document.getElementById('sidebarSocial');
  if (sidebarSocial) {
    sidebarSocial.innerHTML =
      `<a href="${d.socials.github}" target="_blank" rel="noopener" data-cursor aria-label="GitHub">${ICON_SVG.github}</a>` +
      `<a href="${d.socials.linkedin}" target="_blank" rel="noopener" data-cursor aria-label="LinkedIn">${ICON_SVG.linkedin}</a>` +
      `<a href="${d.socials.discord}" target="_blank" rel="noopener" data-cursor aria-label="Discord">${ICON_SVG.discord}</a>` +
      `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${d.email}" target="_blank" rel="noopener" data-cursor aria-label="Email">${ICON_SVG.mail}</a>`;
  }
}

/* ============ after-render setup ============ */

let certDeckHandler: (() => void) | null = null;

function setupCertDeck(): void {
  if (certDeckHandler) {
    window.removeEventListener('scroll', certDeckHandler);
    certDeckHandler = null;
  }
  const section = qs<HTMLElement>('[data-deck]');
  const stage = section?.querySelector<HTMLElement>('.cert-deck-stage');
  if (!section || !stage) return;
  const cards = Array.from(stage.children) as HTMLElement[];
  const now = section.querySelector<HTMLElement>('[data-deck-now]');
  const n = cards.length;
  if (!n) return;
  let index = 0;

  const apply = (i: number) => {
    index = ((i % n) + n) % n;
    cards.forEach((c, k) => {
      const d = (k - index + n) % n;
      c.style.setProperty('--dx', d ? `-${d * 16}px` : '0px');
      c.style.setProperty('--dy', d ? `-${d * 10}px` : '0px');
      c.style.setProperty('--rot', d ? `-${d * 2.5}deg` : '0deg');
      c.style.setProperty('--sc', String(Math.max(0.78, 1 - d * 0.035)));
      c.style.setProperty('--op', String(Math.max(0.5, 1 - d * 0.12)));
      c.style.zIndex = String(n - d);
      c.classList.toggle('is-top', d === 0);
    });
    if (now) now.textContent = String(index + 1).padStart(2, '0');
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    const r = section.getBoundingClientRect();
    const vh = window.innerHeight;
    if (r.top > vh || r.bottom < 0) return;
    const progress = Math.min(1, Math.max(0, (vh - r.top) / (r.height + vh)));
    const target = Math.round(progress * (n - 1));
    if (target !== index) apply(target);
  };
  const handler = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', handler, { passive: true });
  certDeckHandler = handler;
  apply(0);
}

function loadPreviewFrame(card: HTMLElement): void {
  const f = card.querySelector<HTMLIFrameElement>('iframe[data-src]');
  if (!f) return;
  const src = f.dataset.src;
  if (src) {
    f.src = src;
    delete f.dataset.src;
    f.addEventListener('load', () => f.classList.add('shown'));
  }
}

function afterRender(): void {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  const cio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target.querySelector<HTMLElement>('[data-count]') ?? (e.target as HTMLElement);
        const target = Number(el.dataset.count ?? '0');
        const suffix = el.dataset.suffix ?? '';
        let cur = 0;
        const step = Math.max(1, Math.round(target / 20));
        const t = window.setInterval(() => {
          cur += step;
          if (cur >= target) {
            cur = target;
            window.clearInterval(t);
          }
          el.textContent = cur + suffix;
        }, 45);
        cio.unobserve(e.target);
      }),
    { threshold: 0.6 }
  );
  document.querySelectorAll<HTMLElement>('.stat').forEach((el) => cio.observe(el));

  // project preview iframes — only load after hover intent (400ms),
  // never on scroll, so scrolling the page doesn't fetch whole sites.
  document.querySelectorAll<HTMLElement>('.project-card').forEach((card) => {
    let timer = 0;
    card.addEventListener('mouseenter', () => {
      timer = window.setTimeout(() => loadPreviewFrame(card), 400);
    });
    card.addEventListener('mouseleave', () => window.clearTimeout(timer));
  });

  // certificate deck — shuffles through stacked cards as you scroll
  setupCertDeck();
}

/* ============ global setup (once) ============ */

const bar = byId('progress');
let heroInner: HTMLElement | null;
window.addEventListener(
  'scroll',
  () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
    if (heroInner && h.scrollTop < window.innerHeight) {
      heroInner.style.transform = `translateY(${-h.scrollTop * 0.2}px)`;
      heroInner.style.opacity = String(Math.max(0, 1 - h.scrollTop / (window.innerHeight * 0.75)));
    }
  },
  { passive: true }
);

byId('themeToggle').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', cur);
  localStorage.setItem('theme', cur);
});

if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const dot = qs('.cursor-dot');
  const ring = qs('.cursor-ring');
  if (dot && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    });
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }
}

/* ============ preloader / intro ============ */

function runIntro(): void {
  const pre = byId('preloader');
  const preName = byId('preName');
  const heroName = qs('.hero-name');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !heroName || window.location.pathname !== '/') {
    pre.classList.add('done');
    return;
  }

  const a = preName.getBoundingClientRect();
  const b = heroName.getBoundingClientRect();
  const dx = b.left - a.left;
  const dy = b.top - a.top;
  const scale = b.width / a.width;

  heroName.style.opacity = '0';
  preName.style.transformOrigin = 'top left';

  requestAnimationFrame(() => {
    pre.style.transition = 'background 0.9s ease';
    pre.style.background = 'transparent';
    preName.style.transition = 'transform 0.9s cubic-bezier(0.7,0,0.2,1)';
    preName.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
  });

  preName.addEventListener(
    'transitionend',
    () => {
      heroName.style.opacity = '1';
      pre.classList.add('done');
    },
    { once: true }
  );
}

/* ============ boot ============ */

byId('preName').innerHTML = DATA.lastName
  .split('')
  .map((c, i) => `<span style="animation-delay:${i * 0.05}s">${c}</span>`)
  .join('');

// sidebar toggle
const hamburger = byId('hamburger');
const sidebar = byId('sidebar');
const sidebarOverlay = byId('sidebarOverlay');
const sidebarClose = byId('sidebarClose');

function toggleSidebar(open?: boolean) {
  const shouldOpen = open ?? !sidebar.classList.contains('open');
  sidebar.classList.toggle('open', shouldOpen);
  sidebarOverlay.classList.toggle('open', shouldOpen);
  document.body.classList.toggle('sidebar-open', shouldOpen);
}

hamburger.addEventListener('click', () => toggleSidebar());
sidebarOverlay.addEventListener('click', () => toggleSidebar(false));
sidebarClose.addEventListener('click', () => toggleSidebar(false));
sidebar.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('[data-nav]')) toggleSidebar(false);
});

router();

window.addEventListener('load', () => {
  heroInner = qs('#hero .container');
  window.setTimeout(runIntro, 350);
});
