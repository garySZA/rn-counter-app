import { create } from 'zustand';

export interface CounterState {
    count: number;
    increaseBy: (value: number) => void;
    decrementBy: (value: number) => void;
    reset: () => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
    count: 10,
    increaseBy: (value) => {
        // set({ count: get().count + value });
        set((state) => ({ count: state.count + value }));
    },
    decrementBy: (value) => {
        set(( state ) => {
            if( state.count === 0 ){
                return { count: 0 };
            } else {
                return { count: state.count - value };
            }
        });
    },
    reset: () => set({ count: 0 }),
}));
