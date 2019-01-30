import { AsyncStorage } from "react-native";
import { MOVES } from "../constants";
class StoreService {
    constructor() {
        this.key = MOVES.keyStorageMoves;
    }

    getMoves = async () => {
        let moves = await AsyncStorage.getItem(this.key);
        if (moves == null) {
            moves = MOVES.initialAmoutMoves;
            await this.setMovesAmount(moves);
        }
        return JSON.parse(moves);
    };

    decrementMoves = async () => {
        let moves = await this.getMoves();
        let newMoves = moves - 1;
        await AsyncStorage.setItem(this.key, JSON.stringify(newMoves));
        return newMoves;
    };

    setMovesAmount = async amount => {
        await AsyncStorage.setItem(this.key, JSON.stringify(amount));
        return amount;
    };

    resetMoves = async () => {
        await AsyncStorage.removeItem(this.key);
    };
}

export default new StoreService();
