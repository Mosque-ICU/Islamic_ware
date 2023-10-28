import { create } from "zustand";

let articleStore = (set: () => any) => ({
  audioUrl: "", //@ts-expect-error
  setAudioUrl: (url: string) => set(() => ({ audioUrl: url })),
});

// formStore = devtools(taskStore);

//@ts-expect-error
export const useArticleStore = create(articleStore);
