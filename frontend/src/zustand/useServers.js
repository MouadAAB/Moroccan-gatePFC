import { create } from "zustand";

const useServers = create((set) => ({
	selectedServer: null,
	setSelectedServer: (selectedServer) => set({ selectedServer }),
	messages: [],
	setMessages: (messages) => set({ messages }),
	users: [],
	setUsers: (users) => set({ users }),
}));

export default useServers;
