import { useLocalStorage} from "./useLocalStorage";

export const useStrikes = (key) => {
    const [strikes, setSomeValue] = useLocalStorage(key, 0);

    const setStrikes = (add) => {
        setSomeValue(add)
    };

    return [strikes, setStrikes]
};