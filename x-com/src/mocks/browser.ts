// 1.Setup
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers"; //요청을 모킹할 핸들러 목록

const worker = setupWorker(...handlers);
//ref: https://mswjs.io/docs/api/setup-worker#worker-instance
export default worker;
// worker.start()
// worker.use(...handlers)

//ref : https://mswjs.io/docs/integrations/browser
