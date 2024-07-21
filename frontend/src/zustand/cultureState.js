import { create } from "zustand";

const culturePath = create((set) => ({
	path: null,
	setPath: (path) => set({ path }),
}));

export default culturePath;
