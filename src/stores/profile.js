import { computed, ref  } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore("ProfileStore", () => {
  let profile = ref();
  let userId = ref('');  //  убрать userID
  let AuthUserId = ref('');

  let authorization = ref(false);

   const SetAuth = (CurUserId) => {
    AuthUserId.value = CurUserId
    authorization.value = AuthUserId.value == "001" ? true : false;
  };

  const langs = ref(["en", "es", "uk", "ru"]);
  let SelectedLang = ref("en");

  const setParamsFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get("id") || "";
    SelectedLang = urlParams.get("lng") || "en";

    if (userId == "") {
      userId = localStorage.getItem("userId") || "";
    }
  };

  setParamsFromUrl();

  const LoadProfileFromJSON = async () => {
    if (AuthUserId.value == "") {
      return;
    }

    try {
      const response = await fetch(
        `/profiles/${AuthUserId.value}/${SelectedLang}_profile.json`
      );
      if (!response.ok) {
        throw new Error("Failed to load user profile");
      }
      profile.value = await response.json();

      //console.log("profile", profile.value);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    profile,
    langs,
    SelectedLang,
    userId,
    LoadProfileFromJSON,
    authorization,
    SetAuth,
    AuthUserId
  };
});
