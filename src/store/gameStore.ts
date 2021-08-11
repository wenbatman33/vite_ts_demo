import { defineStore } from 'pinia'
import { useUserStore } from '@/store/userStore';

interface IGmae{
	gameScroe: number;
	block: number;
	assist: number;
	rebounds: number;
	playName?:string
}

export const useGameStore = defineStore({
	id: 'game',
	state: () => ({
		gameScroe: 0,
		block: 0,
		assist: 0,
		rebounds:0,
		playName:'',
	} as IGmae),
	getters: {
		getGameScroe(): number {
			return this.gameScroe;
		}
	},
	actions: {
		addGameScroe(val: number): void {
			this.gameScroe+=val
		},
		addBlock() {
			this.block+=1
		},
		addAssist() {
			this.assist+=1
		},
		addRebounds() {
			this.rebounds+=1
		},
		getShotPlayer(val:string) {
			this.playName = val
		}
		
	}
})