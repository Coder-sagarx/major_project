export { removepeople } from "../reducers/peopleSlice";
import axios from "../../utils/axios";
import { loadpeople } from "../reducers/peopleSlice";

export const asyncloadpeople = (id) => async (dispatch, getstate) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const translations = await axios.get(`/person/${id}/translations`);
    const latest = await axios.get(`/person/latest`);

    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      latest: latest.data,
      translations: translations.data.translations.map((t) => t.english_name),
    };

    dispatch(loadpeople(theultimatedetails));
  } catch (error) {
    console.log("error :", error);
  }
};
