import { createAction } from "@reduxjs/toolkit";

export const apiCallBegen = createAction("api/CallBegan");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallFailed = createAction("api/CallFailed");
