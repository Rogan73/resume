import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

export const mxProfile = () => {
  const store = useProfileStore();
  const { profile } = storeToRefs(store);
    return {profile};
};

// подходит только если используюся величины но не массивы