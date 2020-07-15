import { spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { isFollowing, isFollowSuccess, isFollowingFail } from "../Actions";

function* fetchCallData() {
  const { data } = yield axios.get("http://localhost:4000");
  try {
    yield put(isFollowSuccess(data));
  } catch (error) {
    yield put(isFollowingFail(data));
  }
}

function* watchCall() {
  yield takeEvery(isFollowing, fetchCallData);
}

export default function* root() {
  yield spawn(watchCall);
}
