import { LayoutAnimation } from "react-native";

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyApGt9XjGSJZe6EXUJXgmTOquqZaq6f2-U",
    authDomain: "switchbattle-3a181.firebaseapp.com",
    databaseURL: "https://switchbattle-3a181.firebaseio.com",
    projectId: "switchbattle-3a181",
    storageBucket: "switchbattle-3a181.appspot.com",
    messagingSenderId: "320870590749"
};

export const ScreenLayoutAnimation = {
    duration: 800,
    create: {
        property: LayoutAnimation.Properties.scaleXY,
        type: LayoutAnimation.Types.spring,
        springDamping: 0.8
    },
    update: {
        property: LayoutAnimation.Properties.scaleXY,
        type: LayoutAnimation.Types.spring,
        springDamping: 0.8
    },
    delete: {
        duration: 200,
        property: LayoutAnimation.Properties.scaleXY,
        type: LayoutAnimation.Types.spring,
        springDamping: 0.8
    }
};

export const COLORS = {
    primaryColor: "#334856",
    secondColor: "#3c8f85"
};

export const MOVES = {
    keyStorageMoves: "MOVES",
    initialAmoutMoves: 5
};
