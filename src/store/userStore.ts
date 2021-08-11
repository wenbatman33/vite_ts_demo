import { defineStore } from 'pinia'

interface IUser{
	name: string;
	id: number;
	socre: number;
}

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		name: 'Stephen Curry',
		id: 30,
		socre:0
	} as IUser),
	getters: {
		userName(): string {
			return this.name;
		}
	},
	actions: {
		increment() {
			this.socre+=1
		}
		
	}
})