// stores/user.js
import { create } from 'zustand';

const useUserStore = create((set) => ({
    deferred_pwa_install: null,
    set_deferred_pwa_install: async (data, cbs) => {
        try {
            console.log("Deferred PWA Install set>>>>", data.deferred_pwa_install);
            set(() => ({
                deferred_pwa_install: data.deferred_pwa_install,
            }));
        } catch (err) {
            console.log("Err: ", err);
            cbs?.error();
        }
    },
}));

export { useUserStore };
