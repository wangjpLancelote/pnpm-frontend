import request from "@/utils/request";
import { mockRequest } from "@/utils/mock.js";
import { toolsList } from "./mockData.js";

export function getToolsList() {
  return mockRequest(toolsList);
}
